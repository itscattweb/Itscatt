import { DeleteButton } from "./DeleteButton";

export type HeroSlide = {
  id: number;
  image_url: string;
  order_index: number;
  created_at: string;
};

type HeroCardProps = {
  slide: HeroSlide;
  onDelete: (slide: HeroSlide) => void;
};

export function HeroCard({ slide, onDelete }: HeroCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-blue-100 bg-blue-50">
      <img
        src={slide.image_url}
        alt={`Slide ${slide.order_index}`}
        className="h-40 w-full object-cover"
      />
      <div className="p-3">
        <p className="text-[10px] text-slate-400">Order: {slide.order_index}</p>
      </div>
      <DeleteButton onClick={() => onDelete(slide)} />
    </div>
  );
}