import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../utils/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

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
    template: "%s | Amit Deka - Web Developer & Designer",
    default: "Amit Deka - Web Developer & Designer",
  },
  description:
    "Discover Amit Deka's portfolio - a skilled Web Developer and UI/UX Designer. Specializing in front-end and back-end development, offering creative and functional web solutions.",
  keywords: [
    "Web Developer",
    "UI/UX Designer",
    "Full-Stack Developer",
    "Next.js Portfolio",
    "React Developer",
    "Freelance Developer",
    "Web Design",
    "JavaScript Development",
  ],
  authors: [{ name: "Amit Deka", url: "https://www.amitdeka.work" }],
  creator: "Amit Deka",
  publisher: "Amit Deka",
  openGraph: {
    title: "Amit Deka - Web Developer & Designer",
    description:
      "Explore the portfolio of Amit Deka, a versatile Web Developer and UI/UX Designer. Crafting user-friendly, efficient, and creative solutions for the web.",
    url: "https://www.amitdeka.work",
    siteName: "Amit Deka Portfolio",
    images: [
      {
        url: "https://raw.githubusercontent.com/AmitDeka/amit-portfolio/refs/heads/main/public/home.png",
        width: 1200,
        height: 628,
        alt: "Amit Deka Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amit Deka - Web Developer & Designer",
    description:
      "Visit Amit Deka's portfolio to explore innovative web solutions, UI/UX designs, and expertise in Android development.",
    site: "@AmitDeka10",
    creator: "@AmitDeka10",
    images: [
      {
        url: "https://raw.githubusercontent.com/AmitDeka/amit-portfolio/refs/heads/main/public/home.png",
        alt: "Amit Deka Portfolio Preview",
      },
    ],
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
      </body>
    </html>
  );
}
