import Hero from "./component/Hero/Hero";
import About from "./component/About/About";
import Section from "./component/Section/Section"
import Skills from "./component/Skills/Skills"

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Section />
      <Skills />
    </div>
  );
}
