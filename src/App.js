
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Efecto from './pages/efecto';
import Home from './pages/Home';
import Informativa from './pages/Informativa';
import Metricas from './pages/Metricas';
import Usuarios from './pages/Usuarios';

function App() {
  return (

    <BrowserRouter>
      <h1>APP</h1>
     <nav>

        <Link to="/metricas">Metricas</Link>
        <br/>
        <Link to="/informativa">informativa</Link>
        <br/>
        <Link to="/usuarios">usuarios</Link>
        <br/>
        <Link to="/efecto">efecto</Link>
     </nav>

      <Routes>

        <Route path="/"  element={ <Home/>} />
        <Route path="/metricas"  element={ <Metricas/>} />
        <Route path="/informativa"  element={ <Informativa/>} />
        <Route path="/usuarios"  element={ <Usuarios/>} />
        
        <Route path="/efecto"  element={ <Efecto/>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
