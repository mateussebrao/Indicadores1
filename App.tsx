import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home/Home';
import ROIC from './pages/ROIC/ROIC';
import TIR from './pages/TIR/TIR';
import MargemLiquida from './pages/MargemLiquida/MargemLiquida';
import MargemBruta from './pages/MargemBruta/MargemBruta';
import ExposicaoMaxima from './pages/ExposicaoMaxima/ExposicaoMaxima';
import NAV from './pages/NAV/NAV';
import EVA from './pages/EVA/EVA';
import VSO from './pages/VSO/VSO';
import DRE from './pages/DRE/DRE';
import ROE from './pages/ROE/ROE';
import NPL from './pages/NPL/NPL';
import MargemLiquidaVPL from './pages/MargemLiquidaVPL/MargemLiquidaVPL';
import ResultadoVPL from './pages/ResultadoVPL/ResultadoVPL';
import MargemLiquidaNominal from './pages/MargemLiquidaNominal/MargemLiquidaNominal';
import ResultadoNominal from './pages/ResultadoNominal/ResultadoNominal';

// Importação do novo arquivo de estilos
import './styles.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/roic" element={<ROIC />} />
            <Route path="/tir" element={<TIR />} />
            <Route path="/margem-liquida" element={<MargemLiquida />} />
            <Route path="/margem-bruta" element={<MargemBruta />} />
            <Route path="/exposicao-maxima" element={<ExposicaoMaxima />} />
            <Route path="/nav" element={<NAV />} />
            <Route path="/eva" element={<EVA />} />
            <Route path="/vso" element={<VSO />} />
            <Route path="/dre" element={<DRE />} />
            <Route path="/roe" element={<ROE />} />
            <Route path="/npl" element={<NPL />} />
            <Route path="/margem-liquida-vpl" element={<MargemLiquidaVPL />} />
            <Route path="/resultado-vpl" element={<ResultadoVPL />} />
            <Route path="/margem-liquida-nominal" element={<MargemLiquidaNominal />} />
            <Route path="/resultado-nominal" element={<ResultadoNominal />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
