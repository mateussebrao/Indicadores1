import React from 'react';

const MargemLiquidaNominal = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 my-6">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">Margem Líquida Nominal</h1>
      
      <div className="prose max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Definição</h2>
          <p className="text-gray-700 mb-4">
            A Margem Líquida Nominal é um indicador financeiro que representa a relação percentual entre o lucro líquido e a receita líquida de uma empresa, sem considerar os efeitos da inflação ou do valor do dinheiro no tempo. Este indicador mostra quanto de cada real de venda se converte efetivamente em lucro para a empresa, em valores nominais (correntes).
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Importância</h2>
          <p className="text-gray-700 mb-4">
            A Margem Líquida Nominal é um indicador fundamental para análise financeira porque:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2">Demonstra a eficiência da empresa em converter vendas em lucro líquido</li>
            <li className="mb-2">Permite comparar a lucratividade entre diferentes períodos ou empresas</li>
            <li className="mb-2">Serve como parâmetro para avaliação da gestão e da estratégia de preços</li>
            <li className="mb-2">Ajuda a identificar tendências de rentabilidade ao longo do tempo</li>
            <li>É facilmente compreendida por gestores, investidores e analistas</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Fórmula de Cálculo</h2>
          <p className="text-gray-700 mb-4">
            A fórmula para calcular a Margem Líquida Nominal é:
          </p>
          <div className="bg-blue-50 p-4 rounded-md mb-4">
            <p className="font-bold text-blue-800">Margem Líquida Nominal = (Lucro Líquido / Receita Líquida) × 100</p>
          </div>
          <p className="text-gray-700 mb-4">
            Onde:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2"><strong>Lucro Líquido</strong>: Resultado final após todos os custos, despesas e impostos</li>
            <li><strong>Receita Líquida</strong>: Receita total após deduções de impostos sobre vendas, devoluções e abatimentos</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Como Interpretar</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-green-50 p-4 rounded-md">
              <p className="font-semibold text-green-800 mb-2">Margem Líquida Nominal Alta</p>
              <p className="text-gray-700">Indica boa eficiência na gestão de custos e despesas</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-md">
              <p className="font-semibold text-yellow-800 mb-2">Margem Líquida Nominal Baixa</p>
              <p className="text-gray-700">Pode indicar problemas com custos elevados ou preços inadequados</p>
            </div>
            <div className="bg-red-50 p-4 rounded-md">
              <p className="font-semibold text-red-800 mb-2">Margem Líquida Nominal Negativa</p>
              <p className="text-gray-700">Indica que a empresa está operando com prejuízo</p>
            </div>
          </div>
          <p className="text-gray-700 mt-4">
            Os parâmetros para classificar uma margem como alta ou baixa variam conforme o setor. Por exemplo:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2">Varejo de alimentos: 1-3% pode ser considerado bom</li>
            <li className="mb-2">Tecnologia: 15-20% pode ser comum</li>
            <li>Serviços financeiros: 20-30% pode ser esperado</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Exemplo Prático</h2>
          <p className="text-gray-700 mb-4">Considere uma empresa com os seguintes dados:</p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2">Receita Bruta: R$ 1.000.000</li>
            <li className="mb-2">Impostos sobre Vendas: R$ 150.000</li>
            <li className="mb-2">Receita Líquida: R$ 850.000</li>
            <li className="mb-2">Custos dos Produtos Vendidos: R$ 500.000</li>
            <li className="mb-2">Despesas Operacionais: R$ 200.000</li>
            <li className="mb-2">Resultado Financeiro: -R$ 30.000</li>
            <li className="mb-2">Impostos sobre o Lucro: R$ 40.000</li>
            <li>Lucro Líquido: R$ 80.000</li>
          </ul>
          
          <p className="text-gray-700 mb-4">Cálculo da Margem Líquida Nominal:</p>
          <div className="bg-gray-50 p-4 rounded-md mb-4">
            <p className="text-gray-700">Margem Líquida Nominal = (R$ 80.000 / R$ 850.000) × 100 = 9,41%</p>
          </div>
          
          <p className="text-gray-700">
            Neste exemplo, a empresa apresenta uma Margem Líquida Nominal de 9,41%, o que significa que para cada R$ 100 de receita líquida, a empresa obtém R$ 9,41 de lucro líquido.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Diferença entre Margem Líquida Nominal e Real</h2>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2"><strong>Margem Líquida Nominal</strong>: Calculada com valores correntes, sem ajuste pela inflação</li>
            <li><strong>Margem Líquida Real</strong>: Ajustada pela inflação, refletindo o poder de compra efetivo</li>
          </ul>
          <p className="text-gray-700 mb-4">
            Em períodos de alta inflação, a diferença entre as duas pode ser significativa. Por exemplo, uma Margem Líquida Nominal de 15% em um ambiente com inflação de 10% ao ano representa uma Margem Líquida Real de apenas 4,55% (calculada como [(1+0,15)/(1+0,10)]-1).
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Comparação com Outros Indicadores</h2>
          
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Margem Líquida Nominal vs. Margem Bruta</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li className="mb-2">A Margem Bruta considera apenas os custos diretos de produção</li>
              <li>A Margem Líquida Nominal considera todos os custos, despesas e impostos</li>
            </ul>
          </div>
          
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Margem Líquida Nominal vs. Margem Operacional</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li className="mb-2">A Margem Operacional exclui o resultado financeiro e os impostos sobre o lucro</li>
              <li>A Margem Líquida Nominal inclui todos os componentes do resultado</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Margem Líquida Nominal vs. Margem Líquida VPL</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li className="mb-2">A Margem Líquida Nominal não considera o valor do dinheiro no tempo</li>
              <li>A Margem Líquida VPL traz os fluxos futuros a valor presente</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Aplicações Práticas</h2>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2"><strong>Análise de Desempenho</strong>: Avaliar a eficiência da empresa em diferentes períodos</li>
            <li className="mb-2"><strong>Benchmarking</strong>: Comparar o desempenho com concorrentes do mesmo setor</li>
            <li className="mb-2"><strong>Definição de Preços</strong>: Auxiliar na estratégia de precificação de produtos e serviços</li>
            <li><strong>Avaliação de Investimentos</strong>: Servir como parâmetro para decisões de investimento</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Limitações</h2>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2">Não considera o valor do dinheiro no tempo</li>
            <li className="mb-2">Pode ser distorcida por eventos não recorrentes</li>
            <li className="mb-2">Não reflete o volume de vendas (uma empresa pode ter margem alta, mas volume baixo)</li>
            <li>Varia significativamente entre diferentes setores, dificultando comparações</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Dicas para Análise</h2>
          <ol className="list-decimal pl-6 mb-4 text-gray-700">
            <li className="mb-2">Compare a Margem Líquida Nominal da empresa com sua própria média histórica</li>
            <li className="mb-2">Compare com empresas do mesmo setor e porte</li>
            <li className="mb-2">Analise a tendência ao longo do tempo para identificar melhorias ou deteriorações</li>
            <li className="mb-2">Considere o contexto econômico e setorial ao interpretar os resultados</li>
            <li>Utilize em conjunto com outros indicadores para uma análise mais completa</li>
          </ol>
        </section>
      </div>
    </div>
  );
};

export default MargemLiquidaNominal;
