const MargemLiquida = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 my-6">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">Margem Líquida</h1>
      
      <div className="prose max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Definição</h2>
          <p className="text-gray-700 mb-4">
            A margem líquida é um indicador financeiro que mede a lucratividade real de uma empresa, ou seja, a porcentagem de lucro líquido que a empresa obtém em relação à sua receita líquida. Este indicador considera todos os custos e despesas operacionais, como impostos, salários, aluguel, entre outros, fornecendo uma visão mais completa da rentabilidade do negócio.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Importância</h2>
          <p className="text-gray-700 mb-4">
            A margem líquida permite avaliar a eficiência operacional da empresa e sua capacidade de gerar lucro líquido a partir da receita. Quanto maior a margem líquida, mais eficiente é a empresa em transformar suas vendas em lucro. Por outro lado, uma margem líquida baixa pode indicar problemas de gestão, como altos custos de produção ou ineficiência na administração dos recursos.
          </p>
          <p className="text-gray-700 mb-4">
            Este indicador também é utilizado para:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2">Comparar a rentabilidade de diferentes empresas do mesmo setor</li>
            <li className="mb-2">Auxiliar na tomada de decisões de investimento ou parcerias comerciais</li>
            <li className="mb-2">Avaliar a saúde financeira geral de um negócio</li>
            <li>Identificar tendências de lucratividade ao longo do tempo</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Fórmula de Cálculo</h2>
          <p className="text-gray-700 mb-4">A margem líquida é expressa em porcentagem e calculada através da seguinte fórmula:</p>
          <div className="bg-blue-50 p-4 rounded-md mb-4">
            <p className="font-bold text-blue-800">Margem Líquida (%) = (Lucro Líquido / Receita Líquida) × 100</p>
          </div>
          <p className="text-gray-700 mb-2">Onde:</p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2"><strong>Lucro Líquido</strong>: É o resultado final após deduzir todos os custos, despesas, impostos e juros da receita total. Representa o ganho real da empresa após todas as obrigações.</li>
            <li><strong>Receita Líquida</strong>: É o valor total das vendas após deduções de impostos sobre vendas, devoluções e abatimentos.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Interpretação</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="bg-green-50 p-4 rounded-md">
              <p className="font-semibold text-green-800 mb-2">Margem Líquida Alta</p>
              <p className="text-gray-700">Indica que a empresa está sendo eficiente em controlar seus custos e despesas, conseguindo converter uma boa parte de sua receita em lucro.</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-md">
              <p className="font-semibold text-yellow-800 mb-2">Margem Líquida Baixa</p>
              <p className="text-gray-700">Pode indicar problemas com custos elevados, preços inadequados ou ineficiência operacional.</p>
            </div>
            <div className="bg-red-50 p-4 rounded-md">
              <p className="font-semibold text-red-800 mb-2">Margem Líquida Negativa</p>
              <p className="text-gray-700">Significa que a empresa está operando com prejuízo, gastando mais do que arrecada.</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Exemplo Prático</h2>
          <p className="text-gray-700 mb-4">Suponha que uma empresa tenha:</p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2">Receita Líquida: R$ 500.000</li>
            <li className="mb-2">Custos dos Produtos Vendidos: R$ 300.000</li>
            <li className="mb-2">Despesas Operacionais: R$ 100.000</li>
            <li>Impostos: R$ 30.000</li>
          </ul>
          <p className="text-gray-700 mb-2">Cálculo:</p>
          <ol className="list-decimal pl-6 mb-4 text-gray-700">
            <li className="mb-2">Lucro Líquido = R$ 500.000 - R$ 300.000 - R$ 100.000 - R$ 30.000 = R$ 70.000</li>
            <li>Margem Líquida = (R$ 70.000 / R$ 500.000) × 100 = 14%</li>
          </ol>
          <p className="text-gray-700">
            <strong>Interpretação:</strong> A empresa está convertendo 14% de sua receita líquida em lucro líquido. Para determinar se este é um bom resultado, deve-se comparar com a média do setor em que a empresa atua.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Comparação com Outros Indicadores</h2>
          <p className="text-gray-700 mb-4">A margem líquida difere de outros indicadores de lucratividade:</p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2"><strong>Margem Bruta</strong>: Considera apenas os custos diretos de produção, não incluindo despesas operacionais, impostos e juros.</li>
            <li className="mb-2"><strong>Margem Operacional</strong>: Considera os custos e despesas operacionais, mas não inclui impostos e despesas financeiras.</li>
            <li><strong>Margem EBITDA</strong>: Exclui os efeitos de impostos, juros, depreciação e amortização.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Limitações</h2>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2">Não considera o volume de vendas (uma empresa pode ter margem líquida alta, mas volume de vendas baixo)</li>
            <li className="mb-2">Pode ser afetada por eventos não recorrentes (como venda de ativos)</li>
            <li className="mb-2">Varia significativamente entre diferentes setores, dificultando comparações entre indústrias distintas</li>
            <li>Não reflete a eficiência no uso de capital ou ativos</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Dicas para Melhorar a Margem Líquida</h2>
          <ol className="list-decimal pl-6 mb-4 text-gray-700">
            <li className="mb-2">Reduzir custos operacionais sem comprometer a qualidade</li>
            <li className="mb-2">Aumentar preços, se o mercado permitir</li>
            <li className="mb-2">Melhorar a eficiência dos processos produtivos</li>
            <li className="mb-2">Renegociar com fornecedores</li>
            <li className="mb-2">Otimizar a estrutura tributária dentro dos limites legais</li>
            <li>Reduzir despesas financeiras através de melhor gestão de dívidas</li>
          </ol>
        </section>
      </div>
    </div>
  );
};

export default MargemLiquida;
