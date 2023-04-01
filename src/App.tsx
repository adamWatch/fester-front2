/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Headers } from './components/layout/Headers';
import { Home } from './components/Home/Home';

import './App.css';
import { Workout } from './components/Workout/Workout';
import { Learning } from './components/Learning/Learning';
import { Nutrition } from './components/Nutrition/Nutrition';
import { Recreation } from './components/Recreation/Recreation';
import { Hobby } from './components/Hobby/Hobby';
import { LogginContext } from './components/Context/LogginContext';
import { Login } from './components/views/Login/Login';
import { Register } from './components/views/Register/Register';

export function App() {
  const [isLogged, setIsLogged] = useState(true);

  if (isLogged === false) {
    return (
      <LogginContext.Provider value={{ isLogged, setIsLogged }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </LogginContext.Provider>

    );
  }

  return (
    <div className="App">
      <Headers />
      <LogginContext.Provider value={{ isLogged, setIsLogged }}>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/workout" element={<Workout />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/recreation" element={<Recreation />} />
          <Route path="/hobby" element={<Hobby />} />
        </Routes>
      </LogginContext.Provider>
    </div>
  );
}
