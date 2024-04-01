import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import './ServicesJumbotron.styles.css';

const ServicesJumbotron = () => {
  return (
    <div>
      <Jumbotron className="services-jumbotron">
        <Container>
          <p className="services-jumbotron-text">Services</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default ServicesJumbotron;