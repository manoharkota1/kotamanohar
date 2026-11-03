import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Certifications } from "@/components/certifications";
import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Certifications />
      <Contact />
    </>
  );
}
