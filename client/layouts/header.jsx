import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

class Header extends Component {
  render() {
    return (
      <div
        className={'row container-fluid'}
        style={{
          background: '#616161',
          color: 'white',
          fontWeight: '800',
          fontSize: '16px', margin: 0,
          padding: '10px',
          textAlign: 'left',
          position: 'fixed',
          top: 0,
          width: '100%',
          minHeight: '35px'
        }}
      >
        <div className={'col-xs-10 container-fluid'}>
          This is the header
        </div>

        <div className={'col-xs-1 container-fluid'} style={{textAlign: 'right'}}>
          <Button>
            <Link to="/" style={{textDecoration: 'none'}}> Home </Link>
          </Button>
        </div>

        <div className={'col-xs-1 container-fluid'} style={{textAlign: 'left'}}>
          <Button>
            <Link to="/recipe-book" style={{textDecoration: 'none'}}> Recipes </Link>
          </Button>
        </div>
      </div>
    )
  }
}

export default Header;