import './App.css';
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import RegistrationPage from './components/RegistrationPage';
import Login from './components/Login';
import Welcome from './components/Welcome';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<RegistrationPage />} />
          <Route path='/welcome' element={<Welcome />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
