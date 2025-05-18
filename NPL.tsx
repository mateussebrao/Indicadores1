import React from 'react';

const NPL = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 my-6">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">NPL - Non-Performing Loan (Empréstimo Inadimplente)</h1>
      
      <div className="prose max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Definição</h2>
          <p className="text-gray-700 mb-4">
            O NPL (Non-Performing Loan) ou Empréstimo Inadimplente é um indicador financeiro que representa os empréstimos em que o devedor não está realizando os pagamentos conforme programado. Geralmente, um empréstimo é classificado como NPL quando o pagamento do principal ou dos juros está atrasado por 90 dias ou mais, ou quando há indicações claras de que o devedor não conseguirá cumprir suas obrigações.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Importância</h2>
          <p className="text-gray-700 mb-4">
            O NPL é um indicador crucial para instituições financeiras e investidores porque:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2">Reflete a qualidade da carteira de crédito de uma instituição financeira</li>
            <li className="mb-2">Indica a eficácia das políticas de concessão de crédito</li>
            <li className="mb-2">Serve como alerta para possíveis problemas financeiros futuros</li>
            <li className="mb-2">Afeta diretamente a rentabilidade e a saúde financeira dos bancos</li>
            <li>É monitorado por reguladores como indicador de estabilidade do sistema financeiro</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Fórmula de Cálculo</h2>
          <p className="text-gray-700 mb-4">
            O índice de NPL é geralmente calculado como:
          </p>
          <div className="bg-blue-50 p-4 rounded-md mb-4">
            <p className="font-bold text-blue-800">Índice de NPL = (Valor Total de Empréstimos Inadimplentes / Valor Total da Carteira de Crédito) × 100</p>
          </div>
          <p className="text-gray-700 mb-4">
            Onde:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2"><strong>Empréstimos Inadimplentes</strong>: Empréstimos com atraso superior a 90 dias ou com alta probabilidade de inadimplência</li>
            <li><strong>Carteira de Crédito</strong>: Valor total de todos os empréstimos concedidos pela instituição</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Como Interpretar</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-green-50 p-4 rounded-md">
              <p className="font-semibold text-green-800 mb-2">NPL Baixo (abaixo de 2%)</p>
              <p className="text-gray-700">Indica boa qualidade da carteira de crédito e políticas de concessão eficazes</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-md">
              <p className="font-semibold text-yellow-800 mb-2">NPL Médio (entre 2% e 5%)</p>
              <p className="text-gray-700">Considerado aceitável em muitos mercados, mas requer monitoramento</p>
            </div>
            <div className="bg-red-50 p-4 rounded-md">
              <p className="font-semibold text-red-800 mb-2">NPL Alto (acima de 5%)</p>
              <p className="text-gray-700">Pode indicar problemas significativos na qualidade dos ativos e nas políticas de crédito</p>
            </div>
          </div>
          <p className="text-gray-700 mt-4">
            Esses parâmetros podem variar conforme o país, o tipo de instituição financeira e o contexto econômico.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Exemplo Prático</h2>
          <p className="text-gray-700 mb-4">Considere um banco com os seguintes dados:</p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2">Valor total da carteira de crédito: R$ 10 bilhões</li>
            <li className="mb-2">Empréstimos com atraso superior a 90 dias: R$ 300 milhões</li>
            <li>Empréstimos reestruturados com alta probabilidade de inadimplência: R$ 100 milhões</li>
          </ul>
          
          <p className="text-gray-700 mb-4">Cálculo do índice de NPL:</p>
          <ol className="list-decimal pl-6 mb-4 text-gray-700">
            <li className="mb-2">Total de empréstimos inadimplentes = R$ 300 milhões + R$ 100 milhões = R$ 400 milhões</li>
            <li>Índice de NPL = (R$ 400 milhões / R$ 10 bilhões) × 100 = 4%</li>
          </ol>
          
          <p className="text-gray-700">
            Neste exemplo, o banco apresenta um índice de NPL de 4%, o que está dentro da faixa considerada aceitável, mas requer monitoramento.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Classificação e Provisionamento</h2>
          <p className="text-gray-700 mb-4">
            As instituições financeiras geralmente classificam os empréstimos em diferentes categorias de risco:
          </p>
          <ol className="list-decimal pl-6 mb-4 text-gray-700">
            <li className="mb-2"><strong>Normal</strong>: Pagamentos em dia</li>
            <li className="mb-2"><strong>Sob Observação</strong>: Atrasos de até 90 dias</li>
            <li className="mb-2"><strong>Substandard</strong>: Atrasos entre 90 e 180 dias</li>
            <li className="mb-2"><strong>Duvidoso</strong>: Atrasos entre 180 e 360 dias</li>
            <li><strong>Perda</strong>: Atrasos superiores a 360 dias</li>
          </ol>
          <p className="text-gray-700 mb-4">
            Para cada categoria, são constituídas provisões para perdas, que afetam diretamente o resultado financeiro da instituição.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Impacto nos Resultados Financeiros</h2>
          <p className="text-gray-700 mb-4">
            O aumento do NPL afeta negativamente os resultados financeiros das instituições por meio de:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2">Aumento das provisões para perdas com crédito</li>
            <li className="mb-2">Redução da receita de juros</li>
            <li className="mb-2">Aumento dos custos de cobrança e recuperação</li>
            <li>Possível necessidade de aumento de capital</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Estratégias de Gestão de NPL</h2>
          <p className="text-gray-700 mb-4">
            As instituições financeiras utilizam diversas estratégias para gerenciar o NPL:
          </p>
          <ol className="list-decimal pl-6 mb-4 text-gray-700">
            <li className="mb-2"><strong>Prevenção</strong>: Políticas de crédito mais rigorosas e sistemas de avaliação de risco eficazes</li>
            <li className="mb-2"><strong>Monitoramento</strong>: Acompanhamento constante da carteira para identificar sinais de alerta</li>
            <li className="mb-2"><strong>Reestruturação</strong>: Renegociação de dívidas para clientes com dificuldades temporárias</li>
            <li className="mb-2"><strong>Recuperação</strong>: Ações de cobrança e execução de garantias</li>
            <li><strong>Venda</strong>: Transferência de carteiras de NPL para empresas especializadas em recuperação de crédito</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Fatores Externos que Afetam o NPL</h2>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2"><strong>Condições Econômicas</strong>: Recessões e crises econômicas geralmente aumentam o NPL</li>
            <li className="mb-2"><strong>Desemprego</strong>: Taxas de desemprego elevadas afetam a capacidade de pagamento dos devedores</li>
            <li className="mb-2"><strong>Taxas de Juros</strong>: Aumentos significativos nas taxas podem elevar o NPL</li>
            <li><strong>Regulamentação</strong>: Mudanças nas regras de classificação e provisionamento</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Limitações</h2>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2">Diferentes países e instituições podem adotar critérios distintos para classificar empréstimos como NPL</li>
            <li className="mb-2">O indicador não considera a qualidade das garantias associadas aos empréstimos</li>
            <li className="mb-2">Pode haver manipulação por meio de reestruturações artificiais de dívidas</li>
            <li>Não reflete necessariamente as perdas reais, apenas a inadimplência</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Dicas para Análise</h2>
          <ol className="list-decimal pl-6 mb-4 text-gray-700">
            <li className="mb-2">Compare o NPL da instituição com a média do setor</li>
            <li className="mb-2">Analise a tendência do NPL ao longo do tempo</li>
            <li className="mb-2">Verifique a cobertura de provisões (provisões / NPL)</li>
            <li className="mb-2">Considere o contexto econômico ao interpretar o indicador</li>
            <li>Avalie o NPL em conjunto com outros indicadores de qualidade de ativos</li>
          </ol>
        </section>
      </div>
    </div>
  );
};

export default NPL;
