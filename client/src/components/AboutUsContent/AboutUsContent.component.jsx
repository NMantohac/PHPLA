import React from 'react';
import { Container, Row, Col, CardDeck, Card } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import ModalImage from 'react-modal-image';
import './AboutUsContent.styles.css';

const AboutUsContent = () => {
  return (
    <div>
      <Container fluid style={{ marginTop: '50px', marginBottom: '50px' }}>
        <Row style={{ marginTop: '30px' }}>
          <Col>
            <CardDeck>
              <Card border="warning">
                <ModalImage small="https://res.cloudinary.com/trizept/image/upload/v1594410100/about-us-1_bwbr5n.jpg" large="https://res.cloudinary.com/trizept/image/upload/v1594410100/about-us-1_bwbr5n.jpg" showRotate="true" variant="top" alt="Overview" />
                <Fade top>
                  <Card.Body style={{ textAlign: 'center' }}>
                    <Card.Title className="about-us-card-title" style={{ fontSize: '48px' }}>Overview</Card.Title>
                    <Card.Text style={{ textAlign: 'justify', textJustify: 'inter-character', fontSize: '18px' }}>
                      We are people who have dedicated ourselves to helping others in need of living essentials. Working together, we shall provide food, housing, transportation, and care to the poor and the vulnerable in our community.
                    </Card.Text>
                  </Card.Body>
                </Fade>
              </Card>
              <Card border="warning">
                <ModalImage small="https://res.cloudinary.com/trizept/image/upload/v1594410100/about-us-2_ukjygt.jpg" large="https://res.cloudinary.com/trizept/image/upload/v1594410100/about-us-2_ukjygt.jpg" showRotate="true" variant="top" alt="Mission" />
                <Fade top>
                  <Card.Body style={{ textAlign: 'center' }}>
                    <Card.Title className="about-us-card-title" style={{ fontSize: '48px' }}>Mission</Card.Title>
                    <Card.Text style={{ textAlign: 'justify', textJustify: 'inter-character', fontSize: '18px' }}>
                      The mission of People Helping People In Los Angeles Inc. is to improve the quality of life of the population by providing food and housing, and emergency and other relief services to people who are in crisis or in need of help in the community.
                    </Card.Text>
                  </Card.Body>
                </Fade>
              </Card>
            </CardDeck>
          </Col>
        </Row>
        <Row style={{ marginTop: '30px' }}>
          <Col>
            <CardDeck>
              <Card border="warning">
                <ModalImage small="https://res.cloudinary.com/trizept/image/upload/v1594410101/about-us-3_h6avqa.jpg" large="https://res.cloudinary.com/trizept/image/upload/v1594410101/about-us-3_h6avqa.jpg" showRotate="true" variant="top" alt="Vision" />
                <Fade bottom>
                  <Card.Body style={{ textAlign: 'center' }}>
                    <Card.Title className="about-us-card-title" style={{ fontSize: '48px' }}>Vision</Card.Title>
                    <Card.Text style={{ textAlign: 'justify', textJustify: 'inter-character', fontSize: '18px' }}>
                      We enhance to commit ourselves in the spirit of helping, with the joy of togetherness and collaboration with diverse communities; in offering hope, mercy, and to bring about transformation of individuals towards a healthy and peaceful society.
                    </Card.Text>
                  </Card.Body>
                </Fade>
              </Card>
              <Card border="warning">
                <ModalImage small="https://res.cloudinary.com/trizept/image/upload/v1594410101/about-us-4_icbp3c.jpg" large="https://res.cloudinary.com/trizept/image/upload/v1594410101/about-us-4_icbp3c.jpg" showRotate="true" variant="top" alt="Values" />
                <Fade bottom>
                  <Card.Body style={{ textAlign: 'center' }}>
                    <Card.Title className="about-us-card-title" style={{ fontSize: '48px' }}>Values</Card.Title>
                    <Card.Text style={{ textAlign: 'justify', textJustify: 'inter-character', fontSize: '18px' }}>
                      The pillar of our values that defines us is driven by compassion, dedication, and integrity.
                    </Card.Text>
                  </Card.Body>
                </Fade>
              </Card>
            </CardDeck>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUsContent;
