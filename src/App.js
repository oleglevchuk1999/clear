
import './App.css';
import Header from './components/Header/Header';
import HomeText from './components/HomeText/HomeText';
import Loader from './components/Loader/Loader';

function App() {
  return (
    <div className="App">
      <Header/>
      <HomeText/>
      <Loader/>
    </div>
  );
}

export default App;
