import React from 'react';
import violin from './violin.png';
import blackcat from './blackcat.png';

const Header = (props) => (
  <header className="row">
    <div className="col-md-5">
      <img src={blackcat} className="logo" alt="logo" />
    </div>
    <div className="col-md-7 mt-5">
      <p className="titletop">n e k o _ j i t a</p>
      <p className="titlebottom">{props.subtitle}</p>
    </div>
  </header>
);

export default Header;