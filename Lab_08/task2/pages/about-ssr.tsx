import { GetServerSideProps } from "next";

interface AboutSSRProps {
  generatedAt: string;
}

export default function AboutSSR({ generatedAt }: AboutSSRProps) {
  return (
    <main style={{ maxWidth: 800, margin: "0 auto", padding: "24px" }}>
      <h1>About Page (SSR)</h1>
      <p>This page is generated on every request.</p>
      <p>Generated at: {generatedAt}</p>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      generatedAt: new Date().toISOString(),
    },
  };
};