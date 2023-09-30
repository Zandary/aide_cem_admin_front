import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import usePersistentLogin from "./usePersistentLogin";

// Importing route components
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import NotFound from './pages/NotFound';
import DataView from './pages/DataView';
import SignIn from './pages/SignIn';

import Navbar from './components/Navbar';


//theme
import "primereact/resources/themes/soho-dark/theme.css";     
    
//core
import "primereact/resources/primereact.min.css";      

import "../node_modules/primeflex/primeflex.css"
        
import 'primeicons/primeicons.css';
        

function App() {
  const { user, checkStoredCredentials, signInWithStoredCredentials } = usePersistentLogin();

// Check stored credentials and sign in automatically
checkStoredCredentials().then((credentials) => {
  if (credentials) {
    signInWithStoredCredentials(credentials);
  }
});

  return (<Router>
    <div className="h-screen p-2 surface-0">
      {/* Navigation Links */}
      <Navbar/>


      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<DataView/>} />

        {/* Handle 404 or unknown routes */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  </Router>
    
  );
}

export default App;
