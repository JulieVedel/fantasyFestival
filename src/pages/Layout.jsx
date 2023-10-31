import { Outlet, Link } from 'react-router-dom';
import React from 'react';
import Background from '../Background.jpg';

function Layout() {
  return (
    <div
      id="background"
      style={{
        backgroundImage: `url(${Background})`,
        width: '100vw',
        height: '100vh',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >

      <Outlet />
    </div>
  );
}

export default Layout;
