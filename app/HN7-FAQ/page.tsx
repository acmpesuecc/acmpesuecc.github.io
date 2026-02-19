export default function HN7FAQ() {
  return (
    <div className="flex-justify-center mx-auto my-12 w-[90%] lg:my-0 lg:w-2/3">
      <h1 className="mx-auto w-full text-center text-2xl font-semibold text-white underline decoration-sky-200 underline-offset-8 lg:text-5xl">
        HackNight 7 - FAQ
      </h1>

      <div className="mx-auto mt-12 mb-16 w-full space-y-8 text-white lg:mt-16 lg:mb-24">
        <div className="faq-item border-b border-sky-200 pb-6">
          <h3 className="text-lg font-medium text-sky-200 lg:text-xl">
            Q. What does submit a repo mean?
          </h3>
          <p className="mt-3 text-white lg:text-lg">
            A. Submitting a repo means that you could take one of your personal
            repos that is currently in your GitHub and then submit it to us.
            That repo then becomes listed as a repo for HackNight where
            participants can contribute. You will by default maintain your own
            repo unless you specify otherwise.
          </p>
        </div>

        <div className="faq-item border-b border-sky-200 pb-6">
          <h3 className="text-lg font-medium text-sky-200 lg:text-xl">
            Q. What does &apos;maintain someone else&apos;s repo mean?
          </h3>
          <p className="mt-3 text-white lg:text-lg">
            A. This means that you will be maintaining a repo that is already
            under{' '}
            <a
              href="https://github.com/orgs/acmpesuecc/repositories"
              className="text-sky-200 underline hover:text-sky-100"
              target="_blank"
              rel="noopener noreferrer"
            >
              ACM PESUECC GitHub
            </a>
            . If you find a repo that interests you, feel free to let us know in
            the form. If you are unsure of which repo you would like to maintain
            you can leave that answer blank in the form and we will allot you a
            form based on your tech stack. Repo allotment is subject to
            availability.
          </p>
        </div>

        <div className="faq-item border-b border-sky-200 pb-6">
          <h3 className="text-lg font-medium text-sky-200 lg:text-xl">
            Q. If I submit a repo do I have to transfer ownership?
          </h3>
          <p className="mt-3 text-white lg:text-lg">
            A. No. We will fork your repo on the{' '}
            <a
              href="https://github.com/orgs/acmpesuecc"
              className="text-sky-200 underline hover:text-sky-100"
              target="_blank"
              rel="noopener noreferrer"
            >
              ACM PESUECC GitHub
            </a>
            . After HackNight if you are happy with the additions the
            contributors make, you can choose to merge this into your personal
            repo.
          </p>
        </div>

        <div className="faq-item border-b border-sky-200 pb-6">
          <h3 className="text-lg font-medium text-sky-200 lg:text-xl">
            Q. Can I submit a repo and not maintain it?
          </h3>
          <p className="mt-3 text-white lg:text-lg">
            A. Well yes, but that&apos;s not recommended. Please try to maintain
            the repos you submit. But if that&apos;s not possible let us know in
            the form and we shall allot a repo you submit to another maintainer
            that is willing to take it up.
          </p>
        </div>

        <div className="faq-item border-b border-sky-200 pb-6">
          <h3 className="text-lg font-medium text-sky-200 lg:text-xl">
            Q. What&apos;s the max number of repos I can submit?
          </h3>
          <p className="mt-3 text-white lg:text-lg">A. 5</p>
        </div>

        <div className="faq-item">
          <h3 className="text-lg font-medium text-sky-200 lg:text-xl">
            Q. What&apos;s the max number of repos I can maintain?
          </h3>
          <p className="mt-3 text-white lg:text-lg">A. 5</p>
        </div>

        <div className="mt-12 border-t border-sky-200 pt-8 text-center">
          <p className="text-white lg:text-lg">
            If you have any other additional questions, please reach out to{' '}
            <a
              href="mailto:mail@mebin.in"
              className="text-sky-200 underline hover:text-sky-100"
            >
              mail@mebin.in
            </a>{' '}
            or{' '}
            <a
              href="mailto:pro.aditya.r@gmail.com"
              className="text-sky-200 underline hover:text-sky-100"
            >
              pro.aditya.r@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
