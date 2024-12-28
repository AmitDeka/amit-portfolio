"use client";
import { gql, GraphQLClient } from "graphql-request";
import { Github, Globe2 } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { MagicCard } from "@/components/ui/magic-card";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      const client = new GraphQLClient(
        "https://ap-south-1.cdn.hygraph.com/content/cm56bxd7p035g07wepkz10imi/master"
      );
      const query = gql`
        query {
          projects {
            thumbnail {
              url
            }
            title
            description
            tags
            link {
              projectSource
              projectWebsite
            }
          }
        }
      `;
      const data = await client.request(query);

      setProjects(data.projects);
      setIsLoading(false);
    };

    fetchProjects();
  }, []);
  const { theme } = useTheme();
  return (
    <main>
      <section className="py-16 min-h-[calc(100dvh-100px)]">
        <div className="container mx-auto px-4">
          <div className="flex w-full flex-col items-center">
            <div className="flex flex-col items-center space-y-4 text-center sm:space-y-6 md:max-w-3xl md:text-center">
              <h2 className="text-3xl font-semibold font-playfairD md:text-4xl lg:text-5xl">
                Explore My Projects
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
              : projects.map((project, id) => (
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
                        quality={100}
                        loading="lazy"
                        src={project.thumbnail.url}
                        alt={project.title}
                      />
                    </div>
                    <div className="grid gap-2 px-4 mt-2 mb-3">
                      <h4 className="text-2xl font-playfairD font-bold line-clamp-1">
                        {project.title}
                      </h4>
                      <p className="font-lato text-foreground/70 line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                    <div className="flex space-x-2 px-4 mb-3">
                      {project.tags.map((tag, id) => (
                        <Badge
                          key={id}
                          className="bg-secondary text-sm font-lato text-foreground font-normal pointer-events-none shadow-none">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex space-x-2 px-4 pb-4">
                      {project.link.projectSource && (
                        <Button className="shadow-none">
                          <Link
                            className="inline-flex font-normal font-lato items-center text-background dark:text-foreground"
                            href={project.link.projectSource}
                            target="_blank">
                            <Github className="mr-1" />
                            Source
                          </Link>
                        </Button>
                      )}
                      {project.link.projectWebsite && (
                        <Button className="shadow-none">
                          <Link
                            className="inline-flex font-normal font-lato items-center text-background dark:text-foreground"
                            href={project.link.projectWebsite}
                            target="_blank">
                            <Globe2 className="mr-1" />
                            Website
                          </Link>
                        </Button>
                      )}
                    </div>
                  </MagicCard>
                ))}
          </div>
        </div>
      </section>
    </main>
  );
};
export default Projects;
