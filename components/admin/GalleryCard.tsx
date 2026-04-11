import { DeleteButton } from "./DeleteButton";
import type { GalleryImage } from "@/types/admin";

type GalleryCardProps = {
  image: GalleryImage;
  onDelete: (image: GalleryImage) => void;
};

export function GalleryCard({ image, onDelete }: GalleryCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-blue-100 bg-blue-50">
      <img
        src={image.src}
        alt={image.title}
        className="h-36 w-full object-cover"
      />
      <div className="p-3">
        <p className="truncate text-xs font-semibold text-slate-700">
          {image.title}
        </p>
        <p className="text-[10px] text-slate-400">
          {image.category} · {image.span}
        </p>
      </div>
      <DeleteButton onClick={() => onDelete(image)} />
    </div>
  );
}