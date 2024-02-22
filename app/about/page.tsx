export default function About() {
  return (
    <div className="flex-justify-center mx-auto my-8 w-[90%] lg:my-0 lg:w-2/3">
      <h1 className="mx-auto w-full text-center text-xl font-semibold text-white underline decoration-sky-200 underline-offset-8 lg:text-5xl">
        About us
      </h1>
      <p className="mx-auto mt-6 w-3/4 text-white  lg:mt-12 lg:w-full  lg:text-xl">
        The ACM Student Chapter here at PES University Electronic City Campus
        brings you a world of opportunities, events and contains a wide range of
        activities to keep ACM moving including organizing conferences,
        improving technical skills and networking.
      </p>

      <p className="mx-auto mt-6 w-3/4 text-white  lg:mt-12 lg:w-full  lg:text-xl">
        {' '}
        We organize a plethora of workshops, hackathons and mentorship events
        for all students on campus to help them gain rich knowledge in their
        interested domain and build industry grade projects along the way. We
        also bring in mentors straight from the real world in the form of
        experts currently working in the industry.
      </p>
    </div>
  );
}
