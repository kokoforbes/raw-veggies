import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const faro = localFont({
  src: [
    {
      path: "../public/fonts/faro/Faro-LightLucky.woff2",
      weight: "300",
    },
    {
      path: "../public/fonts/faro/Faro-RegularLucky.woff2",
      weight: "400",
    },
    {
      path: "../public/fonts/faro/Faro-BoldLucky.woff2",
      weight: "700",
    },
  ],
  display: "swap",
  variable: "--font-faro",
});

const grotesk = localFont({
  src: "../public/fonts/grotesk/5a5c2865c8fa7a166d94d0880ca9eebc.woff2",
  display: "swap",
  variable: "--font-grotesk",
});

export const metadata: Metadata = {
  title: "Raw Veggies",
  description: "raw vegetables",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${faro.variable} font-sans ${grotesk.variable} font-mono`}
      >
        {children}
      </body>
    </html>
  );
}
