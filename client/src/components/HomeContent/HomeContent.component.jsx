import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Slide from 'react-reveal/Slide';
import ModalImage from 'react-modal-image';
import './HomeContent.styles.css';

const HomeContent = () => {
  return (
    <div>
      <Container style={{ textAlign: 'center' }}>
        <Row style={{ marginTop: '30px', marginBottom: '30px' }}>
          <Col xs={12} sm={12} md={6} lg={6} xl={6}>
            <ModalImage small="https://res.cloudinary.com/trizept/image/upload/v1628817190/samples/PHPLA%20-%20WebP/home-1_btlxwk.webp" large="https://res.cloudinary.com/trizept/image/upload/v1628817190/samples/PHPLA%20-%20WebP/home-1_btlxwk.webp" showRotate="true" alt="When troubles crossed path on you" />
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} xl={6} className="home-text-col">
            <Slide right>
              <p className="home-text home-text-margin">When troubles crossed</p>
              <p className="home-text">path on you</p>
            </Slide>
          </Col>
        </Row>
        <Row style={{ marginBottom: '30px' }}>
          <Col xs={{ span: 12, order: 12 }} sm={{ span: 12, order: 12 }} md={{ span: 6, order: 1 }} lg={{ span: 6, order: 1 }} xl={{ span: 6, order: 1 }} className="home-text-col">
            <Slide left>
              <p className="home-text home-text-margin">Hope is never</p>
              <p className="home-text">forgotten</p>
            </Slide>
          </Col>
          <Col xs={{ span: 12, order: 1 }} sm={{ span: 12, order: 1 }} md={{ span: 6, order: 12 }} lg={{ span: 6, order: 12 }} xl={{ span: 6, order: 12 }}>
            <ModalImage small="https://res.cloudinary.com/trizept/image/upload/v1628817190/samples/PHPLA%20-%20WebP/home-2_zehmpm.webp" large="https://res.cloudinary.com/trizept/image/upload/v1628817190/samples/PHPLA%20-%20WebP/home-2_zehmpm.webp" showRotate="true" alt="Hope Is Never Forgotten" />
          </Col>
        </Row>
        <Row style={{ marginBottom: '30px' }}>
          <Col xs={12} sm={12} md={6} lg={6} xl={6}>
            <ModalImage small="https://res.cloudinary.com/trizept/image/upload/v1628817190/samples/PHPLA%20-%20WebP/home-3_usipzd.webp" large="https://res.cloudinary.com/trizept/image/upload/v1628817190/samples/PHPLA%20-%20WebP/home-3_usipzd.webp" showRotate="true" alt="PHPLA The Acronym Of Help" />
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} xl={6} className="home-text-col">
            <Slide right>
              <p className="home-text home-text-margin">PHPLA the acronym</p>
              <p className="home-text">of help</p>
            </Slide>
          </Col>
        </Row>
        <Row style={{ marginBottom: '30px' }}>
          <Col xs={{ span: 12, order: 12 }} sm={{ span: 12, order: 12 }} md={{ span: 6, order: 1 }} lg={{ span: 6, order: 1 }} xl={{ span: 6, order: 1 }} className="home-text-col">
            <Slide left>
              <p className="home-text home-text-margin">Recovery is</p>
              <p className="home-text">forthcoming</p>
            </Slide>
          </Col>
          <Col xs={{ span: 12, order: 1 }} sm={{ span: 12, order: 1 }} md={{ span: 6, order: 12 }} lg={{ span: 6, order: 12 }} xl={{ span: 6, order: 12 }}>
            <ModalImage small="https://res.cloudinary.com/trizept/image/upload/v1628817192/samples/PHPLA%20-%20WebP/home-4_pfewvr.webp" large="https://res.cloudinary.com/trizept/image/upload/v1628817192/samples/PHPLA%20-%20WebP/home-4_pfewvr.webp" showRotate="true" alt="Recovery Is Forthcoming" />
          </Col>
        </Row>
        <Row style={{ marginBottom: '30px' }}>
          <Col xs={12} sm={12} md={6} lg={6} xl={6}>
            <ModalImage small="https://res.cloudinary.com/trizept/image/upload/v1628817192/samples/PHPLA%20-%20WebP/home-5_tqbdxr.webp" large="https://res.cloudinary.com/trizept/image/upload/v1628817192/samples/PHPLA%20-%20WebP/home-5_tqbdxr.webp" showRotate="true" alt="An Afterthought Of Joy" />
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} xl={6} className="home-text-col">
            <Slide right>
              <p className="home-text home-text-margin">An afterthought</p>
              <p className="home-text">of joy</p>
            </Slide>
          </Col>
        </Row>
        <Row style={{ marginBottom: '30px' }}>
          <Col xs={{ span: 12, order: 12 }} sm={{ span: 12, order: 12 }} md={{ span: 6, order: 1 }} lg={{ span: 6, order: 1 }} xl={{ span: 6, order: 1 }} className="home-text-col">
            <Slide left>
              <p className="home-text home-text-margin">Feeling blessed</p>
              <p className="home-text">with a smile</p>
            </Slide>
          </Col>
          <Col xs={{ span: 12, order: 1 }} sm={{ span: 12, order: 1 }} md={{ span: 6, order: 12 }} lg={{ span: 6, order: 12 }} xl={{ span: 6, order: 12 }}>
            <ModalImage small="https://res.cloudinary.com/trizept/image/upload/v1628817192/samples/PHPLA%20-%20WebP/home-6_blzjut.webp" large="https://res.cloudinary.com/trizept/image/upload/v1628817192/samples/PHPLA%20-%20WebP/home-6_blzjut.webp" showRotate="true" alt="Feeling Blessed With A Smile" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomeContent;
