import React, {Component} from 'react';
import {render} from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import App from './layouts/app';

// Ant Design
import 'antd/dist/antd.css';

Meteor.startup(() => {
  render(
    <BrowserRouter>      
      <App />
    </BrowserRouter>,
    document.getElementById('app')
  );
});

