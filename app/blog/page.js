"use client";
import { gql, GraphQLClient } from "graphql-request";
import { ArrowRight, Github, Globe2 } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { MagicCard } from "@/components/ui/magic-card";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const Blogs = () => {
  const [allBlogs, setAllBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAllBlogs = async () => {
      const client = new GraphQLClient(
        "https://ap-south-1.cdn.hygraph.com/content/cm56bxd7p035g07wepkz10imi/master"
      );
      const query = gql`
        query {
          blogs {
            id
            coverImage {
              url
            }
            slug
            title
            description
            content {
              html
            }
            blogCategory {
              categoryName
            }
          }
        }
      `;
      const data = await client.request(query);

      setAllBlogs(data.blogs);
      setIsLoading(false);
    };

    fetchAllBlogs();
  }, []);

  const { theme } = useTheme();

  return (
    <main>
      <section className="py-16 min-h-[calc(100dvh-100px)]">
        <div className="container mx-auto px-4">
          <div className="flex w-full flex-col items-center">
            <div className="flex flex-col items-center space-y-4 text-center sm:space-y-6 md:max-w-3xl md:text-center">
              <h2 className="text-3xl font-semibold font-playfairD md:text-4xl lg:text-5xl">
                Explore My Blogs
              </h2>

              <p className="text-muted-foreground font-lato text-lg md:max-w-2xl">
                A showcase of impactful creations merging innovation, design,
                and functionality.
              </p>
            </div>
          </div>
          <div className="mx-auto mt-8 grid max-w-screen-lg gap-4 md:grid-cols-2">
            {isLoading
              ? Array.from({ length: 6 }).map((_, index) => (
                  <Card
                    key={index}
                    className="grid rounded bg-background shadow-none">
                    <div className="w-full h-56 rounded overflow-hidden">
                      <Skeleton className="w-full h-full" />
                    </div>
                    <div className="grid gap-2 px-4 mt-2 mb-3">
                      <Skeleton className="w-full h-8" />
                      <Skeleton className="w-full h-12" />
                    </div>
                    <div className="flex space-x-2 px-4 mb-3">
                      {Array.from({ length: 3 }).map((_, index) => (
                        <Skeleton key={index} className="h-[25.6px] w-20" />
                      ))}
                    </div>
                    <div className="flex space-x-2 px-4 pb-4">
                      <Skeleton className="h-9 w-[103.43px]" />
                      <Skeleton className="h-9 w-[94.51px]" />
                    </div>
                  </Card>
                ))
              : allBlogs.map((blog, id) => (
                  <MagicCard
                    key={id}
                    className="grid rounded bg-background"
                    gradientColor={
                      theme === "dark" ? "#e11d48c1" : "#e11d4890"
                    }>
                    <div className="relative w-full h-56 rounded overflow-hidden">
                      <Image
                        fill
                        style={{ objectFit: "cover", objectPosition: "top" }}
                        quality={80}
                        loading="lazy"
                        src={blog.coverImage.url}
                        alt={blog.title}
                      />
                    </div>
                    <div className="grid gap-y-2 px-4 mt-4">
                      <div>
                        {blog.blogCategory.map((category, id) => (
                          <Badge
                            key={id}
                            className="bg-secondary text-xs font-lato text-foreground font-normal pointer-events-none shadow-none">
                            {category.categoryName}
                          </Badge>
                        ))}
                      </div>
                      <div className="grid gap-y-1">
                        <h3 className="text-2xl font-playfairD font-bold line-clamp-1">
                          {blog.title}
                        </h3>
                        <p className="font-lato text-lg text-foreground/70 line-clamp-2">
                          {blog.description}
                        </p>
                      </div>
                      <div className="flex space-x-2 pb-4">
                        <Button className="shadow-none" size="sm">
                          <Link
                            className="inline-flex font-normal text-sm font-lato items-center text-background dark:text-foreground"
                            href={`blog/${blog.slug}`}>
                            Read More
                            <ArrowRight className="ml-1" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </MagicCard>
                ))}
          </div>
        </div>
      </section>
    </main>
  );
};
export default Blogs;
