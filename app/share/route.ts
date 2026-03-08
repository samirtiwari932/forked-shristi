import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const API_BASE_URL = "https://api.shristiuniverse.com";
const REACT_APP_URL = "https://shristiuniverse.com";

type ComponentType = "POST" | "HERITAGE" | "GROUP" | "FAMILYTREE";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const componentStr = searchParams.get("component") || "POST";
  const id = searchParams.get("id") || "";
  const component = componentStr.toUpperCase() as ComponentType;

  let apiMeta = null;
  const endpointMap: Partial<Record<ComponentType, string>> = {
    POST: `${API_BASE_URL}/v1/post/${id}/metadata`,
    HERITAGE: `${API_BASE_URL}/v1/heritage/${id}/metadata`,
  };

  const url = endpointMap[component];
  if (url && id) {
    try {
      const res = await fetch(url, { cache: "no-store" });
      if (res.ok) {
        apiMeta = await res.json();
      }
    } catch (err) {
      console.error("[ShareRoute] Error fetching metadata:", err);
    }
  }

  const title = apiMeta?.title || "Srishti Universe";
  const description =
    apiMeta?.description ||
    "Connect generations, preserve stories, and celebrate your roots.";
  const image = apiMeta?.image || `${REACT_APP_URL}/assets/images/family.png`;
  const metaUrl = apiMeta?.url || REACT_APP_URL;

  const redirectMap: Record<ComponentType, string> = {
    POST: `${REACT_APP_URL}/home/post/${id}`,
    HERITAGE: `${REACT_APP_URL}/home/heritage/details/${id}`,
    GROUP: `${REACT_APP_URL}/home/group/${id}`,
    FAMILYTREE: `${REACT_APP_URL}/home/shared-tree/${id}`,
  };

  const redirectUrl = redirectMap[component] ?? REACT_APP_URL;

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${title}</title>
    <meta name="description" content="${description}" />
    
    <!-- Open Graph Tags (crucial for social sharing) -->
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:image" content="${image}" />
    <meta property="og:url" content="${metaUrl}" />
    <meta property="og:site_name" content="Srishti Universe" />
    <meta property="og:type" content="website" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="${title}" />

    <!-- Twitter Card Tags -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <meta name="twitter:image" content="${image}" />

    <style>
      body {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        font-family: sans-serif;
        gap: 16px;
        background: #ffffff;
        margin: 0;
      }
      img {
        width: 80px;
        height: 80px;
        object-fit: contain;
      }
      p {
        color: #6b7280;
        font-size: 14px;
        margin: 0;
      }
      a {
        color: #3b82f6;
        font-size: 13px;
        text-decoration: underline;
      }
    </style>

    <script>
      // Immediately redirect standard users (crawlers ignore JS)
      setTimeout(function() {
        window.location.replace("${redirectUrl}");
      }, 100);
    </script>
</head>
<body>
    <img src="/assets/images/shristi_logo-2.png" alt="Srishti Universe" />
    <p>Redirecting you...</p>
    <a href="${redirectUrl}">Click here if you are not redirected</a>
</body>
</html>`;

  return new NextResponse(html, {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
    },
  });
}
