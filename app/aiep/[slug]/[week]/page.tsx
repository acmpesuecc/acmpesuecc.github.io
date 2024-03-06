import { getAIEPBySlug } from '@/utils';
import './report.css';
import React from 'react';
import { Report } from '@/types';
import ReactMarkdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import remarkGfm from 'remark-gfm';

export async function generateStaticParams() {
  const slugs = [
    'retro-game-console-emulation',
    'academyx',
    'exploring-database-internals',
    'design-and-simulation-of-uavs',
    'ssg'
  ];
  const weeks = ['week-1', 'week-2', 'week-3', 'week-4', 'week-5', 'week-6'];
  const staticPaths: { slug: string; week: string }[] = [];

  slugs.forEach((slug) => {
    weeks.forEach((week) => {
      staticPaths.push({ slug: slug, week: week });
    });
  });

  return staticPaths;
}

const blogPost = ({ params }: { params: { slug: string; week: string } }) => {
  const { slug, week } = params;
  const report: Report = getAIEPBySlug(week, slug);
  return (
    <>
      <div className="mx-auto mt-8 w-[90%] lg:w-full">
        <h1 className="mx-auto w-full text-center underline-offset-8 lg:text-6xl">
          {report.matter.title}
        </h1>
        <span className="mx-auto mt-8 flex w-full flex-row justify-between lg:w-1/2">
          <p className="w-1/2 text-sky-200 lg:text-lg">{report.matter.date}</p>
          {report.matter.lead && (
            <p className="mt-0 inline w-1/3 text-end text-sky-200 lg:w-full lg:text-lg">
              {report.matter.lead} & team
            </p>
          )}
        </span>
        {report.matter.summary && (
          <div className="mx-auto mt-4 w-[90%] lg:mt-10 lg:w-1/2">
            <h1 className="text-start text-[2rem] text-white underline decoration-sky-200 lg:text-[2.5rem]">
              TL;DR
            </h1>
            <p className="my-3 text-white lg:text-[1.1rem]">
              {report.matter.summary}
            </p>
          </div>
        )}
      </div>
      <div className="mx-auto my-16 w-[90%] lg:w-1/2">
        {report && (
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
            {report.body}
          </ReactMarkdown>
        )}
      </div>
    </>
  );
};

export default blogPost;
