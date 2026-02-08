// app/features/family-tree/page.tsx
import { Metadata } from "next";
import HeritageComponent from "./layout";

export const metadata: Metadata = {
  title: "Heritage Sites Preservation | Srishti Universe",
  description:
    "Store, manage, and preserve family and community heritage with secure digital records, family trees, and shared histories on Srishti Universe.",
};

export default function HeritageSitesPage() {
  return <HeritageComponent />;
}
