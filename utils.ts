import fs from 'fs';
import matter from 'gray-matter';
import React from 'react';
import { Post, PostFrontMatter } from './types';

export const getAllPosts = (): Post[] => {
  const files = fs.readdirSync('content/posts');

  //@ts-ignore
  return files.reduce((allPosts, postSlug) => {
    const source = fs.readFileSync(`content/posts/${postSlug}`);
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

export const fetchAllSlugs = (): string[] => {
  const posts = fs.readdirSync('content/posts');
  const slugs = posts.map((fileName) => fileName.replace(/\.md$/, ''));

  return slugs;
};

export const getPostBySlug = (slug: string): Post => {
  const file = fs.readFileSync(`content/posts/${slug}.md`);
  const { data, content } = matter(file);

  const postData: PostFrontMatter = {
    title: data.title,
    description: data.description,
    image: data?.image,
    tags: data?.tags,
    authors: data?.authors,
    author_link: data?.author_link,
    date: data.date
  };

  return {
    frontMatter: postData,
    body: content,
    slug: slug
  };
};

export const getAIEPBySlug = (week: string, slug: string) => {
  const file = fs.readFileSync(`content/aiep/${week}/${slug}.md`);
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
  const maxLength = 200;
  const previewText =
    plainText.length > maxLength
      ? `${plainText.substring(0, maxLength)}...`
      : plainText;

  return previewText;
};
