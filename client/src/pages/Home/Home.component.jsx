import React from 'react';
import { Helmet } from 'react-helmet';
import HomeJumbotron from '../../components/HomeJumbotron/HomeJumbotron.component';
import HomeContent from '../../components/HomeContent/HomeContent.component';
import HomeMessage from '../../components/HomeMessage/HomeMessage.component';
import './Home.styles.css';

const Home = () => {
  <Helmet>
    <title>{Home}</title>
    <link rel="canonical" href="https://www.phplosangeles.org/" />
  </Helmet>
  return (
    <div>
        <HomeJumbotron />
        <HomeMessage />
        <hr />
        <HomeContent />
    </div>
  );
};

export default Home;
