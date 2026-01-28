
import { Metadata } from "next";
import FamilyTreeContent from "./FamilyTreeContent";

export const metadata: Metadata = {
  title: "Online Genealogy Builder | Srishti Universe",
  description:
    "Preserve family history, document genealogy, connect generations, and protect your legacy online creating genealogy trees using Srishti Universe.",
  keywords: [
    "family tree builder",
    "genealogy software",
    "ancestry",
    "family history",
    "heritage preservation",
    "community tree",
    "Srishti Universe",
  ],
  openGraph: {
    title: "Online Genealogy Builder | Srishti Universe",
    description:
      "Preserve family history, document genealogy, connect generations, and protect your legacy online creating genealogy trees using Srishti Universe.",
    url: "/features/family-tree",
    siteName: "Srishti Universe",
    type: "website",
    images: [
      {
        url: "/assets/images/Familytree.jpg",
        width: 1200,
        height: 630,
        alt: "Srishti Universe Family Tree Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Genealogy Builder | Srishti Universe",
    description:
      "Preserve family history, document genealogy, connect generations, and protect your legacy online creating genealogy trees using Srishti Universe.",
    images: ["/assets/images/Familytree.jpg"],
  },
};

export default function FamilyTreePage() {
  return <FamilyTreeContent />;
}
