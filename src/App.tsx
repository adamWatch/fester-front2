/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useContext, useState, createContext } from 'react';
import { Routes, Route } from 'react-router-dom';

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
  const [loggedIn, setLoggedIn] = useState({
    isLog: false,
    idLog: '',
  });
  return (
    <div className="App">

      <LogginContext.Provider value={[loggedIn, setLoggedIn]}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Home" element={<Home />} />
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
