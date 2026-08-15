import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteTitle =
  "Samuel Dassi - AI Engineer | Data Scientist - Recherche d'Alternance (Sept. / Oct. 2026)";
const siteDescription =
  "Portfolio de Samuel Dassi - Étudiant en Master IA à l'Université de Lille, en recherche active d'une alternance en AI Engineering ou Data Science débutant en Septembre ou Octobre 2026.";

export const metadata: Metadata = {
  title: {
    default: siteTitle,
    template: "%s | Samuel Dassi",
  },
  description: siteDescription,
  keywords: [
    "AI Engineer",
    "Data Scientist",
    "Machine Learning",
    "Deep Learning",
    "Generative AI",
    "MLOps",
    "Python",
    "Portfolio",
    "Samuel Dassi",
    "Freelance",
    "Alternance",
  ],
  authors: [{ name: "Samuel Dassi" }],
  creator: "Samuel Dassi",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    title: siteTitle,
    description: siteDescription,
    siteName: "Samuel Dassi - Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
