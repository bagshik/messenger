import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Users from './User/Users';
import Messages from './Message/Messages';

const Root = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Router>
        <div id="layout">
          <Route component={Users} />
          <Route component={Messages} />
        </div>
      </Router>
    </React.Fragment>
  );
};

export default Root;
