const ROIC = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 my-6">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">ROIC - Retorno sobre o Capital Investido</h1>
      
      <div className="prose max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Definição</h2>
          <p className="text-gray-700 mb-4">
            O ROIC (Return On Invested Capital) ou Retorno sobre o Capital Investido é uma métrica financeira crucial que mede a eficiência com a qual uma empresa utiliza seu capital para gerar lucros. Este indicador avalia o retorno obtido sobre o capital investido no negócio, fornecendo insights sobre a capacidade da empresa de criar valor para seus acionistas.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Fórmula de Cálculo</h2>
          <p className="text-gray-700 mb-4">A fórmula para calcular o ROIC é:</p>
          <div className="bg-blue-50 p-4 rounded-md mb-4">
            <p className="font-bold text-blue-800">ROIC = Lucro Operacional Líquido Após Impostos (NOPAT) / Capital Investido</p>
          </div>
          <p className="text-gray-700 mb-2">Onde:</p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2"><strong>NOPAT (Lucro Operacional Líquido Após Impostos)</strong> = EBIT (Lucro antes de juros e impostos) × (1 - Taxa de Imposto)</li>
            <li><strong>Capital Investido</strong> = Patrimônio + Dívida - Ativos não operacionais</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Importância do ROIC</h2>
          <p className="text-gray-700 mb-2">O ROIC é essencial porque:</p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2">Indica quão efetivamente uma empresa está usando seu capital para gerar retornos</li>
            <li className="mb-2">Mostra a eficiência na utilização dos fundos dos investidores para gerar renda</li>
            <li className="mb-2">Mede a quantidade de lucro gerado por uma empresa além do custo médio de seu capital</li>
            <li className="mb-2">Serve como ponto de referência para valorizar outras empresas</li>
            <li>Ajuda a avaliar a eficiência da alocação de capital</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Como Interpretar o ROIC</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-4 rounded-md">
              <h3 className="font-semibold text-green-800 mb-2">ROIC alto</h3>
              <p className="text-gray-700">
                Indica que a empresa está gerando lucros de forma eficiente a partir de seus investimentos, o que pode levar ao aumento do valor para os acionistas. Significa que a empresa precisa gastar menos para gerar mais lucro.
              </p>
            </div>
            <div className="bg-red-50 p-4 rounded-md">
              <h3 className="font-semibold text-red-800 mb-2">ROIC baixo</h3>
              <p className="text-gray-700">
                Sugere ineficiências no uso do capital pela empresa, o que pode exigir uma reavaliação de suas estratégias de investimento e modelo de negócios.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Diferenças em relação a outros indicadores</h2>
          <p className="text-gray-700 mb-4">
            Ao contrário de outras métricas de lucratividade, como o Retorno sobre o Patrimônio (ROE) ou o Retorno sobre os Ativos (ROA), o ROIC fornece uma visão mais abrangente:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2">O ROE considera apenas o patrimônio</li>
            <li className="mb-2">O ROA foca nos ativos totais</li>
            <li>O ROIC considera tanto o patrimônio quanto a dívida, fornecendo uma análise mais completa da eficiência do uso do capital</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Limitações do ROIC</h2>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2"><strong>Clareza de Segmentos</strong>: Não identifica quais segmentos de negócios estão gerando valor</li>
            <li className="mb-2"><strong>Sensibilidade Contábil</strong>: É sensível aos métodos contábeis, afetando sua comparabilidade entre diferentes empresas e indústrias</li>
            <li className="mb-2"><strong>Fatores Qualitativos</strong>: Não leva em consideração fatores qualitativos como qualidade da gestão, condições de mercado ou vantagens competitivas</li>
            <li><strong>Visão Incompleta</strong>: Confiar exclusivamente no ROIC pode não fornecer uma visão completa da saúde de uma empresa</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Exemplo Prático</h2>
          <p className="text-gray-700 mb-4">Suponha que uma empresa tenha:</p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2">EBIT (Lucro antes de juros e impostos) = R$ 1.000.000</li>
            <li className="mb-2">Taxa de Imposto = 30%</li>
            <li>Capital Investido = R$ 10.000.000</li>
          </ul>
          <p className="text-gray-700 mb-2">Cálculo:</p>
          <ol className="list-decimal pl-6 mb-4 text-gray-700">
            <li className="mb-2">NOPAT = R$ 1.000.000 × (1 - 0,30) = R$ 700.000</li>
            <li>ROIC = R$ 700.000 / R$ 10.000.000 = 0,07 ou 7%</li>
          </ol>
          <p className="text-gray-700">
            <strong>Interpretação:</strong> A empresa está gerando um retorno de 7% sobre o capital investido. Para determinar se este é um bom resultado, deve-se comparar com o custo de capital da empresa e com o ROIC de outras empresas do mesmo setor.
          </p>
        </section>
      </div>
    </div>
  );
};

export default ROIC;
