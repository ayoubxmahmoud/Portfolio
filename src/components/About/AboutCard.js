import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Greetings, everyone! I'm <span className="purple">Ayoub Mahmoud</span> hailing from Agadir, Morocco.
            Armed with a bachelor's degree in mathematics and computer science,
            my current focus lies in pursuing a career as a Full Stack Web Developer.
            <br />
            <br /> 
            Beyond the world of coding, I find joy in engaging in a variety of activities,
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing sports
            </li>
            <li className="about-activity">
              <ImPointRight /> Immersing myself in the pages of captivating books
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "Embrace challenges as opportunities for growth and innovation."{" "}
          </p>
          <footer className="blockquote-footer">Mahmoud</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
