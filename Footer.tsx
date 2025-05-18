const Footer = () => {
  return (
    <footer className="py-4" style={{ backgroundColor: '#0F3A43', color: 'white' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4 mb-md-0">
            <h5>Indicadores Financeiros</h5>
            <p className="mb-0">Guia prático e didático para análise financeira de empresas e projetos de investimento.</p>
          </div>
          <div className="col-md-4 mb-4 mb-md-0">
            <h5>Aviso Legal</h5>
            <p className="small">As informações contidas neste site constituem crenças e premissas baseadas em dados do mercado financeiro e imobiliário. Envolvem riscos e incertezas relacionados a eventos futuros.</p>
          </div>
          <div className="col-md-4 text-md-end">
            <img src="/assets/melnick-logo-white.png" alt="Melnick" className="mb-3" style={{ maxHeight: '40px' }} />
            <p className="small mb-0">Dados baseados na apresentação de resultados 1T2025 da Melnick.</p>
          </div>
        </div>
        <hr className="my-4" style={{ borderColor: 'rgba(255,255,255,0.2)' }} />
        <div className="row">
          <div className="col-md-6">
            <p className="small mb-0">© 2025 Indicadores Financeiros. Todos os direitos reservados.</p>
          </div>
          <div className="col-md-6 text-md-end">
            <p className="small mb-0">Atualizado em: Maio de 2025</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
