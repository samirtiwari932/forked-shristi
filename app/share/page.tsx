import type { Metadata } from "next";
import ShareRedirect from "./ShareRedirect";

const API_BASE_URL = "https://api.shristiuniverse.com";
const REACT_APP_URL = "https://shristiuniverse.com";

type ComponentType = "POST" | "HERITAGE" | "GROUP" | "FAMILYTREE";

interface SharePageProps {
  searchParams: Promise<{ component?: string; id?: string }>;
}

async function getMetadata(component: ComponentType, id: string) {
  if (!id) return null;

  const endpointMap: Partial<Record<ComponentType, string>> = {
    POST: `${API_BASE_URL}/v1/post/${id}/metadata`,
    HERITAGE: `${API_BASE_URL}/v1/heritage/${id}/metadata`,
  };

  const url = endpointMap[component];
  if (!url) return null;

  try {
    console.log(`[SharePage] Fetching: ${url}`);
    const res = await fetch(url, { cache: "no-store" });
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

function stripSignedParams(url: string): string {
  if (!url) return url;
  try {
    const parsed = new URL(url);
    [
      "X-Amz-Algorithm",
      "X-Amz-Credential",
      "X-Amz-Date",
      "X-Amz-Expires",
      "X-Amz-SignedHeaders",
      "X-Amz-Signature",
    ].forEach((param) => parsed.searchParams.delete(param));
    return parsed.toString();
  } catch {
    return url;
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
  const rawImage = data?.image || `${REACT_APP_URL}/assets/images/family.png`;
  const image = stripSignedParams(rawImage);
  const url = data?.url || REACT_APP_URL;

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
  };

  const redirectUrl = redirectMap[component] ?? REACT_APP_URL;

  return <ShareRedirect redirectUrl={redirectUrl} />;
}
