import React from 'react';
import NavBarLoggedIn from "./NavBarComponents/LoggedIn";
import NavBarLoggedOut from "./NavBarComponents/LoggedOut";

function NavBar(props) {
  return (
    <div className={'sp-nav'}>
      {!props.isUserLoggedIn ? ( <NavBarLoggedOut/> ) : ( <NavBarLoggedIn/> )}
    </div>
  )
}

export default NavBar;