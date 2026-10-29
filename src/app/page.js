import HomePage from "@/Components/Home";
import Image from "next/image";
import Skills from "@/Components/Skills";
import SkillsKnowledge from "@/Components/SkillsKnowledge";
import ExperienceLearning from "@/Components/ExperienceLearning ";
import Projects from "@/Components/Projects"
import About from "@/Components/About";
import Contact from "@/Components/Contact";
export default function Home() {
  return (
    <div>
      <main>
        <HomePage></HomePage>
        <Skills></Skills>
        <SkillsKnowledge></SkillsKnowledge>
        <ExperienceLearning></ExperienceLearning>
        <Projects></Projects>
        <About></About>
        <Contact></Contact>
      </main>
    </div>
  );
}
