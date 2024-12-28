import AboutSection from "@/components/about";
import ContactMe from "@/components/contact";
import Hero from "@/components/hero";
import Projects from "@/components/projects";

export const metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <Projects />
      <ContactMe />
    </main>
  );
}
