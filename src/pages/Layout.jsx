import { Outlet } from 'react-router-dom';
import React from 'react';

function Layout() {
  return (
    <div>
      <div className="fixed" />
      <div style={{ minHeight: '600px' }}>
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
