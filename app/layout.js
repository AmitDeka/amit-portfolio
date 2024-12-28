import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "./utils/theme-provider";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";

const playfair = Playfair_Display({
  variable: "--font-playfair-serif",
  preload: true,
  subsets: ["latin"],
});

const lato = Lato({
  variable: "--font-lato-serif",
  weight: ["400", "700"],
  preload: true,
  subsets: ["latin"],
});

export const metadata = {
  title: {
    template: "%s | Amit Deka",
    default: "Amit Deka",
  },
  description:
    "Hi, I am Amit Deka a Web Developer, Android Developer, UI/UX Designer. I am freelance Web Developer specialized in both front-end and back-end.",
  keywords: ["Next.js", "React", "JavaScript"],
  authors: [{ name: "Amit Deka", url: "https://nextjs.org" }],
  creator: "Amit Deka",
  publisher: "Amit Deka",
  openGraph: {
    title: "Amit Deka",
    description:
      "Hi, I am Amit Deka a Web Developer, Android Developer, UI/UX Designer. I am freelance Web Developer specialized in both front-end and back-end.",
    url: "https://nextjs.org",
    siteName: "Next.js",
    images: [
      {
        url: "https://nextjs.org/og.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "app",
    title: "Amit Deka",
    description:
      "Hi, I am Amit Deka a Web Developer, Android Developer, UI/UX Designer. I am freelance Web Developer specialized in both front-end and back-end.",
    siteId: "1467726470533754880",
    creator: "@nextjs",
    creatorId: "1467726470533754880",
    images: {
      url: "https://nextjs.org/og.png",
      alt: "Next.js Logo",
    },
    app: {
      name: "twitter_app",
      id: {
        iphone: "twitter_app://iphone",
        ipad: "twitter_app://ipad",
        googleplay: "twitter_app://googleplay",
      },
      url: {
        iphone: "https://iphone_url",
        ipad: "https://ipad_url",
      },
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning="true" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${lato.variable} antialiased`}
        suppressHydrationWarning="true">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
