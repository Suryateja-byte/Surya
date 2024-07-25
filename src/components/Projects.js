import { Container, Row, Col } from "react-bootstrap";
import projImg1 from "../assets/img/pexels-rsantos1232-3888151.jpg"; // Add your project images
import projImg2 from "../assets/img/pexels-pok-rie-33563-5807811.jpg"; // Add your project images
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Projects = () => {
  const projects = [
    {
      title: "ATD Project",
      description: "Design & Development",
      imgUrl: projImg1,
      year: "2024",
    },
    {
      title: "Data Analysis Project",
      description: "Data Analysis & Visualization",
      imgUrl: projImg2,
      year: "2021 - 2022",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <div>
              <h2>CSS Corp Project</h2>
              <p>
                Here are some of the projects I've worked on. Feel free to
                explore and learn more about each project.
              </p>
            </div>
            <div className="projects-container">
              {projects.map((project, index) => (
                <div className="project-card" key={index}>
                  <div className="project-name">
                    <h3 className="project-headings">Project</h3>
                    <h1 className="project-title">{project.title}</h1>
                  </div>
                  <img
                    src={project.imgUrl}
                    alt={project.title}
                    className="project-image"
                  />
                  <div className="project-info">
                    <div className="project-details">
                      <div className="project-year">
                        <h3 className="project-headings">Year</h3>
                        <p id="para">{project.year}</p>
                      </div>
                      <div className="project-direction">
                        <h3 className="project-headings">Direction</h3>
                        <p id="para">Web Application</p>
                      </div>
                      <div className="project-roles">
                        <h3 className="project-headings">Technologies</h3>
                        <div className="content-role">
                          <span className="role">UI</span>
                          <span className="role">React</span>
                          <span className="role">Angular</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {/* Add more project cards as needed */}
            </div>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="background"
      />
    </section>
  );
};
