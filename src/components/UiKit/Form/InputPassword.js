import React, { useState } from 'react';
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";

export default function(props) {
  const [focus, setFocus] = useState(false);
  const [hide, setHide] = useState(true);
  function focusOnInput(event, focus, hide, setHide) {
    event.preventDefault();
    event.stopPropagation();
    let container = event.target.closest('.sp-input');
    let input = container.querySelector('input');
    if(focus) return setHide(!hide);
    input.focus();
  }

  let inputClass = [
    'sp-input',
    'sp-form-icon'
  ];

  if(focus) inputClass.push('focus');

  return (
    <div className={inputClass.join(' ')}>
      <FaRegEyeSlash
        onMouseDown={event => focusOnInput(event, focus, hide, setHide)}
        className={hide ? 'sp-icon' : 'uk-hidden'}
      />
      <FaRegEye
        onMouseDown={event => focusOnInput(event, focus, hide, setHide)}
        className={!hide ? 'sp-icon' : 'uk-hidden'}
      />
      <input
        type={hide ? 'password' : 'text'}
        placeholder={props.placeholder}
        onFocus={() => setFocus(true)}
        onBlur={() => { setFocus(false); setHide(true); }}
        defaultValue={props.get}
        onInput={ event => props.set(event.target.value) }
      />
      <span />
    </div>
  )
}