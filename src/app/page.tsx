import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { Principles } from "@/components/sections/principles";
import { Projects } from "@/components/sections/projects";
import { Services } from "@/components/sections/services";
import { Studies } from "@/components/sections/studies";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Projects />
      <Principles />
      <Studies />
      <Contact />
    </>
  );
}
