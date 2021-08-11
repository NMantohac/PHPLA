import React from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'react-bootstrap';
import HelpJumbotron from '../../components/HelpJumbotron/HelpJumbotron.component';
import HelpInfo from '../../components/HelpInfo/HelpInfo.component';
import HelpForm from '../../containers/HelpForm/HelpForm.component';

const Help = () => {
  return (
    <div>
      <Helmet>
        <title>PHPLA | Help</title>
      </Helmet>
      <HelpJumbotron />
      <Container>
        <Row>
          <Col xs={12} sm={12} md={3} lg={3} xl={3}>
            <HelpInfo />
          </Col>

          <Col xs={12} sm={12} md={9} lg={9} xl={9}>
            <HelpForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Help;
