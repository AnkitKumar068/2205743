import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Typography } from "@mui/material";

const Dashboard = () => {
  return (
    <Container className="mt-4">
      <Typography variant="h3" className="mb-4 text-center">
        Social Media Analytics
      </Typography>
      
      <Row className="g-4">
        {/* Top Users Card */}
        <Col md={6}>
          <Card className="p-3">
            <Card.Body>
              <Typography variant="h5" className="mb-3">
                Top Users
              </Typography>
              <ul>
                <li>User 1</li>
                <li>User 2</li>
                <li>User 3</li>
                <li>User 4</li>
                <li>User 5</li>
              </ul>
              <Button variant="primary">View More</Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Trending Posts Card */}
        <Col md={6}>
          <Card className="p-3">
            <Card.Body>
              <Typography variant="h5" className="mb-3">
                Trending Posts
              </Typography>
              <ul>
                <li>Post 1</li>
                <li>Post 2</li>
                <li>Post 3</li>
              </ul>
              <Button variant="primary">View More</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Live Feed Section */}
      <Row className="mt-4">
        <Col>
          <Card className="p-3">
            <Card.Body>
              <Typography variant="h5" className="mb-3">
                Live Feed
              </Typography>
              <div>
                <p>Live Post 1</p>
                <p>Live Post 2</p>
                <p>Live Post 3</p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
    