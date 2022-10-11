import React, { Component, useState } from "react";
// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Row,
  Col
} from "react-bootstrap";

const InputPage = () => {
  const [values, setValues] = useState({
    firstName: '',
    lastName: ''
  });
  const handleSubmit = (event) => {
    // alert("Success");
    event.preventDefault();
    console.log("event : ",values);
    if (values != null){
      let msg = "";
      msg += "Data has been submitted \n";
      msg += "Username : "+values.firstName;
      msg += "\n";
      msg += "LastName : "+values.lastName;
      alert(msg);
      window.location.href = "/admin/inputPage";
    }
    //const jsonData = require('./output.json');
    //jsonData.push(values);
  }
  const handleLastNameInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      lastName: event.target.value,
    }));
  };
  const handleFirstNameInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      firstName: event.target.value,
    }));
  };
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Input Data</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>First Name</label>
                        <Form.Control
                          defaultValue={values.firstName}
                          placeholder="First Name"
                          type="text"
                          onChange={handleFirstNameInputChange}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="6">
                      <Form.Group>
                        <label>Last Name</label>
                        <Form.Control
                          defaultValue={values.lastName}
                          placeholder="Last Name"
                          type="text"
                          onChange={handleLastNameInputChange}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Button
                    className="btn-fill pull-right"
                    type="submit"
                    variant="info"
                  >
                  Submit
                  </Button>
                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default InputPage;
