import AboutSection from "@/components/about";
import ContactMe from "@/components/contact";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import SEO from "./utils/seo";

export default function Home() {
  return (
    <>
      <SEO
        title="Home"
        keywords="home"
        description="Explore the portfolio of Amit Deka, a versatile Web Developer and UI/UX Designer. Crafting user-friendly, efficient, and creative solutions for the web."
        image="https://raw.githubusercontent.com/AmitDeka/amit-portfolio/refs/heads/main/public/home.png"
        slug="/"
      />
      <main>
        <Hero />
        <AboutSection />
        <Projects />
        <ContactMe />
      </main>
    </>
  );
}
