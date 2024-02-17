import { getAllPosts, postPreview } from '../utils';

export default function Home() {
  const recentPosts = getAllPosts() // Return top 5 latest posts
    .sort(
      (a, b) =>
        new Date(b.frontMatter.date).getTime() -
        new Date(a.frontMatter.date).getTime()
    )
    .slice(0, 5);

  return (
    <>
      <img
        src="/acm_big_logo.png"
        alt="ACM Logo"
        className="mx-auto mt-32 w-[90%] lg:w-2/3 "
      />
      <div className="intro flex-justify-center mx-auto mt-32 w-[90%] lg:mt-44 lg:w-2/3">
        <h1 className="mx-auto w-full text-center text-xl text-white underline decoration-sky-200 underline-offset-8 lg:text-5xl">
          Welcome, fellow tinkerers!
        </h1>
        <p className="mx-auto mt-6 w-3/4 text-white  lg:mt-12 lg:w-full  lg:text-xl">
          Step into the realm of the ACM Student Chapter at PESU Electronic
          City, where we ignite minds, foster creativity, and empower the next
          generation of tech leaders. Join us on a journey where engineering
          isn't just a profession, but a gateway to endless possibilities.
        </p>
      </div>
      <h1 className="mt-16 text-center text-xl text-white underline decoration-sky-200 underline-offset-8  lg:mt-40 lg:text-4xl">
        RECENT POSTS
      </h1>
      <div className="posts mx-auto mb-16 mt-8 w-[90%] lg:w-2/3">
        {/* Show top 5 recent posts */}
        {recentPosts.map((post, index: number) => (
          <div
            key={index}
            className="mx-auto border-b-2 border-b-sky-200 py-4 lg:pb-4 lg:pt-8"
          >
            <h1 className="text-lg font-medium text-white underline decoration-sky-200 lg:text-2xl">
              <a href={`/posts/${post.slug}`}>{post.frontMatter.title}</a>
            </h1>
            <span className="mb-6 flex flex-row justify-between">
              <p className="text-sky-200 lg:text-lg">
                {post.frontMatter.authors}
              </p>
              <p className="hidden text-end text-white lg:inline lg:text-lg">
                {post.frontMatter.description}
              </p>
            </span>
            <span className="mt-6 w-1/2 break-words text-white lg:text-lg">
              <a href={`/posts/${post.slug}`}>{postPreview(post.body)}</a>
              {/* Show plaintext content preview*/}
            </span>
            <p className=" mt-2 flex flex-row justify-end text-sky-200 lg:text-lg">
              {post.frontMatter.tags?.map((tag) => `#${tag} `)}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
