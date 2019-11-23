import React from 'react';
import { Link } from 'react-router-dom';
function NavBarLoggedOut(props) {
  return (
    <nav className={'not-user uk-grid-collapse uk-child-width-1-2'} uk-grid={''}>
      <Link to={'/login'} className={'nav-link'}>Login</Link>
      <Link to={'/register'} className={'nav-link'}>Register</Link>
    </nav>
  )
}

export default NavBarLoggedOut;