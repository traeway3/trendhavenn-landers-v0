// app/[slug]/page.tsx
import { getLander } from "@/lib/landers";
import Link from "next/link";

type PageProps = {
  params: { slug: string };
};

export default function LanderPage({ params }: PageProps) {
  const lander = getLander(params.slug);

  if (!lander) {
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h1>404 – Page Not Found</h1>
      </div>
    );
  }

  return (
    <main style={{ padding: "2rem", textAlign: "center" }}>
      <h1>{lander.title}</h1>
      <p>Special offer page: {lander.slug}</p>
      <Link href={lander.ctaUrl}>
        <button
          style={{
            padding: "1rem 2rem",
            fontSize: "1.2rem",
            background: "#6c47ff",
            color: "white",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            marginTop: "1rem",
          }}
        >
          Claim Offer
        </button>
      </Link>
    </main>
  );
}
