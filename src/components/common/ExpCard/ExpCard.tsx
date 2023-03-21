import React from 'react';

interface Props{
    currLvl:number;
    category:string;
    userName:string;
    currExp:number;
    expToLvl:number;
    executedTask:number;
}

export function ExpCard(props:Props) {
  const {
    currLvl, category, userName, currExp, expToLvl, executedTask,
  } = props;

  return (
    <div className="exp_card_container">
      <div className="upp_panel">
        <div className="curr_lvl_container">
          <span className="curr_lvl">{currLvl}</span>
        </div>
        <div className="user_container">
          <h2>{userName}</h2>
        </div>
      </div>
      <h2>
        {category}
        {' '}
        Experience
      </h2>
      <div className="exp_bar_container">
        <div className="exp_bar">
          Exp Bar to implement
        </div>
      </div>
      <div className="curr_exp_container">
        <span className="curr_exp">{currExp}</span>
        /
        <span className="curr_exp">{expToLvl}</span>
        EXP
      </div>
      <div className="executed_task_container">
        Executed Task:
        <span className="executed_task">{executedTask}</span>
      </div>
    </div>
  );
}
