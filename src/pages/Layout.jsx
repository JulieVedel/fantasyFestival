import { Outlet } from 'react-router-dom';
import React from 'react';

function Layout() {
  return (
    <div>
      <div className="fixed" />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
