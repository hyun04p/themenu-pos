import React, { useEffect, useState } from 'react';
import './index.scss';
import { Table } from '../../types';
import { DashboardSideBar } from '../../component';
import NewOrder from './NewOrderPage';
import TableViewPage from './TableViewPage';

const DashbaordRouter = () => {
  const [state, setState] = useState<number>(0);
  const [page, setPage] = useState<number>(1);

  return (
    <div className="HomePage">
      <div className="main">
        <DashboardSideBar
          onClickNewMenu={() => {
            setState(0);
            setPage(1);
          }}
          onClickCompleted={() => {
            setState(1);
          }}
        />

        <div className="plane">
          {state === 0 ? <NewOrder /> : <TableViewPage />}
        </div>
      </div>
    </div>
  );
};

export default DashbaordRouter;
