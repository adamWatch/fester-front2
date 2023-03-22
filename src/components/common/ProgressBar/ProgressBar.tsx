import React from 'react';

import './ProgressBar.css';

interface Props{
    procentOfProgressBar: string;
}

export function ProgressBar(props:Props) {
  const { procentOfProgressBar } = props;

  return (
    <div className="progress">
      <div className="color" style={{ width: procentOfProgressBar }} />
    </div>
  );
}
