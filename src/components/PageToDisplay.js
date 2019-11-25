import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import NotFound from "./Pages/NotFound";
import { TransitionGroup, CSSTransition } from "react-transition-group";

function PageToDisplay(props) {

  return (
    <div className={'sp-page'}>
      <Route exact={'/'} render={ () => <Redirect to={'/login'}/>} />
      <TransitionGroup>
        <CSSTransition key={props.location.key} timeout={700} classNames={'sp-content'}>
          <Switch location={props.location}>
            <Route path={'/login'} component={Login} />
            <Route path={'/register'} component={Register} />
            <Route render={NotFound} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  )
}

export default PageToDisplay;