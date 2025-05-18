import React from 'react';

const VSO = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 my-6">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">VSO - Velocidade de Vendas sobre Oferta</h1>
      
      <div className="prose max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Definição</h2>
          <p className="text-gray-700 mb-4">
            O VSO (Velocidade de Vendas sobre Oferta) é um indicador financeiro utilizado principalmente no mercado imobiliário para medir o percentual de unidades comercializadas em relação ao total de unidades disponíveis em um determinado período. Este indicador funciona como um termômetro do mercado, demonstrando se a comercialização de um empreendimento imobiliário está evoluindo conforme o previsto.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Importância</h2>
          <p className="text-gray-700 mb-4">
            O VSO é um indicador crucial para o setor imobiliário porque:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2">Reflete a atratividade dos produtos imobiliários no mercado</li>
            <li className="mb-2">Indica a eficiência com que as incorporadoras realizam seus negócios</li>
            <li className="mb-2">Serve como referência para investidores avaliarem o desempenho de empreendimentos</li>
            <li className="mb-2">Ajuda a prever o ritmo de vendas e o tempo necessário para comercializar todo o estoque</li>
            <li>Permite comparar o desempenho de diferentes empreendimentos ou regiões</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Fórmula de Cálculo</h2>
          <p className="text-gray-700 mb-4">
            A fórmula para calcular o VSO em um determinado período é:
          </p>
          <div className="bg-blue-50 p-4 rounded-md mb-4">
            <p className="font-bold text-blue-800">VSO = Vendas / (Vendas + Oferta)</p>
          </div>
          <p className="text-gray-700 mb-4">
            Onde:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2"><strong>Vendas</strong>: Número de unidades vendidas no período analisado</li>
            <li><strong>Oferta</strong>: Número de unidades disponíveis para venda (estoque) no final do período analisado</li>
          </ul>
          <p className="text-gray-700 mb-4">
            O resultado é geralmente expresso em percentual, multiplicando-se por 100.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Como Interpretar</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-green-50 p-4 rounded-md">
              <p className="font-semibold text-green-800 mb-2">VSO Alto (acima de 15% ao mês)</p>
              <p className="text-gray-700">Indica forte demanda e boa aceitação do produto pelo mercado</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-md">
              <p className="font-semibold text-yellow-800 mb-2">VSO Médio (entre 10% e 15% ao mês)</p>
              <p className="text-gray-700">Indica desempenho satisfatório de vendas</p>
            </div>
            <div className="bg-red-50 p-4 rounded-md">
              <p className="font-semibold text-red-800 mb-2">VSO Baixo (abaixo de 10% ao mês)</p>
              <p className="text-gray-700">Pode indicar problemas de aceitação do produto ou condições desfavoráveis de mercado</p>
            </div>
          </div>
          <p className="text-gray-700 mt-4">
            É importante ressaltar que esses parâmetros podem variar conforme o segmento de mercado, a região e o momento econômico.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Exemplo Prático</h2>
          <p className="text-gray-700 mb-4">Considere um empreendimento imobiliário com os seguintes dados para o mês de março:</p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2">Total de unidades do empreendimento: 100 apartamentos</li>
            <li className="mb-2">Unidades vendidas até o final de fevereiro: 60 apartamentos</li>
            <li className="mb-2">Unidades vendidas durante março: 8 apartamentos</li>
            <li>Estoque disponível no final de março: 32 apartamentos</li>
          </ul>
          
          <p className="text-gray-700 mb-4">Cálculo do VSO para março:</p>
          <ol className="list-decimal pl-6 mb-4 text-gray-700">
            <li className="mb-2">Vendas = 8 unidades</li>
            <li className="mb-2">Oferta = 32 unidades</li>
            <li>VSO = 8 / (8 + 32) = 8 / 40 = 0,20 ou 20%</li>
          </ol>
          
          <p className="text-gray-700">
            Neste exemplo, o empreendimento apresentou um VSO de 20% em março, o que indica um bom desempenho de vendas para o período.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Variações do Indicador</h2>
          
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">VSO Acumulado</h3>
            <p className="text-gray-700">
              Mede o percentual de vendas em relação à oferta considerando um período acumulado, geralmente 12 meses.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-blue-600 mb-2">IVV (Índice de Velocidade de Vendas)</h3>
            <p className="text-gray-700">
              Similar ao VSO, mas considera outros fatores como tempo de exposição do imóvel no mercado, localização, preço e tamanho.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Fatores que Influenciam o VSO</h2>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2"><strong>Localização</strong>: Imóveis em regiões mais valorizadas tendem a ter VSO mais alto</li>
            <li className="mb-2"><strong>Preço</strong>: Preços competitivos geralmente resultam em maior VSO</li>
            <li className="mb-2"><strong>Condições de Financiamento</strong>: Facilidades de pagamento podem aumentar o VSO</li>
            <li className="mb-2"><strong>Qualidade do Produto</strong>: Projetos com diferenciais tendem a vender mais rapidamente</li>
            <li><strong>Condições Econômicas</strong>: Taxas de juros, disponibilidade de crédito e nível de emprego afetam o VSO</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Aplicações Práticas</h2>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2"><strong>Planejamento Financeiro</strong>: Ajuda a prever o fluxo de caixa do empreendimento</li>
            <li className="mb-2"><strong>Estratégia de Marketing</strong>: Permite ajustar estratégias de vendas conforme o desempenho</li>
            <li className="mb-2"><strong>Análise de Mercado</strong>: Fornece insights sobre a demanda em diferentes segmentos e regiões</li>
            <li><strong>Avaliação de Desempenho</strong>: Permite comparar o desempenho de diferentes empreendimentos</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Limitações</h2>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2">Não considera o valor das unidades vendidas, apenas a quantidade</li>
            <li className="mb-2">Pode ser influenciado por fatores sazonais</li>
            <li className="mb-2">Não reflete necessariamente a rentabilidade do empreendimento</li>
            <li>Diferentes metodologias de cálculo podem dificultar comparações entre empresas</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Dicas para Análise</h2>
          <ol className="list-decimal pl-6 mb-4 text-gray-700">
            <li className="mb-2">Compare o VSO do empreendimento com a média do mercado na mesma região</li>
            <li className="mb-2">Analise a evolução do VSO ao longo do tempo para identificar tendências</li>
            <li className="mb-2">Considere fatores sazonais que podem afetar o indicador</li>
            <li>Utilize o VSO em conjunto com outros indicadores para uma análise mais completa</li>
          </ol>
        </section>
      </div>
    </div>
  );
};

export default VSO;
