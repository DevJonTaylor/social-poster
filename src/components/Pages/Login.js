import React from 'react';

import Card from '../UiKit/Card';

function submitForm(event) {
  event.preventDefault();
  event.stopPropagation();
}

export default function(props) {
  // TODO:  Create Input Icon
  // TODO:  View Password Button
  // TODO:  Submit Button
  return (
    <div className={'sp-content sp-login'}>
      <h1 className={'sp-h1'}>LOGIN</h1>
      <div className={'sp-flex-center uk-child-width-1-3'} uk-grid={''}>
        <Card>
          <form className={'uk-form'} onSubmit={submitForm}>
            <input type={'text'} name={'blah'} className={'uk-input'}/>
          </form>
        </Card>
      </div>
    </div>
  )
}