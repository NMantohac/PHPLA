import React from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'react-bootstrap';
import TermsJumbotron from '../../components/TermsJumbotron/TermsJumbotron.component';
import TermsContent from '../../components/TermsContent/TermsContent.component';

const TermsAndConditions = () => {
  <Helmet>
    <title>{TermsAndConditions}</title>
    <link rel="canonical" href="https://www.phplosangeles.org/terms-conditions" />
  </Helmet>
  return (
    <div>
      <Helmet>
        <title>PHPLA | Terms and Conditions</title>
      </Helmet>
      <TermsJumbotron />
      <Container>
        <Row>
          <Col style={{ textAlign: 'justify', textJustify: 'inter-character' }}>
            <TermsContent />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TermsAndConditions;
