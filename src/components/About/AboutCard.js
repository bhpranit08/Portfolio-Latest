import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Pranit Bhandari </span>
            from <span className="purple"> Kathmandu, Nepal.</span>
            <br />
            I am a self-taught Fullstack developer.
            <br />
            I believe the best way to truly learn and master something is by applying it in our daily lives, rather than just taking a course.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Mountain Biking
            </li>
            <li className="about-activity">
              <ImPointRight /> Hiking
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Working Out
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Chasing perfection is the best way to progress!"{" "}
          </p>
          <footer className="blockquote-footer">Pranit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
