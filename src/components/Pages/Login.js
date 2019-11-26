import React, { useState } from 'react';

import Card from '../UiKit/Card';
import { Form, User, Password, Submit } from '../UiKit/Form';

function submitForm(event) {
  event.preventDefault();
  event.stopPropagation();
}

export default function(props) {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  function updateReady() {
    let userIsReady = user !== '';
    let passIsReady = pass !== '';
    return (userIsReady && passIsReady);
  }

  function updateUser(value) {
    setUser(value);
    updateReady();
  }

  function updatePass(value) {
    setPass(value);
    updateReady();
  }

  return (
    <div className={'sp-content sp-login'}>
      <h1 className={'sp-h1'}>LOGIN</h1>
      <div className={'sp-container'}>
        <Card>
          <Form onSubmit={submitForm}>
           <User get={user} set={updateUser} placeholder={'Username'} />
           <Password get={pass} set={updatePass} placeholder={'Password'} />
           <Submit text={'Login'} disabled={!updateReady()}/>
          </Form>
        </Card>
      </div>
    </div>
  )
}