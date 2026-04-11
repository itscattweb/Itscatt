import { useState, useRef, RefObject } from "react";
import { supabase } from "@/lib/supabaseClient";
import type { GalleryImage } from "@/types/admin";

export function useGallery(showToast: (msg: string, ok?: boolean) => void) {
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
  const [gTitle, setGTitle] = useState("");
  const [gCategory, setGCategory] = useState("Students");
  const [gSpan, setGSpan] = useState("col-span-1 row-span-1");
  const [gFile, setGFile] = useState<File | null>(null);
  const [gLoading, setGLoading] = useState(false);
  const gFileRef = useRef<HTMLInputElement>(null);

  const fetchGallery = async () => {
    const { data } = await supabase
      .from("gallery_images")
      .select("*")
      .order("created_at", { ascending: false });
    if (data) setGalleryImages(data);
  };

  const uploadGallery = async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    console.log("session:", session);
    if (!gFile || !gTitle.trim())
      return showToast("Title and image required", false);
    setGLoading(true);

    const ext = gFile.name.split(".").pop();
    const path = `gallery/${Date.now()}.${ext}`;

    const { error: upErr } = await supabase.storage
      .from("gallery")
      .upload(path, gFile, { upsert: false });

    if (upErr) {
      showToast(upErr.message, false);
      setGLoading(false);
      return;
    }

    const { data: urlData } = supabase.storage
      .from("gallery")
      .getPublicUrl(path);

    const { error: dbErr } = await supabase.from("gallery_images").insert({
      src: urlData.publicUrl,
      title: gTitle.trim(),
      category: gCategory,
      span: gSpan,
    });

    if (dbErr) {
      showToast(dbErr.message, false);
    } else {
      showToast("Image uploaded!");
      setGTitle("");
      setGFile(null);
      if (gFileRef.current) gFileRef.current.value = "";
      fetchGallery();
    }

    setGLoading(false);
  };

  const deleteGallery = async (img: GalleryImage) => {
    const path = img.src.split("/gallery/")[1];
    await supabase.storage.from("gallery").remove([`gallery/${path}`]);
    await supabase.from("gallery_images").delete().eq("id", img.id);
    showToast("Deleted");
    fetchGallery();
  };

  return {
    galleryImages,
    gTitle,
    setGTitle,
    gCategory,
    setGCategory,
    gSpan,
    setGSpan,
    gFile,
    setGFile,
    gLoading,
    gFileRef: gFileRef as RefObject<HTMLInputElement>,
    fetchGallery,
    uploadGallery,
    deleteGallery,
  };
}
