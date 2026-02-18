import Link from 'next/link';
import type { Project } from '@/app/aiep/data/projects';
import { ProjectCard } from './ProjectCard';

interface AIEPLayoutProps {
  year: number;
  latestYear: number;
  projects: Project[];
  archiveYears?: number[];
}

export function AIEPLayout({
  year,
  latestYear,
  projects,
  archiveYears
}: AIEPLayoutProps) {
  const isLatest = year === latestYear;

  return (
    <div className="flex-justify-center mx-auto w-[90%] lg:w-2/3">
      <h1 className="mt-8 text-center text-2xl text-white underline decoration-sky-200 underline-offset-8 lg:mt-4 lg:text-5xl">
        {isLatest ? `Explore AIEP ${year}` : `AIEP ${year} - Archive`}
      </h1>
      <img
        src="/aiep2024.jpeg"
        alt="ACM Logo"
        className="mx-auto mt-8 w-[90%] lg:mt-16 lg:w-2/3"
      />
      <p className="mx-auto mt-6 w-[90%] text-white lg:mt-12 lg:w-full lg:text-xl">
        The ACM Industrial Program is ACM PESU-ECC&apos;s annual mentorship
        program, through which we try to emulate the development pipeline used
        in the industry for a variety projects or learn about new tech with a
        hands on approach.
      </p>
      <p className="mx-auto mt-6 w-[90%] text-white lg:mt-12 lg:w-full lg:text-xl">
        {isLatest
          ? `After multiple successful iterations, AIEP ${year} promises to be a game changer for participants to better understand real world, industrial practices and select a high end project to work on and add under their belt from a plethora of unique options.`
          : `AIEP ${year} was a successful iteration where participants got to understand real world, industrial practices and added high end projects under their belt.`}
      </p>

      {/* Archive Links - show on main page */}
      {isLatest && archiveYears && archiveYears.length > 0 && (
        <div className="mx-auto mt-12 flex flex-col items-center gap-4 lg:mt-16">
          <span className="text-white lg:text-lg">View Past Projects:</span>
          <div className="flex flex-wrap justify-center gap-4">
            {archiveYears.map((archiveYear) => (
              <Link
                key={archiveYear}
                href={`/aiep/${archiveYear}`}
                className="rounded bg-sky-200 px-6 py-3 text-lg font-semibold text-black transition-colors hover:bg-sky-300"
              >
                AIEP {archiveYear}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Back to current projects - show on archive pages */}
      {!isLatest && (
        <div className="mx-auto mt-12 flex justify-center lg:mt-16">
          <Link
            href="/aiep"
            className="rounded bg-sky-200 px-6 py-3 text-lg font-semibold text-black transition-colors hover:bg-sky-300"
          >
            View Current Projects (AIEP {latestYear})
          </Link>
        </div>
      )}

      <h1 className="mt-8 text-center text-xl text-white underline decoration-sky-200 underline-offset-8 lg:mt-16 lg:text-4xl">
        PROBLEM STATEMENTS
      </h1>

      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
}
