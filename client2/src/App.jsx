import { useState } from 'react'
import './App.css'
import {
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Dashboard from './Components/Dashboard/Dashboard';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="login" element={<Login/>}></Route>
          <Route path='signup' element={<Signup/>}></Route>
          <Route path="dashboard" element={<Dashboard />}></Route>
          
        </Routes>
      </Router>

    </>
  )
}

export default App
