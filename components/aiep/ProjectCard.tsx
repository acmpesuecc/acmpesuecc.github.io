import Link from 'next/link';
import type { Project } from '@/app/aiep/data/projects';

/**
 * Project card component for listing pages
 */
export function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      className={`flex-justify-center mx-auto my-8 ${
        project.leads.length > 0 ? `h-36` : `h-auto`
      } w-[90%] border-2 border-sky-200 bg-[rgb(0,0,0,0.3)] px-4 pt-4 pb-8 lg:h-auto lg:w-2/3 lg:p-8`}
    >
      <Link href={`/aiep/${project.slug}`} className="w-max">
        <h2 className="w-full text-center text-white underline decoration-sky-200 lg:mt-2 lg:text-2xl">
          {project.title}
        </h2>
        {project.leads.length > 0 && (
          <h2 className="w-full text-center text-sky-200 lg:mt-2 lg:text-lg">
            Team Lead{project.leads.length > 1 ? 's' : ''} -{' '}
            {project.leads.join(', ')}
          </h2>
        )}
      </Link>
    </div>
  );
}
