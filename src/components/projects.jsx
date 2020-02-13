import React from "react";
import ProjectItem from "./projectItem";

// Images
import pisite from "../img/projects/pisite.png";
import pisiteapi from "../img/projects/pisiteapi.jpg";
import blog from "../img/projects/blog.png";
import moonshiver from "../img/projects/moonshiver.png";
import mastermind from "../img/projects/mastermind.png";

export default function Projects() {
  return (
    <div className="projects">
      <h1>PROJECTS</h1>
      <ProjectItem
        title="Pi Site"
        description="Frontend for the Pi Site API"
        link="http://pisite.seanrcollings.com"
        img={pisite}
        resources={["ReactJS", "SCSS", "Redux"]}
        repository="https://github.com/seanrcollings/PiSite"
      />

      <ProjectItem
        title="Pi Site API"
        description="Resource API to report data about a Raspberry Pi"
        link="http://api.pisite.seanrcollings.com"
        img={pisiteapi}
        resources={["Flask", "Nginx", "SQL Alchemy", "Raspberry Pi 3A"]}
        repository="https://github.com/seanrcollings/PiSite"
      />

      <ProjectItem
        title="My Blog"
        description="A project I started to familirize myself with the Rails backend framework"
        link="http://blog.seanrcollings.com"
        img={blog}
        resources={["ReactJS", "Rails", "SCSS", "Heroku", "Postgres"]}
        repository="https://github.com/seanrcollings/blog"
      />

      <ProjectItem
        title="Moonshiver"
        description="A site I am currently building for my highschool's student film festival"
        link="https://moonshiver.herokuapp.com"
        img={moonshiver}
        resources={["ReactJS", "Rails", "SCSS", "Heroku", "Postgres"]}
        repository="https://github.com/seanrcollings/moonshiver"
      />

      <ProjectItem
        title="Mastermind"
        description="A version of the Mastermind board game built in React"
        link="http://mastermind.seanrcollings.com"
        img={mastermind}
        resources={["ReactJS", "SCSS"]}
        repository="https://github.com/seanrcollings/mastermind"
      />
    </div>
  );
}
