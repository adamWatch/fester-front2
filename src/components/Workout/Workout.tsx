import React from 'react';
import { ExpCard } from '../common/ExpCard/ExpCard';

export function Workout() {
  return (
    <div className="container">
      <ExpCard currLvl={4} category="Workout" userName="Marek" currExp={100} expToLvl={500} executedTask={121} />
    </div>
  );
}
