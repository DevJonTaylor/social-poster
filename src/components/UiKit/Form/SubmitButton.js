import React from 'react';

export default function(props) {
  return (
    <div className={'sp-button sp-flex-center'}>
      <button disabled={props.disabled} className={'sp-1-2'} type={'submit'}>
        {props.text}
      </button>
    </div>
  )
}