import HomePage from 'page/Home/HomePage';
import WelcomeRouter from 'page/WelcomePage';
import React from 'react';

import { Redirect } from 'react-router-dom';

interface props {}

const AuthRouter: React.FC<props> = (props) => {
  return (
    // <WelcomeRouter />
    <Redirect
      to={{
        pathname: '/',
      }}
    />
  );
};

export default AuthRouter;
