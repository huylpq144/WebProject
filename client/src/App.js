import './App.css';
import { BrowserRouter } from 'react-router-dom';
import ShoesStore from './components/ShoesStore/ShoesStore';
import Router from './routes/Router';


function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
