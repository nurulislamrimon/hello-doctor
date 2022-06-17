import { Routes, Route } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Header from './Utilities/Header/Header';

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
        <Route path='/home' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
