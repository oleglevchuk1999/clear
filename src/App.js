
import './App.css';
import Header from './components/Header/Header';
import HomeText from './components/HomeText/HomeText';
import Loader from './components/Loader/Loader';
import Login from './components/Login/Login';

function App() {
  return (
    <div className="App">
      <Header/>
      <HomeText/>
      <Loader/>
      <Login/>
    </div>
  );
}

export default App;
