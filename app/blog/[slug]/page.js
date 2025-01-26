import SEO from "@/app/utils/seo";
import { GraphQLClient, gql } from "graphql-request";
import { ClockIcon, FolderOpen, PenSquare } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const endpoint =
  "https://ap-south-1.cdn.hygraph.com/content/cm56bxd7p035g07wepkz10imi/master";
const graphQLClient = new GraphQLClient(endpoint);

const query = gql`
  query getBlog($slug: String!) {
    blogs(where: { slug: $slug }) {
      createdAt
      createdBy {
        name
      }
      slug
      coverImage {
        url
        height
      }
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

export async function generateStaticParams() {
  const query = gql`
    query {
      blogs {
        slug
      }
    }
  `;
  const data = await graphQLClient.request(query);

  return data.blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

async function BlogPost({ params }) {
  const { slug } = await params;

  const variables = { slug };
  const data = await graphQLClient.request(query, variables);
  const blog = data.blogs[0];
  return (
    <>
      <SEO
        title={blog.title}
        keywords={blog.blogCategory[0].categoryName}
        description={blog.description}
        image={blog.coverImage.url}
        slug={`/blog/${blog.slug}`}
      />
      <main>
        <section className="py-12 min-h-screen">
          <div className="container mx-auto px-4 max-w-screen-lg">
            <div className="grid gap-y-6">
              <div>
                <div className="flex w-full justify-between max-w-96 mx-auto mb-4">
                  <span className="text-sm hidden text-muted-foreground/80 md:inline-flex items-center space-x-[6px]">
                    <PenSquare className="w-4 h-4" />
                    <p>{blog.createdBy.name}</p>
                  </span>
                  <span className="text-sm text-muted-foreground/80 inline-flex items-center space-x-[6px]">
                    <ClockIcon className="w-4 h-4" />
                    <p>
                      {new Intl.DateTimeFormat("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      }).format(new Date(blog.createdAt))}
                    </p>
                  </span>
                  <span className="text-sm text-muted-foreground/80 inline-flex items-center space-x-[6px]">
                    <FolderOpen className="w-4 h-4" />
                    <p>{blog.blogCategory[0].categoryName}</p>
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl text-center font-bold font-playfairD lg:text-5xl">
                  {blog.title}
                </h1>
                <div className="max-w-10 mx-auto w-full mt-6">
                  <hr className="border-2 border-primary" />
                </div>
              </div>

              <p className="text-muted-foreground text-center font-lato text-lg">
                {blog.description}
              </p>

              <div className="relative w-full h-[400px]">
                <Image
                  fill
                  style={{ objectFit: "cover", objectPosition: "top" }}
                  quality={80}
                  loading="lazy"
                  src={blog.coverImage.url}
                  alt={blog.title}
                />
              </div>

              <div
                className="grid gap-y-3 prose prose-sm max-w-none"
                dangerouslySetInnerHTML={{ __html: blog.content.html }}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
export default BlogPost;
