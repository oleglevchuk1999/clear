import './App.css';
import About from './Pages/Aboutpage/About';
import Homepage from './Pages/Homepage/Homepage';
import Login from './Pages/Login/Login';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>

      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
