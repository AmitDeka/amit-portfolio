import { FileText, Github, Linkedin, Mail, Menu } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button, buttonVariants } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

const navbarItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Blog",
    href: "/",
  },
  {
    name: "Contact",
    href: "/",
  },
];

const Navbar = () => {
  return (
    <div className="mx-4 mt-4 sticky top-4 z-50">
      <div className="container border mx-auto max-w-screen-lg px-2 py-2 rounded-full font-lato bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-foreground/10 dark:border-foreground/20 ">
        <nav className="hidden justify-between lg:flex">
          <div className="flex items-center w-[156px]">
            <div className="flex items-center gap-2">
              <div className="h-12 w-12 bg-primary text-white rounded-full flex justify-center items-center">
                <Link href="/" className="text-xl font-semibold font-playfairD">
                  AD
                </Link>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {navbarItems.map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                className="text-foreground/70 text-base">
                <Link href={item.href}>{item.name}</Link>
              </Button>
            ))}
          </div>
          <div className="flex items-center gap-1">
            <ThemeToggle />
            <Button variant="ghost" size="icon" className="rounded-full">
              <Link href="https://github.com/AmitDeka" target="_blank">
                <Github className="size-4" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Link
                href="https://www.linkedin.com/in/amit-deka/"
                target="_blank">
                <Linkedin className="size-4" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Link href="mailto:amitdeka49@gmail.com">
                <Mail className="size-4" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <a href="/a.txt" download="a.txt">
                <FileText className="size-4" />
              </a>
            </Button>
          </div>
        </nav>
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-12 w-12 bg-primary text-white rounded-full flex justify-center items-center">
                <Link href="/" className="text-xl font-semibold font-playfairD">
                  AD
                </Link>
              </div>
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <div className="flex items-center gap-2">
                      <div className="h-12 w-12 bg-primary text-white rounded-full flex justify-center items-center">
                        <Link
                          href="/"
                          className="text-xl font-semibold font-playfairD">
                          AD
                        </Link>
                      </div>
                    </div>
                  </SheetTitle>
                </SheetHeader>
                <div className="mb-8 mt-8 flex flex-col gap-4">
                  {navbarItems.map((item, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      className="text-foreground/70 text-base justify-start">
                      <Link href={item.href}>{item.name}</Link>
                    </Button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
