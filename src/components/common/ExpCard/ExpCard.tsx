import React from 'react';
import { ProgressBar } from '../ProgressBar/ProgressBar';

import './ExpCard.css';

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
          <h2 className="user_name">{userName}</h2>
        </div>
      </div>
      <div className="down_panel">
        <h2 className="category_name">
          <span>{category}</span>
          Experience
        </h2>
        <div className="exp_bar_container">
          <ProgressBar procentOfProgressBar="19%" />
        </div>
        <div className="curr_exp_container">
          <span className="curr_exp">{currExp}</span>
          /
          <span className="exp_to_lvl">{expToLvl}</span>
          EXP
        </div>
        <div className="executed_task_container">
          Executed Task:
          <span className="executed_task">{executedTask}</span>
        </div>
      </div>
    </div>
  );
}
