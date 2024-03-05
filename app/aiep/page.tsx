export default function AIEP() {
  const ProjectCard = ({
    title,
    lead,
    desc,
    slug
  }: {
    title: string;
    lead: string;
    desc: string;
    slug: string;
  }) => {
    return (
      <div
        className={`flex-justify-center mx-auto my-8 ${lead !== '' ? `h-36` : `h-auto`} w-[90%] border-2 border-sky-200 bg-[rgb(0,0,0,0.3)] px-4 pb-8 pt-4 lg:h-auto lg:w-2/3 lg:p-8`}
      >
        <a href={`/aiep/${slug}`} className="w-max">
          <h2 className="w-full text-center text-white underline decoration-sky-200 lg:mt-2 lg:text-2xl">
            {title}
          </h2>
          {lead !== '' && (
            <h2 className="w-full text-center text-sky-200 lg:mt-2 lg:text-lg">
              Team Lead - {lead}
            </h2>
          )}
        </a>
      </div>
    );
  };
  return (
    <div className="flex-justify-center mx-auto w-[90%] lg:w-2/3">
      <h1 className="mt-8 text-center text-2xl text-white underline decoration-sky-200 underline-offset-8 lg:mt-4 lg:text-5xl">
        Explore AIEP 2024
      </h1>
      <img
        src="/aiep2024.jpeg"
        alt="ACM Logo"
        className="mx-auto mt-8 w-[90%] lg:mt-16 lg:w-2/3"
      />
      <p className="mx-auto mt-6 w-[90%] text-white  lg:mt-12 lg:w-full  lg:text-xl">
        The ACM Industrial Program is ACM PESU-ECC&#39;s annual mentorship
        program, through which we try to emulate the development pipeline used
        in the industry for a variety projects or learn about new tech with a
        hands on approach.
      </p>
      <p className="mx-auto mt-6 w-[90%] text-white  lg:mt-12 lg:w-full  lg:text-xl">
        After multiple successful iterations, AIEP 2024 promises to be a game
        changer for participants to better understand real world, industrial
        practices and select a high end project to work on and add under their
        belt from a plethora of unique options.
      </p>
      <h1 className="mt-8 text-center text-xl text-white underline decoration-sky-200 underline-offset-8 lg:mt-16 lg:text-4xl">
        PROBLEM STATEMENTS
      </h1>

      <ProjectCard
        title="Retro Game Console Emulation: Write Your Own CHIP8 Interpreter!"
        lead="Sriprad Potukuchi"
        desc=""
        slug="retro-game-console-emulation"
      />
      <ProjectCard
        title="AcademyX: An E-learning platform hosted on the cloud"
        lead="Achyuth Yogesh Sosale"
        desc=""
        slug="academyx"
      />
      <ProjectCard
        title="Exploring Database Internals(by trying to build one!)"
        lead="Siddharth Tewari"
        desc=""
        slug="exploring-database-internals"
      />
      <ProjectCard
        title="Exploring Aviation through the design and simulation of UAVs"
        lead="Himank Bansal"
        desc=""
        slug="design-and-simulation-of-uavs"
      />
      <ProjectCard
        title="SSG: A static site generator built with Go!"
        lead=""
        desc=""
        slug="ssg"
      />
    </div>
  );
}
