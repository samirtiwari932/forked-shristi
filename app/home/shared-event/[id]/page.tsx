import type { Metadata } from "next";
import ShareRedirect from "../../../share/ShareRedirect";

export const dynamic = "force-dynamic";

const API_BASE_URL = "https://api.shristiuniverse.com";
const REACT_APP_URL = "https://shristiuniverse.com";

interface EventSharePageProps {
  params: Promise<{ id: string }>;
}

async function getEventMetadata(id: string) {
  if (!id) return null;

  const url = `${API_BASE_URL}/v1/post/${id}/metadata`;

  try {
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) return null;
    const data = await res.json();
    return data;
  } catch {
    return null;
  }
}

export async function generateMetadata({
  params,
}: EventSharePageProps): Promise<Metadata> {
  const { id } = await params;
  const data = await getEventMetadata(id);

  const title = data?.title || "Srishti Universe";
  const description =
    data?.description ||
    "Connect generations, preserve stories, and celebrate your roots.";
  const image = data?.image || `${REACT_APP_URL}/assets/images/family.png`;
  const url = `${REACT_APP_URL}/home/shared-event/${id}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      url,
      siteName: "Srishti Universe",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default async function SharedEventPage({ params }: EventSharePageProps) {
  const { id } = await params;
  const redirectUrl = `${REACT_APP_URL}/home/shared-event/${id}`;
  return <ShareRedirect redirectUrl={redirectUrl} />;
}
