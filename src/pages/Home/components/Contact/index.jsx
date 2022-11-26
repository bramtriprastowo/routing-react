import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import styled from "styled-components";

const StyledSection = styled.section`
  font-family: "Poppins", sans-serif;
  scroll-margin-top: 102px;
`;

const StyledForm = styled(Form)`
  @media only screen and (min-width: 992px) {
    width: 600px;
  }
  @media only screen and (min-width: 765px) and (max-width: 991px) {
    width: 80%;
  }
`;

export class Contact extends React.Component {
  render() {
    return (
      <StyledSection id="contact">
        <Container className="px-5 py-4 mt-4 mb-5">
          <Row>
            <Col>
              <h4 className="display-6 fw-bolder mb-5 pb-3 text-center">
                Contact Me
              </h4>
              <StyledForm action="#" method="post" className="mx-auto">
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="name">Your Name</Form.Label>
                  <Form.Control
                    type="email"
                    size="sm"
                    placeholder="Your Name"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="email">Email address</Form.Label>
                  <Form.Control
                    type="email"
                    size="sm"
                    placeholder="name@example.com"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="message">Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    size="sm"
                    placeholder="Your Message"
                    style={{ height: "94px" }}
                  ></Form.Control>
                </Form.Group>
                <Form.Group className="d-grid">
                  <Button
                    variant="dark"
                    type="submit"
                    className="button-submit"
                    disabled
                  >
                    Submit
                  </Button>
                </Form.Group>
              </StyledForm>
            </Col>
          </Row>
        </Container>
      </StyledSection>
    );
  }
}
