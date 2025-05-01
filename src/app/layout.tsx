import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>{children}</body>
    </html>
  );
}
