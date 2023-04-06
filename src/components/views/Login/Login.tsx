/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, {
  useContext, useState, SyntheticEvent, useEffect,
} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LogginContext } from '../../Context/LogginContext';

import '../../styles/LoginRegister.css';
import { Btn } from '../../common/Btn/Btn';
import { Notice } from '../../common/Notice/Notice';
import { validationForm } from '../../utils/validationForm';

export function Login() {
  const navigate = useNavigate();

  /* @ts-ignore */
  const [loggedIn, setLoggedIn] = useContext(LogginContext);

  const [notice, setNotice] = useState({
    isVisible: false,
    noticeText: '',
    noticeColor: '',
  });

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

  const goLogin = async (e:SyntheticEvent) => {
    e.preventDefault();
    const notice = validationForm('login', form);

    setNotice(() => ({
      isVisible: notice.isVisible,
      noticeText: notice.noticeText,
      noticeColor: notice.noticeColor,
    }));
    if (notice.noticeColor === 'red') return;
    const res = await fetch('http://localhost:3021/login', {
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

    if (data.noticeColor === 'green') {
      setNotice(() => ({
        isVisible: data.isVisible,
        noticeText: data.noticeText,
        noticeColor: data.noticeColor,
      }));
      setLoggedIn(() => ({
        isLog: true,
        idLog: data.id,
      }));

      navigate('/Home');
    }
  };

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

  return (
    <div className="login_view">
      <h1 className="baner">Motivator</h1>
      <h2>Log In </h2>
      <form className="login_form" onSubmit={goLogin}>

        <label htmlFor="email">
          Email:
          <input type="text" id="email" name="email" required value={form.email} onChange={(e) => updateForm('email', e.target.value)} />
        </label>
        <label htmlFor="password">
          Password:
          <input type="password" id="password" name="password" required value={form.password} onChange={(e) => updateForm('password', e.target.value)} />
        </label>
        <Btn text="Log" typeBtn="submit" />
      </form>
      <div className="" />
      You not have account Please
      {' '}
      <Link className="link" to="/register">Register</Link>
      {notice.isVisible && <Notice text={notice.noticeText} color={notice.noticeColor} />}
    </div>
  );
}
