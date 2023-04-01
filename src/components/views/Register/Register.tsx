import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Btn } from '../../common/Btn/Btn';
import './Register.css';

export function Register() {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',

  });
  const updateForm = (key:string, value:any) => {
    setForm((form) => ({
      ...form,
      [key]: value,
    }));
  };

  return (
    <div className="login_view">
      <h1 className="baner">Motivator</h1>
      <h2>Log In</h2>
      <form className="login_form">
        <label htmlFor="username">
          Username:
          <input type="text" id="username" name="username" required value={form.username} onChange={(e) => updateForm('username', e.target.value)} />
        </label>

        <label htmlFor="email">
          Email:
          <input type="text" id="email" name="email" required value={form.email} onChange={(e) => updateForm('email', e.target.value)} />
        </label>
        <label htmlFor="password">
          Password:
          <input type="password" id="password" name="password" required value={form.password} onChange={(e) => updateForm('password', e.target.value)} />
        </label>
        <Btn text="Login" />
      </form>
      <div className="" />
      You have account
      {' '}
      <Link to="/">Log In</Link>
    </div>
  );
}
