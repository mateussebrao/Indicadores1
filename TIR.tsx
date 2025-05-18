const TIR = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 my-6">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">TIR - Taxa Interna de Retorno</h1>
      
      <div className="prose max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Definição</h2>
          <p className="text-gray-700 mb-4">
            A Taxa Interna de Retorno (TIR) é uma taxa fictícia de desconto, obtida a partir de uma estimativa de fluxo de caixa futuro (projeção das receitas geradas por um investimento ao longo de um período específico) na qual o Valor Presente Líquido (VPL) é igual a zero. Na prática, essa taxa é empregada por investidores com o intuito de determinar a viabilidade de um projeto.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Conceitos Fundamentais</h2>
          <p className="text-gray-700 mb-4">Para entender a TIR, é necessário conhecer dois conceitos principais:</p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2"><strong>Valor Presente Líquido (VPL)</strong>: Representa o valor atual de um fluxo de caixa futuro, descontado por uma taxa específica.</li>
            <li><strong>Fluxo de Caixa Projetado</strong>: Corresponde a uma representação das expectativas de entradas financeiras a partir de um investimento inicial.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Fórmula de Cálculo</h2>
          <p className="text-gray-700 mb-4">A fórmula da TIR é:</p>
          <div className="bg-blue-50 p-4 rounded-md mb-4">
            <p className="font-bold text-blue-800">VPL = C + ∑(t=1 até N) [Ft / (1+i)^t] = 0</p>
          </div>
          <p className="text-gray-700 mb-2">Onde:</p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2"><strong>VPL</strong> = valor presente líquido, que deve ser igual a 0</li>
            <li className="mb-2"><strong>C</strong> = capital inicial investido</li>
            <li className="mb-2"><strong>N</strong> = número de períodos do fluxo de caixa projetado</li>
            <li className="mb-2"><strong>Ft</strong> = entrada financeira em cada período</li>
            <li><strong>i</strong> = Taxa Interna de Retorno (o valor que estamos buscando)</li>
          </ul>
          <p className="text-gray-700 mb-4">
            Na prática, o cálculo da TIR geralmente é feito usando planilhas eletrônicas ou calculadoras financeiras, pois envolve um processo iterativo para encontrar a taxa que iguala o VPL a zero.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Como a TIR Funciona</h2>
          <p className="text-gray-700 mb-4">
            Como seu cálculo prevê igualar o VPL a 0, a TIR representa o desempenho que pode ser obtido com determinado investimento. Ela indica, com base no fluxo de caixa projetado, o quanto você pode ganhar ao longo do tempo.
          </p>
          <p className="text-gray-700 mb-4">
            A TIR demonstra o valor do dinheiro no tempo, permitindo compreender o comportamento do dinheiro com os períodos decorridos, em vez de apenas calcular a rentabilidade esperada com o uso de uma taxa simples.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Aplicação Prática</h2>
          <p className="text-gray-700 mb-4">
            A TIR funciona como um indicador para fazer benchmarking. Com ela, é possível comparar investimentos e projetos e entender quais deles podem ser mais atraentes, com base no retorno esperado.
          </p>
          <p className="text-gray-700 mb-4">
            Na prática, a TIR é comparada com a Taxa Mínima de Atratividade (TMA), que representa o retorno mínimo aceitável para um investimento:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="bg-green-50 p-4 rounded-md">
              <p className="font-semibold text-green-800 mb-2">Se TIR {'>'} TMA:</p>
              <p className="text-gray-700">O investimento é considerado atraente</p>
            </div>
            <div className="bg-red-50 p-4 rounded-md">
              <p className="font-semibold text-red-800 mb-2">Se TIR {'<'} TMA:</p>
              <p className="text-gray-700">O investimento não é considerado atraente</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-md">
              <p className="font-semibold text-yellow-800 mb-2">Se TIR = TMA:</p>
              <p className="text-gray-700">O investimento está no limite da atratividade</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Impacto da TIR nos Investimentos</h2>
          <p className="text-gray-700 mb-4">
            A TIR pode influenciar diretamente a tomada de decisão dos investimentos. Ela permite comparar diferentes alternativas de investimento, como:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2">Comparar a TIR com a taxa livre de risco (Selic no Brasil ou títulos do Tesouro americano nos EUA)</li>
            <li className="mb-2">Avaliar se vale mais a pena investir em alternativas conservadoras ou em opções com maior rentabilidade potencial</li>
            <li>Analisar o custo de oportunidade entre diferentes investimentos</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Limitações da TIR</h2>
          <p className="text-gray-700 mb-4">Existem alguns pontos importantes a considerar ao utilizar a TIR:</p>
          <ol className="list-decimal pl-6 mb-4 text-gray-700">
            <li className="mb-2"><strong>Não mede o risco</strong>: A TIR avalia apenas o retorno, mas não mede o risco associado ao investimento</li>
            <li className="mb-2"><strong>Pressupõe reinvestimento</strong>: A TIR assume que os fluxos de caixa intermediários são reinvestidos à mesma taxa, o que nem sempre é realista</li>
            <li className="mb-2"><strong>Múltiplas TIRs</strong>: Em alguns casos, quando há fluxos de caixa negativos após o investimento inicial, pode haver mais de uma TIR que satisfaz a equação</li>
            <li><strong>Não considera o tamanho do investimento</strong>: A TIR não leva em conta a escala do investimento, apenas a taxa de retorno</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Exemplo Prático</h2>
          <p className="text-gray-700 mb-4">Imagine um investimento com os seguintes fluxos de caixa:</p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2">Investimento inicial: R$ 10.000 (negativo)</li>
            <li className="mb-2">Ano 1: R$ 3.000 (positivo)</li>
            <li className="mb-2">Ano 2: R$ 4.000 (positivo)</li>
            <li>Ano 3: R$ 5.000 (positivo)</li>
          </ul>
          <p className="text-gray-700 mb-4">Para calcular a TIR, precisamos encontrar a taxa (i) que satisfaz:</p>
          <div className="bg-blue-50 p-4 rounded-md mb-4">
            <p className="font-bold text-blue-800">-10.000 + 3.000/(1+i)¹ + 4.000/(1+i)² + 5.000/(1+i)³ = 0</p>
          </div>
          <p className="text-gray-700 mb-4">
            Utilizando uma calculadora financeira ou planilha, encontraríamos uma TIR de aproximadamente 15,2%.
          </p>
          <p className="text-gray-700">
            <strong>Interpretação:</strong> Este investimento oferece um retorno anual de 15,2%. Se a Taxa Mínima de Atratividade (TMA) for de 10%, este seria um investimento atraente, pois a TIR (15,2%) é maior que a TMA (10%).
          </p>
        </section>
      </div>
    </div>
  );
};

export default TIR;
