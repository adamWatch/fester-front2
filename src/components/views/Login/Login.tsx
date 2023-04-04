import React, { useContext, useState, SyntheticEvent } from 'react';
import { Link } from 'react-router-dom';
import { LogginContext } from '../../Context/LogginContext';

import '../../styles/LoginRegister.css';

export function Login() {
  const { isLogged, setIsLogged } = useContext(LogginContext);

  const [form, setForm] = useState({
    email: '',
    password: '',

  });
  const updateForm = (key:string, value:any) => {
    setForm((form) => ({
      ...form,
      [key]: value,
    }));
  };

  const goLogin = (e:SyntheticEvent) => {
    e.preventDefault();

    setIsLogged(!isLogged);
  };

  return (
    <div className="login_view">
      <h1 className="baner">Motivator</h1>
      <h2>Log In</h2>
      <form className="login_form" onSubmit={goLogin}>

        <label htmlFor="email">
          Email:
          <input type="text" id="email" name="email" required value={form.email} onChange={(e) => updateForm('email', e.target.value)} />
        </label>
        <label htmlFor="password">
          Password:
          <input type="password" id="password" name="password" required value={form.password} onChange={(e) => updateForm('password', e.target.value)} />
        </label>
        <button type="submit">Log</button>
      </form>
      <div className="" />
      You not have account Please
      {' '}
      <Link to="/register">Register</Link>
    </div>
  );
}
