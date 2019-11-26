import React from 'react';


export default function(props) {
  return (
    <form className={'uk-form'} {...props}>
      {props.children}
    </form>
  )
}