import React from 'react';

interface Props{
    text:string;
}

export function SingleTask(props:Props) {
  const { text } = props;

  return (
    <th>
      {text}
    </th>
  );
}
