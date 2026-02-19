import Link from 'next/link';
import {
  getSlugs,
  getProjectBySlug,
  getAllYears,
  getProjectsByYear,
  getLatestYear,
  type Project
} from '../data/projects';
import { AIEPLayout } from '@/components/aiep/AIEPLayout';

function ProjectDetail({ project }: { project: Project }) {
  return (
    <div className="mx-auto mt-4 mb-12 flex w-[90%] flex-col justify-center lg:mt-2 lg:w-3/4">
      <h1 className="mt-4 text-center text-2xl text-white underline decoration-sky-200 underline-offset-8 lg:text-5xl">
        {project.title}
      </h1>
      <p className="mx-auto my-6 w-[90%] text-white lg:my-8 lg:text-xl">
        {project.desc}
      </p>

      <div className="mx-auto flex w-[90%] flex-col justify-center">
        <h2 className="text-center text-xl text-white underline decoration-sky-200 underline-offset-8 lg:text-3xl">
          Weekly Reports
        </h2>
        <div className="mx-auto mt-4 mb-8 flex flex-wrap justify-between bg-[rgb(0,0,0,0.3)] py-2 lg:mt-6 lg:mb-12 lg:w-2/3">
          {[1, 2, 3, 4, 5, 6].map((week) => (
            <span
              key={week}
              className={`w-1/3 border-2 border-sky-200 py-2 text-center text-sky-200 lg:text-xl ${
                week === 1
                  ? 'border-r-0 lg:border-r-2'
                  : week === 2
                    ? 'border-y-2 border-r-0 lg:border-y-2'
                    : week === 3
                      ? 'border-y-2 lg:border-y-2'
                      : week === 4
                        ? 'border-x-2 border-r-0 border-b-2 lg:border-x-2 lg:border-b-2'
                        : week === 5
                          ? 'border-r-2 border-b-2'
                          : 'border-r-2 border-b-2'
              }`}
            >
              <a href={`/aiep/${project.slug}/week-${week}`}>
                <em>Week - {week}</em>
              </a>
            </span>
          ))}
        </div>

        <h2 className="text-center text-xl text-white underline decoration-sky-200 underline-offset-8 lg:text-3xl">
          Meet the Team
        </h2>
        {project.leads.map((lead) => (
          <span
            key={lead}
            className="mx-auto mt-6 flex w-[85%] flex-col items-center border-2 border-sky-200 bg-[rgb(0,0,0,0.3)] px-4 pt-1 pb-2 lg:w-1/2 lg:px-0 lg:pt-0 lg:pb-4"
          >
            <span className="font-bold text-sky-200 lg:text-xl">👑</span>
            <span className="font-bold text-sky-200 lg:text-xl">Team Lead</span>
            <span className="mx-auto text-center text-white lg:text-xl">
              {lead}
            </span>
          </span>
        ))}
        {project.members.map((member, index) => (
          <span
            key={index}
            className="mx-auto mt-4 flex h-12 w-[85%] items-center justify-center border-2 border-sky-200 bg-[rgb(0,0,0,0.3)] px-4 py-2 lg:h-16 lg:w-1/2 lg:px-0"
          >
            <span className="text-white lg:text-xl">{member}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function NotFound({
  type,
  value
}: {
  type: 'year' | 'project';
  value: string;
}) {
  return (
    <div className="mx-auto mt-8 text-center text-white">
      <h1 className="text-2xl">
        {type === 'year'
          ? `No projects found for AIEP ${value}`
          : 'Project not found'}
      </h1>
    </div>
  );
}

export async function generateStaticParams() {
  const slugs = getSlugs();
  const years = getAllYears();

  // Combine both project slugs and years for static generation
  return [...slugs, ...years.map(String)].map((slug) => ({ slug }));
}

export default async function AIEPpage(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const { slug } = params;

  // Check if slug is a year (4 digits)
  const isYear = /^\d{4}$/.test(slug);

  if (isYear) {
    // Show year archive listing
    const year = parseInt(slug, 10);
    const yearProjects = getProjectsByYear(year);
    const latestYear = getLatestYear();

    if (yearProjects.length === 0) {
      return <NotFound type="year" value={slug} />;
    }

    return (
      <AIEPLayout year={year} latestYear={latestYear} projects={yearProjects} />
    );
  }

  // Show project detail page
  const project = getProjectBySlug(slug);

  if (!project) {
    return <NotFound type="project" value={slug} />;
  }

  return <ProjectDetail project={project} />;
}
