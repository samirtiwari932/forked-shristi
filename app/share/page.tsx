import type { Metadata } from "next";
import ShareRedirect from "./ShareRedirect";

export const revalidate = 60;

const API_BASE_URL = "https://api.shristiuniverse.com";
const REACT_APP_URL = "https://shristiuniverse.com";

type ComponentType = "POST" | "HERITAGE" | "GROUP" | "FAMILYTREE" | "EVENT";

interface SharePageProps {
  searchParams: Promise<{ component?: string; id?: string }>;
}

async function getMetadata(component: ComponentType, id: string) {
  if (!id) return null;

  const endpointMap: Partial<Record<ComponentType, string>> = {
    POST: `${API_BASE_URL}/v1/post/${id}/metadata`,
    HERITAGE: `${API_BASE_URL}/v1/heritage/${id}/metadata`,
    EVENT: `${API_BASE_URL}/v1/post/${id}/metadata`,
    GROUP: `${API_BASE_URL}/v1/family/group/${id}/metadata`,
    FAMILYTREE: `${API_BASE_URL}/v1/genealogy/family-tree/${id}/metadata`,
  };

  const url = endpointMap[component];
  if (!url) return null;

  try {
    console.log(`[SharePage] Fetching: ${url}`);
    const res = await fetch(url, { next: { revalidate: 60 } });
    console.log(`[SharePage] Status: ${res.status}`);
    if (!res.ok) return null;
    const data = await res.json();
    console.log(`[SharePage] Data:`, data);
    return data;
  } catch (err) {
    console.error(`[SharePage] Error:`, err);
    return null;
  }
}

export async function generateMetadata({
  searchParams,
}: SharePageProps): Promise<Metadata> {
  const params = await searchParams;
  const component =
    (params.component?.toUpperCase() as ComponentType) || "POST";
  const id = params.id || "";

  const data = await getMetadata(component, id);

  const title = data?.title || "Srishti Universe";
  const description =
    data?.description ||
    "Connect generations, preserve stories, and celebrate your roots.";
  const image = data?.image || `${REACT_APP_URL}/assets/images/family.png`;

  const sharePageUrl = `${REACT_APP_URL}/share?component=${component.toLowerCase()}&id=${id}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      url: sharePageUrl,
      siteName: "Srishti Universe",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default async function SharePage({ searchParams }: SharePageProps) {
  const params = await searchParams;
  const component =
    (params.component?.toUpperCase() as ComponentType) || "POST";
  const id = params.id || "";

  const redirectMap: Record<ComponentType, string> = {
    POST: `${REACT_APP_URL}/home/post/${id}`,
    HERITAGE: `${REACT_APP_URL}/home/heritage/details/${id}`,
    GROUP: `${REACT_APP_URL}/home/group/${id}`,
    FAMILYTREE: `${REACT_APP_URL}/home/shared-tree/${id}`,
    EVENT: `${REACT_APP_URL}/home/shared-event/${id}`,
  };

  const redirectUrl = redirectMap[component] ?? REACT_APP_URL;

  return <ShareRedirect redirectUrl={redirectUrl} />;
}
