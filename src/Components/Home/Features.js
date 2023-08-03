import React, { useState } from "react";
import { Button, Card, Col,Container, Row } from "react-bootstrap";

function Features() {

      let [state,setState] = useState({
        count : 0
      });

      let inc =()=>{
        setState({
          count : state.count + 1
        });
      };

      let dec =()=>{
        setState({
          count : state.count - 1
        });
      };


    return (
        <>
            <Container >
              <Row>
                <Col xs={2}>
                  <Card>
                    <Card.Body>
                      <p className="display-2">{state.count}</p>
                      <Button onClick={inc} variant="success" className="m-1">Increment</Button>
                      <Button onClick={dec} variant="warning" className="m-1">Decrement</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
      
        </>
      
    )

}

export default Features;