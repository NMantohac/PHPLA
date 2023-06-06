import React from 'react';
import { Helmet } from 'react-helmet';
import AboutUsContent from '../../components/AboutUsContent/AboutUsContent.component';

const AboutUs = () => {
  <Helmet>
    <title>{AboutUs}</title>
    <link rel="canonical" href="https://www.phplosangeles.org/about-us" />
  </Helmet>
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
