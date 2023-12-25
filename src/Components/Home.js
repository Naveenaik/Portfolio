import React from "react";
import pro from "../images/profile.jpg";
import "../Style/Home.css";
function Home() {
  return (
    <div className="row">
      <div className="header-text">
        <p>Fullstack Developer</p>
        <h1 className="name">
            I,m <span>Naveena</span>
          <br /></h1>
          <h1>
            from Udupi
        </h1>
      </div>
      <div className="profile">
        <img src={pro}/>
      </div>
    </div>
  );
}

export default Home;
