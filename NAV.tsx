import React from 'react';

const NAV = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 my-6">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">NAV - Net Asset Value (Valor Patrimonial Líquido)</h1>
      
      <div className="prose max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Definição</h2>
          <p className="text-gray-700 mb-4">
            O NAV (Net Asset Value) ou Valor Patrimonial Líquido é um indicador financeiro que representa o valor líquido dos ativos de uma entidade após a dedução de suas obrigações. Este indicador é amplamente utilizado para avaliar fundos de investimento, empresas, parcerias, trusts ou outras entidades de investimento, mostrando o valor atual da entidade.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Importância</h2>
          <p className="text-gray-700 mb-4">
            O NAV é um indicador crucial para investidores e gestores financeiros porque:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2">Fornece uma medida clara do valor real de um fundo ou empresa</li>
            <li className="mb-2">Permite comparar diferentes fundos de investimento</li>
            <li className="mb-2">Ajuda a determinar se um ativo está sendo negociado com desconto ou prêmio em relação ao seu valor patrimonial</li>
            <li className="mb-2">Serve como base para decisões de investimento e desinvestimento</li>
            <li>É utilizado para calcular o preço por cota de fundos de investimento</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Fórmula de Cálculo</h2>
          <p className="text-gray-700 mb-4">
            A fórmula básica para calcular o NAV é:
          </p>
          <div className="bg-blue-50 p-4 rounded-md mb-4">
            <p className="font-bold text-blue-800">NAV = (Valor Total dos Ativos - Valor Total dos Passivos) / Número de Cotas ou Ações em Circulação</p>
          </div>
          <p className="text-gray-700 mb-4">
            Onde:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2"><strong>Valor Total dos Ativos</strong>: Soma de todos os ativos da entidade (investimentos, caixa, recebíveis, etc.)</li>
            <li className="mb-2"><strong>Valor Total dos Passivos</strong>: Soma de todas as obrigações da entidade (dívidas, despesas a pagar, etc.)</li>
            <li><strong>Número de Cotas ou Ações em Circulação</strong>: Quantidade total de cotas ou ações emitidas pela entidade</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Como Interpretar</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-green-50 p-4 rounded-md">
              <p className="font-semibold text-green-800 mb-2">NAV Crescente</p>
              <p className="text-gray-700">Indica valorização dos ativos ou redução dos passivos, sinalizando boa gestão</p>
            </div>
            <div className="bg-red-50 p-4 rounded-md">
              <p className="font-semibold text-red-800 mb-2">NAV Decrescente</p>
              <p className="text-gray-700">Pode indicar desvalorização dos ativos ou aumento dos passivos, sinalizando possíveis problemas</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-md">
              <p className="font-semibold text-blue-800 mb-2">NAV vs. Preço de Mercado</p>
              <p className="text-gray-700">Se preço {'>'} NAV: negociado com prêmio<br/>Se preço {'<'} NAV: negociado com desconto</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Exemplo Prático</h2>
          <p className="text-gray-700 mb-4">Considere um fundo imobiliário com os seguintes dados:</p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2">Valor total dos imóveis: R$ 100 milhões</li>
            <li className="mb-2">Caixa e outros ativos: R$ 5 milhões</li>
            <li className="mb-2">Dívidas e outras obrigações: R$ 15 milhões</li>
            <li>Número de cotas em circulação: 1 milhão</li>
          </ul>
          
          <p className="text-gray-700 mb-4">Cálculo do NAV:</p>
          <ol className="list-decimal pl-6 mb-4 text-gray-700">
            <li className="mb-2">Valor Total dos Ativos = R$ 100 milhões + R$ 5 milhões = R$ 105 milhões</li>
            <li className="mb-2">Valor Total dos Passivos = R$ 15 milhões</li>
            <li>NAV = (R$ 105 milhões - R$ 15 milhões) / 1 milhão = R$ 90 / cota</li>
          </ol>
          
          <p className="text-gray-700">
            Se este fundo estiver sendo negociado a R$ 85 por cota, ele está sendo negociado com um desconto de 5,56% em relação ao seu NAV.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Aplicações Específicas</h2>
          
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">NAV em Fundos de Investimento</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li className="mb-2">Calculado diariamente para fundos abertos</li>
              <li className="mb-2">Serve como base para o preço de compra e venda de cotas</li>
              <li>Permite avaliar o desempenho do gestor do fundo</li>
            </ul>
          </div>
          
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">NAV em Fundos Imobiliários</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li className="mb-2">Ajuda a identificar oportunidades de compra quando o fundo negocia abaixo do NAV</li>
              <li>Permite avaliar a qualidade dos ativos imobiliários do fundo</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-blue-600 mb-2">NAV em Empresas</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li className="mb-2">Utilizado como método de avaliação, especialmente para empresas com ativos tangíveis significativos</li>
              <li>Serve como piso de valor em processos de fusão e aquisição</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Limitações</h2>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2">Não considera o valor de mercado dos ativos, apenas o valor contábil</li>
            <li className="mb-2">Pode não refletir adequadamente ativos intangíveis como propriedade intelectual ou goodwill</li>
            <li className="mb-2">Em mercados voláteis, o NAV pode mudar rapidamente</li>
            <li>Não considera o potencial de crescimento futuro da entidade</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Dicas para Análise</h2>
          <ol className="list-decimal pl-6 mb-4 text-gray-700">
            <li className="mb-2">Compare o NAV atual com valores históricos para identificar tendências</li>
            <li className="mb-2">Analise o desconto ou prêmio em relação ao NAV para identificar oportunidades de investimento</li>
            <li className="mb-2">Considere outros indicadores em conjunto com o NAV para uma análise mais completa</li>
            <li>Verifique a frequência e metodologia de avaliação dos ativos que compõem o NAV</li>
          </ol>
        </section>
      </div>
    </div>
  );
};

export default NAV;
