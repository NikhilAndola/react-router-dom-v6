import React from 'react';
import './style.css';
import { Link, Outlet } from 'react-router-dom';

export default function Navigation() {
  return (
    <div>
      <div>
        <Link to="/home">Home</Link>
        {' | '}
        <Link to="/about">About</Link>
        {' | '}
        <Link to="/invoices">Invoices</Link>
      </div>
      <Outlet />
    </div>
  );
}
