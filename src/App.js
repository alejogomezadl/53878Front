
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Informativa from './pages/Informativa';
import Metricas from './pages/Metricas';

function App() {
  return (

    <BrowserRouter>
      <h1>APP</h1>
     <nav>

        <Link to="/metricas">Metricas</Link>

     </nav>

      <Routes>

        <Route path="/"  element={ <Home/>} />
        <Route path="/metricas"  element={ <Metricas/>} />
        <Route path="/informativa"  element={ <Informativa/>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
