import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Smerse",
  description: "FOR A WHEALTHIER LIFESTYLE. ANYTIME, ANYWHERE",
  metadataBase: new URL('https://smerse-one.vercel.app/'),
  openGraph: {
    images: '/meta-image.png',
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
