import TextRevealByWord from "./ui/text-reveal";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="z-10 flex min-h-[100dvh] font-playfairD items-center justify-center">
      <TextRevealByWord text="I create seamless, responsive web experiences that combine elegant design, intuitive functionality, and modern technology." />
    </section>
  );
};
export default AboutSection;
