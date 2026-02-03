"use client";

import { usePathname } from "next/navigation";
import { FileText, Github, Linkedin, Mail, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
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
    href: "/#about",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Contact",
    href: "/#contact",
  },
];

const Navbar = () => {
  const pathname = usePathname();

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
              <a
                key={index}
                href={item.href}
                className={cn(
                  "text-foreground/70 text-base",
                  buttonVariants({
                    variant: "ghost",
                  })
                )}>
                {item.name}
              </a>
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
              <a href="/Amit_Deka_CV_3jan26.pdf" download="Amit_Deka_CV_3jan26.pdf">
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
            <div>
              <ThemeToggle />
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Menu className="h-6 w-6" />
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
                    <SheetDescription>
                      <p className="sr-only">Navigation menu</p>
                    </SheetDescription>
                  </SheetHeader>
                  <div className="mb-4 mt-4 flex flex-col gap-4">
                    {navbarItems.map((item, index) => (
                      <a
                        key={index}
                        className={cn(
                          "text-foreground/70 ps-4 text-base !justify-start",
                          buttonVariants({
                            variant: "ghost",
                          })
                        )}
                        href={item.href}>
                        {item.name}
                      </a>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
