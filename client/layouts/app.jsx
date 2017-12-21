import React, { Component } from 'react';

import Routes from './routes';
import Header from './header';
import Footer from './footer';

class App extends Component {
  render() {
    return (
      <div id="container">
        <Header id="header" />
        <Routes id="body" />
       	<Footer id="footer" />
      </div>
    )
  }
}

export default App;