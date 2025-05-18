import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  // Dados extraídos da apresentação Melnick
  const destaques = [
    { label: 'Vendas 1T2025', value: 'R$ 130 mi', desc: 'Crescimento de 55% em relação ao 4T2024' },
    { label: 'Entregas no Trimestre', value: 'R$ 282 mi', desc: 'Das unidades comercializadas' },
    { label: 'Taxa de Vendas', value: '95%', desc: 'Das unidades disponíveis' },
    { label: 'Geração de Caixa', value: 'R$ 48 mi', desc: 'De geração de caixa operacional' }
  ];

  const indicadores = [
    { path: '/roic', label: 'ROIC - Retorno sobre o Capital Investido', description: 'Mede a eficiência com que uma empresa utiliza seu capital para gerar lucros.' },
    { path: '/tir', label: 'TIR - Taxa Interna de Retorno', description: 'Taxa de desconto que iguala o valor presente dos fluxos de caixa futuros ao investimento inicial.' },
    { path: '/margem-liquida', label: 'Margem Líquida', description: 'Percentual do lucro líquido em relação à receita líquida, mostrando a eficiência da empresa.' },
    { path: '/margem-bruta', label: 'Margem Bruta', description: 'Percentual do lucro bruto em relação à receita líquida, indicando a eficiência operacional.' },
    { path: '/exposicao-maxima', label: 'Exposição Máxima', description: 'Valor máximo que uma empresa precisa desembolsar para garantir a viabilidade de um projeto.' },
    { path: '/nav', label: 'NAV - Net Asset Value', description: 'Valor líquido dos ativos de uma entidade após a dedução de suas obrigações.' },
    { path: '/eva', label: 'EVA - Economic Value Added', description: 'Valor criado por uma empresa além do retorno mínimo exigido pelos investidores.' },
    { path: '/vso', label: 'VSO - Velocidade de Vendas', description: 'Percentual de unidades comercializadas em relação ao total disponível em um período.' },
    { path: '/dre', label: 'DRE - Demonstração do Resultado do Exercício', description: 'Relatório contábil que apresenta receitas, custos e despesas de uma empresa.' },
    { path: '/roe', label: 'ROE - Return on Equity', description: 'Capacidade de uma empresa gerar lucro a partir do capital investido pelos acionistas.' },
    { path: '/npl', label: 'NPL - Non-Performing Loan', description: 'Empréstimos em que o devedor não está realizando os pagamentos conforme programado.' },
    { path: '/margem-liquida-vpl', label: 'Margem Líquida VPL', description: 'Relação percentual entre o Valor Presente Líquido e o investimento inicial.' },
    { path: '/resultado-vpl', label: 'Resultado VPL', description: 'Valor absoluto criado ou destruído por um investimento, considerando o valor do dinheiro no tempo.' },
    { path: '/margem-liquida-nominal', label: 'Margem Líquida Nominal', description: 'Relação percentual entre o lucro líquido e a receita líquida, sem considerar a inflação.' },
    { path: '/resultado-nominal', label: 'Resultado Nominal', description: 'Valor absoluto do lucro ou prejuízo em valores correntes, sem considerar a inflação.' }
  ];

  const projetos = [
    { nome: 'Arte Country Club', percentual: '93%', vgv: 'R$ 117 mi' },
    { nome: 'Seen Boa Vista', percentual: '97%', vgv: 'R$ 98 mi' },
    { nome: 'Open Canoas - F3', percentual: '98%', vgv: 'R$ 27 mi' },
    { nome: 'Open Protásio', percentual: '92%', vgv: 'R$ 40 mi' }
  ];

  return (
    <div>
      {/* Banner principal inspirado na apresentação Melnick */}
      <div className="main-banner">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8">
              <h1>Indicadores Financeiros</h1>
              <p>Guia prático e didático para compreender os principais indicadores utilizados na análise financeira de empresas e projetos de investimento.</p>
            </div>
            <div className="col-md-4 text-end">
              <img src="/assets/melnick-logo-white.png" alt="Melnick" className="melnick-logo" />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        {/* Seção de destaques financeiros da Melnick */}
        <section className="mb-5">
          <div className="card">
            <div className="card-header">
              <h2 className="mb-0">Destaques Financeiros 1T2025</h2>
            </div>
            <div className="card-body">
              <div className="row">
                {destaques.map((destaque, index) => (
                  <div key={index} className="col-md-3 col-sm-6 mb-4">
                    <div className="metric-card">
                      <div className="metric-value">{destaque.value}</div>
                      <div className="metric-label">{destaque.label}</div>
                      <small className="text-muted">{destaque.desc}</small>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="row mt-4">
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-header">Posição Financeira</div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-6">
                          <div className="metric-card">
                            <div className="metric-value">R$ 352 mi</div>
                            <div className="metric-label">Caixa Bruto</div>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="metric-card">
                            <div className="metric-value">R$ 150 mi</div>
                            <div className="metric-label">Redução de Capital</div>
                            <small className="text-muted">Pagos aos acionistas em 28/03/2025</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-header">Projetos em Destaque</div>
                    <div className="card-body">
                      <div className="table-responsive">
                        <table className="table table-hover">
                          <thead>
                            <tr>
                              <th>Projeto</th>
                              <th>% Vendido</th>
                              <th>VGV</th>
                            </tr>
                          </thead>
                          <tbody>
                            {projetos.map((projeto, index) => (
                              <tr key={index}>
                                <td>{projeto.nome}</td>
                                <td>{projeto.percentual}</td>
                                <td>{projeto.vgv}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção de indicadores financeiros */}
        <section className="mb-5">
          <h2 className="mb-4">Indicadores Financeiros</h2>
          <div className="row">
            {indicadores.map((indicador, index) => (
              <div key={index} className="col-md-4 mb-4">
                <Link to={indicador.path} className="text-decoration-none">
                  <div className="card indicator-card h-100">
                    <div className="card-body">
                      <h3 className="h5 mb-3">{indicador.label}</h3>
                      <p className="text-muted">{indicador.description}</p>
                    </div>
                    <div className="card-footer bg-transparent border-0 text-end">
                      <span className="btn btn-sm btn-primary">Ver detalhes</span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Seção de capacidade operacional */}
        <section className="mb-5">
          <div className="card">
            <div className="card-header">
              <h2 className="mb-0">Capacidade Operacional Melnick</h2>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-4 mb-4">
                  <div className="card">
                    <div className="card-header">Canteiros Ativos</div>
                    <div className="card-body">
                      <div className="metric-value">19</div>
                      <div className="row mt-3">
                        <div className="col-4">
                          <div className="metric-card">
                            <div className="metric-value">12</div>
                            <div className="metric-label">Incorporação</div>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="metric-card">
                            <div className="metric-value">6</div>
                            <div className="metric-label">Urbanização</div>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="metric-card">
                            <div className="metric-value">1</div>
                            <div className="metric-label">OPEN</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-4 mb-4">
                  <div className="card">
                    <div className="card-header">Unidades em Construção</div>
                    <div className="card-body">
                      <div className="metric-value">5.015</div>
                      <div className="row mt-3">
                        <div className="col-4">
                          <div className="metric-card">
                            <div className="metric-value">2.318</div>
                            <div className="metric-label">Incorporação</div>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="metric-card">
                            <div className="metric-value">2.377</div>
                            <div className="metric-label">Urbanização</div>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="metric-card">
                            <div className="metric-value">320</div>
                            <div className="metric-label">OPEN</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-4 mb-4">
                  <div className="card">
                    <div className="card-header">Composição de Negócios</div>
                    <div className="card-body">
                      <div className="chart-container">
                        <div className="text-center mb-3">
                          <div className="metric-value">100%</div>
                          <div className="metric-label">Vendas 1T2025</div>
                        </div>
                        <div className="row text-center">
                          <div className="col-4">
                            <div className="p-3" style={{backgroundColor: '#0F3A43', color: 'white', borderRadius: '4px'}}>
                              <div className="h5 mb-0">89,2%</div>
                              <small>Incorporadora</small>
                            </div>
                          </div>
                          <div className="col-4">
                            <div className="p-3" style={{backgroundColor: '#999', color: 'white', borderRadius: '4px'}}>
                              <div className="h5 mb-0">7,3%</div>
                              <small>Urbanizadora</small>
                            </div>
                          </div>
                          <div className="col-4">
                            <div className="p-3" style={{backgroundColor: '#F0B94D', color: '#0F3A43', borderRadius: '4px'}}>
                              <div className="h5 mb-0">3,5%</div>
                              <small>Open</small>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção de mensagens-chave */}
        <section className="mb-5">
          <div className="card">
            <div className="card-header">
              <h2 className="mb-0">Mensagens-Chave</h2>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="d-flex">
                    <div className="icon-container me-3">
                      <i className="fas fa-chart-line"></i>
                    </div>
                    <div>
                      <h4>Crescimento Consistente</h4>
                      <p>Forte crescimento nas vendas (55%) mesmo sem novos lançamentos no trimestre.</p>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-6 mb-4">
                  <div className="d-flex">
                    <div className="icon-container me-3">
                      <i className="fas fa-percentage"></i>
                    </div>
                    <div>
                      <h4>Alta Taxa de Comercialização</h4>
                      <p>95% de taxa média de comercialização, demonstrando forte demanda pelos empreendimentos.</p>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-6 mb-4">
                  <div className="d-flex">
                    <div className="icon-container me-3">
                      <i className="fas fa-wallet"></i>
                    </div>
                    <div>
                      <h4>Solidez Financeira</h4>
                      <p>Posição de caixa bruto de R$ 352 milhões, garantindo estabilidade e capacidade de investimento.</p>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-6 mb-4">
                  <div className="d-flex">
                    <div className="icon-container me-3">
                      <i className="fas fa-hand-holding-usd"></i>
                    </div>
                    <div>
                      <h4>Retorno aos Acionistas</h4>
                      <p>Distribuição de R$ 150 milhões aos acionistas, com rendimento de 22,5%.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Aviso importante */}
        <section className="mb-5">
          <div className="card">
            <div className="card-header">
              <h2 className="mb-0">Aviso Importante</h2>
            </div>
            <div className="card-body">
              <p>As informações contidas neste site constituem crenças e premissas baseadas em dados do mercado
(Content truncated due to size limit. Use line ranges to read in chunks)