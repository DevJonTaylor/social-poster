import React from 'react';
import { Switch, Route } from 'react-router-dom';
import
function PageToDisplay(props) {

  return (
    <div className={'sp-page'}>
      <Switch>
        <Route path={'/login'}
      </Switch>
    </div>
  )
}

export default PageToDisplay;