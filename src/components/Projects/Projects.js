import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import aaryatm from "../../Assets/New Projects/aaryatm.png"
import chatApp from "../../Assets/New Projects/chatting-app.png"
import ims from "../../Assets/New Projects/ims.png"
import memoryGame from "../../Assets/New Projects/memory-game.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ims}
              isBlog={false}
              title="Purple Star IMS"
              description="Purple Star in an Inventory Management System which can be used to keep track of inventory, stores and purchases."
              demoLink="https://inventory-management-system-azp9.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aaryatm}
              isBlog={false}
              title="Aarya TM website"
              description="This is a website for AaryaTM, a startup which provides solutions for Hotels, Travel Agencies and Restaurants."
              demoLink="https://aaryatm.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatApp}
              isBlog={false}
              title="Messaging App"
              description="Messaging App is a full-stack real-time chat application made using websocket."
              ghLink="https://github.com/bhpranit08/THE_MESSAGING_APP"
              demoLink="https://the-messaging-app.onrender.com/login"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={memoryGame}
              isBlog={false}
              title="Memory Game"
              description="Pokemon Memory Game is a fun game made using React and pokemon API."
              ghLink="https://github.com/bhpranit08/Memory-Game"
              demoLink="https://memory-game-sigma-one.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
