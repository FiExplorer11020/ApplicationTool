import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Internship Hunt OS",
  description: "OS de recherche de stage en finance"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
