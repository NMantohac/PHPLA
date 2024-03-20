import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Image, Navbar, Nav, Button } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faHome, faUsers, faQuestionCircle, faHeart } from '@fortawesome/free-solid-svg-icons';
import './Navbar.styles.css';

function scrollFunction() {
  if (document.body.scrollTop > 75 || document.documentElement.scrollTop > 75) {
    document.querySelector('#navbar').style.padding = '2px 10px';
    document.querySelector('#navbar-logo').style.height = '70px';
    document.querySelector('#navbar-logo').style.width = '150px';
  } else {
    document.querySelector('#navbar').style.padding = '10px 10px';
    document.querySelector('#navbar-logo').style.height = '100px';
    document.querySelector('#navbar-logo').style.width = '220px';
  }
}

window.onscroll = function () { scrollFunction(); };

const ReactNavbar = () => {
  // Used to highlight the current page that the user is currently on in the navbar
  const location = useLocation();

  return (
    <div style={{ height: '130px' }}>
      <Navbar bg="light" expand="lg" sticky="top" id="navbar">

        <Navbar.Brand as={Link} to="/" style={{ marginLeft: '5px' }}>
          <Fade right>
            <Image src="https://res.cloudinary.com/trizept/image/upload/v1628817191/samples/PHPLA%20-%20WebP/navbar-logo_ta8nhw.webp" fluid alt="PHPLA Brand Logo" id="navbar-logo" className="d-inline-block align-top logo" />
          </Fade>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggle" />

        <Navbar.Collapse>
          <Nav activeKey="/" className="ml-auto">
            <ul className="navbar-ul">
              <li className="navbar-li">
                <Nav.Link href="tel:833-467-4752" className="navbar-phone nav-link">
                  <FontAwesomeIcon icon={faPhoneAlt} style={{ marginRight: '6px' }} />
                </Nav.Link>
              </li>
              <li className="navbar-li">
                <Nav.Link as={Link} to="/home" className={location.pathname === '/home' ? 'nav-link active navbar-home' : 'nav-link navbar-home'}>
                  <FontAwesomeIcon icon={faHome} style={{ marginRight: '6px' }} />
                  Home
                </Nav.Link>
              </li>
              <li className="navbar-li">
                <Nav.Link as={Link} to="/about-us" className={location.pathname === '/about-us' ? 'nav-link active navbar-about' : 'nav-link navbar-about'}>
                  <FontAwesomeIcon icon={faUsers} style={{ marginRight: '6px' }} />
                  About Us
                </Nav.Link>
              </li>
              <li className="navbar-li">
                <Nav.Link as={Link} to="/help" className={location.pathname === '/help' ? 'nav-link active navbar-help' : 'nav-link navbar-help'}>
                  <FontAwesomeIcon icon={faQuestionCircle} style={{ marginRight: '6px' }} />
                  Help
                </Nav.Link>
              </li>
              {/* <Nav.Link href="mailto:info@phplosangeles.org" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-dark" size="lg" className="navbar-help-button" style={{ marginTop: '-8px', borderRadius: '25px', fontSize: '18px' }}>
                  <FontAwesomeIcon icon={faQuestionCircle} style={{ marginRight: '6px' }} />
                  Help
                </Button>
              </Nav.Link> */}
              <Nav.Link href="https://donate.stripe.com/3cseV0cHD8oL3Xq3cc" target="_blank" rel="noopener noreferrer" style={{ fontSize: '18px' }}>
                <Button variant="outline-danger" size="lg" className="navbar-donate-button">
                  <FontAwesomeIcon icon={faHeart} style={{ marginRight: '10px' }} />
                  Donate
                </Button>
              </Nav.Link>
            </ul>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default ReactNavbar;
