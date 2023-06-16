import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

const NotFound = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <div className="text-center">
            <h1 className="display-1">404</h1>
            <h2>Oops! Page not found</h2>
            <p>You have entered incorrect Url.</p>
            <Link to="/">
              <Button variant="primary">Go to Home Page</Button>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
