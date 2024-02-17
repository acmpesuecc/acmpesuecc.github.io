import { getAllPosts, postPreview } from '../../utils';

export default function Posts() {
  const recentPosts = getAllPosts() // Return posts sorted by timestamp
    .sort(
      (a, b) =>
        new Date(b.frontMatter.date).getTime() -
        new Date(a.frontMatter.date).getTime()
    );

  return (
    <>
      <div className="flex-justify-center mx-auto w-[90%] lg:w-2/3">
        <h1 className="mt-8 text-center text-2xl text-white underline decoration-sky-200 underline-offset-8 lg:mt-4 lg:text-5xl">
          ALL POSTS
        </h1>
      </div>
      <div className="posts mx-auto mb-16 mt-4 w-[90%] lg:w-2/3">
        {/* Show posts */}
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
