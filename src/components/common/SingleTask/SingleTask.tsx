import React from 'react';

interface Props{
  id:string;
  taskText:string;
  dificultySelect:string;
  routineSelect:string;
  exp:string;
  updateTask:any;
}

export function SingleTask(props:Props) {
  const {
    id, taskText, dificultySelect, routineSelect, exp, updateTask: taskDone,
  } = props;

  return (
    <tr id={id}>
      <td>{taskText}</td>
      <td>{dificultySelect}</td>
      <td>{exp}</td>
      <td>{routineSelect}</td>
      <td>
        <button type="button" onClick={() => { taskDone(exp); }}>Done</button>
      </td>

    </tr>
  );
}
