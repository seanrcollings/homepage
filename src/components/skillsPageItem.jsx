import React from "react";

export default function SkillsPageItem(props) {
  return [
    <img className="skills-page-img" src={props.img} alt={props.name} />,
    <div className="skills-page-overlay">
      <h1>{props.name}</h1>
      <div className="skills-page-overlay-content">{props.children}</div>
    </div>
  ];
}
