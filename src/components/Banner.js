import React, { useState, useEffect, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import bannerBg from "../assets/img/blob-scene-haikei.svg";
import profileImg from "../assets/img/profile.png";
import { HashLink } from "react-router-hash-link";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  const toRotate = useMemo(
    () => ["Web Developer", "React Developer", "Full-stack Developer"],
    []
  );

  useEffect(() => {
    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta((prevDelta) => prevDelta / 2);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(500);
      }
    };

    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [delta, isDeleting, loopNum, text, toRotate]);

  const bannerStyle = {
    position: "relative",
    height: "100vh",
    background: `url(${bannerBg}) no-repeat center center / cover`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
  };

  const profileStyle = {
    width: "350px",
    height: "350px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "5px solid #fff",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };

  return (
    <section className="banner" id="home" style={bannerStyle}>
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <div>
              <span className="tagline">Welcome to my Portfolio</span>
              <h1>{`Hi! I'm Surya Theja`} </h1>
              <h1>
                <span
                  className="txt-rotate"
                  data-period="1000"
                  data-rotate='[ "Web Developer", "React Developer", "Full-stack Developer" ]'
                >
                  <span className="wrap">{text}</span>
                </span>
              </h1>
              <p>
                I am a web developer with a passion for creating dynamic and
                responsive web applications. Check out my projects below.
              </p>
              <HashLink to="#connect" className="no-underline">
                <button>
                  Let’s Connect <ArrowRightCircle size={25} />
                </button>
              </HashLink>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div>
              <img
                src={profileImg}
                alt="Profile Img"
                className="profile-picture"
                style={profileStyle}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
