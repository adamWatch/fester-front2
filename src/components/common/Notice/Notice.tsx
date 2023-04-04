import './Notice.css';

import React from 'react';

interface Props{
    text:string;
    color: string;
}

export function Notice(props:Props) {
  const { text, color } = props;

  return (
    <div className="notice">
      <span className={`text ${color}`}>{text}</span>
    </div>
  );
}
