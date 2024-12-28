"use client";
import { SendHorizontal } from "lucide-react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactMe = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        toast({
          title: "Success",
          description: "Message sent successfully!",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        console.error(result.error);
        toast({
          title: "Error",
          description: result.error || "Failed to send message.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "An error occurred. Please try again.",
        variant: "destructive",
      });
    }

    setIsSubmitting(false);
  };

  return (
    <section
      className="pt-16 md:pt-20 lg:pt-24 pb-12 md:pb-14 lg:pb-16"
      id="contact">
      <div className="container mx-auto px-4">
        <div className="flex w-full flex-col items-center">
          <div className="flex flex-col items-center space-y-4 text-center sm:space-y-6 md:max-w-3xl md:text-center">
            <h2 className="text-3xl font-semibold font-playfairD md:text-4xl lg:text-5xl">
              Let’s Connect and Build Something Extraordinary Together
            </h2>

            <p className="text-muted-foreground font-lato text-lg md:max-w-2xl">
              Have questions, feedback, or a project in mind? Reach out, and
              let’s bring your vision to life.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-screen-md">
          <form onSubmit={handleSubmit} className="w-full grid gap-y-4">
            <div className="grid w-full items-center gap-2">
              <Label className="font-lato font-bold" htmlFor="name">
                Full name
              </Label>
              <Input
                type="text"
                className="shadow-none font-lato placeholder:font-lato"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>
            <div className="grid w-full items-center gap-2">
              <Label className="font-lato font-bold" htmlFor="email">
                Email
              </Label>
              <Input
                type="email"
                className="shadow-none font-lato placeholder:font-lato"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your email"
              />
            </div>
            <div className="grid w-full items-center gap-2">
              <Label className="font-lato font-bold" htmlFor="message">
                Message
              </Label>
              <Textarea
                className="shadow-none font-lato placeholder:font-lato min-h-[120px]"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your message"
              />
            </div>
            <div className="grid justify-items-end">
              <Button
                className="font-lato shadow-none"
                variant="default"
                disabled={isSubmitting}>
                <SendHorizontal />
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default ContactMe;
