import { FC } from "react";
import {
  BootstrapIcon,
  CSSIcon,
  DatabaseIcon,
  GitIcon,
  HtmlIcon,
  JavaScriptIcon,
  NodejsIcon,
  NpmIcon,
  ReactIcon,
  TerminalIcon,
  TypescriptIcon,
} from "@icons/skills";
import styles from "css/skills.module.scss";
import { classes } from "src/lib/classes";
import skills from "../data/skills";

const SoftSkills = () => {
  const softSkills = [
    "Strong communication",
    "Leadership",
    "Problem solving",
    "Creative thinking",
    "Flexible and adaptative",
    "Team player"
  ];

  return softSkills.map((skill)=> {
    return <div className={styles.softSkillItem}>{skill}</div>;
  });
}

const getLevel = (level) => {
  const levels = {
    1: {
      "description": "Curious",
      "color": ""
    },
    2: {
      "description": "Beginner",
      "color": ""
    },
    3: {
      "description": "Intermediate",
      "color": ""
    },
    4: {
      "description": "Advanced",
      "color": ""
    },
    5: {
      "description": "Expert",
      "color": ""
    },
    
  }
  return levels[level];
}


const HardSkills = (props) => {

  return (<div></div>)
  // return props.skillsList.map((skill) => {
  //   return (
  //     <div>{skill.category}</div>
  //   );
  // })
};

const HardSkillsSection = () => {
  const hardSkillsList = skills;

  return hardSkillsList.map((category) => {

    return (
      <div>
        <div>{category.category}</div>
      
        <HardSkills items={category.items}/>
      </div>
    );
  })
};

const SkillsSection: FC = () => {
  return (
    <section id="skills">
      <h1 className="section__title">Skills</h1>

      <div className={styles.skillsIcons}>
      
        <HardSkillsSection/>

      </div>

      <h3 className="section__title">Soft Skills</h3>

      <SoftSkills/>
    </section>
  );
};

export default SkillsSection;
