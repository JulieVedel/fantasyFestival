import { Outlet } from 'react-router-dom';
import React from 'react';
import Background from '../Background.jpg';

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
