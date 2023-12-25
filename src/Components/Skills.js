import React from "react";
import c from "../images/skills/c.png";
import cplus from "../images/skills/c++.png";
import css from "../images/skills/css-3.png";
import html from "../images/skills/html.png";
import java from "../images/skills/java.png";
import js from "../images/skills/js.png";
import nodejs from "../images/skills/nodejs.png";
import python from "../images/skills/python.png";
import react from "../images/skills/react.png";
import "../Style/skills.css";
function Skills() {
  return (
    <div className="SkillsKnown">
      <p>I have experiance with these technologies</p>
      <div className="container-1">
        <div className="skill1">
          <img src={html} alt="html" />
        </div>
        <div className="skill2">
          <img src={css} alt="css" />
        </div>
        <div className="skill3">
          <img src={js} alt="javascript" />
        </div>
        <div className="skill4">
          <img src={c} alt="c" />
        </div>
        <div className="skill5">
          <img src={cplus} alt="c++" />
        </div>
      </div>
      <div className="container-2">
        <div className="skill6">
          <img src={java} alt="java" />
        </div>
        <div className="skill7">
          <img src={python} alt="pyhton" />
        </div>
        <div className="skill8">
          <img src={nodejs} alt="node.js" />
        </div>
        <div className="skill9">
          <img src={react} alt="react" />
        </div>
      </div>
    </div>
  );
}

export default Skills;
