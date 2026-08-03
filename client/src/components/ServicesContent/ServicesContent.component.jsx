import React from 'react';
import { Container, Row, Col, Accordion, Card, Button} from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Slide from 'react-reveal/Slide';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './ServicesContent.styles.css';

const images_1 = [
  'https://res.cloudinary.com/trizept/image/upload/v1724287352/Program%20Slideshow/IMG_7688_tkwwnl.jpg',
  'https://res.cloudinary.com/trizept/image/upload/v1724287353/Program%20Slideshow/IMG_7695_wk4pld.jpg',
  'https://res.cloudinary.com/trizept/image/upload/v1724287352/Program%20Slideshow/IMG_7698_gu7wel.jpg',
];

const images_2 = [
  'https://res.cloudinary.com/trizept/image/upload/v1785640370/1_flfuzi.jpg',
  'https://res.cloudinary.com/trizept/image/upload/v1785640370/2_dwzc2f.jpg',
  'https://res.cloudinary.com/trizept/image/upload/v1785640371/3_xcaudl.jpg',
  'https://res.cloudinary.com/trizept/image/upload/v1785640370/4_vty5ze.jpg',
  'https://res.cloudinary.com/trizept/image/upload/v1785640374/5_ssinxu.jpg',
  'https://res.cloudinary.com/trizept/image/upload/v1785640375/6_scgudg.jpg',
  'https://res.cloudinary.com/trizept/image/upload/v1785640381/7_spn3lj.jpg',
  'https://res.cloudinary.com/trizept/image/upload/v1785640375/8_m1hbpl.jpg',
  'https://res.cloudinary.com/trizept/image/upload/v1785640377/9_ervoue.jpg',
  'https://res.cloudinary.com/trizept/image/upload/v1785640380/10_t9hmce.jpg',
];

const ServicesContent = () => {
  return (
    <div>
      <Container fluid>
        <Row style={{ borderStyle: 'solid', borderColor: 'orange'}}>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} className="services-text-col">
            <Slide down>
              <center><h2 className="services-title">Moving Expenses for Evicted Tenants</h2></center>
            </Slide>
            <h3>Please submit the following:</h3>
              <ul>
                <li>Picture Identification</li>
                <li>Judgment - Unlawful Detainer (UD-110)</li>
                <li>Proof of Old & New Address</li>
                <li>Must live in and transfer within the <b>Los Angeles City</b> area only</li>
              </ul>
          </Col>
        </Row>  
        <Row style={{ marginTop: '20px', marginBottom: '20px' }}>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <Accordion>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    <Slide right>
                      <div style={{ color: 'darkorange', fontSize: '32px', fontWeight: 'bold', fontFamily: 'Amatic SC'}}> Location #1 - 7/09/24 (Click for Images)</div>
                    </Slide>               
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Swiper navigation={true} pagination={{ clickable: true }} autoplay={{ delay: 4000, disableOnInteraction: false }} 
                    modules={[Navigation, Pagination, Autoplay]} className="swiper-1">
                    {images_1.map((src, index) => (
                      <SwiperSlide key={index}>
                        <img 
                          src={src} 
                          alt={`Slide ${index + 1}`} 
                          style={{ width: '100%', height: 'auto', display: 'block' }} 
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    <Slide right>
                      <div style={{ color: 'darkorange', fontSize: '32px', fontWeight: 'bold', fontFamily: 'Amatic SC'}}> Location #2 - 6/30/26 (Click for Images)</div>
                    </Slide>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Swiper navigation={true} pagination={{ clickable: true }} autoplay={{ delay: 4000, disableOnInteraction: false }} 
                    modules={[Navigation, Pagination, Autoplay]} className="swiper-2">
                    {images_2.map((src, index) => (
                      <SwiperSlide key={index}>
                        <img 
                          src={src} 
                          alt={`Slide ${index + 1}`} 
                          style={{ width: '100%', height: 'auto', display: 'block' }} 
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>
        </Row>
        <Row style={{ borderStyle: 'solid', borderColor: 'orange'}}>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} className="services-text-col">
            <Slide down>
              <center><h2 className="services-title">Food Distribution (Pending)</h2></center>
            </Slide>
          </Col>
        </Row>  
        <Row style={{ marginTop: '30px', marginBottom: '30px'}}>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} className="services-text-col">
            <center><h3>For more information, please call:</h3></center>
            <center><h4>(833) 467-4752</h4></center>
            <center><h4>(833) GoPHPLA</h4></center>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ServicesContent;
