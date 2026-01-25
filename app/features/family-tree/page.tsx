
import { Metadata } from "next";
import FamilyTreeContent from "./FamilyTreeContent";

export const metadata: Metadata = {
  title: "Family Tree Builder — Your Legacy Starts Here | Shristi Universe",
  description:
    "Create your family and community trees with Shristi Universe. Preserve family history, document genealogy, connect generations, and protect your legacy online.",
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
    title: "Family Tree Builder — Your Legacy Starts Here | Shristi Universe",
    description:
      "Create your family and community trees with Shristi Universe. Preserve family history, document genealogy, connect generations, and protect your legacy online.",
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
    title: "Family Tree Builder — Your Legacy Starts Here",
    description:
      "Create your family and community trees with Shristi Universe. Preserve family history, document genealogy, connect generations, and protect your legacy online.",
    images: ["/assets/images/Familytree.jpg"],
  },
};

export default function FamilyTreePage() {
  return <FamilyTreeContent />;
}
