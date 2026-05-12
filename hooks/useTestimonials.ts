import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

type Testimonial = {
  id: number;
  name: string;
  center: string;
  grade: string;
  achievement: string;
  quote: string;
  photo_url: string | null;
  is_active: boolean;
  display_order: number;
};

type ShowToast = (msg: string, ok: boolean) => void;

export function useTestimonials(showToast: ShowToast) {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  // Form fields
  const [tName, setTName] = useState("");
  const [tCenter, setTCenter] = useState("");
  const [tGrade, setTGrade] = useState("");
  const [tAchievement, setTAchievement] = useState("");
  const [tQuote, setTQuote] = useState("");
  const [tOrder, setTOrder] = useState(0);
  const [tFile, setTFile] = useState<File | null>(null);
  const [tLoading, setTLoading] = useState(false);

  // Used as key on <input type="file"> to reset it without a ref
  const [tFileKey, setTFileKey] = useState(0);

  // ── Fetch all rows (admin sees all, including hidden) ──────────────────────
  async function fetchTestimonials() {
    const { data, error } = await supabase
      .from("testimonials")
      .select("*")
      .order("display_order", { ascending: true });

    if (error) {
      showToast("Failed to load testimonials.", false);
    } else {
      setTestimonials(data ?? []);
    }
  }

  // ── Upload photo to Supabase Storage ───────────────────────────────────────
  async function uploadPhoto(file: File): Promise<string | null> {
    const ext = file.name.split(".").pop();
    const fileName = `testimonials/${Date.now()}.${ext}`;

    const { error } = await supabase.storage
      .from("media")               // ← change bucket name if different
      .upload(fileName, file, { upsert: false });

    if (error) {
      showToast("Photo upload failed: " + error.message, false);
      return null;
    }

    const { data } = supabase.storage.from("media").getPublicUrl(fileName);
    return data.publicUrl;
  }

  // ── Add testimonial ────────────────────────────────────────────────────────
  async function addTestimonial() {
    if (!tName || !tCenter || !tGrade || !tAchievement || !tQuote) {
      showToast("Please fill in all required fields.", false);
      return;
    }

    setTLoading(true);

    let photo_url: string | null = null;
    if (tFile) {
      photo_url = await uploadPhoto(tFile);
      if (!photo_url) { setTLoading(false); return; }
    }

    const { error } = await supabase.from("testimonials").insert({
      name: tName.trim(),
      center: tCenter.trim(),
      grade: tGrade.trim(),
      achievement: tAchievement.trim(),
      quote: tQuote.trim(),
      photo_url,
      display_order: tOrder,
      is_active: true,
    });

    if (error) {
      showToast("Failed to add testimonial.", false);
    } else {
      showToast("Testimonial added!", true);
      // Reset all fields
      setTName("");
      setTCenter("");
      setTGrade("");
      setTAchievement("");
      setTQuote("");
      setTOrder(0);
      setTFile(null);
      setTFileKey((k) => k + 1); // resets the file input via key change
      await fetchTestimonials();
    }

    setTLoading(false);
  }

  // ── Toggle is_active ───────────────────────────────────────────────────────
  async function toggleActive(id: number, current: boolean) {
    const { error } = await supabase
      .from("testimonials")
      .update({ is_active: !current })
      .eq("id", id);

    if (error) {
      showToast("Update failed.", false);
    } else {
      showToast(current ? "Hidden from site." : "Now visible on site.", true);
      await fetchTestimonials();
    }
  }

  // ── Delete ─────────────────────────────────────────────────────────────────
  async function deleteTestimonial(id: number, photoUrl: string | null) {
    if (photoUrl) {
      const path = photoUrl.split("/storage/v1/object/public/media/")[1];
      if (path) await supabase.storage.from("media").remove([path]);
    }

    const { error } = await supabase.from("testimonials").delete().eq("id", id);

    if (error) {
      showToast("Delete failed.", false);
    } else {
      showToast("Testimonial deleted.", true);
      await fetchTestimonials();
    }
  }

  return {
    testimonials,
    tName, setTName,
    tCenter, setTCenter,
    tGrade, setTGrade,
    tAchievement, setTAchievement,
    tQuote, setTQuote,
    tOrder, setTOrder,
    setTFile,
    tFileKey,
    tLoading,
    fetchTestimonials,
    addTestimonial,
    toggleActive,
    deleteTestimonial,
  };
}