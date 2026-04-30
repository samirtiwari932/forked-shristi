import type { Metadata } from "next";
import ShareClient from "./ShareClient";

const API_BASE_URL = "https://api.shristiuniverse.com";
const REACT_APP_URL = "https://shristiuniverse.com";

type ComponentType = "POST" | "HERITAGE" | "GROUP" | "FAMILYTREE" | "EVENT";

const CONTENT_TYPE_MAP: Record<ComponentType, string> = {
  POST: "POST",
  HERITAGE: "HERITAGE",
  EVENT: "EVENT",
  GROUP: "family-group",
  FAMILYTREE: "FAMILY_TREE",
};

const REDIRECT_MAP: Record<ComponentType, string> = {
  POST: `${REACT_APP_URL}/home/post/`,
  HERITAGE: `${REACT_APP_URL}/home/heritage/details/`,
  GROUP: `${REACT_APP_URL}/home/group/`,
  FAMILYTREE: `${REACT_APP_URL}/home/shared-tree/`,
  EVENT: `${REACT_APP_URL}/home/shared-event/`,
};

async function getMetadata(component: ComponentType, id: string) {
  if (!id) return null;
  const contentType = CONTENT_TYPE_MAP[component];
  if (!contentType) return null;

  const url = `${API_BASE_URL}/v1/share/${contentType}/${id}/metadata`;
  try {
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) return null;
    return await res.json();
  } catch (err) {
    console.error("Server-side fetch error:", err);
    return null;
  }
}

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}): Promise<Metadata> {
  const params = await searchParams;
  const component =
    (params.component?.toString().toUpperCase() as ComponentType) || "POST";
  const id = params.id?.toString() || "";

  const metadata = await getMetadata(component, id);

  if (!metadata) {
    return {
      title: "Shristi Universe",
      description: "Sharing memories and heritage",
    };
  }

  return {
    title: metadata.title || "Shristi Universe",
    description: metadata.description || "Sharing memories and heritage",
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      images: metadata.image ? [metadata.image] : [],
      url: `https://shristiuniverse.com/share?component=${component}&id=${id}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: metadata.title,
      description: metadata.description,
      images: metadata.image ? [metadata.image] : [],
    },
  };
}

export default async function SharePage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const component =
    (params.component?.toString().toUpperCase() as ComponentType) || "POST";
  const id = params.id?.toString() || "";

  const metadata = await getMetadata(component, id);
  const redirectUrl = `${REDIRECT_MAP[component] ?? REACT_APP_URL}${id}`;

  return <ShareClient redirectUrl={redirectUrl} metadata={metadata} />;
}
