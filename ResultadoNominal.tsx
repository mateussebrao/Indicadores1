import React from 'react';

const ResultadoNominal = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 my-6">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">Resultado Nominal</h1>
      
      <div className="prose max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Definição</h2>
          <p className="text-gray-700 mb-4">
            O Resultado Nominal é um indicador financeiro que representa o valor absoluto do lucro ou prejuízo de uma empresa ou projeto em um determinado período, expresso em valores correntes, sem considerar os efeitos da inflação ou do valor do dinheiro no tempo. Este indicador mostra o resultado financeiro efetivamente registrado nas demonstrações contábeis.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Importância</h2>
          <p className="text-gray-700 mb-4">
            O Resultado Nominal é um indicador fundamental para análise financeira porque:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2">Demonstra o desempenho financeiro absoluto da empresa no período</li>
            <li className="mb-2">Serve como base para distribuição de dividendos e participações</li>
            <li className="mb-2">É utilizado para cálculo de impostos e obrigações legais</li>
            <li className="mb-2">Permite acompanhar a evolução do desempenho financeiro ao longo do tempo</li>
            <li>Constitui a base para diversos outros indicadores financeiros</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Fórmula de Cálculo</h2>
          <p className="text-gray-700 mb-4">
            A fórmula básica para o Resultado Nominal é:
          </p>
          <div className="bg-blue-50 p-4 rounded-md mb-4">
            <p className="font-bold text-blue-800">Resultado Nominal = Receitas Totais - Despesas Totais</p>
          </div>
          <p className="text-gray-700 mb-4">
            Em uma visão mais detalhada:
          </p>
          <div className="bg-blue-50 p-4 rounded-md mb-4">
            <p className="font-bold text-blue-800">Resultado Nominal = Receita Líquida - CPV - Despesas Operacionais - Despesas Financeiras - Impostos</p>
          </div>
          <p className="text-gray-700 mb-4">
            Onde:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2"><strong>Receita Líquida</strong>: Receita total após deduções de impostos sobre vendas, devoluções e abatimentos</li>
            <li className="mb-2"><strong>CPV</strong>: Custo dos Produtos Vendidos</li>
            <li className="mb-2"><strong>Despesas Operacionais</strong>: Despesas administrativas, comerciais e gerais</li>
            <li className="mb-2"><strong>Despesas Financeiras</strong>: Juros e outras despesas financeiras</li>
            <li><strong>Impostos</strong>: Impostos sobre o lucro (IR, CSLL, etc.)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Como Interpretar</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-green-50 p-4 rounded-md">
              <p className="font-semibold text-green-800 mb-2">Resultado Nominal Positivo</p>
              <p className="text-gray-700">Indica que a empresa obteve lucro no período</p>
            </div>
            <div className="bg-red-50 p-4 rounded-md">
              <p className="font-semibold text-red-800 mb-2">Resultado Nominal Negativo</p>
              <p className="text-gray-700">Indica que a empresa operou com prejuízo</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-md">
              <p className="font-semibold text-blue-800 mb-2">Tendência do Resultado</p>
              <p className="text-gray-700">Crescente: Sugere melhoria<br/>Decrescente: Pode indicar deterioração</p>
            </div>
          </div>
          <p className="text-gray-700 mt-4">
            A interpretação deve considerar o contexto do setor, o porte da empresa e o momento econômico.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Exemplo Prático</h2>
          <p className="text-gray-700 mb-4">Considere uma empresa com os seguintes dados para dois anos consecutivos:</p>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Ano 1:</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li className="mb-2">Receita Líquida: R$ 1.000.000</li>
              <li className="mb-2">Custos dos Produtos Vendidos: R$ 600.000</li>
              <li className="mb-2">Despesas Operacionais: R$ 200.000</li>
              <li className="mb-2">Despesas Financeiras: R$ 50.000</li>
              <li>Impostos sobre o Lucro: R$ 50.000</li>
            </ul>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Ano 2:</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li className="mb-2">Receita Líquida: R$ 1.200.000</li>
              <li className="mb-2">Custos dos Produtos Vendidos: R$ 700.000</li>
              <li className="mb-2">Despesas Operacionais: R$ 230.000</li>
              <li className="mb-2">Despesas Financeiras: R$ 60.000</li>
              <li>Impostos sobre o Lucro: R$ 70.000</li>
            </ul>
          </div>
          
          <p className="text-gray-700 mb-4">Cálculo do Resultado Nominal:</p>
          
          <div className="mb-4">
            <p className="font-semibold text-blue-700 mb-2">Para o Ano 1:</p>
            <p className="text-gray-700">Resultado Nominal = R$ 1.000.000 - R$ 600.000 - R$ 200.000 - R$ 50.000 - R$ 50.000 = R$ 100.000</p>
          </div>
          
          <div className="mb-4">
            <p className="font-semibold text-blue-700 mb-2">Para o Ano 2:</p>
            <p className="text-gray-700">Resultado Nominal = R$ 1.200.000 - R$ 700.000 - R$ 230.000 - R$ 60.000 - R$ 70.000 = R$ 140.000</p>
          </div>
          
          <p className="text-gray-700">
            Neste exemplo, o Resultado Nominal aumentou de R$ 100.000 para R$ 140.000, representando um crescimento de 40%.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Diferença entre Resultado Nominal e Real</h2>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2"><strong>Resultado Nominal</strong>: Expresso em valores correntes, sem ajuste pela inflação</li>
            <li><strong>Resultado Real</strong>: Ajustado pela inflação, refletindo o poder de compra efetivo</li>
          </ul>
          <p className="text-gray-700 mb-4">
            Em um cenário com inflação de 10% entre o Ano 1 e o Ano 2, o Resultado Real do Ano 2 seria:
          </p>
          <div className="bg-gray-50 p-4 rounded-md mb-4">
            <p className="text-gray-700">Resultado Real = R$ 140.000 / 1,10 = R$ 127.273 (em valores do Ano 1)</p>
          </div>
          <p className="text-gray-700 mb-4">
            Isso significa que, embora o Resultado Nominal tenha crescido 40%, o Resultado Real cresceu apenas 27,27%, considerando o efeito da inflação.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Comparação com Outros Indicadores</h2>
          
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Resultado Nominal vs. Resultado VPL</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li className="mb-2">O Resultado Nominal não considera o valor do dinheiro no tempo</li>
              <li>O Resultado VPL traz os fluxos futuros a valor presente usando uma taxa de desconto</li>
            </ul>
          </div>
          
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Resultado Nominal vs. EBITDA</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li className="mb-2">O Resultado Nominal inclui depreciação, amortização, juros e impostos</li>
              <li>O EBITDA exclui esses elementos, focando na geração operacional de caixa</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Resultado Nominal vs. Fluxo de Caixa</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li className="mb-2">O Resultado Nominal segue o regime de competência (quando o fato gerador ocorre)</li>
              <li>O Fluxo de Caixa segue o regime de caixa (quando o dinheiro efetivamente entra ou sai)</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Aplicações Práticas</h2>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2"><strong>Análise de Desempenho</strong>: Avaliar o desempenho financeiro da empresa ao longo do tempo</li>
            <li className="mb-2"><strong>Distribuição de Resultados</strong>: Base para cálculo de dividendos e participações</li>
            <li className="mb-2"><strong>Planejamento Tributário</strong>: Cálculo de impostos sobre o lucro</li>
            <li><strong>Avaliação de Investimentos</strong>: Componente para análise de retorno sobre investimento</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Limitações</h2>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2">Não considera o valor do dinheiro no tempo</li>
            <li className="mb-2">Pode ser distorcido por eventos não recorrentes</li>
            <li className="mb-2">Não reflete necessariamente a geração de caixa</li>
            <li>Em períodos de alta inflação, pode dar uma falsa impressão de crescimento</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Dicas para Análise</h2>
          <ol className="list-decimal pl-6 mb-4 text-gray-700">
            <li className="mb-2">Compare o Resultado Nominal com períodos anteriores, considerando o efeito da inflação</li>
            <li className="mb-2">Analise a composição do resultado, identificando os principais drivers</li>
            <li className="mb-2">Verifique a recorrência dos componentes do resultado</li>
            <li className="mb-2">Considere o Resultado Nominal em conjunto com indicadores de caixa e rentabilidade</li>
            <li>Avalie o Resultado Nominal em relação ao capital investido ou patrimônio líquido</li>
          </ol>
        </section>
      </div>
    </div>
  );
};

export default ResultadoNominal;
