import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  icons: {
    icon: "/images/icon.png",
    shortcut: "/images/icon.png",
    apple: "/images/icon.png",
  },
  title: "ITSSCAT-India | Transforming Lives Through Education",
  description:
    "Institute of Talent Search for Social Change and Transformation of India — Empowering brilliant children from marginalized families since 2011.",
  keywords: [
    "ITSSCAT",
    "education",
    "Kerala",
    "marginalized children",
    "nonprofit",
    "donate",
    "MSFS",
    "Fransalian",
  ],
  openGraph: {
    title: "ITSSCAT-India | Transforming Lives Through Education",
    description:
      "Empowering brilliant children from marginalized families since 2011.",
    url: "https://itsscatindia.org",
    siteName: "ITSSCAT-India",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${lato.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FDF6EC] text-[#2C1810]">
        {children}
      </body>
    </html>
  );
}