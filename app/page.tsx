// app/page.tsx
import type { Metadata } from "next";
import Landing from "@/components/Landing/Landing";

export const metadata: Metadata = {
  title: "Srishti Universe - Family Tree & Heritage Preservation",
  description:
    "Build your family tree, preserve heritage, plan events and manage family finances in one place.",
  openGraph: {
    title: "Srishti Universe",
    description:
      "Connect generations, preserve stories, and celebrate your roots.",
    images: "/assets/images/family.png",
  },
};


export default function Home() {
  return <Landing />;
}
