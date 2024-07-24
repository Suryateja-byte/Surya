import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Skills.css";

export const Skills = () => {
  const skills = [
    { name: "HTML", class: "html" },
    { name: "CSS", class: "css" },
    { name: "SCSS", class: "scss" },
    { name: "JavaScript", class: "js" },
    { name: "TypeScript", class: "ts" },
    { name: "Node.js", class: "node" },
    { name: "React", class: "react" },
    { name: "Angular", class: "angular" },
    { name: "Vue", class: "vue" },
    { name: "Python", class: "python" },
    { name: "Flutter", class: "flutter" },
  ];

  const responsive = {
    largeDesktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                These are some of the skills I have acquired over the years.
                <br /> Click on each to learn more.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                containerClass="carousel-container"
                itemClass="carousel-item-padding-40-px"
              >
                {skills.map((skill, index) => (
                  <div className="progressbar" key={index}>
                    <svg className="progressbar__svg">
                      <circle
                        className={`progressbar__svg-circle shadow-${skill.class} circle-${skill.class}`}
                        cx="80"
                        cy="80"
                        r="70"
                      ></circle>
                    </svg>
                    <div className="progressbar__text">{skill.name}</div>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
