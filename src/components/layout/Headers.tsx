import React from 'react';
import { Menu } from './Menu/Menu';
import './Headers.css';
import { Btn } from '../common/Btn/Btn';

export function Headers() {
  return (
    <div className="Headers">
      <div className="up__panel">
        <h1 className="main__baner">Motivator</h1>
        <div className="logging__btns">
          <Btn text="Sign up" typeBtn="button" />
          <Btn text="Log" typeBtn="button" />
        </div>
      </div>
      <Menu />
    </div>
  );
}
