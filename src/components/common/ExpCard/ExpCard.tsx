import React, { useState } from 'react';
import { ExpHandle } from 'types';
import { ProgressBar } from '../ProgressBar/ProgressBar';

import './ExpCard.css';

interface Props {
  category: string;
  userName: string;
  currExp: number;
  executedTask: number;
}

export function ExpCard(props: Props) {
  const {
    category, userName, currExp, executedTask,
  } = props;

  const [categoryExp, setCategoryExp] = useState<ExpHandle>({
    currLvl: 1,
    currExp,
    expToLvl: 400,

  });
  const [progressBar, setProgressBar] = useState('0');

  const handleExp = (currExp:number, currLvl:number, expToLvl:number) => {
    const nextLvlIncrement = 50;
    let expToLvlIn = expToLvl;
    let currLvlIn = currLvl;
    let currExpIn = currExp;

    if (currExpIn > expToLvlIn) {
      while (currExpIn > expToLvlIn) {
        currExpIn -= expToLvlIn;
        expToLvlIn += nextLvlIncrement;
        currLvlIn++;
      }
      setCategoryExp(() => ({
        currLvl: currLvlIn,
        currExp: currExpIn,
        expToLvl: expToLvlIn,
      }));
      const progressPerc = String((currExpIn / expToLvlIn) * 100);
      const progressBarValue = `${progressPerc}%`;

      setProgressBar(progressBarValue);
    }
  };

  handleExp(categoryExp.currExp, categoryExp.currLvl, categoryExp.expToLvl);

  return (
    <div className="exp_card_container">
      <div className="upp_panel">
        <div className="curr_lvl_container">
          <span className="curr_lvl">{categoryExp.currLvl}</span>
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
          <ProgressBar procentOfProgressBar={progressBar} />
        </div>
        <div className="curr_exp_container">
          <span className="curr_exp">{categoryExp.currExp}</span>
          /
          <span className="exp_to_lvl">{categoryExp.expToLvl}</span>
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
