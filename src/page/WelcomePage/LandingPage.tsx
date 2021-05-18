import React from 'react';
import { useHistory } from 'react-router';
import './LandingPage.scss';

interface props {}

const LandingPage: React.FC<props> = (props) => {
  const history = useHistory();

  return (
    <div className="LandingPage">
      <div className="header">더MENU</div>
      <div className="container">
        <h1>
          <span>더MENU</span> 세상에 없던 메뉴판
        </h1>
        <a onClick={() => history.push('/login')}>콘솔에 로그인</a>
      </div>
    </div>
  );
};

export default LandingPage;
