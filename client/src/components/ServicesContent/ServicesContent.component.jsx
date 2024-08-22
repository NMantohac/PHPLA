import React from 'react';
import { Container, Row, Col, Carousel, Image} from 'react-bootstrap';
import Slide from 'react-reveal/Slide';
import './ServicesContent.styles.css';


const ServicesContent = () => {
  return (
    <div>
      <Container fluid>
        <Row style={{ borderStyle: 'solid', borderColor: 'orange'}}>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} className="services-text-col">
            <Slide down>
              <center><h2 className="services-title">Moving Expenses for Evicted Tenants</h2></center>
              <h3>Please submit the following:</h3>
              <ul>
                <li>Picture Identification</li>
                <li>Summons, Unlawful Detainer - Eviction</li>
                <li>Proof of New Address</li>
                <li>Must live in and transfer within the <b>Los Angeles City</b> area only</li>
              </ul>
              <p><b>Note:</b> We are not responsible for any property damages</p>
            </Slide>
          </Col>
        </Row>  
        <Row style={{ marginTop: '20px', marginBottom: '20px' }}>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <Carousel>
              <Carousel.Item>
                <Image src="https://res.cloudinary.com/trizept/image/upload/v1724287353/Program%20Slideshow/IMG_7684_ysimvl.jpg" rounded fluid />
              </Carousel.Item>
              <Carousel.Item>
                <Image src="https://res.cloudinary.com/trizept/image/upload/v1724287353/Program%20Slideshow/IMG_7695_wk4pld.jpg" rounded fluid />
              </Carousel.Item>
              <Carousel.Item>
                <Image src="https://res.cloudinary.com/trizept/image/upload/v1724287352/Program%20Slideshow/IMG_7688_tkwwnl.jpg" rounded fluid />
              </Carousel.Item>
              <Carousel.Item>
                <Image src="https://res.cloudinary.com/trizept/image/upload/v1724287352/Program%20Slideshow/IMG_7698_gu7wel.jpg" rounded fluid />
              </Carousel.Item>
            </Carousel>
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
