import React from "react";
import instagram from "../images/instagram.png";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import "../Style/Contact.css";
function Contact() {
  return (
    <div className="personContact">
      <div className="TextFeild">
        <from>
          <label for="personName">Name</label>
          <br />
          <input type="text" id="personName" size="30" required />
          <label for="personEmail">Email</label>
          <br />
          <input type="email" size="30" required></input>
          <label>Messege</label>
          <br />
          <textarea cols="25" rows="5"></textarea>
          <input type="submit" value="Submit" />
        </from>
      </div>
      <div className="SocialMedia">
        <p>Social Media</p>
        <a href=" ">
          <img src={linkedin} />
        </a>
        <br />
        <a href=" ">
          <img src={github} />
        </a>
        <br />
        <a href=" ">
          <img src={instagram} />
        </a>
        <br />
      </div>
    </div>
  );
}

export default Contact;
