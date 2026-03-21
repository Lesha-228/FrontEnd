import { GetStaticPaths, GetStaticProps } from "next";
import { getAllPosts, getAuthorById, getPostById } from "@/lib/api";
import { Post, Author } from "@/types";

interface PostPageProps {
  post: Post;
  author: Author;
}

export default function PostPage({ post, author }: PostPageProps) {
  return (
    <main style={{ maxWidth: 800, margin: "0 auto", padding: "24px" }}>
      <article>
        <h1>{post.title}</h1>
        <p>
          By {author.name} | {post.date} | {post.readTime} min read
        </p>
        <p>{author.bio}</p>
        <hr />
        <p>{post.content}</p>
        <div style={{ marginTop: 16 }}>
          {post.tags.map((tag) => (
            <span key={tag} style={{ marginRight: 8 }}>
              #{tag}
            </span>
          ))}
        </div>
      </article>
    </main>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts();

  return {
    paths: posts.map((post) => ({
      params: { id: post.id },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id as string;
  const post = await getPostById(id);

  if (!post) {
    return { notFound: true };
  }

  const author = await getAuthorById(post.author);

  if (!author) {
    return { notFound: true };
  }

  return {
    props: {
      post,
      author,
    },
    revalidate: 60,
  };
};