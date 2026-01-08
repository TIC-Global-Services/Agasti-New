import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Agasti",
  description: "Crafting luxury villas since 2018. From lush landscapes to world-class amenities, each home reflects precision, elegance, and timeless craftsmanship.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}