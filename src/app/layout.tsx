import type { Metadata } from "next";
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: "Mahjong Parlor",
  description: "Experience the Ancient Game of Strategy in a Modern Setting",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
