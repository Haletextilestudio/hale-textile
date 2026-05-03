import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Hale Textile Studio. Visit our showroom, request samples, or schedule a consultation for your Hawaii interior design project.",
  alternates: { canonical: "https://haletextilestudio.com/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
