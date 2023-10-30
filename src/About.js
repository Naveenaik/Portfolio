import React from "react";
import "./about.css";
function About() {
  return (
    <div className="por-about">
      <div className="objective">
        <h3>Objective</h3>
        <p>
          My career objective is to work sincerely, seek knowledge for the task
          assigned, to achieve a good position in your esteemed organization by
          utilizing my skills.
        </p>
      </div>
      <div className="education">
        <h3>Education</h3>
        <ul>
          <li>
            <p>
              <b>A.J. Institute of Engineering and Technology, Mangaluru</b>
              <br />
              B.E (Information Science and Engineering)
            </p>
          </li>
          <li>
            <p>
              <b>
                Viveka Pre-University College, Kota, Udupi<span>(2021)</span>{" "}
              </b>
              <br />
              92.16%
            </p>
          </li>
          <li>
            <p>
              <b>
                Government High School, Nukkuru<span>(2021)</span>
              </b>
              <br />
              86.08%
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
