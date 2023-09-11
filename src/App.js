import './App.css';
import Homepage from './Pages/Homepage/Homepage';
import Login from './Pages/Login/Login';
import Header from './components/Header/Header';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
