import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { ScrollProvider } from "@/providers/ScrollProvider";
import { GC_Palioka_Demo, PlusJarkarta_Sans } from "@/fonts";

export const metadata: Metadata = {
  title: "Agasti",
  description: "Agasti brings together luxury, nature, and thoughtful design. With premium materials, open layouts, and serene green spaces, every villa is crafted with precision to elevate your everyday living.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-8HHJ12J7YF"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8HHJ12J7YF');
          `}
        </Script>
      </head>
      <body
        className={`${GC_Palioka_Demo.variable} ${PlusJarkarta_Sans.variable} antialiased`}
      >
        <ScrollProvider>{children}</ScrollProvider>
      </body>
    </html>
  );
}
