import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Headers } from './components/layout/Headers';
import { Home } from './components/Home/Home';

import './App.css';
import { Workout } from './components/Workout/Workout';

export function App() {
  return (
    <>
      <Headers />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/workout" element={<Workout />} />
      </Routes>
    </>
  );
}
