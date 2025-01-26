"use client";
import { gql, GraphQLClient } from "graphql-request";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { MagicCard } from "@/components/ui/magic-card";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import SEO from "../utils/seo";

const Blogs = () => {
  const [allBlogs, setAllBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

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

  const totalPages = Math.ceil(allBlogs.length / itemsPerPage);

  const currentBlogs = allBlogs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (direction) => {
    setCurrentPage((prevPage) =>
      direction === "next"
        ? Math.min(prevPage + 1, totalPages)
        : Math.max(prevPage - 1, 1)
    );
  };

  return (
    <>
      <SEO
        title="Blogs"
        keywords="blogs"
        description="Explore the portfolio of Amit Deka, a versatile Web Developer and UI/UX Designer. Crafting user-friendly, efficient, and creative solutions for the web."
        image="https://raw.githubusercontent.com/AmitDeka/amit-portfolio/refs/heads/main/public/home.png"
        slug="/blog"
      />
      <main>
        <section className="py-16 min-h-[calc(100dvh-100px)]">
          <div className="container mx-auto px-4">
            <div className="flex w-full flex-col items-center">
              <div className="flex flex-col items-center space-y-4 text-center sm:space-y-6 md:max-w-3xl md:text-center">
                <h2 className="text-3xl font-semibold font-playfairD md:text-4xl lg:text-5xl">
                  Discover Insights & Innovations
                </h2>

                <p className="text-muted-foreground font-lato text-lg md:max-w-2xl">
                  Explore a curated collection of articles spanning web
                  development, design, technology, and programming.
                </p>
              </div>
            </div>
            <div className="mx-auto mt-8 grid max-w-screen-lg gap-4 md:grid-cols-2 lg:grid-cols-3">
              {isLoading
                ? Array.from({ length: itemsPerPage }).map((_, index) => (
                    <Card
                      key={index}
                      className="grid rounded bg-background shadow-none">
                      <div className="w-full h-56 rounded overflow-hidden">
                        <Skeleton className="w-full h-full" />
                      </div>
                      <div className="grid gap-y-2 px-4 mt-4">
                        <div>
                          <Skeleton className="h-6 w-[120px] rounded-md" />
                        </div>
                        <div className="grid gap-y-1">
                          <Skeleton className="w-full h-8" />
                          <Skeleton className="w-full h-12" />
                        </div>
                        <div className="pb-4">
                          <Skeleton className="h-8 w-[111.63px]" />
                        </div>
                      </div>
                    </Card>
                  ))
                : currentBlogs.map((blog, id) => (
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
                          <p className="font-lato text-base text-foreground/70 line-clamp-2 h-12">
                            {blog.description}
                          </p>
                        </div>
                        <div className="pb-4">
                          <Button className="shadow-none" size="default">
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
            {allBlogs.length > itemsPerPage && (
              <>
                <div className="flex justify-center mt-12 space-x-2">
                  <Button
                    size="sm"
                    disabled={currentPage === 1}
                    onClick={() => handlePageChange("prev")}>
                    <ChevronLeft className="w-4 h-4" />
                    Previous
                  </Button>
                  <Button
                    size="sm"
                    disabled={currentPage === totalPages}
                    onClick={() => handlePageChange("next")}>
                    Next
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
                <div className="text-center mt-3">
                  <p className="text-muted-foreground/80 text-sm">
                    Page {currentPage} of {totalPages}
                  </p>
                </div>
              </>
            )}
          </div>
        </section>
      </main>
    </>
  );
};
export default Blogs;
