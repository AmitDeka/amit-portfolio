import { FileText, Github, Linkedin, Mail } from "lucide-react";

// import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HeroOrbitingCircles } from "./ui/hero-orbit";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24">
      <div className="container max-w-screen-lg mx-auto px-4">
        <div className="grid items-center gap-2 md:gap-4 lg:gap-6 md:grid-cols-2">
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <h1 className="my-4 text-pretty text-4xl font-playfairD font-bold lg:text-5xl">
              Hi, I'm Amit Deka
              <span className="animate-rotate inline-block">👋</span>
            </h1>
            <p className="mb-6 font-lato max-w-xl text-base text-foreground/60 lg:text-xl">
              I’m a Front-End Web Developer with a passion for creating modern,
              user-friendly websites. I love turning ideas into digital
              experiences that work beautifully.
            </p>
            <div className="flex w-full justify-center gap-2 flex-row md:justify-start">
              <Button variant="outline" size="icon">
                <Link
                  href="https://github.com/AmitDeka"
                  className="w-full h-full flex items-center justify-center"
                  target="_blank">
                  <Github className="!size-4" />
                </Link>
              </Button>
              <Button variant="outline" size="icon">
                <Link
                  href="https://www.linkedin.com/in/amit-deka/"
                  className="w-full h-full flex items-center justify-center"
                  target="_blank">
                  <Linkedin className="!size-4" />
                </Link>
              </Button>
              <Button variant="outline" size="icon">
                <Link
                  href="mailto:amitdeka49@gmail.com"
                  className="w-full h-full flex items-center justify-center">
                  <Mail className="!size-4" />
                </Link>
              </Button>
              <Button variant="outline" size="icon">
                <a
                  href="/a.txt"
                  download="a.txt"
                  className="w-full h-full flex items-center justify-center">
                  <FileText className="!size-4" />
                </a>
              </Button>
            </div>
          </div>
          <HeroOrbitingCircles />
        </div>
      </div>
    </section>
  );
};

export default Hero;
