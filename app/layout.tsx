import "@bedrock-layout/css/lib/reset.min.css";
import "@bedrock-layout/css";
import "open-props/style";
import "./globals.css";

import { Analytics } from "@vercel/analytics/react";
import AppShell from "./AppShell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sanktaj Libroj",
  description: "Sanktaj Libroj de La Eklezio de Jesuo Kristo de la Sanktuloj de la Lastaj Tagoj",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppShell>{children}</AppShell>
      </body>
      <Analytics />
    </html>
  );
}
