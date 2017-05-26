import React, {Component} from 'react';

import Navbar from './Navbar';

import NavbarContainer from '../containers/NavbarContainer';
// import PlayerContainer from '../containers/PlayerContainer';

export default function App ({ children }) {
  return (
    <div id="main" className="container-fluid">
      <div className="col-xs-12 col-md-12 col-lg-12 col-xl-12">
        <Navbar />
      <div className="col-xs-12 col-md-12 col-lg-12 col-xl-12">
        { children }
      </div>
      {/*<PlayerContainer />*/}
      </div>
    </div>
  );
}
