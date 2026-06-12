import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "T.B. S.r.l. | Qualità su strada",
  description: "T.B. S.r.l. - Trasporti nazionali e internazionali, logistica e servizi a temperatura controllata.",
  icons: {
    icon: [
      { 
        url: "/icon.png",
        type: "image/png",
        sizes: "32x32"
      },
    ],
  },
  verification: {
    google: "GmvHnuIjGOUgnzZZ8RR5IsHIGtsnq7BSKuFIxoPRsM8",
  },
  keywords: [
    "trasporti",
    "logistica",
    "trasporto merci",
    "trasporti internazionali",
    "trasporti nazionali",
    "TB SRL",
    "Frosinone",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
