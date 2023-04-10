import React from 'react';

interface Props{
    id:string;
    taskText:string;
    dificultySelect:string;
    routineSelect:string;
    exp:string;
    delete:any;
}

export function EditTableItem(props:Props) {
  const {
    id, taskText, dificultySelect, routineSelect, exp, delete: deleteItem,
  } = props;

  return (
    <tr id={id}>
      <td>
        {taskText}
      </td>
      <td>
        {dificultySelect}
      </td>
      <td>
        {exp}
        exp
      </td>
      <td>
        {routineSelect}
      </td>

      <td>
        <button type="button" onClick={() => { deleteItem(id); }}>Delete</button>
      </td>

    </tr>

  );
}
