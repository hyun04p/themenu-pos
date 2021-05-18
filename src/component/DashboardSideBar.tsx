import React, { useState } from 'react';
import './DashboardSideBar.scss';

import { Link, useHistory } from 'react-router-dom';
import { firebaseInstance } from '@firebase';
import { useDispatch } from 'react-redux';
import { AuthAction } from '@redux/actions';

interface props {
  onClickNewMenu: any;
  onClickCompleted: any;
}

const DashboardSideBar: React.FC<props> = (props) => {
  const [selected, setSelected] = useState(0);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleOnClickNewMenu = () => {
    setSelected(0);
    props.onClickNewMenu();
  };

  const handleOnClickCompleted = () => {
    setSelected(1);
    props.onClickCompleted();
  };

  const handleOnClickLogout = () => {
    firebaseInstance
      .auth()
      .signOut()
      .then(() => {
        dispatch(AuthAction.initiateLogout());
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div className="SideBar">
      <div
        className={`btn ${selected === 0 ? 'selected' : ''}`}
        onClick={handleOnClickNewMenu}
      >
        새로운 주문
      </div>
      <div
        className={`btn ${selected === 1 ? 'selected' : ''}`}
        onClick={handleOnClickCompleted}
      >
        접수 완료
      </div>
      <Link className="menuBtn" to={`/preference/store`}>
        설정
      </Link>
      <div className="logout-btn" onClick={handleOnClickLogout}>
        로그아웃
      </div>
    </div>
  );
};

export default DashboardSideBar;
