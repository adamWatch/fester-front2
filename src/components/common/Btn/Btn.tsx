import React from 'react';

import './Btn.css';

interface Props{
    text:string;
}

export function Btn(props:Props) {
  const { text } = props;

  return <button className="btn" type="button">{text}</button>;
}
