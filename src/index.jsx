import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './Pages/Home';
import { Customers } from './Pages/Customers'
import { Trainings } from './Pages/Trainings'
import { CustomerList } from './Components/CustomerList';
import { Customer } from './Components/Customer';
import { TrainingList } from './Components/TrainingList';
import { Training } from './Components/Training';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<App />}>

          <Route path='/home' element={<Home />} />

          <Route path="/customers" element={<Customers />}>
            <Route index element={<CustomerList />} />
            <Route path=':customerId' element={<Customer />} />
          </Route>

          <Route path="/trainings" element={<Trainings />}>
            <Route index element={<TrainingList />} />
            <Route path=':trainingId' element={<Training />} />
          </Route>

        </Route>
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

