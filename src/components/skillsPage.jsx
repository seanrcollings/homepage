import React, { useState } from "react";
import SkillsPageItem from "./skillsPageItem";

import history from "../history";
import python from "../img/skills/python-big.png";
import ruby from "../img/skills/ruby-big2.png";
import flask from "../img/skills/flask-big.png";
import js from "../img/skills/js-big.png";
import react from "../img/skills/react-big.svg";
import rails from "../img/skills/ruby-big.webp";
import html from "../img/skills/html-big.png";
import sql from "../img/skills/sql-big.png";

const skills = [
  <SkillsPageItem name="python" img={python}>
    <h2>Projects I've used Python in</h2>
    <ul>
      <li>
        <a href="http://pisite.seanrcollings.com">Pi Site</a>
      </li>
      <li>
        <a href="http://novakconversions.com">Novak Site</a> (still in
        development)
      </li>
    </ul>
    ,<h2>How I learned Python</h2>
    <ul>
      <li>Programming Classes in high school</li>
      <li>CS 1400 at USU</li>
      <li>My own tinkering</li>
    </ul>
  </SkillsPageItem>,

  <SkillsPageItem name="flask" img={flask}>
    <h2>Projects I've used Flask in</h2>
    <ul>
      <li>
        <a href="http://pisite.seanrcollings.com">Pi Site</a>
      </li>
      <li>
        <a href="http://novakconversions.com">Novak Site</a>
      </li>
    </ul>
  </SkillsPageItem>,
  <SkillsPageItem name="javascript" img={js}>
    <h2>Projects I've used JavaScript in</h2>
    <ul>
      <li>
        <a href="http://blog.seanrcollings.com">My Blog</a>
      </li>
      <li>
        <a href="http://moonshiver.herokuapp.com">Moonshiver</a>
      </li>
    </ul>
    ,<h2>How I learned JavaScript</h2>
    <ul>
      <li>
        <a href="https://www.ctsutah.com/">Code to Success</a>: Summer coding
        Bootcamp
      </li>
    </ul>
  </SkillsPageItem>,
  <SkillsPageItem name="reactjs" img={react}>
    <h2>Projects I've used React in</h2>
    <ul>
      <li>
        <a href="http://blog.seanrcollings.com">My Blog</a>
      </li>
      <li>
        <a href="http://moonshiver.herokuapp.com">Moonshiver</a>
      </li>
      <li>This site!</li>
    </ul>
  </SkillsPageItem>,
  <SkillsPageItem name="ruby" img={ruby}>
    <h2>Projects I've used Ruby in</h2>
    <ul>
      <li>
        <a href="http://blog.seanrcollings.com">My Blog</a>
      </li>
      <li>
        <a href="http://moonshiver.herokuapp.com">Moonshiver</a>
      </li>
    </ul>
  </SkillsPageItem>,
  <SkillsPageItem name="ruby on rals" img={rails}>
    <h2>Projects I've used Rails in</h2>
    <ul>
      <li>
        <a href="http://blog.seanrcollings.com">My Blog</a>
      </li>
      <li>
        <a href="http://moonshiver.herokuapp.com">Moonshiver</a>
      </li>
    </ul>
  </SkillsPageItem>,
  <SkillsPageItem name="html and css" img={html}>
    <h2>Projects I've used HTML & CSS in</h2>
    <ul>
      <li>
        <a href="http://blog.seanrcollings.com">My Blog</a>
      </li>
      <li>
        <a href="http://moonshiver.herokuapp.com">Moonshiver</a>
      </li>
    </ul>
  </SkillsPageItem>,
  <SkillsPageItem name="sql" img={sql}>
    <h2>Projects I've used SQL in</h2>
    <ul>
      <li>
        <a href="http://blog.seanrcollings.com">My Blog</a>
      </li>
      <li>
        <a href="http://moonshiver.herokuapp.com">Moonshiver</a>
      </li>
    </ul>
    ]
  </SkillsPageItem>
];

export default function SkillsPage(props) {
  let [renderedSkill, setRenderedSkill] = useState(
    skills[parseInt(props.match.params.skill)]
  );

  const handleClick = val => {
    let index = parseInt(props.match.params.skill) + val;
    if (index + 1 > skills.length) {
      index = 0;
    } else if (index < 0) {
      index = skills.length - 1;
    }
    setRenderedSkill(skills[index]);
    history.replace(`/skills/${index}`);
  };

  return (
    <div className="skills-page">
      <button
        className="skills-page-button back"
        onClick={() => handleClick(-1)}
      >
        <span>Last Skill</span>
        <i className="fas fa-less-than"></i>
      </button>
      {renderedSkill}
      <button
        className="skills-page-button forward"
        onClick={() => handleClick(1)}
      >
        <i className="fas fa-greater-than"></i>
        <span>Next Skill</span>
      </button>
    </div>
  );
}
