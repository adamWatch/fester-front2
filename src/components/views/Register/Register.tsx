import React, { useState, SyntheticEvent, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Btn } from '../../common/Btn/Btn';
import '../../styles/LoginRegister.css';
import { Notice } from '../../common/Notice/Notice';
import { validationForm } from '../../utils/validationForm';

export function Register() {
  const [notice, setNotice] = useState({
    isVisible: false,
    noticeText: '',
    noticeColor: '',
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setNotice(() => ({
        isVisible: false,
        noticeText: '',
        noticeColor: '',
      }));
    }, 3000);

    return () => clearTimeout(timer);
  }, [notice]);

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

  const sendForm = async (e:SyntheticEvent) => {
    e.preventDefault();
    const notice = validationForm('register', form);
    setNotice(() => ({
      isVisible: notice.isVisible,
      noticeText: notice.noticeText,
      noticeColor: notice.noticeColor,
    }));
    if (notice.noticeColor === 'red') return;

    const res = await fetch('http://localhost:3021/register', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(form),

    });

    const data = await res.json();

    setNotice(() => ({
      isVisible: data.isVisible,
      noticeText: data.noticeText,
      noticeColor: data.noticeColor,
    }));
  };

  return (
    <div className="login_view">
      <h1 className="baner">Motivator</h1>
      <h2 className="type_baner">Register</h2>
      <form className="login_form" onSubmit={sendForm}>
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
        <Btn text="Register" typeBtn="submit" />
      </form>
      <div className="" />
      You have account
      {' '}
      <Link className="link" to="/">Log In</Link>
      {notice.isVisible && <Notice text={notice.noticeText} color={notice.noticeColor} />}
    </div>

  );
}
