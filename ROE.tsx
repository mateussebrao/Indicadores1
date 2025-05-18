import React from 'react';

const ROE = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 my-6">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">ROE - Return on Equity (Retorno sobre o Patrimônio Líquido)</h1>
      
      <div className="prose max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Definição</h2>
          <p className="text-gray-700 mb-4">
            O ROE (Return on Equity) ou Retorno sobre o Patrimônio Líquido é um indicador financeiro que mede a capacidade de uma empresa gerar lucro a partir do capital investido pelos acionistas. Este indicador representa a rentabilidade obtida sobre o patrimônio líquido da empresa, mostrando quanto de lucro a empresa consegue gerar com o dinheiro investido pelos sócios.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Importância</h2>
          <p className="text-gray-700 mb-4">
            O ROE é um dos indicadores mais importantes para investidores e analistas financeiros porque:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2">Demonstra a eficiência da empresa na utilização do capital dos acionistas</li>
            <li className="mb-2">Permite comparar a rentabilidade entre diferentes empresas e setores</li>
            <li className="mb-2">Ajuda a identificar empresas com vantagens competitivas sustentáveis</li>
            <li className="mb-2">Serve como parâmetro para decisões de investimento</li>
            <li>Indica a capacidade da gestão de agregar valor ao negócio</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Fórmula de Cálculo</h2>
          <p className="text-gray-700 mb-4">
            A fórmula básica para calcular o ROE é:
          </p>
          <div className="bg-blue-50 p-4 rounded-md mb-4">
            <p className="font-bold text-blue-800">ROE = Lucro Líquido / Patrimônio Líquido × 100</p>
          </div>
          <p className="text-gray-700 mb-4">
            Onde:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2"><strong>Lucro Líquido</strong>: Resultado final da empresa após todos os custos, despesas e impostos</li>
            <li><strong>Patrimônio Líquido</strong>: Capital próprio da empresa (capital social + reservas + lucros acumulados)</li>
          </ul>
          
          <p className="text-gray-700 mb-4">
            Para uma análise mais precisa, muitos analistas utilizam o patrimônio líquido médio do período:
          </p>
          <div className="bg-blue-50 p-4 rounded-md mb-4">
            <p className="font-bold text-blue-800">ROE = Lucro Líquido / [(Patrimônio Líquido Inicial + Patrimônio Líquido Final) / 2] × 100</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Como Interpretar</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-green-50 p-4 rounded-md">
              <p className="font-semibold text-green-800 mb-2">ROE Alto (acima de 15%)</p>
              <p className="text-gray-700">Indica boa eficiência na utilização do capital dos acionistas</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-md">
              <p className="font-semibold text-yellow-800 mb-2">ROE Médio (entre 10% e 15%)</p>
              <p className="text-gray-700">Indica desempenho satisfatório</p>
            </div>
            <div className="bg-red-50 p-4 rounded-md">
              <p className="font-semibold text-red-800 mb-2">ROE Baixo (abaixo de 10%)</p>
              <p className="text-gray-700">Pode indicar ineficiência na utilização do capital</p>
            </div>
          </div>
          <p className="text-gray-700 mt-4">
            É importante ressaltar que esses parâmetros podem variar conforme o setor e o contexto econômico. Um ROE considerado baixo em um setor pode ser satisfatório em outro.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Exemplo Prático</h2>
          <p className="text-gray-700 mb-4">Considere uma empresa com os seguintes dados:</p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2">Lucro Líquido anual: R$ 2 milhões</li>
            <li className="mb-2">Patrimônio Líquido no início do ano: R$ 12 milhões</li>
            <li>Patrimônio Líquido no final do ano: R$ 14 milhões</li>
          </ul>
          
          <p className="text-gray-700 mb-4">Cálculo do ROE:</p>
          <ol className="list-decimal pl-6 mb-4 text-gray-700">
            <li className="mb-2">Patrimônio Líquido Médio = (R$ 12 milhões + R$ 14 milhões) / 2 = R$ 13 milhões</li>
            <li>ROE = R$ 2 milhões / R$ 13 milhões × 100 = 15,38%</li>
          </ol>
          
          <p className="text-gray-700">
            Neste exemplo, a empresa apresenta um ROE de 15,38%, o que indica um bom retorno sobre o capital investido pelos acionistas.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Análise Avançada: Modelo DuPont</h2>
          <p className="text-gray-700 mb-4">
            O Modelo DuPont decompõe o ROE em três componentes principais, permitindo uma análise mais detalhada:
          </p>
          <div className="bg-blue-50 p-4 rounded-md mb-4">
            <p className="font-bold text-blue-800">ROE = Margem Líquida × Giro do Ativo × Multiplicador de Alavancagem Financeira</p>
          </div>
          <p className="text-gray-700 mb-4">
            Onde:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2"><strong>Margem Líquida</strong> = Lucro Líquido / Receita Líquida</li>
            <li className="mb-2"><strong>Giro do Ativo</strong> = Receita Líquida / Ativo Total</li>
            <li><strong>Multiplicador de Alavancagem Financeira</strong> = Ativo Total / Patrimônio Líquido</li>
          </ul>
          
          <p className="text-gray-700 mb-4">
            Esta decomposição permite identificar se o ROE é impulsionado por:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2">Eficiência operacional (Margem Líquida)</li>
            <li className="mb-2">Eficiência no uso dos ativos (Giro do Ativo)</li>
            <li>Alavancagem financeira (Multiplicador de Alavancagem)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Comparação com Outros Indicadores</h2>
          
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">ROE vs. ROA (Return on Assets)</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li className="mb-2">O ROA mede o retorno sobre todos os ativos da empresa</li>
              <li className="mb-2">O ROE considera apenas o capital próprio</li>
              <li>O ROE será sempre maior que o ROA em empresas com dívidas</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-blue-600 mb-2">ROE vs. ROIC (Return on Invested Capital)</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li className="mb-2">O ROIC considera todo o capital investido (próprio e de terceiros)</li>
              <li className="mb-2">O ROE considera apenas o capital próprio</li>
              <li>O ROIC é mais adequado para avaliar a eficiência operacional</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Limitações</h2>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2">Pode ser inflado artificialmente pelo aumento da alavancagem financeira</li>
            <li className="mb-2">Não considera o risco associado ao uso de dívidas</li>
            <li className="mb-2">Pode ser distorcido por eventos não recorrentes</li>
            <li className="mb-2">Não reflete o valor de mercado da empresa</li>
            <li>Pode variar significativamente entre diferentes setores</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Dicas para Análise</h2>
          <ol className="list-decimal pl-6 mb-4 text-gray-700">
            <li className="mb-2">Compare o ROE da empresa com sua própria média histórica</li>
            <li className="mb-2">Compare o ROE com empresas do mesmo setor</li>
            <li className="mb-2">Analise a tendência do ROE ao longo do tempo</li>
            <li className="mb-2">Utilize o Modelo DuPont para entender os drivers do ROE</li>
            <li>Considere o ROE em conjunto com outros indicadores financeiros</li>
          </ol>
        </section>
      </div>
    </div>
  );
};

export default ROE;
