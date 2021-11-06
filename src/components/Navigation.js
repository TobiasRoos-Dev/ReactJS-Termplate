import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div id='mainnav'>
      <Link to='/'>Home</Link>
      <Link to='/asd'>NoMatch</Link>
    </div>
  );
}

export default Navigation;
