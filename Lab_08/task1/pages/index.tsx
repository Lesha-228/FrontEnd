import { GetStaticProps } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/api";
import { Post } from "@/types";

interface HomeProps {
  posts: Post[];
}

export default function Home({ posts }: HomeProps) {
  return (
    <main style={{ maxWidth: 800, margin: "0 auto", padding: "24px" }}>
      <h1>My Blog</h1>
      <p>This page is generated with SSG + ISR.</p>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {posts.map((post) => (
          <li
            key={post.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: 12,
              padding: 16,
              marginBottom: 16,
            }}
          >
            <Link href={`/posts/${post.id}`}>
              <h2>{post.title}</h2>
            </Link>
            <p>
              Author ID: {post.author} | {post.readTime} min read
            </p>
            <p>{post.date}</p>
            <div>
              {post.tags.map((tag) => (
                <span key={tag} style={{ marginRight: 8 }}>
                  #{tag}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts();

  return {
    props: { posts },
    revalidate: 60,
  };
};