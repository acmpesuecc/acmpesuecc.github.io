export async function generateStaticParams() {
  const slugs = [
    'retro-game-console-emulation',
    'academyx',
    'exploring-database-internals',
    'design-and-simulation-of-uavs',
    'ssg'
  ];
  return slugs.map((slug) => ({ slug: slug }));
}

const projects = {
  'retro-game-console-emulation': {
    slug: 'retro-game-console-emulation',
    title: 'Retro Game Console Emulation: Write Your Own CHIP8 Interpreter!',
    lead: 'Sriprad Potukuchi',
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
  academyx: {
    slug: 'academyx',
    title: 'AcademyX: An E-learning platform hosted on the cloud',
    lead: 'Achyuth Yogesh Sosale',
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
  'exploring-database-internals': {
    slug: 'exploring-database-internals',
    title: 'Exploring Database Internals(by trying to build one!)',
    lead: 'Siddharth Tewari',
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
  'design-and-simulation-of-uavs': {
    slug: 'design-and-simulation-of-uavs',
    title: 'Exploring Aviation through the design and simulation of UAVs',
    lead: 'Himank Bansal',
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
  ssg: {
    slug: 'ssg',
    title: 'SSG: A static site generator built with Go!',
    lead: '',
    members: ['Adhesh Athrey', 'Nathan Paul', 'Anirudh Sudhir', 'Aditya Hegde'],
    desc: (
      <>
        Inspired by{` `}
        <a
          href="https://gohugo.io/"
          className="bg-[rgb(255,255,255,0.1)] px-2 text-center text-sky-200"
        >
          Hugo
        </a>
        {` `}and{` `}
        <a
          href="https://https://saaru-docs.netlify.app/"
          className="bg-[rgb(255,255,255,0.1)] px-2 text-center text-sky-200"
        >
          Saaru
        </a>
        , this static site generator aims to take performance to the next level
        with parallel rendering, live reloads and so much more, all in Go. The
        team comprises of only super talented first years.`
      </>
    )
  }
};
export default function AIEProject({
  params
}: {
  params: { slug: keyof typeof projects };
}) {
  const { slug } = params;
  return (
    <div className="mx-auto mb-12 mt-4 flex w-[90%] flex-col justify-center lg:mt-2 lg:w-3/4">
      <h1 className="mt-4 text-center text-2xl text-white underline decoration-sky-200 underline-offset-8 lg:text-5xl">
        {projects[slug].title}
      </h1>
      <p className="mx-auto my-6 w-[90%] text-white lg:my-8 lg:text-xl">
        {projects[slug].desc}
      </p>

      <div className="mx-auto flex w-[90%] flex-col justify-center">
        <h2 className="text-center text-xl text-white underline decoration-sky-200 underline-offset-8 lg:text-3xl">
          Weekly Reports
        </h2>
        <div className="mx-auto mb-8 mt-4 flex flex-wrap justify-between bg-[rgb(0,0,0,0.3)] py-2 lg:mb-12 lg:mt-6 lg:w-2/3">
          <span className="w-1/3 border-2  border-sky-200 py-2 text-center text-sky-200 lg:text-xl">
            <a href={`/${slug}/week-1`}>
              <em>Week - 1</em>
            </a>
          </span>
          <span className="w-1/3 border-y-2 border-r-2 border-sky-200 py-2 text-center text-sky-200 lg:text-xl">
            <a href={`/${slug}/week-2`}>
              <em>Week - 2</em>
            </a>
          </span>
          <span className="w-1/3 border-y-2 border-r-2 border-sky-200 py-2 text-center text-sky-200 lg:text-xl">
            <a href={`/${slug}/week-3`}>
              <em>Week - 3</em>
            </a>
          </span>
          <span className="w-1/3 border-x-2 border-b-2 border-sky-200 py-2 text-center text-sky-200 lg:text-xl">
            <a href={`/${slug}/week-4`}>
              <em>Week - 4</em>
            </a>
          </span>
          <span className="w-1/3 border-b-2 border-r-2 border-sky-200 py-2 text-center text-sky-200 lg:text-xl">
            <a href={`/${slug}/week-5`}>
              <em>Week - 5</em>
            </a>
          </span>
          <span className="w-1/3 border-b-2 border-r-2 border-sky-200 py-2 text-center text-sky-200 lg:text-xl">
            <a href={`/${slug}/week-6`}>
              <em>Week - 6</em>
            </a>
          </span>
        </div>
        <h2 className="text-center text-xl text-white underline decoration-sky-200 underline-offset-8 lg:text-3xl">
          Meet the Team
        </h2>
        {projects[slug].lead !== '' && (
          <span className="mx-auto mt-6 flex w-[85%] flex-col items-center border-2 border-sky-200 bg-[rgb(0,0,0,0.3)] px-4 pb-2 pt-1 lg:w-1/2 lg:px-0 lg:pb-4 lg:pt-0 ">
            <span className="font-bold text-sky-200 lg:text-xl">👑</span>
            <span className="font-bold text-sky-200 lg:text-xl">Team Lead</span>
            <span className=" mx-auto text-center text-white lg:text-xl">
              {projects[slug].lead}
            </span>
          </span>
        )}
        {projects[slug].members.map((member, index) => (
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
