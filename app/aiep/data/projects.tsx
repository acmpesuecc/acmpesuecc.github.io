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
    year: 2026,
    slug: 'literate',
    title: 'Literate: A cross-platform, BYO-Cloud PDF Reader & Sync Engine PWA',
    leads: ['Arjun D Kumar', 'Hemanth Andey'],
    members: [
      'Anna Maria Cijo',
      'Avantika Jayaraja Puthran',
      'C K Gagan Gowda',
      'Harshul Agarwal',
      'Krithik V',
      'S Prithika'
    ],
    desc: `Literate is a project built aiming to make reading books and PDFs easier, more accessible, and open to change - by the people, for the people and of the people
    Being a PWA Literate enables users to save their bookmarks during their read on their hectic travel, to accessing the same bookmarks at the comfort of their beds in their laptops or tablets`
  },
  {
    year: 2026,
    slug: 'kinemation',
    title: 'kinemation: A computer vision ML pipeline',
    leads: ['Maaya Mohan'],
    members: [
      'Amrita Pradeep',
      'Hemaksh Breja',
      'Kurias Joji',
      'Navya S Gurupadmath',
      'Saisree Vaishnavi',
      'Yatin R'
    ],
    desc: `Kinemation is a computer vision project that takes a regular video of a person and turns their movements into animated stick figures. It works by identifying important points on the body and using thento form a simple skeletal version of the person. The result is a minimal, clean stick figure that mirrors the original motion in the video.
    The idea is not just to draw stick figures, but to make them move in a way that actually feels natural and smooth. Even when the video has fast movements or awkward angles, the goal is to keep the animation stable and easy to understand. In the end, Kinemation is about capturing real human motion and expressing it in the simplest and most fun visual form possible.`
  },
  {
    year: 2026,
    slug: 'cirem',
    title: 'CIReM: An experimental ML research project',
    leads: ['Lakshit Talreja', 'Hemanth Andey'],
    members: [
      'Arjun Mohan Gowda',
      'Atreya B Deshpande',
      'Prabodh Bharadwaj',
      'Laxmi Karthikeya Gollapudi',
      'Shivangi Tiwari'
    ],
    desc: `CIReM, a project that...
    ... doesn’t quite know how it got its name.
    Entered as a slightly experimental setup, CIReM aims to see if a group of highly motivated students can make it into the research domain without a specific mentor guidance that's usually present.
    The team of 4 aims to analyse and find commonality among the 4 methods used to regularise Representation Models (Autoencoders), and to help speed up training of World Models effectively.`
  },
  {
    year: 2026,
    slug: 'awasme',
    title: 'aWASMe: A WASM interpreter',
    leads: ['Nirupama Jayaraman', 'Sarah Kazi', 'Selvaganesh Arunmozhi'],
    members: [
      "Aston Venol D'Souza",
      'Chitra Likith Kumar',
      'Samyuktha Ramesh Babu',
      'Shashidharan VS'
    ],
    desc: `A WASM interpreter with dual modes — one as a browser-based VM and one as a simulator for WASM. It uses a structured parsing and execution pipeline in C++ & emscripten, to load binary modules , validate and decode instructions, and simulate a full virtual machine directly in the browser. It is a very useful tool when it comes to experimenting on systems safely and also helps out to build/test/debug any program in a sandboxed environment without requiring external runtimes.`
  },
  {
    year: 2026,
    slug: 'progchamp',
    title: 'ProgChamp',
    leads: ['Ashmita Chaki', 'Rehaan Jose Mathew', 'Zia Kadijah'],
    members: [
      'Archita Agrawal',
      'Poornaprajna Kashyap',
      'Pratham Mudakavi',
      'Sannidhi Nayak',
      'Syed Ayaan Hasan'
    ],
    desc: `ProgChamp is an online platform for users to publish and enjoy a collection of various games, sortable by genre and carefully curated. Users can rate the games, comment on them, and to show some extra love, they can even boost the games’ popularity by superliking up to 3 of them! To spice things up, ProgChamp will also be hosting seasonal challenges that aspiring game developers can join and compete in. It can potentially be expanded beyond games to other user-generated content as well :D`
  },
  {
    year: 2026,
    slug: 'radfs',
    title: 'radFS: In-memory FUSE filesystem built using adaptive radix trees',
    leads: ['Pranav V Bhat', 'Vinaayak G Dasika'],
    members: [
      'Angelo Arakal',
      'Bhuvigna Reddy A T',
      'M C Nirmal Kumar',
      'Saankhya Srikanth'
    ],
    desc: `Prioritizing memory density over raw speed, radFS challenges the team to build a space-efficient filesystem using FUSE and Go. By using Adaptive Radix Trees (ART) instead of B-Trees as the main storage data structure, the team aims to try and solve the problem of worst-case space consumption while exploring the safety and flexibility of userspace development.`
  },
  {
    year: 2026,
    slug: 'opencms',
    title:
      'OpenCMS: A minimal headless CMS for blog publishing, designed to integrate with SSGs',
    leads: ['Mebin J Thattil', 'Sabique Islam'],
    members: ['Kalyani Puranik', 'Manav Dewangan', 'Prarthana Vadeesha'],
    desc: `OpenCMS is a minimal headless CMS for publishing blogs directly from a git repository, its built to integrate with hugo, zola, and other static site generators. It provides a markdown editor with live preview and asset uploads. The CMS commits edits back to github automatically, exposes APIs for raw content, metadata, and can trigger site builds through webhooks.`
  },
  {
    year: 2026,
    slug: 'scibits',
    title: 'SciBits: A hardware implementation of a Scientific Calculator',
    leads: ['Keval Pattani', 'Pranav M'],
    members: ['Pranav K'],
    desc: `A hardware-centric project aiming to design a Scientific Calculator using Verilog (RTL). The calculator will support basic arithmetic operations alongside advanced features like statistical calculations and polynomial equation solving.
    The design follows a behavioral approach for all computational operations, with a Display module developed in parallel to visualize calculations. An Instruction Set Architecture (ISA) will be integrated into the core CPU to load sprites into the Display Module and handle computation tasks.
    Upon completing the calculator and display functionalities, the design will be processed through the open-source ASIC implementation tool OpenLane, transforming it into an ASIC-ready chip.`
  },
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
    title: 'Exploring Database Internals (by trying to build one!)',
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
