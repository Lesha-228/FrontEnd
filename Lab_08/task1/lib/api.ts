import { Author, Post } from "@/types";

const authors: Author[] = [
  {
    id: "1",
    name: "John Doe",
    bio: "Tech writer",
    avatar: "/avatars/john.jpg",
  },
  {
    id: "2",
    name: "Jane Smith",
    bio: "React expert",
    avatar: "/avatars/jane.jpg",
  },
];

const posts: Post[] = [
  {
    id: "1",
    title: "Getting Started with Next.js",
    content:
      "Next.js is a React framework that enables server-side rendering and static site generation. It helps you build fast, SEO-friendly applications.",
    author: "1",
    date: "2026-03-01",
    tags: ["nextjs", "react"],
    readTime: 5,
  },
  {
    id: "2",
    title: "Why SSG is Great for Blogs",
    content:
      "Static Site Generation works very well for blogs because content does not change on every request. Pages are built ahead of time and load very fast.",
    author: "2",
    date: "2026-03-02",
    tags: ["ssg", "blog", "performance"],
    readTime: 4,
  },
  {
    id: "3",
    title: "Understanding ISR in Next.js",
    content:
      "Incremental Static Regeneration lets static pages update after deployment. You get the performance of static pages with fresher data over time.",
    author: "1",
    date: "2026-03-03",
    tags: ["isr", "nextjs"],
    readTime: 6,
  },
];

export async function getAllPosts(): Promise<Post[]> {
  return posts;
}

export async function getPostById(id: string): Promise<Post | undefined> {
  return posts.find((p) => p.id === id);
}

export async function getAuthorById(id: string): Promise<Author | undefined> {
  return authors.find((a) => a.id === id);
}