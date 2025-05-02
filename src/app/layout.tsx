import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";

const roboto = Roboto({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "uTeach",
  description: "We teach students worldwide",
  keywords: ["learning", "education", "students", "courses"],
  authors: [
    {
      name: "uTeach",
      url: "https://uteach.com",
    },
  ],
  creator: "uTeach",
  publisher: "uTeach",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-96x96.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
