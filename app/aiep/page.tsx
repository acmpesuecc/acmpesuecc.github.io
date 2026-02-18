import { getProjects, getAllYears, getLatestYear } from './data/projects';
import { AIEPLayout } from '@/components/aiep/AIEPLayout';

export default function AIEP() {
  const projects = getProjects();
  const latestYear = getLatestYear();
  const allYears = getAllYears();
  const archiveYears = allYears.filter((y) => y !== latestYear);

  return (
    <AIEPLayout
      year={latestYear}
      latestYear={latestYear}
      projects={projects}
      archiveYears={archiveYears}
    />
  );
}
