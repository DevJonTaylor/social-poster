import React from 'react';
import { Link } from 'react-router-dom';
function NavBarLoggedOut(props) {
  // TODO:  Create a button component
  // transitionend webkitTransitionend
  return (
    <nav className={'not-user uk-grid-collapse uk-child-width-1-2'} uk-grid={''}>
      <Link to={'/login'}>Login</Link>
      <Link to={'/register'}>Register</Link>
    </nav>
  )
}

export default NavBarLoggedOut;