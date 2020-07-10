import React from 'react';
import { Link } from 'react-router-dom';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact';
import { Nav, Image } from 'react-bootstrap';
import Slide from 'react-reveal/Slide';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhoneAlt, faFax } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Footer.styles.css';

const Footer = () => {
  return (
    <MDBFooter className="page-footer font-small pt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow className="align-items-center">
          <MDBCol md="6" lg="7" xl="7">
            <Image src="https://res.cloudinary.com/trizept/image/upload/v1594423096/rsz_footer-logo_gcdoxe_5f7a81b06ed16ddcc1e338e32a73352c_nkjrbl-min_qgj9wr.png" height="100" width="300" fluid alt="Footer Logo" className="d-inline-block align-top logo" />
            <p style={{ marginTop: '20px', marginLeft: '5px' }}>
              People Helping People In Los Angeles Inc. (PHPLA) is a 501(c)(3) non-profit organization wholeheartedly dedicated to accomplishing one overall goal: helping those in need.
            </p>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="6" lg="5" xl="5">
            <h5 className="text-uppercase font-weight-bold">
              Contact
            </h5>
            <hr className="accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: '90px', background: 'black' }} />
            <ul className="list-unstyled" style={{ fontSize: '15px' }}>
              <li>
                <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: '10px' }} />
                <a href="https://www.google.com/maps/dir//people+helping+people+in+los+angeles+inc/data=!4m8!4m7!1m0!1m5!1m1!1s0x80c2c79e0409138f:0x50a63f61975f8a77!2m2!1d-118.2745293!2d34.057139899999996" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>
                  1930 Wilshire Blvd Ste 506 Los Angeles, CA 90057
                </a>
              </li>
              <li>
                <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '10px' }} />
                <a href="mailto:info@phplosangeles.org" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>
                  info@phplosangeles.org
                </a>
              </li>
              <li>
                <FontAwesomeIcon icon={faPhoneAlt} style={{ marginRight: '10px' }} />
                <a href="tel:833-467-4752" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>
                  (833) 467-4752
                </a>
              </li>
              <li>
                <FontAwesomeIcon icon={faFax} style={{ marginRight: '10px' }} />
                <a href="tel:818-812-6590" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>
                  (818) 812-6590
                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <hr />
      <div className="text-center">
        <ul className="list-unstyled list-inline">
          <Slide left>
            <li className="list-inline-item">
              <a href="https://www.facebook.com/PHPinLA" target="_blank" rel="noopener noreferrer" className="btn-floating btn-lg mx-1">
                <FontAwesomeIcon icon={faFacebook} className="logo-facebook" style={{ color: '#4267B2', fontSize: '32px' }} />
              </a>
            </li>
          </Slide>
          <Slide left>
            <li className="list-inline-item">
              <a href="https://twitter.com/PHPinLA" target="_blank" rel="noopener noreferrer" className="btn-floating btn-lg mx-1">
                <FontAwesomeIcon icon={faTwitter} className="logo-twitter" style={{ color: '#1DA1F2', fontSize: '32px' }} />
              </a>
            </li>
          </Slide>
          <Slide right>
            <li className="list-inline-item">
              <a href="https://m.youtube.com/channel/UCGYBwM805xYHlfyj6rOm16Q/?guided_help_flow=5" target="_blank" rel="noopener noreferrer" className="btn-floating btn-lg mx-1">
                <FontAwesomeIcon icon={faYoutube} className="logo-youtube" style={{ color: '#FF0000', fontSize: '32px' }} />
              </a>
            </li>
          </Slide>
          <Slide right>
            <li className="list-inline-item">
              <a href="https://www.linkedin.com/in/norberto-mantohac-58208a1b1?trk=people-guest_people_search-card" target="_blank" rel="noopener noreferrer" className="btn-floating btn-lg mx-1">
                <FontAwesomeIcon icon={faLinkedin} className="logo-linkedin" style={{ color: '#2867B2', fontSize: '32px' }} />
              </a>
            </li>
          </Slide>
        </ul>
      </div>
      <div className="footer-copyright text-center">
        <MDBContainer fluid>
          <MDBRow className="d-flex align-items-center">
            <MDBCol xs="12" sm="12" md="6" lg="8" xl="8" className="text-md-left">
              <p className="text-muted" style={{ fontSize: '14px', marginLeft: '5px' }}>
                &copy; Copyright {new Date().getFullYear()} People Helping People In Los Angeles Inc. All Rights Reserved. Designed by <a href="https://nmantohac-react-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer"><strong style={{ color: '#fe6902' }}>Vivid Stack</strong></a>
              </p>
            </MDBCol>
            <MDBCol xs="12" sm="12" md="6" lg="4" xl="4">
              <Nav className="justify-content-end footer-privacy-terms" style={{ marginTop: '-15px' }}>
                <Nav.Link as={Link} to="/privacy" className="text-muted link-privacy" style={{ color: 'black', fontSize: '14px' }}>
                  Privacy |
                </Nav.Link>
                <Nav.Link as={Link} to="/terms-conditions" className="text-muted link-terms" style={{ marginLeft: '-28px', color: 'black', fontSize: '14px' }}>
                  Terms and Conditions
                </Nav.Link>
              </Nav>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;
