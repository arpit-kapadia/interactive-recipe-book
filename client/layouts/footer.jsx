import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div
        className={'row container-fluid'}
        style={{
          background: '#717171',
          color: 'white',
          fontWeight: '600', 
          ontSize: '12px',
          margin: 0,
          position: 'fixed',
          bottom: 0,
          width: '100%',
          padding: '10px',
          textAlign: 'center',
          minHeight: '20px'
        }}
      >
        This is the Footer
      </div>
    )
  }
}

export default Header;