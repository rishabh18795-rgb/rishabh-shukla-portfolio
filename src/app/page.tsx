import { About } from "@/components/About";
import { Contact, Education, Footer } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Growth } from "@/components/Growth";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Motion } from "@/components/ui";

export default function Home() {
  return (
    <Motion>
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Growth />
        <Education />
        <Contact />
      </main>
      <Footer />
    </Motion>
  );
}
