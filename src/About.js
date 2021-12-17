import React from 'react';
import './App.css';
import devinaa from "./Image/devinaa.jpg";
import arvendo from "./Image/arvendo.jpg";
import timoti from "./Image/timoti.jpg";
import danang from "./Image/danang.jpg";

function About() {
  return (
    <div className="about">
      <h1>About Page</h1>
      <div className="aboutus">
        <div className="dec">
          <img src={devinaa} width="20%" alt={devinaa}/>
          <h2>Devina Winaya</h2>
          <p>00000033896</p>
        </div>
        <div className="dec">
          <img src={danang} width="20%" alt={danang}/>
          <h2>Afreza Danang Fathoni</h2>
          <p>00000034187</p>
        </div>
        <div className="dec">
          <img src={timoti} width="15%" alt={timoti}/>
          <h2>Timothy Lemuel</h2>
          <p>00000034529</p>
        </div>
        <div className="dec">
          <img src={arvendo} width="15%" alt={arvendo}/>
          <h2>Arvendo Manuel</h2>
          <p>00000034808</p>
        </div>
      </div>
    </div>

  );
}

export default About;
