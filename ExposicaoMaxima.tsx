import React from 'react';

const ExposicaoMaxima = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 my-6">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">Exposição Máxima</h1>
      
      <div className="prose max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Definição</h2>
          <p className="text-gray-700 mb-4">
            A Exposição Máxima é um indicador financeiro que representa o valor máximo que uma empresa ou investidor precisa desembolsar para garantir a viabilidade de um projeto. Este indicador é especialmente importante no setor imobiliário e na construção civil, pois mostra o montante máximo que deverá ser retirado do caixa da empresa em seu pior momento para garantir suas operações.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Importância</h2>
          <p className="text-gray-700 mb-4">
            A Exposição Máxima é um balizador crucial para investimentos e para a atração de investidores, pois:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2">Demonstra o investimento necessário para que um projeto possa ser executado</li>
            <li className="mb-2">Considera o prejuízo projetado para os prazos estipulados</li>
            <li className="mb-2">Ajuda a identificar por quanto tempo o caixa da empresa ficará exposto (operando no negativo)</li>
            <li>Permite calcular o ponto em que as contas irão se equilibrar</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Fórmula de Cálculo</h2>
          <p className="text-gray-700 mb-4">
            A Exposição Máxima é calculada através da análise do fluxo de caixa do projeto, identificando o ponto de maior saída líquida de recursos. Matematicamente, pode ser expressa como:
          </p>
          <div className="bg-blue-50 p-4 rounded-md mb-4">
            <p className="font-bold text-blue-800">Exposição Máxima = Valor absoluto do ponto mais negativo do fluxo de caixa acumulado</p>
          </div>
          <p className="text-gray-700 mb-4">
            É importante ressaltar que a Exposição Máxima nem sempre equivale ao custo total do projeto, pois ao longo do ciclo construtivo existem diferentes receitas que podem reduzir o valor necessário para garantir a viabilidade do empreendimento.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Como Interpretar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-4 rounded-md">
              <p className="font-semibold text-green-800 mb-2">Exposição Máxima Baixa</p>
              <p className="text-gray-700">Sugere menor necessidade de capital, reduzindo o risco financeiro do projeto</p>
            </div>
            <div className="bg-red-50 p-4 rounded-md">
              <p className="font-semibold text-red-800 mb-2">Exposição Máxima Alta</p>
              <p className="text-gray-700">Indica maior necessidade de capital para o projeto, o que pode aumentar o risco financeiro</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Exemplo Prático</h2>
          <p className="text-gray-700 mb-4">Considere um projeto imobiliário com o seguinte fluxo de caixa (em milhões de reais):</p>
          
          <div className="overflow-x-auto mb-4">
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">Mês</th>
                  <th className="py-2 px-4 border-b">Entradas</th>
                  <th className="py-2 px-4 border-b">Saídas</th>
                  <th className="py-2 px-4 border-b">Fluxo Líquido</th>
                  <th className="py-2 px-4 border-b">Fluxo Acumulado</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b">1</td>
                  <td className="py-2 px-4 border-b">0</td>
                  <td className="py-2 px-4 border-b">2</td>
                  <td className="py-2 px-4 border-b">-2</td>
                  <td className="py-2 px-4 border-b">-2</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">2</td>
                  <td className="py-2 px-4 border-b">0</td>
                  <td className="py-2 px-4 border-b">3</td>
                  <td className="py-2 px-4 border-b">-3</td>
                  <td className="py-2 px-4 border-b">-5</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">3</td>
                  <td className="py-2 px-4 border-b">1</td>
                  <td className="py-2 px-4 border-b">4</td>
                  <td className="py-2 px-4 border-b">-3</td>
                  <td className="py-2 px-4 border-b">-8</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">4</td>
                  <td className="py-2 px-4 border-b">2</td>
                  <td className="py-2 px-4 border-b">3</td>
                  <td className="py-2 px-4 border-b">-1</td>
                  <td className="py-2 px-4 border-b">-9</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">5</td>
                  <td className="py-2 px-4 border-b">3</td>
                  <td className="py-2 px-4 border-b">2</td>
                  <td className="py-2 px-4 border-b">+1</td>
                  <td className="py-2 px-4 border-b">-8</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">6</td>
                  <td className="py-2 px-4 border-b">4</td>
                  <td className="py-2 px-4 border-b">2</td>
                  <td className="py-2 px-4 border-b">+2</td>
                  <td className="py-2 px-4 border-b">-6</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">7</td>
                  <td className="py-2 px-4 border-b">5</td>
                  <td className="py-2 px-4 border-b">1</td>
                  <td className="py-2 px-4 border-b">+4</td>
                  <td className="py-2 px-4 border-b">-2</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">8</td>
                  <td className="py-2 px-4 border-b">6</td>
                  <td className="py-2 px-4 border-b">1</td>
                  <td className="py-2 px-4 border-b">+5</td>
                  <td className="py-2 px-4 border-b">+3</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="text-gray-700">
            Neste exemplo, a Exposição Máxima ocorre no mês 4, quando o fluxo de caixa acumulado atinge -9 milhões de reais. Este é o valor que a empresa precisará ter disponível para garantir a viabilidade do projeto.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Relação com Outros Indicadores</h2>
          <p className="text-gray-700 mb-4">
            A Exposição Máxima trabalha em conjunto com outros indicadores na avaliação de viabilidade dos projetos:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2"><strong>Rentabilidade</strong>: Representa o retorno que poderá ser obtido com o empreendimento</li>
            <li className="mb-2"><strong>TIR (Taxa Interna de Retorno)</strong>: Indica a taxa de retorno do investimento</li>
            <li><strong>ROI (Retorno sobre Investimento)</strong>: Mostra o ganho obtido em relação ao valor investido</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Limitações</h2>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2">Depende da precisão das projeções de fluxo de caixa</li>
            <li className="mb-2">Não considera fatores externos que podem afetar o mercado</li>
            <li>Pode variar significativamente se houver mudanças no cronograma do projeto</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Dicas para Gestão</h2>
          <ol className="list-decimal pl-6 mb-4 text-gray-700">
            <li className="mb-2">Utilize ferramentas de Business Intelligence para análise precisa do fluxo de caixa</li>
            <li className="mb-2">Faça simulações com diferentes cenários (otimista, realista, pessimista)</li>
            <li className="mb-2">Monitore constantemente o fluxo de caixa real versus o projetado</li>
            <li>Tenha um plano de contingência para lidar com exposições maiores que as previstas</li>
          </ol>
        </section>
      </div>
    </div>
  );
};

export default ExposicaoMaxima;
