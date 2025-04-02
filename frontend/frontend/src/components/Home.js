import React from "react";
import { Container, Button, Card } from "react-bootstrap"; // Bootstrap components
import { Typography } from "@mui/material"; // Material UI component

const Home = () => {
  return (
    <Container className="mt-5">
      <Card className="p-4 text-center">
        <Typography variant="h4" className="mb-3">
          Bootstrap & Material UI are Working!
        </Typography>
        <Button variant="primary">Click Me</Button>
      </Card>
    </Container>
  );
};

export default Home;
