import "@bedrock-layout/css/lib/reset.min.css";
import "@bedrock-layout/css";
import "open-props/style";
import "./globals.css";

import { Analytics } from "@vercel/analytics/react";
import BreadCrumbs from "./BreadCrumbs";
import { CSSProperties } from "react";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sanktaj Libroj",
  description:
    "Sanktaj Libroj de La Eklezio de Jesuo Kristo de la Sanktuloj de la Lastaj Tagoj",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        data-bedrock-center
        style={{ "--maxWidth": "var(--size-content-3)" } as CSSProperties}
      >
        <BreadCrumbs />
        {children}
      </body>
      <Analytics />
    </html>
  );
}
