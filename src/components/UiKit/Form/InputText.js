import React, { useState } from 'react';

export default function(props) {
  const [inputClass, setClass] = useState(['sp-input']);

  return (
    <div className={props.className ? `${props.className} ${inputClass}` : inputClass}>
      {props.children}
      <input
        type={'text'}
        placeholder={props.placeholder}
        onFocus={() => setClass('sp-input focus')}
        onBlur={() => setClass('sp-input')}
        value={props.get}
        onChange={ event => props.set(event.target.value) }
      />
      <span />
    </div>
  )
}