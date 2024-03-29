export type PostFrontMatter = {
  title: string;
  description: string;
  image: string | undefined;
  tags: string[] | undefined;
  authors: string | undefined;
  author_link: string | undefined;
  date: string;
};

export type Post = {
  frontMatter: PostFrontMatter;
  body: string;
  slug: string;
};

export type AIEPReportFrontMatter = {
  title: string;
  summary: string | undefined;
  lead: string | undefined;
  date: string;
};

export type Report = {
  matter: AIEPReportFrontMatter;
  body: string;
  slug: string;
  week: string;
};
