// app/gallery/page.tsx
import GalleryHero from "@/components/gallery/GalleryHero";
import GalleryCarousel from "@/components/gallery/GalleryCarousel";
import GalleryGrid from "@/components/gallery/GalleryGrid";

export default function GalleryPage() {
  return (
    <main className="bg-white">
      <GalleryHero />
      <GalleryCarousel />
      <GalleryGrid />
    </main>
  );
}