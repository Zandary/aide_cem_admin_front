import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Importing route components
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import NotFound from './pages/NotFound';
import Dashboard from './pages/Dashboard';
import DataView from './pages/DataView';

import Navbar from './components/Navbar';


//theme
import "primereact/resources/themes/soho-dark/theme.css";     
    
//core
import "primereact/resources/primereact.min.css";      

import "../node_modules/primeflex/primeflex.css"
        
import 'primeicons/primeicons.css';
        

function App() {
  return (<Router >
    <div className="h-full">
      {/* Navigation Links */}
      <Navbar/>

      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dataview" element={<DataView />} />

        {/* Handle 404 or unknown routes */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  </Router>
    
  );
}

export default App;
