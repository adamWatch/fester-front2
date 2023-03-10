import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

export function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">Home</Link>
      <Link to="/workout">Workout</Link>
      <Link to="/learning">Learning</Link>
      <Link to="/nutrition">Nutrition</Link>
      <Link to="/recreation">Recreation</Link>
      <Link to="/hobby">Hobby</Link>
    </nav>
  );
}
