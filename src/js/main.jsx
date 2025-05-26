import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar.jsx';
import { Register } from './Pages/Register.jsx';
import { Login } from './Pages/Login.jsx';
import { Admin } from './Pages/Admin.jsx';
import { ProtectedRoute } from './components/ProtectedRoute.jsx';

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<Register />} path='/register' />
        <Route element={<Login />} path='/login' />
        <Route element={<ProtectedRoute><Admin /></ProtectedRoute>} path='/admin' />
      </Routes>
      
    </BrowserRouter>
  </React.StrictMode>,
)
