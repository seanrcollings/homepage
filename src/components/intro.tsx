import React from "react";
import { Fade } from "react-reveal";
import me from "../img/small3.png";
import resume from "../img/resume.pdf";

export default function Intro() {
  return (
    <Fade bottom cascade>
      <div className="intro">
        <div className="intro-contact">
          <a href={resume} className="intro-contact-resume">
            Resume
          </a>
        </div>
        <h2 className="intro-title">Hi!</h2>
        <img className="intro-img" src={me} alt="Sean Collings" />
        <div className="intro-content">
          <div className="intro-content-quote">
            <em>
              The most important step a man can take. It's not the first one, is
              it? It's the next one. Always the next step, Dalinar.
            </em>
            <div>-Brandon Sanderson, Oathbringer</div>
          </div>
          <p>My name is Sean Collings and I am a developer</p>
          <ul className="intro-content-items">
            <li className="intro-content-item">
              Started an interest in programming when I was 14 years old!
            </li>
            <li className="intro-content-item">
              Graduated from Ridgeline Highschool in 2019
            </li>
            <li className="intro-content-item">
              Also graduated from Bridgerland's IT program in the same year
            </li>
            <li className="intro-content-item">
              Currently attending USU, majoring in Computer Science
            </li>
            <li className="intro-content-item">
              Currently work at{" "}
              <a href="https://www.atomicjolt.com/">Atomic Jolt</a> as a web
              developer
            </li>
          </ul>
        </div>
        <a href="#2" className="content-scroll helper-text">
          <i className="fas fa-arrow-down arrow"></i> Scroll down for more
        </a>
      </div>
    </Fade>
  );
}
