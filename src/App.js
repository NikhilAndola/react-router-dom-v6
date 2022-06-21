import React from 'react';
import './style.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navigation from './Navigation';
import { Home } from './Home';
import { About } from './About';
import Invoices from './Invoices';
import Invoice from './Invoice';

export default function App() {
  return (
    <BrowserRouter>
      {/* <Navigation /> */}
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} /> */}
        {/* <Route path="invoices" element={<Invoices />} /> */}
        <Route path="/" element={<Navigation />}>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="invoices" element={<Invoices />}>
            <Route
              index
              element={
                <main style={{ padding: '1rem' }}>
                  <p>Select an invoice</p>
                </main>
              }
            />
            <Route path=":invoiceId" element={<Invoice />} />
          </Route>
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

{
  /* <Link to="/invoices">Home</Link> | <Link to="/expenses">About</Link> */
}
