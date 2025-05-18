import React from 'react';

const ResultadoVPL = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 my-6">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">Resultado VPL</h1>
      
      <div className="prose max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Definição</h2>
          <p className="text-gray-700 mb-4">
            O Resultado VPL (Valor Presente Líquido) é um indicador financeiro que representa o valor absoluto criado ou destruído por um investimento, considerando o valor do dinheiro no tempo. Este indicador mostra, em termos monetários, quanto valor um projeto adiciona ou subtrai após descontar todos os fluxos de caixa futuros para o presente e subtrair o investimento inicial.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Importância</h2>
          <p className="text-gray-700 mb-4">
            O Resultado VPL é um dos indicadores mais importantes na análise de investimentos porque:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2">Considera o valor do dinheiro no tempo, reconhecendo que um real hoje vale mais que um real no futuro</li>
            <li className="mb-2">Fornece um valor absoluto claro da criação ou destruição de valor</li>
            <li className="mb-2">Permite decisões objetivas sobre a viabilidade financeira de projetos</li>
            <li className="mb-2">Considera todos os fluxos de caixa ao longo da vida útil do projeto</li>
            <li>É amplamente aceito na teoria financeira e na prática empresarial</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Fórmula de Cálculo</h2>
          <p className="text-gray-700 mb-4">
            A fórmula para calcular o Resultado VPL é:
          </p>
          <div className="bg-blue-50 p-4 rounded-md mb-4">
            <p className="font-bold text-blue-800">VPL = -I₀ + Σ(FCₜ / (1+i)ᵗ)</p>
          </div>
          <p className="text-gray-700 mb-4">
            Onde:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2"><strong>I₀</strong>: Investimento inicial</li>
            <li className="mb-2"><strong>FCₜ</strong>: Fluxo de caixa no período t</li>
            <li className="mb-2"><strong>i</strong>: Taxa de desconto (ou taxa mínima de atratividade)</li>
            <li className="mb-2"><strong>t</strong>: Período de tempo</li>
            <li><strong>Σ</strong>: Somatório dos fluxos de caixa descontados</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Como Interpretar</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-green-50 p-4 rounded-md">
              <p className="font-semibold text-green-800 mb-2">VPL {'>'} 0</p>
              <p className="text-gray-700">O projeto cria valor e deve ser aceito</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-md">
              <p className="font-semibold text-yellow-800 mb-2">VPL = 0</p>
              <p className="text-gray-700">O projeto atinge exatamente o retorno mínimo exigido</p>
            </div>
            <div className="bg-red-50 p-4 rounded-md">
              <p className="font-semibold text-red-800 mb-2">VPL {'<'} 0</p>
              <p className="text-gray-700">O projeto destrói valor e deve ser rejeitado</p>
            </div>
          </div>
          <p className="text-gray-700 mt-4">
            Quando há múltiplos projetos com VPL positivo, mas recursos limitados, aqueles com maior VPL devem ser priorizados.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Exemplo Prático</h2>
          <p className="text-gray-700 mb-4">Considere um projeto com os seguintes dados:</p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2">Investimento inicial: R$ 500.000</li>
            <li className="mb-2">Fluxos de caixa anuais (5 anos): R$ 150.000 por ano</li>
            <li>Taxa de desconto: 12% ao ano</li>
          </ul>
          
          <p className="text-gray-700 mb-4">Cálculo do Resultado VPL:</p>
          
          <div className="bg-gray-50 p-4 rounded-md mb-4">
            <p className="text-gray-700">VPL = -500.000 + 150.000/(1+0,12)¹ + 150.000/(1+0,12)² + 150.000/(1+0,12)³ + 150.000/(1+0,12)⁴ + 150.000/(1+0,12)⁵</p>
            <p className="text-gray-700 mt-2">VPL = -500.000 + 133.929 + 119.579 + 106.767 + 95.328 + 85.114</p>
            <p className="text-gray-700 mt-2">VPL = -500.000 + 540.717</p>
            <p className="font-semibold text-blue-700 mt-2">VPL = R$ 40.717</p>
          </div>
          
          <p className="text-gray-700">
            Neste exemplo, o Resultado VPL é positivo (R$ 40.717), indicando que o projeto cria valor além do retorno mínimo exigido de 12% ao ano.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Fatores que Afetam o Resultado VPL</h2>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2"><strong>Taxa de Desconto</strong>: Quanto maior a taxa, menor o VPL</li>
            <li className="mb-2"><strong>Magnitude dos Fluxos de Caixa</strong>: Fluxos maiores aumentam o VPL</li>
            <li className="mb-2"><strong>Timing dos Fluxos de Caixa</strong>: Fluxos mais próximos do início têm maior impacto no VPL</li>
            <li><strong>Duração do Projeto</strong>: Projetos mais longos podem acumular mais valor, mas também aumentam a incerteza</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Vantagens em Relação a Outros Indicadores</h2>
          
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">VPL vs. Payback</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li className="mb-2">O Payback considera apenas o tempo de recuperação do investimento</li>
              <li>O VPL considera todos os fluxos de caixa e o valor do dinheiro no tempo</li>
            </ul>
          </div>
          
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">VPL vs. TIR (Taxa Interna de Retorno)</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li className="mb-2">A TIR pode levar a decisões incorretas quando há fluxos de caixa não convencionais</li>
              <li>O VPL sempre fornece uma decisão correta do ponto de vista da maximização de valor</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-blue-600 mb-2">VPL vs. ROI (Retorno sobre Investimento)</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li className="mb-2">O ROI não considera o valor do dinheiro no tempo</li>
              <li>O VPL traz todos os fluxos para o valor presente</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Aplicações Práticas</h2>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2"><strong>Avaliação de Projetos de Investimento</strong>: Determinar se um projeto deve ser aceito ou rejeitado</li>
            <li className="mb-2"><strong>Orçamento de Capital</strong>: Priorizar projetos quando há restrição de recursos</li>
            <li className="mb-2"><strong>Avaliação de Empresas</strong>: Componente fundamental na avaliação por fluxo de caixa descontado</li>
            <li><strong>Análise de Aquisições</strong>: Determinar o valor máximo a ser pago por um ativo ou empresa</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Limitações</h2>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2">Depende fortemente da precisão das projeções de fluxo de caixa</li>
            <li className="mb-2">A escolha da taxa de desconto é subjetiva e afeta significativamente o resultado</li>
            <li className="mb-2">Não considera restrições de capital ou interdependências entre projetos</li>
            <li>Não reflete o risco do projeto além do que está incorporado na taxa de desconto</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Dicas para Análise</h2>
          <ol className="list-decimal pl-6 mb-4 text-gray-700">
            <li className="mb-2">Realize análises de sensibilidade para verificar como o VPL varia com diferentes taxas de desconto</li>
            <li className="mb-2">Compare o VPL com outros indicadores para uma análise mais completa</li>
            <li className="mb-2">Considere diferentes cenários (otimista, realista, pessimista) para os fluxos de caixa</li>
            <li>Para comparar projetos de diferentes escalas, utilize a Margem Líquida VPL ou o Índice de Lucratividade</li>
          </ol>
        </section>
      </div>
    </div>
  );
};

export default ResultadoVPL;
