import React from 'react';
import { Redirect } from 'react-router-dom';
import HomePage from './HomePage';

interface props {}

const HomeRouter: React.FC<props> = (props) => {
  return (
    // <HomePage />
    <Redirect
      to={{
        pathname: '/dashboard',
      }}
    />
  );
};

export default HomeRouter;
