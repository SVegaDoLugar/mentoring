
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Asesorías de proyectos académicos",
  description: "Servicios de asesoría para proyectos académicos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        {/* Configuración del tema */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var t = localStorage.getItem('mentoring-theme');
                  if (!t) {
                    t = window.matchMedia('(prefers-color-scheme: dark)').matches
                      ? 'dark'
                      : 'light';
                  }
                  document.documentElement.setAttribute(
                    'data-theme',
                    t === 'dark' ? 'dark' : ''
                  );
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>

      <body>
        <Providers>{children}</Providers>

        {/* Google AdSense */}
        <Script
          async
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5278248568607268"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}
