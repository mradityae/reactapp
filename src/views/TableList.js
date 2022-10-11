import React from "react";
import axios from "axios";
import outputData from "./output.json";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function TableList() {
  const [data, setData] = React.useState({});
  
  React.useEffect( () => {
    const fetchData = async () => {
      const customData = await require('./output.json');
      setData(customData);
    }
    fetchData();
  },[data]);
  let items = [];
  if (data.length > 0){
    console.log("data : ",data);
    let i = 0;
    data.forEach(element => {
      i += 1;
      items.push(<tr key = {i}>
          <td> { element.firstName } </td>   
          <td> { element.lastName }</td>
      </tr>)
    });
  }
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Table Data</Card.Title>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">First Name</th>
                      <th className="border-0">Last Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default TableList;
