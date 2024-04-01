import React from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'react-bootstrap';
import ServicesJumbotron from '../../components/ServicesJumbotron/ServicesJumbotron.component';
import ServicesContent from '../../components/ServicesContent/ServicesContent.component';

const Services = () => {
  <Helmet>
    <title>{Services}</title>
    <link rel="canonical" href="https://www.phplosangeles.org/services" />
  </Helmet>
  return (
    <div>
      <Helmet>
        <title>PHPLA | Services</title>
      </Helmet>
      <ServicesJumbotron />
      <Container>
        <Row>
          <Col style={{ textAlign: 'justify', textJustify: 'inter-character' }}>
            <ServicesContent />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Services;
