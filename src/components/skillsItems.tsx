import React from "react";

interface SkillsItemsProps {
  readonly img: string;
  readonly content: string;
  readonly time: Date;
}

export default function SkillsItem(props: SkillsItemsProps) {
  const years = new Date().getFullYear() - props.time.getFullYear();
  return (
    <div className="skills-item">
      <img className="skills-item-img" src={props.img} alt="skill"></img>
      <div className="skills-item-content">
        {props.content}
        <div className="skills-item-time">{years} Years</div>
      </div>
    </div>
  );
}
