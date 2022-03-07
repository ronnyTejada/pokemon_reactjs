
import './App.css';
import Router from './router';
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
