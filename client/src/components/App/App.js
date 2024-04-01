import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const ScrollToTop = lazy(() => import('../ScrollToTop/ScrollToTop.component'));
const Navbar = lazy(() => import('../Navbar/Navbar.component'));
const ChatBotFeature = lazy(() => import('../../containers/ChatBot/ChatBot.component'));
const Home = lazy(() => import('../../pages/Home/Home.component'));
const AboutUs = lazy(() => import('../../pages/AboutUs/AboutUs.component'));
const Services = lazy(() => import('../../pages/Services/Services.component'));
const Help = lazy(() => import('../../pages/Help/Help.component'));
const Privacy = lazy(() => import('../../pages/Privacy/Privacy.component'));
const TermsAndConditions = lazy(() => import('../../pages/Terms/Terms.component'));
const Footer = lazy(() => import('../Footer/Footer.component'));

const renderLoader = () => <div />;

const App = () => (
  <Router>
    <Suspense fallback={renderLoader()}>
      <ScrollToTop />
      <Navbar />
      <ChatBotFeature />
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/about-us" component={AboutUs} />
      <Route exact path="/services" component={Services} />
      <Route exact path="/help" component={Help} />
      <Route exact path="/privacy" component={Privacy} />
      <Route exact path="/terms-conditions" component={TermsAndConditions} />
      <Footer />
    </Suspense>
  </Router>
);

export default App;
