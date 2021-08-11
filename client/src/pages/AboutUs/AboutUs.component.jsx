import React from 'react';
import { Helmet } from 'react-helmet';
import AboutUsContent from '../../components/AboutUsContent/AboutUsContent.component';

const AboutUs = () => {
  return (
    <div>
      <Helmet>
        <title>PHPLA | About Us</title>
      </Helmet>
      <AboutUsContent />
    </div>
  );
};

export default AboutUs;
