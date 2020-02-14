import React from "react";

export default function SkillsItem(props) {
  return (
    <div className="skills-item">
      {/* <div className="skills-item-img"> */}
      {/* <SkillSVG image={props.img}></SkillSVG> */}
      {/* </div> */}
      <img className="skills-item-img" src={props.img} alt="skill"></img>
      <div className="skills-item-content">
        {props.content}
        <div className="skills-item-time">{props.time}</div>
      </div>
    </div>
  );
}
