import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Services from "@/components/services";
import Experience from "@/components/experience";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Services />
      <Experience />
      <Contact />
    </main>
  );
}
