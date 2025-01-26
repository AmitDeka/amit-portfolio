function SEO({ title, keywords, description, image, slug }) {
  return (
    <>
      {/* Basic Metadata  */}
      <title>{`${title} | Amit Deka - Web Developer & Designer`}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content={`${keywords}, Web Developer, UI/UX Designer, Full-Stack Developer, Next.js Portfolio, React Developer, Freelance Developer, Web Design, JavaScript Development`}
      />
      <meta name="author" content="Amit Deka" />
      <meta name="creator" content="Amit Deka" />
      <meta name="publisher" content="Amit Deka" />

      {/* Open Graph Metadata */}
      <meta
        property="og:title"
        content={`${title} | Amit Deka - Web Developer & Designer`}
      />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`https://www.amitdeka.work${slug}`} />
      <meta property="og:site_name" content="Amit Deka Portfolio" />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="628" />
      <meta property="og:image:alt" content="Amit Deka Portfolio Preview" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />

      {/* Twitter Metadata */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content={`${title} | Amit Deka - Web Developer & Designer`}
      />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:site" content="@AmitDeka10" />
      <meta name="twitter:creator" content="@AmitDeka10" />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content="Amit Deka Portfolio Preview" />
    </>
  );
}
export default SEO;

// https://www.amitdeka.work

// Amit Deka - Web Developer & Designer

// Discover Amit Deka's portfolio - a skilled Web Developer and UI/UX Designer. Specializing in front-end and back-end development, offering creative and functional web solutions.
//
// Visit Amit Deka's portfolio to explore innovative web solutions, UI/UX designs, and expertise in Android development.

//

//
