import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fabric Library",
  description:
    "Browse Hale Textile Studio's curated fabric library — premium upholstery, drapery, and performance fabrics selected for Hawaii's climate and interior aesthetic.",
  alternates: { canonical: "https://haletextilestudio.com/fabric-library" },
};

export default function FabricLibraryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
