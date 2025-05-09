import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhoneAlt, faFax } from '@fortawesome/free-solid-svg-icons';
import Flip from 'react-reveal/Flip';
import './HelpInfo.styles.css';

const HelpInfo = () => {
  return (
    <div>
      <ul className="help-ul">
        <Flip top>
          <li className="help-li help-address">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="help-icon" />
            <h1 style={{ fontSize: '24px' }}>Address</h1>
            <p style={{ fontSize: '16px' }}>7900 S. Western Avenue Ste 6</p>
            <p style={{ marginTop: '-20px', fontSize: '16px' }}>Los Angeles, CA 90047</p>
          </li>
        </Flip>
        <Flip top>
          <li className="help-li help-email">
            <FontAwesomeIcon icon={faEnvelope} className="help-icon" />
            <h1 style={{ fontSize: '24px' }}>Email</h1>
            <p style={{ fontSize: '16px' }}>info@phpla.org</p>
          </li>
        </Flip>
        <Flip top>
          <li className="help-li help-phone">
            <FontAwesomeIcon icon={faPhoneAlt} className="help-icon" />
            <h1 style={{ fontSize: '24px' }}>Phone</h1>
            <p style={{ fontSize: '16px' }}>(833) 467-4752</p>
          </li>
        </Flip>
        <Flip top>
          <li className="help-li help-fax">
            <FontAwesomeIcon icon={faFax} className="help-icon" />
            <h1 style={{ fontSize: '24px' }}>Fax</h1>
            <p style={{ fontSize: '16px' }}>(818) 357-2228</p>
          </li>
        </Flip>
      </ul>
    </div>
  );
};

export default HelpInfo;
