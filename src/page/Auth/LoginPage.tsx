import React, { useState } from 'react';
import './LoginPage.scss';

import { useDispatch } from 'react-redux';
import { AuthAction } from '@redux/actions';

interface props {}

const Auth: React.FC<props> = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleOnClickLogin = () => {
    // console.log('[LoginPage] dispatching login');
    dispatch(AuthAction.initiateLogin(email, password));
  };

  return (
    <div className="LoginPage">
      <div className="container">
        <p className="title">LOGIN</p>
        <input onChange={(e) => setEmail(e.target.value)} />
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleOnClickLogin}>로그인</button>
      </div>
    </div>
  );
};

export default Auth;
