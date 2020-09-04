import React, { useState } from "react";

interface ProjectItemProps {
  readonly title: string;
  readonly description: string;
  readonly link: string;
  readonly img: string;
  readonly resources: Array<string>;
  readonly repository?: string;
}

export default function ProjectItem(props: ProjectItemProps) {
  const [showOverlay, setShowOverlay] = useState(false);

  const renderOverlay = () => {
    const sourceCode =
      props.repository !== undefined ? (
        <a href={props.repository} className="projects-item-overlay-source">
          Source Code
        </a>
      ) : null;
    if (showOverlay) {
      return (
        <div className="projects-item-overlay">
          <h3 className="projects-item-overlay-title">{props.title}</h3>
          <div className="projects-item-overlay-description">
            {props.description}
          </div>
          <div className="projects-item-overlay-resources">
            {" "}
            • {renderResources()}
          </div>
          {sourceCode}
        </div>
      );
    }
  };
  const renderResources = () => {
    return props.resources.map((resource) => {
      return (
        <span className="projects-item-resources-resource" key={resource}>
          {resource} •{" "}
        </span>
      );
    });
  };

  return (
    <a
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`projects-item ${
        showOverlay ? "projects-item-grow" : "projects-item-shrink"
      }`}
      onMouseOver={() => setShowOverlay(true)}
      onMouseLeave={() => setShowOverlay(false)}
    >
      <img className="projects-item-img" alt="Project" src={props.img} />
      {renderOverlay()}
    </a>
  );
}
