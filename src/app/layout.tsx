import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, Cairo, Playfair_Display, Reem_Kufi } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-playfair",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-arabic",
  display: "swap",
});

const reemKufi = Reem_Kufi({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-arabic-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dmk-curtains-est.vercel.app"),
  title: "DMK Curtains EST. | Premium Curtain & Smart Home Solutions",
  description: "Damak Curtains EST. is a leading provider of high-quality, sustainable, and smart curtain solutions across Saudi Arabia (Riyadh) and Oman (Muscat). Part of Dawn Gulf Group.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "DMK Curtains EST. | Premium Curtain & Smart Home Solutions",
    description: "Damak Curtains EST. is a leading provider of high-quality, sustainable, and smart curtain solutions across Saudi Arabia (Riyadh) and Oman (Muscat). Part of Dawn Gulf Group.",
    url: "https://dmk-curtains-est.vercel.app/",
    siteName: "DMK Curtains",
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 1024,
        alt: "DMK Curtains Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DMK Curtains EST. | Premium Curtain & Smart Home Solutions",
    description: "Damak Curtains EST. is a leading provider of high-quality, sustainable, and smart curtain solutions across Saudi Arabia (Riyadh) and Oman (Muscat). Part of Dawn Gulf Group.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${inter.variable} ${cairo.variable} ${playfair.variable} ${reemKufi.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0C0F12] text-white">
        {children}
      </body>
    </html>
  );
}
