

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreditForm from './components/CreditCardForm';

import VideoKYC from './components/VideoKYC';

import ThankYouPage from './components/ThankyouForm';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={CreditForm} />
        <Route path="/video-kyc" component={VideoKYC} />
        <Route path="/thank-you" component={ThankYouPage} />
      </Switch>
    </Router>
  );
};

export default App;
