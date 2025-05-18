import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navItems = [
    { path: '/', label: 'Início' },
    { path: '/roic', label: 'ROIC' },
    { path: '/tir', label: 'TIR' },
    { path: '/margem-liquida', label: 'Margem Líquida' },
    { path: '/margem-bruta', label: 'Margem Bruta' },
    { path: '/exposicao-maxima', label: 'Exposição Máxima' },
    { path: '/nav', label: 'NAV' },
    { path: '/eva', label: 'EVA' },
    { path: '/vso', label: 'VSO' },
    { path: '/dre', label: 'DRE' },
    { path: '/roe', label: 'ROE' },
    { path: '/npl', label: 'NPL' },
    { path: '/margem-liquida-vpl', label: 'Margem Líquida VPL' },
    { path: '/resultado-vpl', label: 'Resultado VPL' },
    { path: '/margem-liquida-nominal', label: 'Margem Líquida Nominal' },
    { path: '/resultado-nominal', label: 'Resultado Nominal' }
  ];

  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#0F3A43' }}>
      <div className="container">
        <Link to="/" className="navbar-brand" style={{ color: 'white' }}>
          Indicadores Financeiros
        </Link>
        <div className="ms-auto d-flex align-items-center">
          <img src="/assets/melnick-logo-white.png" alt="Melnick" className="melnick-logo d-none d-lg-block" />
          <button
            onClick={toggleMenu}
            className="navbar-toggler ms-3"
            type="button"
            aria-expanded={isOpen ? "true" : "false"}
            aria-label="Toggle navigation"
            style={{ borderColor: 'rgba(255,255,255,0.5)' }}
          >
            <span className="navbar-toggler-icon" style={{ filter: 'invert(1)' }}></span>
          </button>
        </div>
        
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {navItems.map((item) => (
              <li key={item.path} className="nav-item">
                <Link
                  to={item.path}
                  className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                  style={{ color: 'white' }}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
