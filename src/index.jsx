import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './Pages/Home'
import { Customers } from './Pages/Customers'
import { Trainings } from './Pages/Trainings'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        <Route path='' element={<App />}>
          <Route path='/' element={<Home />}></Route>
          <Route path="/customers" element={<Customers />}>
          </Route>

          <Route path="/trainings" element={<Trainings />}>
          </Route>

        </Route>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

