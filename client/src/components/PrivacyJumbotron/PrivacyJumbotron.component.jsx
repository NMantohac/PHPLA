import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import './PrivacyJumbotron.styles.css';

const PrivacyJumbotron = () => {
  return (
    <div>
      <Jumbotron className="privacy-jumbotron">
        <Container>
          <p className="privacy-jumbotron-text">Private Policy</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default PrivacyJumbotron;
