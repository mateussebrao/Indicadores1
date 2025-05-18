import React from 'react';

const DRE = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 my-6">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">DRE - Demonstração do Resultado do Exercício</h1>
      
      <div className="prose max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Definição</h2>
          <p className="text-gray-700 mb-4">
            A Demonstração do Resultado do Exercício (DRE) é um relatório contábil que apresenta de forma ordenada e sistemática as receitas, custos e despesas de uma empresa durante um determinado período, geralmente um ano fiscal. A DRE mostra o desempenho econômico da empresa, evidenciando se houve lucro ou prejuízo no período analisado.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Importância</h2>
          <p className="text-gray-700 mb-4">
            A DRE é um dos relatórios financeiros mais importantes para uma empresa porque:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2">Fornece uma visão clara do desempenho econômico da organização</li>
            <li className="mb-2">Permite identificar a origem dos resultados (lucros ou prejuízos)</li>
            <li className="mb-2">Serve como base para análise de rentabilidade e eficiência operacional</li>
            <li className="mb-2">Auxilia na tomada de decisões estratégicas e operacionais</li>
            <li className="mb-2">É exigida por lei para fins fiscais e de prestação de contas</li>
            <li>Permite comparar o desempenho atual com períodos anteriores ou com concorrentes</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Estrutura Básica</h2>
          <p className="text-gray-700 mb-4">
            A DRE segue uma estrutura padronizada, geralmente composta pelos seguintes elementos:
          </p>
          <ol className="list-decimal pl-6 mb-4 text-gray-700">
            <li className="mb-2"><strong>Receita Bruta de Vendas</strong>: Total das vendas brutas no período</li>
            <li className="mb-2"><strong>(-) Deduções</strong>: Impostos sobre vendas, devoluções e abatimentos</li>
            <li className="mb-2"><strong>(=) Receita Líquida</strong>: Receita bruta menos deduções</li>
            <li className="mb-2"><strong>(-) Custo dos Produtos Vendidos (CPV)</strong>: Custos diretos relacionados à produção</li>
            <li className="mb-2"><strong>(=) Lucro Bruto</strong>: Receita líquida menos CPV</li>
            <li className="mb-2"><strong>(-) Despesas Operacionais</strong>: Despesas administrativas, comerciais e gerais</li>
            <li className="mb-2"><strong>(+/-) Resultado Financeiro</strong>: Receitas financeiras menos despesas financeiras</li>
            <li className="mb-2"><strong>(=) Lucro Antes do Imposto de Renda (LAIR)</strong>: Resultado antes dos impostos sobre o lucro</li>
            <li className="mb-2"><strong>(-) Provisão para IR e CSLL</strong>: Impostos sobre o lucro</li>
            <li><strong>(=) Lucro Líquido do Exercício</strong>: Resultado final após todos os custos, despesas e impostos</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Indicadores Derivados da DRE</h2>
          <p className="text-gray-700 mb-4">
            A partir da DRE, é possível calcular diversos indicadores financeiros importantes:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2"><strong>Margem Bruta</strong>: Lucro Bruto / Receita Líquida</li>
            <li className="mb-2"><strong>Margem Operacional</strong>: Lucro Operacional / Receita Líquida</li>
            <li className="mb-2"><strong>Margem Líquida</strong>: Lucro Líquido / Receita Líquida</li>
            <li className="mb-2"><strong>EBITDA</strong>: Lucro antes de juros, impostos, depreciação e amortização</li>
            <li><strong>Índice de Eficiência Operacional</strong>: Despesas Operacionais / Receita Líquida</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Exemplo Prático</h2>
          <p className="text-gray-700 mb-4">Considere uma empresa com os seguintes dados para o ano fiscal (valores em R$):</p>
          
          <div className="overflow-x-auto mb-4">
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b text-left">Item</th>
                  <th className="py-2 px-4 border-b text-right">Valor</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b">Receita Bruta de Vendas</td>
                  <td className="py-2 px-4 border-b text-right">1.000.000</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">(-) Impostos sobre Vendas</td>
                  <td className="py-2 px-4 border-b text-right">150.000</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">(-) Devoluções e Abatimentos</td>
                  <td className="py-2 px-4 border-b text-right">50.000</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b font-semibold">(=) Receita Líquida</td>
                  <td className="py-2 px-4 border-b text-right font-semibold">800.000</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">(-) Custo dos Produtos Vendidos</td>
                  <td className="py-2 px-4 border-b text-right">480.000</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b font-semibold">(=) Lucro Bruto</td>
                  <td className="py-2 px-4 border-b text-right font-semibold">320.000</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">(-) Despesas Administrativas</td>
                  <td className="py-2 px-4 border-b text-right">80.000</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">(-) Despesas Comerciais</td>
                  <td className="py-2 px-4 border-b text-right">70.000</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">(-) Despesas Gerais</td>
                  <td className="py-2 px-4 border-b text-right">30.000</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b font-semibold">(=) Lucro Operacional</td>
                  <td className="py-2 px-4 border-b text-right font-semibold">140.000</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">(+) Receitas Financeiras</td>
                  <td className="py-2 px-4 border-b text-right">20.000</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">(-) Despesas Financeiras</td>
                  <td className="py-2 px-4 border-b text-right">40.000</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b font-semibold">(=) Lucro Antes do IR e CSLL</td>
                  <td className="py-2 px-4 border-b text-right font-semibold">120.000</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">(-) Provisão para IR e CSLL</td>
                  <td className="py-2 px-4 border-b text-right">40.800</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b font-semibold">(=) Lucro Líquido do Exercício</td>
                  <td className="py-2 px-4 border-b text-right font-semibold">79.200</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="text-gray-700 mb-4">Com base nestes dados, podemos calcular:</p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2">Margem Bruta: 320.000 / 800.000 = 40%</li>
            <li className="mb-2">Margem Operacional: 140.000 / 800.000 = 17,5%</li>
            <li>Margem Líquida: 79.200 / 800.000 = 9,9%</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Análise da DRE</h2>
          
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Análise Vertical</h3>
            <p className="text-gray-700">
              Consiste em expressar cada item da DRE como percentual da receita líquida, permitindo identificar a participação de cada componente no resultado.
            </p>
          </div>
          
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Análise Horizontal</h3>
            <p className="text-gray-700">
              Compara os valores de cada item com períodos anteriores, identificando tendências e variações significativas.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Análise de Tendências</h3>
            <p className="text-gray-700">
              Avalia a evolução dos principais indicadores ao longo de vários períodos para identificar padrões e projetar resultados futuros.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Limitações</h2>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2">Não considera o fluxo de caixa (regime de competência vs. regime de caixa)</li>
            <li className="mb-2">Pode ser afetada por práticas contábeis diferentes entre empresas</li>
            <li className="mb-2">Não reflete necessariamente o valor de mercado da empresa</li>
            <li>Eventos não recorrentes podem distorcer a análise de tendências</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Dicas para Interpretação</h2>
          <ol className="list-decimal pl-6 mb-4 text-gray-700">
            <li className="mb-2">Compare os resultados com períodos anteriores para identificar tendências</li>
            <li className="mb-2">Analise a DRE em conjunto com outros demonstrativos financeiros (Balanço Patrimonial, Fluxo de Caixa)</li>
            <li className="mb-2">Verifique a consistência entre crescimento de receitas e lucros</li>
            <li className="mb-2">Identifique itens não recorrentes que possam distorcer a análise</li>
            <li>Compare os indicadores com empresas do mesmo setor</li>
          </ol>
        </section>
      </div>
    </div>
  );
};

export default DRE;
