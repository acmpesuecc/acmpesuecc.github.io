import { getPostBySlug, fetchAllSlugs } from '@/utils';
import './post.css';
import React from 'react';
import { Post } from '@/types';
import ReactMarkdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import remarkGfm from 'remark-gfm';

export async function generateStaticParams() {
  const slugs = fetchAllSlugs();
  return slugs.map((slug) => ({ slug: slug }));
}

const blogPost = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const post: Post = getPostBySlug(slug);
  return (
    <>
      <div className="mx-auto mt-8 w-[90%] lg:w-full">
        <h1 className="mx-auto w-full text-center text-white underline decoration-sky-200 underline-offset-8 lg:text-6xl">
          {post.frontMatter.title}
        </h1>
        <span className="mx-auto mt-8 flex w-full flex-row justify-between lg:w-1/2">
          <p className="w-1/2 text-sky-200 lg:text-lg">
            {post.frontMatter.date}
          </p>
          <p className="mt-0 inline w-1/3 text-end text-sky-200 lg:w-full lg:text-lg">
            {post.frontMatter.tags?.map((tag) => `#${tag} `)}
          </p>
        </span>
        <p className="mx-auto w-full text-sky-200 lg:w-1/2 lg:text-lg">
          {post.frontMatter.authors}
        </p>
      </div>
      <div className="post-container mx-auto my-16 w-[90%] lg:w-1/2">
        {post && (
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              a: ({ href, children, ...props }) => {
                const isExternal = href?.startsWith('http');
                return (
                  <a
                    href={href}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                    className="font-semibold text-sky-300 underline decoration-sky-400 underline-offset-4 transition-colors hover:text-sky-100 hover:decoration-sky-200"
                    {...props}
                  >
                    {children}
                  </a>
                );
              },
              code: ({ node, className, children, ...props }) => {
                const match = /language-(\w+)/.exec(className || '');
                const isMultiline =
                  children && children.toString().includes('\n');
                if (match || isMultiline) {
                  return match ? (
                    <div className="my-6 overflow-hidden rounded-md border border-sky-400/20 bg-[#0d1520]">
                      <SyntaxHighlighter
                        language={match[1]}
                        style={darcula}
                        PreTag="div"
                        customStyle={{
                          margin: 0,
                          padding: '1rem',
                          background: 'transparent',
                          fontSize: '0.9rem'
                        }}
                      >
                        {String(children).replace(/\n$/, '')}
                      </SyntaxHighlighter>
                    </div>
                  ) : (
                    <div className="my-4 overflow-x-auto rounded-md border border-sky-400/20 bg-[rgb(255,255,255,0.06)] p-3 text-xs text-sky-200 lg:text-sm">
                      <code className={`${className} font-mono`} {...props}>
                        {children}
                      </code>
                    </div>
                  );
                } else {
                  return (
                    <code
                      className={`${className} inline-block rounded bg-[rgb(255,255,255,0.1)] px-1.5 py-0.5 font-mono text-xs text-sky-200 lg:text-sm`}
                      {...props}
                    >
                      {children}
                    </code>
                  );
                }
              }
            }}
          >
            {post.body}
          </ReactMarkdown>
        )}
      </div>
    </>
  );
};

export default blogPost;
