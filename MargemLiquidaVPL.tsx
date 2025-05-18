import React from 'react';

const MargemLiquidaVPL = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 my-6">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">Margem Líquida VPL</h1>
      
      <div className="prose max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Definição</h2>
          <p className="text-gray-700 mb-4">
            A Margem Líquida VPL (Valor Presente Líquido) é um indicador financeiro que representa a relação percentual entre o Valor Presente Líquido de um projeto e o investimento inicial ou o valor presente das receitas. Este indicador combina o conceito tradicional de margem líquida com a análise de valor presente, considerando o valor do dinheiro no tempo.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Importância</h2>
          <p className="text-gray-700 mb-4">
            A Margem Líquida VPL é um indicador crucial para análise de investimentos porque:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2">Considera o valor do dinheiro no tempo, diferentemente da margem líquida tradicional</li>
            <li className="mb-2">Permite comparar a rentabilidade relativa de diferentes projetos de investimento</li>
            <li className="mb-2">Fornece uma medida percentual da criação de valor em relação ao capital investido</li>
            <li className="mb-2">Ajuda na priorização de projetos quando há restrição de recursos</li>
            <li>Complementa a análise do VPL absoluto, facilitando a comparação entre projetos de diferentes escalas</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Fórmula de Cálculo</h2>
          <p className="text-gray-700 mb-4">
            A Margem Líquida VPL pode ser calculada de duas formas principais:
          </p>
          <div className="bg-blue-50 p-4 rounded-md mb-4">
            <p className="font-bold text-blue-800">Margem Líquida VPL = (VPL / Investimento Inicial) × 100</p>
          </div>
          <p className="text-gray-700 mb-4">
            Ou alternativamente:
          </p>
          <div className="bg-blue-50 p-4 rounded-md mb-4">
            <p className="font-bold text-blue-800">Margem Líquida VPL = (VPL / Valor Presente das Receitas) × 100</p>
          </div>
          <p className="text-gray-700 mb-4">
            Onde:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2"><strong>VPL (Valor Presente Líquido)</strong>: Soma dos fluxos de caixa futuros descontados menos o investimento inicial</li>
            <li className="mb-2"><strong>Investimento Inicial</strong>: Capital inicial necessário para o projeto</li>
            <li><strong>Valor Presente das Receitas</strong>: Soma de todas as entradas de caixa futuras descontadas à taxa mínima de atratividade</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Como Interpretar</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-green-50 p-4 rounded-md">
              <p className="font-semibold text-green-800 mb-2">Margem Líquida VPL Positiva</p>
              <p className="text-gray-700">Indica que o projeto cria valor além do retorno mínimo exigido</p>
            </div>
            <div className="bg-red-50 p-4 rounded-md">
              <p className="font-semibold text-red-800 mb-2">Margem Líquida VPL Negativa</p>
              <p className="text-gray-700">Indica que o projeto destrói valor, não atingindo o retorno mínimo exigido</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-md">
              <p className="font-semibold text-blue-800 mb-2">Margem Líquida VPL Zero</p>
              <p className="text-gray-700">Indica que o projeto atinge exatamente o retorno mínimo exigido</p>
            </div>
          </div>
          <p className="text-gray-700 mt-4">
            Quanto maior a Margem Líquida VPL, maior a criação de valor relativa do projeto.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Exemplo Prático</h2>
          <p className="text-gray-700 mb-4">Considere dois projetos de investimento com os seguintes dados:</p>
          
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Projeto A:</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li className="mb-2">Investimento Inicial: R$ 1.000.000</li>
              <li className="mb-2">Fluxos de Caixa Anuais (5 anos): R$ 300.000 por ano</li>
              <li className="mb-2">Taxa Mínima de Atratividade: 10% ao ano</li>
              <li>VPL calculado: R$ 137.908</li>
            </ul>
          </div>
          
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Projeto B:</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li className="mb-2">Investimento Inicial: R$ 500.000</li>
              <li className="mb-2">Fluxos de Caixa Anuais (5 anos): R$ 140.000 por ano</li>
              <li className="mb-2">Taxa Mínima de Atratividade: 10% ao ano</li>
              <li>VPL calculado: R$ 30.954</li>
            </ul>
          </div>
          
          <p className="text-gray-700 mb-4">Cálculo da Margem Líquida VPL:</p>
          
          <div className="mb-4">
            <p className="font-semibold text-blue-700 mb-2">Para o Projeto A:</p>
            <p className="text-gray-700">Margem Líquida VPL = (R$ 137.908 / R$ 1.000.000) × 100 = 13,79%</p>
          </div>
          
          <div className="mb-4">
            <p className="font-semibold text-blue-700 mb-2">Para o Projeto B:</p>
            <p className="text-gray-700">Margem Líquida VPL = (R$ 30.954 / R$ 500.000) × 100 = 6,19%</p>
          </div>
          
          <p className="text-gray-700">
            Neste exemplo, embora ambos os projetos tenham VPL positivo, o Projeto A apresenta uma Margem Líquida VPL significativamente maior, indicando uma criação de valor relativa superior.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Comparação com Outros Indicadores</h2>
          
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Margem Líquida VPL vs. VPL Tradicional</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li className="mb-2">O VPL tradicional mostra o valor absoluto criado</li>
              <li>A Margem Líquida VPL mostra o valor relativo criado em relação ao investimento</li>
            </ul>
          </div>
          
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Margem Líquida VPL vs. TIR (Taxa Interna de Retorno)</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li className="mb-2">A TIR representa a taxa de retorno do projeto</li>
              <li>A Margem Líquida VPL representa a criação de valor relativa</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Margem Líquida VPL vs. Índice de Lucratividade (IL)</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li className="mb-2">O IL é calculado como (VP dos Fluxos de Caixa / Investimento Inicial)</li>
              <li className="mb-2">A Margem Líquida VPL é calculada como (VPL / Investimento Inicial)</li>
              <li>Relação: Margem Líquida VPL = IL - 1</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Aplicações Práticas</h2>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2"><strong>Priorização de Projetos</strong>: Quando há restrição de recursos, projetos com maior Margem Líquida VPL podem ser priorizados</li>
            <li className="mb-2"><strong>Análise de Eficiência</strong>: Avalia a eficiência na utilização do capital investido</li>
            <li className="mb-2"><strong>Comparação entre Projetos</strong>: Permite comparar projetos de diferentes escalas em termos relativos</li>
            <li><strong>Avaliação de Desempenho</strong>: Pode ser utilizada para avaliar o desempenho de diferentes unidades de negócio</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Limitações</h2>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2">Assim como o VPL, depende da precisão das projeções de fluxo de caixa</li>
            <li className="mb-2">A escolha da taxa de desconto afeta significativamente o resultado</li>
            <li className="mb-2">Não considera o tamanho absoluto do projeto, o que pode ser relevante em algumas decisões</li>
            <li>Não reflete o tempo necessário para recuperação do investimento</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Dicas para Análise</h2>
          <ol className="list-decimal pl-6 mb-4 text-gray-700">
            <li className="mb-2">Utilize a Margem Líquida VPL em conjunto com o VPL absoluto para uma análise mais completa</li>
            <li className="mb-2">Compare projetos de escalas semelhantes para uma análise mais justa</li>
            <li className="mb-2">Realize análises de sensibilidade para verificar como a Margem Líquida VPL varia com diferentes taxas de desconto</li>
            <li>Considere o horizonte temporal dos projetos ao comparar suas Margens Líquidas VPL</li>
          </ol>
        </section>
      </div>
    </div>
  );
};

export default MargemLiquidaVPL;
