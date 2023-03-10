import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Headers } from './components/layout/Headers';
import { Home } from './components/Home/Home';

import './App.css';
import { Workout } from './components/Workout/Workout';
import { Learning } from './components/Learning/Learning';
import { Nutrition } from './components/Nutrition/Nutrition';
import { Recreation } from './components/Recreation/Recreation';
import { Hobby } from './components/Hobby/Hobby';

export function App() {
  return (
    <div className="App">
      <Headers />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/workout" element={<Workout />} />
        <Route path="/learning" element={<Learning />} />
        <Route path="/nutrition" element={<Nutrition />} />
        <Route path="/recreation" element={<Recreation />} />
        <Route path="/hobby" element={<Hobby />} />
      </Routes>
    </div>
  );
}
