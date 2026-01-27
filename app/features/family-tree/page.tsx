
import { Metadata } from "next";
import FamilyTreeContent from "./FamilyTreeContent";

export const metadata: Metadata = {
  title: "Online Genealogy Builder | Shristi Universe",
  description:
    "Preserve family history, document genealogy, connect generations, and protect your legacy online creating genealogy trees using Shristi Universe.",
  keywords: [
    "family tree builder",
    "genealogy software",
    "ancestry",
    "family history",
    "heritage preservation",
    "community tree",
    "Shristi Universe",
  ],
  openGraph: {
    title: "Online Genealogy Builder | Shristi Universe",
    description:
      "Preserve family history, document genealogy, connect generations, and protect your legacy online creating genealogy trees using Shristi Universe.",
    url: "/features/family-tree",
    siteName: "Shristi Universe",
    type: "website",
    images: [
      {
        url: "/assets/images/Familytree.jpg",
        width: 1200,
        height: 630,
        alt: "Shristi Universe Family Tree Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Genealogy Builder | Shristi Universe",
    description:
      "Preserve family history, document genealogy, connect generations, and protect your legacy online creating genealogy trees using Shristi Universe.",
    images: ["/assets/images/Familytree.jpg"],
  },
};

export default function FamilyTreePage() {
  return <FamilyTreeContent />;
}
