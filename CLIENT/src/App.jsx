import { React, createContext, useContext, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import LogIn from "./Pages/LogIn";
import SignUp from "./Pages/SignUp";
import Layout from './Components/Layout';
import Home from './Pages/Home';
import Calendar1 from './Pages/Calendar';
import Gallery from './Pages/Gallery';
import Orders from './Pages/Orders';
import Dresses from './Pages/Dresses';
import Accessories from './Pages/Accessories';

export const UserContext = createContext();

function App() {
  useEffect(() => {
    const dataFromLocalStorage = JSON.parse(localStorage.getItem('loggedInUser')) || {};
    setUserData(dataFromLocalStorage);
  }, []);

  const [userData, setUserData] = useState({});

  return (
    <UserContext.Provider value={userData}>
      <BrowserRouter>
        <div className="app-container">
          <Routes>
            <Route path="/logIn" element={<LogIn setUserData={setUserData}/>} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/" element={<Layout setUserData={setUserData}/>} >
              <Route index element={<Home setUserData={setUserData}/>} />
              <Route path="/queues" element={<Calendar1 />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/dresses" element={<Dresses />} />
              <Route path="/accessories" element={<Accessories />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
