const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-2 bg-secondary/70">
      <div className="container max-w-screen-xl mx-auto flex flex-col space-y-2 md:flex-row md:space-y-0 items-center justify-between px-4">
        <p className="text-muted-foreground text-sm font-lato">
          &copy; {currentYear}. All copyright reseved.
        </p>
        <p className="text-muted-foreground text-sm font-lato">
          Made with ♥️ in India
        </p>
      </div>
    </footer>
  );
};
export default Footer;
