// AIEP Project Data
// Edit this file to add/remove/update projects
// Each project has a year field to enable year-based filtering

export interface Project {
  year: number;
  slug: string;
  title: string;
  leads: string[];
  members: string[];
  desc: any; // React.ReactNode for JSX descriptions
}

export const projects: Project[] = [
  {
    year: 2024,
    slug: 'retro-game-console-emulation',
    title: 'Retro Game Console Emulation: Write Your Own CHIP8 Interpreter!',
    leads: ['Sriprad Potukuchi'],
    members: [
      'D Krishikesh Reddy',
      'Suhit Hegde',
      'Amruta L',
      'Adhvaith R',
      'Ananya Kini'
    ],
    desc: `Through this project, Sriprad wishes to introduce participants to the world of emulator development.
    The participants will be exploring the same by building a CHIP-8 interpreter.`
  },
  {
    year: 2024,
    slug: 'academyx',
    title: 'AcademyX: An E-learning platform hosted on the cloud',
    leads: ['Achyuth Yogesh Sosale'],
    members: [
      'Advay Sanketi',
      'Advaith B',
      'Akshat Navlani',
      'Siddhartha Rao',
      'Prabhala Tara'
    ],
    desc: `AcademyX aims to be an easy-to-use E-learning platform for learners and
    teachers to upload content. Through this project the participants will learn and implement
    best practices to test and develop backend APIs and microservices, Website UI/UX and interactivity, cloud services
    and so much more.`
  },
  {
    year: 2024,
    slug: 'exploring-database-internals',
    title: 'Exploring Database Internals(by trying to build one!)',
    leads: ['Siddharth Tewari'],
    members: [
      'Saijyoti P',
      'Vyoman Jain',
      'Reema Sarkar',
      'Alayna C M',
      'Sai Hemanth M'
    ],
    desc: `What are the data structures that power databases and how are they stored on disk?
    The team will learn the answers to this question and and many more as they forge their own database from scratch and learn about
    how databases work internally in depth.`
  },
  {
    year: 2024,
    slug: 'design-and-simulation-of-uavs',
    title: 'Exploring Aviation through the design and simulation of UAVs',
    leads: ['Himank Bansal'],
    members: [
      'Arya S D',
      'Atharva A K',
      'Lalitha T V',
      'Nisschay K',
      'Siri Basavaraj'
    ],
    desc: `Dive deep into the fascinating realm of Unmanned Aerial Vehicles (UAVs) as we explore their intricacies
     through innovative design and realistic simulation.`
  },
  {
    year: 2024,
    slug: 'anna',
    title: 'Anna: A static site generator built with Go!',
    leads: [],
    members: ['Adhesh Athrey', 'Nathan Paul', 'Anirudh Sudhir', 'Aditya Hegde'],
    desc: (
      <>
        Inspired by{' '}
        <a
          href="https://gohugo.io/"
          className="bg-[rgb(255,255,255,0.1)] px-2 text-center text-sky-200"
        >
          Hugo
        </a>{' '}
        and{' '}
        <a
          href="https://saaru-docs.netlify.app/"
          className="bg-[rgb(255,255,255,0.1)] px-2 text-center text-sky-200"
        >
          Saaru
        </a>
        , this static site generator aims to take performance to the next level
        with parallel rendering, live reloads and so much more, all in Go. The
        team comprises of only super talented first years.
      </>
    )
  }
];

// Helper functions

/**
 * Get the latest year from all projects
 */
export const getLatestYear = () => Math.max(...projects.map((p) => p.year));

/**
 * Get all unique years in descending order
 */
export const getAllYears = () =>
  Array.from(new Set(projects.map((p) => p.year))).sort((a, b) => b - a);

/**
 * Get projects for the latest year (for /aiep page)
 */
export const getProjects = () =>
  projects.filter((p) => p.year === getLatestYear());

/**
 * Get projects for a specific year (for /aiep/[year] pages)
 */
export const getProjectsByYear = (year: number) =>
  projects.filter((p) => p.year === year);

/**
 * Get all unique slugs (for generateStaticParams)
 */
export const getSlugs = () => Array.from(new Set(projects.map((p) => p.slug)));

/**
 * Get a single project by slug (works for any year)
 */
export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);

/**
 * Get year for a specific project by slug
 */
export const getProjectYear = (slug: string) => {
  const project = getProjectBySlug(slug);
  return project?.year;
};
