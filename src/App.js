import { Routes, Route } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import Appointment from './pages/Apointment/Appointment';
import Dashboard from './pages/Dashboard/Dashboard';
import Sectest from './pages/Dashboard/Sectest';
import Test from './pages/Dashboard/Test';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Header from './pages/Shared/Header/Header';
import RequireAuth from './Utilities/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App">
      {/* header */}
      <Header></Header>

      {/* router */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/appointment' element={
          <RequireAuth>
            <Appointment />
          </RequireAuth>
        } />
        {/* dashboard */}
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        } >
          <Route index element={<Test />} />
          <Route path='test' element={<Test />} />
          <Route path='sectest' element={<Sectest />} />
        </Route>

        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
