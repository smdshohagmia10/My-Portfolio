import HomePage from "@/Components/Home";
import Image from "next/image";
import Skills from "@/Components/Skills";
import SkillsKnowledge from "@/Components/SkillsKnowledge";
import ExperienceLearning from "@/Components/ExperienceLearning ";
export default function Home() {
  return (
    <div>
      <main>
        <HomePage></HomePage>
        <Skills></Skills>
        <SkillsKnowledge></SkillsKnowledge>
        <ExperienceLearning></ExperienceLearning>

      </main>
    </div>
  );
}
