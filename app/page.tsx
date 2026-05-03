import type { Metadata } from "next";
import Hero from "@/components/home/Hero";

export const metadata: Metadata = {
  title: {
    absolute: "Hale Textile Studio — Premium Fabrics & Textiles for the Hawaiian Home",
  },
  description:
    "Hale Textile Studio is Hawaii's premier textile resource. Shop curated fabrics, designer wallpaper, and bespoke accessories crafted for the island interior.",
  alternates: { canonical: "https://haletextilestudio.com" },
};
import EditorialGrid from "@/components/home/EditorialGrid";
import StudioGrid from "@/components/home/StudioGrid";
import AboutTeaser from "@/components/home/AboutTeaser";
import FeaturedAccessories from "@/components/home/FeaturedAccessories";
import MailingList from "@/components/home/MailingList";

export default function HomePage() {
  return (
    <>
      <Hero />
      <EditorialGrid />
      <StudioGrid />
      <AboutTeaser />
      <FeaturedAccessories />
      <MailingList />
    </>
  );
}
