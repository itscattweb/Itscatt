"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    // Don't check auth on the login page itself
    if (pathname === "/admin/login") {
      setChecking(false);
      return;
    }

    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        router.replace("/admin/login");
      } else {
        setChecking(false);
      }
    });
  }, [pathname]);

  if (checking && pathname !== "/admin/login") {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-sm text-slate-400 uppercase tracking-widest">Checking access...</div>
      </div>
    );
  }

  return <>{children}</>;
}