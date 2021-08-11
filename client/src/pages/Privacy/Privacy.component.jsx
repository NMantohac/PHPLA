import React from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'react-bootstrap';
import PrivacyJumbotron from '../../components/PrivacyJumbotron/PrivacyJumbotron.component';
import PrivacyContent from '../../components/PrivacyContent/PrivacyContent.component';

const Privacy = () => {
  return (
    <div>
      <Helmet>
        <title>PHPLA | Privacy</title>
      </Helmet>
      <PrivacyJumbotron />
      <Container>
        <Row>
          <Col style={{ textAlign: 'justify', textJustify: 'inter-character' }}>
            <PrivacyContent />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Privacy;
