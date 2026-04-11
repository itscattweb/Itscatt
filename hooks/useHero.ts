import { useState, useRef, RefObject } from "react";
import { supabase } from "@/lib/supabaseClient";
import type { HeroSlide } from "@/types/admin";

export function useHero(showToast: (msg: string, ok?: boolean) => void) {
  const [heroSlides, setHeroSlides] = useState<HeroSlide[]>([]);
  const [hFile, setHFile] = useState<File | null>(null);
  const [hOrder, setHOrder] = useState(0);
  const [hLoading, setHLoading] = useState(false);
  const hFileRef = useRef<HTMLInputElement>(null);

  const fetchHero = async () => {
    const { data } = await supabase
      .from("hero_slides")
      .select("*")
      .order("order_index", { ascending: true });
    if (data) setHeroSlides(data);
  };

  const uploadHero = async () => {
    if (!hFile) return showToast("Image required", false);
    setHLoading(true);

    const ext = hFile.name.split(".").pop();
    const path = `slides/${Date.now()}.${ext}`;

    const { error: upErr } = await supabase.storage
      .from("hero-images")
      .upload(path, hFile, { upsert: false });

    if (upErr) {
      showToast(upErr.message, false);
      setHLoading(false);
      return;
    }

    const { data: urlData } = supabase.storage
      .from("hero-images")
      .getPublicUrl(path);

    const { error: dbErr } = await supabase.from("hero_slides").insert({
      image_url: urlData.publicUrl,
      order_index: hOrder,
    });

    if (dbErr) {
      showToast(dbErr.message, false);
    } else {
      showToast("Slide uploaded!");
      setHFile(null);
      setHOrder(0);
      if (hFileRef.current) hFileRef.current.value = "";
      fetchHero();
    }

    setHLoading(false);
  };

  const deleteHero = async (slide: HeroSlide) => {
    const path = slide.image_url.split("/hero-images/")[1];
    await supabase.storage.from("hero-images").remove([path]);
    await supabase.from("hero_slides").delete().eq("id", slide.id);
    showToast("Deleted");
    fetchHero();
  };

 return {
    heroSlides,
    hFile, setHFile,
    hOrder, setHOrder,
    hLoading,
    hFileRef: hFileRef as RefObject<HTMLInputElement>, 
    fetchHero,
    uploadHero,
    deleteHero,
  };
}