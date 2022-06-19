import { Routes, Route } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import Appointment from './pages/Apointment/Appointment';
import Home from './pages/Home/Home';
import Header from './pages/Shared/Header/Header';

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
        <Route path='/appointment' element={<Appointment />} />
      </Routes>
    </div>
  );
}

export default App;
