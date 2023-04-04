/* eslint-disable react/button-has-type */
import React from 'react';

import './Btn.css';

interface Props{
    text:string;
    typeBtn:'button'|undefined|'submit'|'reset';

}

export function Btn(props:Props) {
  const { text, typeBtn } = props;

  return <button className="btn" type={typeBtn}>{text}</button>;
}
