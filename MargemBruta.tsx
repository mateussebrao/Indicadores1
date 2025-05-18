const MargemBruta = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 my-6">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">Margem Bruta</h1>
      
      <div className="prose max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Definição</h2>
          <p className="text-gray-700 mb-4">
            A margem bruta é um indicador financeiro que mostra a porcentagem de lucro que uma empresa obtém em relação às suas vendas, após deduzir apenas os custos diretos de produção ou aquisição dos produtos vendidos. Este indicador revela a eficiência operacional básica de uma empresa, demonstrando quanto dinheiro ela está ganhando com cada produto vendido, considerando apenas os custos diretamente relacionados à produção.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Importância</h2>
          <p className="text-gray-700 mb-4">
            A margem bruta é fundamental para avaliar a eficiência operacional de uma empresa. Ela indica quanto a empresa está obtendo de retorno sobre suas vendas após cobrir os custos de produção. Uma margem bruta alta indica que a empresa está obtendo um bom retorno sobre suas vendas e que é eficiente na gestão de seus custos diretos.
          </p>
          <p className="text-gray-700 mb-4">
            Este indicador é utilizado para:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2">Avaliar a eficiência na produção e precificação dos produtos</li>
            <li className="mb-2">Comparar o desempenho de uma empresa com seus concorrentes ou com o setor</li>
            <li className="mb-2">Identificar tendências na estrutura de custos ao longo do tempo</li>
            <li>Auxiliar na tomada de decisões sobre estratégias de preços e produção</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Fórmula de Cálculo</h2>
          <p className="text-gray-700 mb-4">A margem bruta é calculada subtraindo-se o custo dos produtos vendidos (CPV) das receitas de vendas e, em seguida, dividindo-se o resultado pelo valor das receitas de vendas. A fórmula é:</p>
          <div className="bg-blue-50 p-4 rounded-md mb-4">
            <p className="font-bold text-blue-800">Margem Bruta = (Receita - Custo dos Produtos Vendidos) / Receita</p>
          </div>
          <p className="text-gray-700 mb-4">Ou, expressa em porcentagem:</p>
          <div className="bg-blue-50 p-4 rounded-md mb-4">
            <p className="font-bold text-blue-800">Margem Bruta (%) = [(Receita - Custo dos Produtos Vendidos) / Receita] × 100</p>
          </div>
          <p className="text-gray-700 mb-2">Onde:</p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2"><strong>Receita</strong>: É o valor total das vendas de uma empresa durante um determinado período, obtida através da soma de todas as vendas realizadas.</li>
            <li><strong>Custo dos Produtos Vendidos (CPV)</strong>: É o valor gasto pela empresa para produzir ou adquirir os produtos vendidos. Inclui os custos diretos relacionados à produção, como matéria-prima, mão de obra direta e custos indiretos de fabricação (como energia elétrica e aluguel do espaço de produção).</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Interpretação</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="bg-green-50 p-4 rounded-md">
              <p className="font-semibold text-green-800 mb-2">Margem Bruta Alta</p>
              <p className="text-gray-700">Indica que a empresa está sendo eficiente na produção e/ou está conseguindo vender seus produtos a preços competitivos. Quanto maior a margem bruta, maior é a rentabilidade básica da empresa.</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-md">
              <p className="font-semibold text-yellow-800 mb-2">Margem Bruta Baixa</p>
              <p className="text-gray-700">Pode indicar problemas com custos elevados de produção, preços inadequados ou ineficiência operacional básica.</p>
            </div>
            <div className="bg-red-50 p-4 rounded-md">
              <p className="font-semibold text-red-800 mb-2">Margem Bruta Negativa</p>
              <p className="text-gray-700">Significa que a empresa está vendendo seus produtos por um valor menor do que custa para produzi-los, o que é insustentável a longo prazo.</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Exemplo Prático</h2>
          <p className="text-gray-700 mb-4">Suponha que uma empresa tenha:</p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2">Receita Total: R$ 500.000</li>
            <li>Custo dos Produtos Vendidos: R$ 300.000</li>
          </ul>
          <p className="text-gray-700 mb-2">Cálculo:</p>
          <ol className="list-decimal pl-6 mb-4 text-gray-700">
            <li className="mb-2">Margem Bruta = (R$ 500.000 - R$ 300.000) / R$ 500.000 = R$ 200.000 / R$ 500.000 = 0,4</li>
            <li>Margem Bruta (%) = 0,4 × 100 = 40%</li>
          </ol>
          <p className="text-gray-700">
            <strong>Interpretação:</strong> A empresa está obtendo uma margem bruta de 40%, o que significa que para cada R$ 1,00 vendido, R$ 0,40 permanece após cobrir os custos diretos de produção. Este valor será utilizado para cobrir despesas operacionais, impostos e gerar lucro.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Comparação com Outros Indicadores</h2>
          <p className="text-gray-700 mb-4">A margem bruta difere de outros indicadores de lucratividade:</p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2"><strong>Margem Líquida</strong>: Considera todos os custos e despesas, incluindo operacionais, impostos e juros.</li>
            <li className="mb-2"><strong>Margem Operacional</strong>: Considera os custos dos produtos vendidos e as despesas operacionais, mas não inclui impostos e despesas financeiras.</li>
            <li><strong>Margem de Contribuição</strong>: Considera apenas os custos variáveis, não incluindo os custos fixos.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Limitações</h2>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2">Não considera despesas operacionais, como marketing, vendas e administrativas</li>
            <li className="mb-2">Não reflete o impacto de impostos e despesas financeiras</li>
            <li className="mb-2">Varia significativamente entre diferentes setores, dificultando comparações entre indústrias distintas</li>
            <li>Não considera o volume de vendas (uma empresa pode ter margem bruta alta, mas volume de vendas baixo)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Dicas para Melhorar a Margem Bruta</h2>
          <ol className="list-decimal pl-6 mb-4 text-gray-700">
            <li className="mb-2">Reduzir os custos de produção através de processos mais eficientes</li>
            <li className="mb-2">Negociar melhores preços com fornecedores de matérias-primas</li>
            <li className="mb-2">Aumentar os preços de venda, se o mercado permitir</li>
            <li className="mb-2">Melhorar o mix de produtos, focando naqueles com margens mais altas</li>
            <li className="mb-2">Investir em tecnologia para aumentar a eficiência produtiva</li>
            <li>Reduzir desperdícios no processo de produção</li>
          </ol>
        </section>
      </div>
    </div>
  );
};

export default MargemBruta;
