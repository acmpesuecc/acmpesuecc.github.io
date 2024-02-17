import fs from 'fs';
import matter from 'gray-matter';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { renderToString } from 'react-dom/server';
import { Post } from './types';

export const getAllPosts = (): Post[] => {
  const files = fs.readdirSync('posts');

  //@ts-ignore
  return files.reduce((allPosts, postSlug) => {
    const source = fs.readFileSync(`posts/${postSlug}`);
    const { data, content } = matter(source);

    return [
      {
        frontMatter: data,
        body: content,
        slug: postSlug.replace('.md', '')
      },
      ...allPosts
    ];
  }, []);
};

export const getPostBySlug = (slug: string) => {
  const file = fs.readFileSync(`posts/${slug}.md`);
  const { data, content } = matter(file);
  return {
    matter: data,
    body: content
  };
};

export const getAIEPBySlug = (week: string, slug: string) => {
  const file = fs.readFileSync(`aiep/${week}/${slug}.md`);
  const { data, content } = matter(file);
  return {
    matter: data,
    body: content
  };
};

// extract text from markdown content
const extractPlainText = (elements: React.ReactNode): string => {
  const childrenArray = React.Children.toArray(elements);
  return childrenArray.reduce((acc: string, el) => {
    if (typeof el === 'string') {
      return acc + el;
    }
    if (React.isValidElement(el) && el.props.children) {
      return acc + extractPlainText(el.props.children);
    }
    return acc;
  }, '');
};

// Extract plaintext from markdown content
export const postPreview = (markdownContent: string) => {
  const initalText = extractPlainText(markdownContent);
  const plainText = initalText
    .replace(/!\[[^\]]*\](\([^)]*\)|\[[^\]]*\])/g, '')
    .replace(/~~(.*?)~~/g, '')
    .replace(/\*\*(.*?)\*\*|__(.*?)__/g, '')
    .replace(/\*(.*?)\*|_(.*?)_/g, '')
    .replace(/^#+\s+(.*)/gm, '$1')
    .replace(
      /(?:!?\[[^\]]*\]\([^)]*\)|!?\[[^\]]*\]\[[^\]]*\]|~~.*?~~|\*\*.*?\*\*|__.*?__|\*.*?\*|_.*?_|^#+\s+.*$|[\*>-] .*$|\n\n)/gm,
      ''
    )
    .replace(/\n{2,}/g, '\n')
    .trim();
  const maxLength = 100;
  const previewText =
    plainText.length > maxLength
      ? `${plainText.substring(0, maxLength)}...`
      : plainText;

  return previewText;
};
