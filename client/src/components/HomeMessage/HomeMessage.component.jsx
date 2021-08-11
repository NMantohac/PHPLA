import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

const HomeMessage = () => {
  return (
    <div>
      <Container style={{ textAlign: 'center', backgroundColor: '#f2f2f2', marginTop: '-10px' }}>
        <Row>
          <Col style={{ fontSize: '16px', padding: '30px' }}>
            <Fade big>
              <p style={{ textAlign: 'center', fontFamily: 'Amatic SC', fontSize: '38px' }}>Our Core Beliefs</p>
              <p className="home-message-1">
                By the name itself, our organization's purpose is to serve your needs.
              </p>
              <p className="home-message-2">
                We consider your social situation, an honor of trust.
              </p>
              <p className="home-message-3">
                We make every effort at PHPLA to find a solution for you by putting foremost your well-being in our hearts.
              </p>
              <p className="home-message-4">
                With our kindhearted values, and in the spirit of collaborative helping, we change our quality of lives together.
              </p>
            </Fade>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomeMessage;
