import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import your route components
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import NotFound from './pages/NotFound';

function App() {
  return (<Router>
    <div>
      <h1>Aide CEM Admin</h1>
      {/* Navigation Links */}
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/login">Login</a></li>
          <li><a href="/signup">S'inscrire</a></li>
        </ul>
      </nav>

      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Handle 404 or unknown routes */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  </Router>
    
  );
}

export default App;
