import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import angularApp from "../../Assets/Projects/angular_app.png";
import chatbot from "../../Assets/Projects/chatbot.png";
import djangoEcommerce from "../../Assets/Projects/django_ecommerce.png";
import employeeManagement from "../../Assets/Projects/employee_management.png";
import mobileStore from "../../Assets/Projects/mobile_store.png";
import userManagement from "../../Assets/Projects/user_management.png";
import assuranceApp from "../../Assets/Projects/assurance_app.png";

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
              imgPath={mobileStore}
              isBlog={false}
              title="Mobile Store"
              description="Mobile Store E-Commerce Website is a web application built using PHP and MySQL that allows users to browse and purchase mobile phones online. It provides a user-friendly interface for customers, enabling them to view, purchase products and proccess the payment."
              ghLink="https://github.com/ayoubxmahmoud/Mobile_Store-E-Commerce-Website"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={angularApp}
              isBlog={false}
              title="Car Rental Management"
              description="Introducing a web application (SCRUD) for car rental management,
              leveraging AngularJS and Firebase for a seamless and efficient experience. 
              Customers can effortlessly rent multiple cars, with returns systematically
              recorded in organized garages. The system generates detailed invoices, 
              linking vehicle management to financial records. Noteworthy is the flexibility 
              in payment methods—both check and card options—providing customers with choices. 
              With a user-friendly interface."
              ghLink="https://github.com/ayoubxmahmoud/Angular_SCRUD-App-Gestion-de-location-des-voitures"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={userManagement}
              isBlog={false}
              title="User Management System"
              description="User management system designed for efficient user data management. 
              Powered by Node.js, Express, and MongoDB, this platform provides seamless control over user information.
              With an intuitive interface, administrators can easily navigate through functionalities
              to search, create, update, and delete user data."
              ghLink="https://github.com/ayoubxmahmoud/CRUD_Dashboard_Node"            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatbot}
              isBlog={false}
              title="Simple Chatbot AI"
              description="A simple AI chatbot built using the OpenAI GPT-3 API, Node.js and Express.
              It uses the openai npm package to interact with the GPT-3 API and provides 
              a web interface for users to chat with the bot."
              ghLink="https://github.com/ayoubxmahmoud/AI-chatbot-chatgpt"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={djangoEcommerce}
              isBlog={false}
              title="Django Ecommerce"
              description="A simple Django E-Commerce Website where users can explore and buy products online. 
              It presents acustomer-friendly interface, allowing users to effortlessly view, 
              purchase, and complete the payment process for their selected products.
              "
              ghLink="https://github.com/ayoubxmahmoud/django-ecommerce"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={employeeManagement}
              isBlog={false}
              title="Employees Management Using AdminLTE "
              description="Presenting an Employee Management System crafted with Laravel, 
              featuring an intuitive AdminLTE Panel for seamless administration."
              ghLink="https://github.com/ayoubxmahmoud/Employees-Management_Dashboard-AdminLTE"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={assuranceApp}
              isBlog={false}
              title="Mobile App"
              description="Our mobile app designed for efficient contract assurance management, 
              built with Kotlin and Firebase integration. This comprehensive solution features distinct 
              Customer and Admin areas. The Admin space boasts a dynamic dashboard for visualizing and managing 
              contract data, providing a streamlined and user-friendly experience for robust contract oversight and assurance."
              ghLink="https://github.com/ayoubxmahmoud/Android_App_Gestion_Contrats_Assurance"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
