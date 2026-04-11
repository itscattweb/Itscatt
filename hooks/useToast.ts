import { useState } from "react";

type Toast = { msg: string; ok: boolean };

export function useToast() {
  const [toast, setToast] = useState<Toast | null>(null);

  const showToast = (msg: string, ok = true) => {
    setToast({ msg, ok });
    setTimeout(() => setToast(null), 3000);
  };

  return { toast, showToast };
}