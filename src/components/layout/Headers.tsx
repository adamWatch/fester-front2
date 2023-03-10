import React from 'react';
import { Menu } from './Menu/Menu';
import './Headers.css';

export function Headers() {
  return (
    <div className="Headers">
      <h1 className="main__baner">Motivator</h1>
      <Menu />
    </div>
  );
}
