import { GetStaticProps } from "next";

interface AboutProps {
  generatedAt: string;
}

export default function About({ generatedAt }: AboutProps) {
  return (
    <main style={{ maxWidth: 800, margin: "0 auto", padding: "24px" }}>
      <h1>About Page (SSG)</h1>
      <p>This page is generated at build time.</p>
      <p>Generated at: {generatedAt}</p>
    </main>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      generatedAt: new Date().toISOString(),
    },
    revalidate: 60,
  };
};