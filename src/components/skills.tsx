import React from "react";
import SkillsItem from "./skillsItems";

// images
import react from "../img/skills/react.png";
import python from "../img/skills/python.png";
import rails from "../img/skills/rails.jpg";
import js from "../img/skills/js.png";
import html from "../img/skills/html.png";
import sql from "../img/skills/sql.png";
import ruby from "../img/skills/ruby.png";
import flask from "../img/skills/flask.jpg";
import java from "../img/skills/java.jpg";
import linux from "../img/skills/linux.png";

export default function Skills() {
  // NOTE: all the dates are rough estimates to
  // give a year count, not an actual starting date
  // I do not keep track of my time that accuretly
  // nor do I start learning new things only on Jan
  // 1st of each yaer
  return (
    <div className="skills">
      <h1>SKILLS</h1>
      <div className="skills-content">
        <SkillsItem
          img={js}
          content="JavaScript"
          time={new Date("Jan. 1, 2017")}
        />
        <SkillsItem
          img={react}
          content="ReactJS Framework"
          time={new Date("Jan. 1, 2017")}
        />
        <SkillsItem
          img={python}
          content="Python"
          time={new Date("Jan. 1, 2015")}
        />
        <SkillsItem
          img={flask}
          content="Flask"
          time={new Date("Jan. 1, 2018")}
        />
        <SkillsItem img={ruby} content="Ruby" time={new Date("Jan. 1, 2019")} />
        <SkillsItem
          img={rails}
          content="Ruby On Rails"
          time={new Date("Jan. 1, 2019")}
        />
        <SkillsItem
          img={html}
          content="HTML and CSS"
          time={new Date("Jan. 1, 2017")}
        />
        <SkillsItem img={sql} content="SQL" time={new Date("Jan. 1, 2018")} />
        <SkillsItem img={java} content="Java" time={new Date("Jan. 1, 2019")} />
        <SkillsItem
          img={linux}
          content="Linux"
          time={new Date("Jan. 1, 2017")}
        />
      </div>
    </div>
  );
}
