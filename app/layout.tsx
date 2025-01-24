import type { Metadata } from "next";
import { DM_Sans, Inter, Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Head from "next/head";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
});

const dm_sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.transparencegovfoundation.org"),

  title:
    "Transparence Governance Foundation | Promoting Transparency in Governance",
  description:
    "Transparence Governance Foundation is dedicated to promoting transparency, accountability, and ethical practices in governance. Join us in building a more transparent future.",
  keywords: [
    "transparency",
    "transparent",
    "governance",
    "accountability",
    "ethics",
    "public policy",
    "democracy",
    "civic engagement",
    "good governance",
    "anti-corruption",
    "public transparency",
    "democratic reform",
    "policy advocacy",
    "transparencegovfoundation",
    "transparencegovernancefoundation",
    "transparentgovfoundation",
    "ngo",
    "foundation",
  ],
  authors: [
    { name: "Transparent Governance Foundation" },
    { name: "Ayodeji Atanda" },
  ],
  publisher: "Transparent Governance Foundation",
  openGraph: {
    title: "Transparence Governance Foundation",
    description: "Promoting transparency and accountability in governance",
    type: "website",
    locale: "en_US",
    siteName: "Transparent Governance Foundation",
    images: [
      {
        url: "/IMG_8356.PNG",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "Transparent Governance Foundation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Transparence Governance Foundation",
    description: "Promoting transparency and accountability in governance",
    creator: "@dejixice",
    images: ["/image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  verification: {
    google: "YOUR-GOOGLE-VERIFICATION-CODE",
  },
  icons: [
    {
      rel: "icon",
      url: "/favicon.ico",
      sizes: "any",
      type: "image/x-icon",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-white">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Transparent Governance Foundation",
              url: "https://www.transparencegovfoundation.org",
              logo: "https://www.transparencegovfoundation.org/favicon.ico",
              description:
                "Promoting transparency, accountability, and ethical practices in governance.",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-123-456-7890",
                contactType: "Customer Service",
                areaServed: "US",
                availableLanguage: ["English"],
              },
              // "sameAs": [
              //   "https://www.facebook.com/yourprofile",
              //   "https://twitter.com/yourprofile",
              //   "https://www.linkedin.com/in/yourprofile"
              // ]
            }),
          }}
        />
      </Head>
      <body
        className={`${playfair.variable} ${montserrat.variable} ${dm_sans.variable} font-montserrat`}
      >
        <NavBar />
        <div className="min-h-screen mt-[4rem] lg:mt-[4rem]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
