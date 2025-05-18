import React from 'react';

const EVA = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 my-6">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">EVA - Economic Value Added (Valor Econômico Adicionado)</h1>
      
      <div className="prose max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Definição</h2>
          <p className="text-gray-700 mb-4">
            O EVA (Economic Value Added) ou Valor Econômico Adicionado é um indicador financeiro que mede o valor criado por uma empresa além do retorno mínimo exigido pelos investidores. Em outras palavras, o EVA representa o lucro econômico real de uma empresa após considerar o custo de todo o capital empregado, incluindo o custo do capital próprio.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Importância</h2>
          <p className="text-gray-700 mb-4">
            O EVA é um indicador fundamental para a análise financeira porque:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2">Demonstra se uma empresa está realmente criando ou destruindo valor para seus acionistas</li>
            <li className="mb-2">Considera o custo de oportunidade do capital investido</li>
            <li className="mb-2">Alinha os interesses dos gestores com os dos acionistas</li>
            <li className="mb-2">Fornece uma visão mais completa do desempenho financeiro do que indicadores tradicionais como lucro líquido</li>
            <li>Ajuda na tomada de decisões sobre alocação de recursos e investimentos</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Fórmula de Cálculo</h2>
          <p className="text-gray-700 mb-4">
            A fórmula básica para calcular o EVA é:
          </p>
          <div className="bg-blue-50 p-4 rounded-md mb-4">
            <p className="font-bold text-blue-800">EVA = NOPAT - (Capital Investido × WACC)</p>
          </div>
          <p className="text-gray-700 mb-4">
            Onde:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2"><strong>NOPAT (Net Operating Profit After Taxes)</strong>: Lucro Operacional Líquido após Impostos</li>
            <li className="mb-2"><strong>Capital Investido</strong>: Total de recursos aplicados na empresa (patrimônio líquido + dívidas)</li>
            <li><strong>WACC (Weighted Average Cost of Capital)</strong>: Custo Médio Ponderado de Capital</li>
          </ul>
          
          <p className="text-gray-700 mb-4">
            Alternativamente, o EVA também pode ser calculado como:
          </p>
          <div className="bg-blue-50 p-4 rounded-md mb-4">
            <p className="font-bold text-blue-800">EVA = (ROIC - WACC) × Capital Investido</p>
          </div>
          <p className="text-gray-700 mb-4">
            Onde:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li><strong>ROIC (Return on Invested Capital)</strong>: Retorno sobre o Capital Investido</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Como Interpretar</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-green-50 p-4 rounded-md">
              <p className="font-semibold text-green-800 mb-2">EVA Positivo</p>
              <p className="text-gray-700">Indica que a empresa está criando valor para os acionistas, pois o retorno sobre o capital investido supera seu custo</p>
            </div>
            <div className="bg-red-50 p-4 rounded-md">
              <p className="font-semibold text-red-800 mb-2">EVA Negativo</p>
              <p className="text-gray-700">Indica que a empresa está destruindo valor, pois não consegue gerar retornos suficientes para cobrir o custo do capital</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-md">
              <p className="font-semibold text-blue-800 mb-2">EVA Zero</p>
              <p className="text-gray-700">Indica que a empresa está gerando exatamente o retorno mínimo exigido pelos investidores</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Exemplo Prático</h2>
          <p className="text-gray-700 mb-4">Considere uma empresa com os seguintes dados:</p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2">NOPAT (Lucro Operacional após Impostos): R$ 10 milhões</li>
            <li className="mb-2">Capital Investido: R$ 100 milhões</li>
            <li>WACC (Custo Médio Ponderado de Capital): 8%</li>
          </ul>
          
          <p className="text-gray-700 mb-4">Cálculo do EVA:</p>
          <ol className="list-decimal pl-6 mb-4 text-gray-700">
            <li className="mb-2">Custo do Capital = Capital Investido × WACC = R$ 100 milhões × 8% = R$ 8 milhões</li>
            <li>EVA = NOPAT - Custo do Capital = R$ 10 milhões - R$ 8 milhões = R$ 2 milhões</li>
          </ol>
          
          <p className="text-gray-700">
            Neste exemplo, a empresa está criando valor econômico de R$ 2 milhões para seus acionistas, pois seu lucro operacional após impostos excede o custo do capital empregado.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Vantagens em Relação a Outros Indicadores</h2>
          
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">EVA vs. Lucro Líquido</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li className="mb-2">O lucro líquido não considera o custo do capital próprio</li>
              <li>O EVA reconhece que o capital próprio tem um custo de oportunidade</li>
            </ul>
          </div>
          
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">EVA vs. ROI (Return on Investment)</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li className="mb-2">O ROI não considera o custo do capital</li>
              <li>O EVA compara diretamente o retorno com o custo do capital</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-blue-600 mb-2">EVA vs. EBITDA</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li className="mb-2">O EBITDA não considera depreciação, amortização, impostos e custo de capital</li>
              <li>O EVA fornece uma visão mais completa da criação de valor</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Aplicações Práticas</h2>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2"><strong>Avaliação de Desempenho</strong>: Medir o desempenho de unidades de negócio ou da empresa como um todo</li>
            <li className="mb-2"><strong>Remuneração Executiva</strong>: Base para programas de remuneração variável alinhados à criação de valor</li>
            <li className="mb-2"><strong>Decisões de Investimento</strong>: Avaliar se novos projetos criarão valor para a empresa</li>
            <li><strong>Gestão de Portfólio</strong>: Identificar negócios que criam ou destroem valor dentro de um conglomerado</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Limitações</h2>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2">Complexidade no cálculo, especialmente na determinação do WACC</li>
            <li className="mb-2">Sensibilidade a métodos contábeis e ajustes</li>
            <li className="mb-2">Foco no curto prazo pode desencorajar investimentos estratégicos de longo prazo</li>
            <li>Não considera fatores não financeiros importantes para o sucesso da empresa</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Dicas para Análise</h2>
          <ol className="list-decimal pl-6 mb-4 text-gray-700">
            <li className="mb-2">Compare o EVA da empresa ao longo do tempo para identificar tendências</li>
            <li className="mb-2">Analise o EVA em conjunto com outros indicadores financeiros</li>
            <li className="mb-2">Considere o setor e o ciclo de vida da empresa ao interpretar o EVA</li>
            <li>Verifique os ajustes contábeis utilizados no cálculo do NOPAT</li>
          </ol>
        </section>
      </div>
    </div>
  );
};

export default EVA;
