import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

function Features() {
  return (
    <>
      <Container>
        <Row className="justify-content-md-center" >
          <Col md={8}>
            <Card className="text-center" border="light" >
              <Card.Subtitle className="pt-3">
                Our Features
                <Card.Img src="assets/images/about/line.png" height={10} width={10} />
              </Card.Subtitle>
              <Card.Title className="pt-3 px-5" as="h3" >
                Maximize Your Food Delivery Business Potential With These Powerful Features
              </Card.Title>
              <Card.Body className="p-1">
                We offer restaurant mobile app development services to everyone interested in the food industry. Our restaurant app developers incorporate cutting-edge and one-of-a-kind features into your restaurant app to make it user-friendly, intuitive, and scalable. The following is a list of common restaurant app features.
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>

  )

}

export default Features;