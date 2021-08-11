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
            <ModalImage small="https://res.cloudinary.com/trizept/image/upload/v1594504893/rsz_rsz_bg-1_f3paxc-min_vwooyb_igibdd.jpg" large="https://res.cloudinary.com/trizept/image/upload/v1594422060/rsz_bg-1_f3paxc-min_vwooyb.jpg" showRotate="true" alt="When troubles crossed path on you" />
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
            <ModalImage small="https://res.cloudinary.com/trizept/image/upload/v1594504947/rsz_rsz_bg-2_f2gy1t-min_amvsdt_ayi1zm.jpg" large="https://res.cloudinary.com/trizept/image/upload/v1594422062/rsz_bg-2_f2gy1t-min_amvsdt.jpg" showRotate="true" alt="Hope Is Never Forgotten" />
          </Col>
        </Row>
        <Row style={{ marginBottom: '30px' }}>
          <Col xs={12} sm={12} md={6} lg={6} xl={6}>
            <ModalImage small="https://res.cloudinary.com/trizept/image/upload/v1594504978/rsz_rsz_1bg-3_qpatbi-min_zihncf_c9pzsk.jpg" large="https://res.cloudinary.com/trizept/image/upload/v1594422064/rsz_1bg-3_qpatbi-min_zihncf.jpg" showRotate="true" alt="PHPLA The Acronym Of Help" />
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
            <ModalImage small="https://res.cloudinary.com/trizept/image/upload/v1594505011/rsz_bg-4_pj21gx_jecvpg.jpg" large="https://res.cloudinary.com/trizept/image/upload/v1594410100/bg-4_pj21gx.jpg" showRotate="true" alt="Recovery Is Forthcoming" />
          </Col>
        </Row>
        <Row style={{ marginBottom: '30px' }}>
          <Col xs={12} sm={12} md={6} lg={6} xl={6}>
            <ModalImage small="https://res.cloudinary.com/trizept/image/upload/v1594505048/rsz_bg-5_kyfu1r_kgbndg.jpg" large="https://res.cloudinary.com/trizept/image/upload/v1594410100/bg-5_kyfu1r.jpg" showRotate="true" alt="An Afterthought Of Joy" />
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
            <ModalImage small="https://res.cloudinary.com/trizept/image/upload/v1594410101/bg-6_tk4opq.jpg" large="https://res.cloudinary.com/trizept/image/upload/v1594410101/bg-6_tk4opq.jpg" showRotate="true" alt="Feeling Blessed With A Smile" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomeContent;
