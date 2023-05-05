import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home'
import Administrador from './pages/Administrador';
import Departamento from './pages/Departamento';
import Desarrollador from './pages/Desarrollador';
import Moneda from './pages/Moneda';
import NavBar from './components/NavBar';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/administradores" element={<Administrador />} />
        <Route path="/desarrolladores" element={<Desarrollador />} />
        <Route path="/departamentos" element={<Departamento />} />
        <Route path="/monedas" element={<Moneda />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
