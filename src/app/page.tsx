import { About } from "@/components/About";
import { Contact, Footer } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Motion } from "@/components/ui";

// Story order: who I am → how I think → what I can build → what I've executed
// → what I've created → how to connect.
export default function Home() {
  return (
    <Motion>
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </Motion>
  );
}
