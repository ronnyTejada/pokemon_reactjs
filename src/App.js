import logo from './logo.svg';
import './App.css';
import Router from './router';
import Pokedex from './views/pokedex/Pokedex';
import { ToastContainer} from 'react-toastify';

function App() {
  return (
    <div className="App">
      <Router/>
      <ToastContainer />

    </div>
  );
}

export default App;
