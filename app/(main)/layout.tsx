// app/(main)/layout.tsx
import Navbar from "@/components/header";
import Footer from "@/components/footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div className="pt-16">
        {children}
      </div>
      <Footer />
    </>
  );
}