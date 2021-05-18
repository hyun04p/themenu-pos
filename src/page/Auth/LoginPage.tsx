import React, { useState } from 'react';
import './LoginPage.scss';

import { useDispatch, useSelector } from 'react-redux';
import { AuthAction } from '@redux/actions';
import { RootState } from '@redux';
import { Redirect } from 'react-router-dom';
import LandingImg from 'asset/Landing.jpg';

interface props {}

const Auth: React.FC<props> = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const loggedin = useSelector((state: RootState) => state.Auth.loggedin);
  const dispatch = useDispatch();

  const handleOnClickLogin = () => {
    // console.log('[LoginPage] dispatching login');
    dispatch(AuthAction.initiateLogin(email, password));
  };

  if (loggedin)
    return (
      <Redirect
        to={{
          pathname: '/dashboard',
        }}
      />
    );

  return (
    <div className="LoginPage">
      <img src={LandingImg} />
      <div className="right">
        <div className="formContainer">
          <h2>
            <span>더MENU</span> 사장님 로그인
          </h2>
          <div className="form">
            <input
              onChange={(e) => setEmail(e.target.value)}
              placeholder="이메일"
            />
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="비밀번호"
            />
            <button onClick={handleOnClickLogin}>로그인</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
