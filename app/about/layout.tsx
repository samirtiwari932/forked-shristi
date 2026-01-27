import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Tree, Genealogy & Community Platform | Srishti Universe",
    description:
        "Srishti Universe is a genealogy and community platform for creating trees, preserving heritage sites, event planning and finance management.",
    openGraph: {
        title: "About - Srishti Universe",
        description:
            "Learn about Srishti Universe - a digital family heritage platform for preserving legacies, building family trees, and celebrating cultural heritage.",
        url: "/about",
        siteName: "Srishti Universe",
        type: "website",
    },
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
