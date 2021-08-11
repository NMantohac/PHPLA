import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ScrollToTop from '../ScrollToTop/ScrollToTop.component';
import Navbar from '../Navbar/Navbar.component';
import ChatBotFeature from '../../containers/ChatBot/ChatBot.component';
import Home from '../../pages/Home/Home.component';
import AboutUs from '../../pages/AboutUs/AboutUs.component';
import Help from '../../pages/Help/Help.component';
import Privacy from '../../pages/Privacy/Privacy.component';
import TermsAndConditions from '../../pages/Terms/Terms.component';
import Footer from '../Footer/Footer.component';

const App = () => (
  <Router>
    <ScrollToTop />
    <Navbar />
    <ChatBotFeature />
    <Route exact path="/" component={Home} />
    <Route exact path="/home" component={Home} />
    <Route exact path="/about-us" component={AboutUs} />
    <Route exact path="/help" component={Help} />
    <Route exact path="/privacy" component={Privacy} />
    <Route exact path="/terms-conditions" component={TermsAndConditions} />
    <Footer />
  </Router>
);

export default App;
