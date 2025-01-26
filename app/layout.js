import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "./utils/theme-provider";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";
import { GoogleAnalytics } from "@next/third-parties/google";

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

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning="true" className="scroll-smooth">
      <GoogleAnalytics gaId="G-DGCP7WB1DX" />
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
