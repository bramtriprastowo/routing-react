import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import Avatar from "./images/image-avatar.jpg";

const StyledSection = styled.section`
  font-family: "Poppins", sans-serif;
  scroll-margin-top: 102px;
`;

const StyledImg = styled.img`
  border-radius: 50%;

  @media only screen and (min-width: 992px) {
    width: 250px;
    height: auto;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    width: 150px;
    height: auto;
    margin-top: 60px;
  }
  @media only screen and (min-width: 576px) and (max-width: 767px) {
    width: 100px;
    height: auto;
  }
  @media only screen and (max-width: 575px) {
    width: 70px;
    height: auto;
  }
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: #2c3333;
  &:hover {
    color: #808b8b;
  }

  @media only screen and (min-width: 768px) {
    font-size: 50px;
  }
  @media only screen and (min-width: 576px) and (max-width: 767px) {
    font-size: 35px;
  }
  @media only screen and (max-width: 575px) {
    font-size: 30px;
  }
`;

export class Profile extends React.Component {
  render() {
    return (
      <StyledSection id="profile">
        <Container className="px-5 py-5 mt-4 mb-4">
          <Row>
            <Col xs={11} md={10} lg={8}>
              <p className="fs-4 mb-4">Hello. It's Me</p>
              <h3 className="display-3 mb-3 fw-bold">Bramono Triprastowo</h3>
              <h3 className="display-6 mb-4 fw-bolder">Web Developer</h3>
              <p className="fs-5 mb-4">
                I use MERN stack to build website. Based on Semarang, Indonesia.
              </p>
              <a
                href="https://github.com/bramtriprastowo"
                target="_blank"
                rel="noreferrer"
              >
                <StyledFontAwesomeIcon icon={faGithub}></StyledFontAwesomeIcon>
              </a>
            </Col>
            <Col xs={1} md={2} lg={4} className="ms-auto">
              <StyledImg src={Avatar} alt="profile" className="float-end" />
            </Col>
          </Row>
        </Container>
      </StyledSection>
    );
  }
}
