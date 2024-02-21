import { getPostBySlug } from '@/utils';
import './post.css';
import React from 'react';
import { Post } from '@/types';
import ReactMarkdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import remarkGfm from 'remark-gfm';

const blogPost = (/*{ params }: { params: { slug: string } } */) => {
  //const { slug } = params;
  const post: Post = getPostBySlug('aiep');
  return (
    <>
      <div className="mx-auto mt-8 w-[90%] lg:w-full">
        <h1 className="mx-auto w-full text-center underline-offset-8 lg:text-6xl">
          {post.frontMatter.title}
        </h1>
        <span className="mx-auto mt-8 flex w-full flex-row justify-between lg:w-1/2">
          <p className="w-1/2 text-sky-200">{post.frontMatter.date}</p>
          <p className="mt-0 inline w-1/3 text-end text-sky-200 lg:w-full">
            {post.frontMatter.tags?.map((tag) => `#${tag} `)}
          </p>
        </span>
        <p className="mx-auto w-full text-sky-200 lg:w-1/2">
          {post.frontMatter.authors}
        </p>
      </div>
      <div className="mx-auto my-16 w-[90%] lg:w-1/2">
        {post && (
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              code: ({ node, className, children, ...props }) => {
                const match = /language-(\w+)/.exec(className || '');
                const isMultiline =
                  children && children.toString().includes('\n');
                if (match || isMultiline) {
                  return match ? (
                    <>
                      <SyntaxHighlighter
                        language={match[1]}
                        style={darcula}
                        PreTag="div"
                      >
                        {String(children).replace(/\n$/, '')}
                      </SyntaxHighlighter>
                    </>
                  ) : (
                    <span className="flex justify-center whitespace-pre-wrap">
                      <code
                        className={`${className} inline-block bg-[rgb(255,255,255,0.1)] py-2 text-xs text-sky-200 lg:pl-2 lg:pr-16 lg:text-base`}
                        {...props}
                      >
                        {children}
                      </code>
                    </span>
                  );
                } else {
                  return (
                    <code
                      className={`${className} inline-block bg-[rgb(255,255,255,0.1)] px-2 text-sky-200`}
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
