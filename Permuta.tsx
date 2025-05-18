const Permuta = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 my-6">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">Tipos de Permuta no Mercado Imobiliário</h1>
      
      <div className="prose max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Definição</h2>
          <p className="text-gray-700 mb-4">
            A permuta imobiliária é uma operação de troca de bens imóveis, amplamente utilizada no mercado de incorporação e desenvolvimento imobiliário. No contexto do mercado imobiliário, existem diversas modalidades de permuta, cada uma com características específicas que atendem a diferentes necessidades e objetivos.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Principais Tipos de Permuta</h2>
          
          <div className="bg-blue-50 p-5 rounded-md mb-6">
            <h3 className="font-semibold text-blue-800 mb-3">1. Permuta Física</h3>
            <p className="text-gray-700 mb-3">
              A Permuta Física é a troca de um terreno por unidades imobiliárias que serão construídas neste mesmo terreno. Nesta modalidade, o proprietário do terreno transfere a propriedade para a incorporadora e, em contrapartida, recebe um percentual das unidades que serão construídas no local.
            </p>
            
            <div className="bg-white p-4 rounded-md border border-blue-200 mb-4">
              <h4 className="font-semibold text-blue-700 mb-2">Exemplo Prático:</h4>
              <p className="text-gray-700 mb-2">Um proprietário possui um terreno de 2.000m² no bairro Bela Vista em Porto Alegre, avaliado em R$ 6 milhões. A incorporadora propõe construir um empreendimento residencial de alto padrão com 30 apartamentos.</p>
              <p className="text-gray-700 mb-2">Em uma permuta física, o proprietário recebe 6 apartamentos (20% das unidades), com valor médio de R$ 1 milhão cada, totalizando os R$ 6 milhões correspondentes ao valor do terreno.</p>
            </div>
          </div>
          
          <div className="bg-green-50 p-5 rounded-md mb-6">
            <h3 className="font-semibold text-green-800 mb-3">2. Permuta Financeira</h3>
            <p className="text-gray-700 mb-3">
              Na Permuta Financeira, o proprietário do terreno recebe, em vez de unidades físicas, um percentual do Valor Geral de Vendas (VGV) do empreendimento. Os pagamentos são realizados conforme o cronograma de vendas das unidades.
            </p>
            
            <div className="bg-white p-4 rounded-md border border-green-200 mb-4">
              <h4 className="font-semibold text-green-700 mb-2">Exemplo Prático:</h4>
              <p className="text-gray-700 mb-2">Utilizando o mesmo terreno do exemplo anterior, avaliado em R$ 6 milhões, a incorporadora estima um VGV de R$ 30 milhões para o empreendimento.</p>
              <p className="text-gray-700 mb-2">Em uma permuta financeira, o proprietário recebe 20% do VGV (R$ 6 milhões), com pagamentos distribuídos da seguinte forma:</p>
              <ul className="list-disc pl-6 mb-0 text-gray-700">
                <li className="mb-1">10% na assinatura do contrato: R$ 600.000</li>
                <li className="mb-1">30% durante a construção: R$ 1.800.000</li>
                <li>60% conforme as vendas das unidades: R$ 3.600.000</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-purple-50 p-5 rounded-md mb-6">
            <h3 className="font-semibold text-purple-800 mb-3">3. Permuta Mista</h3>
            <p className="text-gray-700 mb-3">
              A permuta mista combina elementos da permuta física e financeira, onde o proprietário do terreno recebe parte em unidades imobiliárias e parte em valores monetários. Esta modalidade oferece maior flexibilidade e pode atender melhor às necessidades específicas do proprietário.
            </p>
            
            <div className="bg-white p-4 rounded-md border border-purple-200 mb-4">
              <h4 className="font-semibold text-purple-700 mb-2">Exemplo Prático:</h4>
              <p className="text-gray-700 mb-2">No mesmo cenário dos exemplos anteriores, o proprietário do terreno poderia optar por receber 3 apartamentos (10% das unidades, equivalente a R$ 3 milhões) e mais R$ 3 milhões em dinheiro, distribuídos conforme cronograma de vendas.</p>
              <p className="text-gray-700 mb-2">Esta solução equilibra a segurança de ter imóveis no portfólio com a liquidez do recebimento em dinheiro.</p>
            </div>
          </div>
          
          <div className="bg-yellow-50 p-5 rounded-md mb-6">
            <h3 className="font-semibold text-yellow-800 mb-3">4. Permuta com Valor de Volta</h3>
            <p className="text-gray-700 mb-3">
              Ocorre quando o valor do terreno é superior ao valor das unidades ou percentual do VGV acordado para permuta. Neste caso, a incorporadora complementa a diferença com um pagamento adicional ao proprietário.
            </p>
            
            <div className="bg-white p-4 rounded-md border border-yellow-200 mb-4">
              <h4 className="font-semibold text-yellow-700 mb-2">Exemplo Prático:</h4>
              <p className="text-gray-700 mb-2">Um terreno no bairro Moinhos de Vento em Porto Alegre está avaliado em R$ 8 milhões. A incorporadora propõe um empreendimento onde o percentual de permuta equivaleria a R$ 7 milhões.</p>
              <p className="text-gray-700 mb-2">Para equilibrar a negociação, a incorporadora oferece um complemento de R$ 1 milhão em dinheiro, além das unidades ou percentual do VGV acordado.</p>
            </div>
          </div>
          
          <div className="bg-red-50 p-5 rounded-md mb-6">
            <h3 className="font-semibold text-red-800 mb-3">5. Permuta com Complemento</h3>
            <p className="text-gray-700 mb-3">
              É o oposto da permuta com valor de volta. Ocorre quando o valor do terreno é inferior ao valor das unidades ou percentual do VGV desejado pelo proprietário. Neste caso, o proprietário complementa a diferença com um pagamento adicional à incorporadora.
            </p>
            
            <div className="bg-white p-4 rounded-md border border-red-200 mb-4">
              <h4 className="font-semibold text-red-700 mb-2">Exemplo Prático:</h4>
              <p className="text-gray-700 mb-2">Um proprietário possui um terreno avaliado em R$ 4 milhões no bairro Menino Deus em Porto Alegre, mas deseja receber unidades que totalizam R$ 5 milhões no futuro empreendimento.</p>
              <p className="text-gray-700 mb-2">Para viabilizar o negócio, o proprietário complementa a diferença de R$ 1 milhão, que pode ser paga durante a construção do empreendimento.</p>
            </div>
          </div>
          
          <div className="bg-indigo-50 p-5 rounded-md mb-6">
            <h3 className="font-semibold text-indigo-800 mb-3">6. Permuta Escalonada</h3>
            <p className="text-gray-700 mb-3">
              Nesta modalidade, o percentual de permuta varia conforme o desempenho de vendas do empreendimento. Quanto melhor o desempenho comercial, maior o percentual recebido pelo proprietário do terreno.
            </p>
            
            <div className="bg-white p-4 rounded-md border border-indigo-200 mb-4">
              <h4 className="font-semibold text-indigo-700 mb-2">Exemplo Prático:</h4>
              <p className="text-gray-700 mb-2">Em um empreendimento na zona norte de Porto Alegre, a incorporadora estabelece com o proprietário do terreno uma permuta financeira base de 18% do VGV.</p>
              <p className="text-gray-700 mb-2">No entanto, se as vendas atingirem 50% das unidades nos primeiros 6 meses de lançamento, o percentual sobe para 20%. Se atingirem 70% nos primeiros 9 meses, o percentual aumenta para 22%.</p>
              <p className="text-gray-700 mb-2">Este modelo incentiva o proprietário a também contribuir para o sucesso comercial do empreendimento.</p>
            </div>
          </div>
          
          <div className="bg-teal-50 p-5 rounded-md mb-6">
            <h3 className="font-semibold text-teal-800 mb-3">7. Permuta com Participação Continuada</h3>
            <p className="text-gray-700 mb-3">
              Modalidade em que o proprietário do terreno, além de receber unidades ou valores pela permuta, mantém uma participação no empreendimento, recebendo percentuais de lucro operacional futuro, especialmente em empreendimentos comerciais ou de renda.
            </p>
            
            <div className="bg-white p-4 rounded-md border border-teal-200 mb-4">
              <h4 className="font-semibold text-teal-700 mb-2">Exemplo Prático:</h4>
              <p className="text-gray-700 mb-2">A incorporadora desenvolve um centro comercial em um terreno permutado, onde o proprietário recebe 15% das unidades comerciais e ainda mantém 10% de participação na administração do empreendimento.</p>
              <p className="text-gray-700 mb-2">Isso garante renda recorrente sobre o faturamento do condomínio comercial pelos próximos 15 anos.</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Critérios para Escolha do Tipo de Permuta</h2>
          
          <div className="bg-gray-50 p-5 rounded-md">
            <h3 className="font-semibold text-gray-800 mb-3">Fatores a considerar:</h3>
            
            <div className="mb-4">
              <h4 className="font-semibold text-gray-700 mb-2">1. Perfil do Proprietário:</h4>
              <ul className="list-disc pl-6 mb-0 text-gray-700">
                <li className="mb-1">Investidor com foco em renda de aluguel: Permuta física pode ser mais interessante</li>
                <li className="mb-1">Investidor com necessidade de liquidez: Permuta financeira ou mista é mais recomendada</li>
                <li>Proprietário com interesse em diversificação: Permuta mista oferece equilíbrio</li>
              </ul>
            </div>
            
            <div className="mb-4">
              <h4 className="font-semibold text-gray-700 mb-2">2. Características do Mercado:</h4>
              <ul className="list-disc pl-6 mb-0 text-gray-700">
                <li className="mb-1">Mercado aquecido com alta velocidade de vendas: Permuta financeira pode ser vantajosa</li>
                <li className="mb-1">Mercado com potencial de valorização futura: Permuta física pode trazer maiores ganhos</li>
                <li>Mercado instável: Permuta mista ou escalonada distribui melhor os riscos</li>
              </ul>
            </div>
            
            <div className="mb-4">
              <h4 className="font-semibold text-gray-700 mb-2">3. Natureza do Empreendimento:</h4>
              <ul className="list-disc pl-6 mb-0 text-gray-700">
                <li className="mb-1">Residencial de alto padrão: Permuta física com unidades estratégicas</li>
                <li className="mb-1">Comercial: Permuta com participação continuada pode ser interessante</li>
                <li>Multiuso: Permuta mista com diversificação de ativos</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-700 mb-2">4. Horizonte de Tempo:</h4>
              <ul className="list-disc pl-6 mb-0 text-gray-700">
                <li className="mb-1">Curto prazo: Permuta financeira com pagamentos acelerados</li>
                <li className="mb-1">Médio prazo: Permuta mista equilibrando recebimentos</li>
                <li>Longo prazo: Permuta física ou com participação continuada</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Aspectos Jurídicos e Tributários</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-4 rounded-md">
              <h3 className="font-semibold text-blue-800 mb-3">Aspectos Jurídicos:</h3>
              <ul className="list-disc pl-6 mb-0 text-gray-700">
                <li className="mb-2"><strong>Instrumentalização:</strong> Escritura pública de permuta, contrato de promessa de permuta</li>
                <li className="mb-2"><strong>Garantias:</strong> Hipoteca, alienação fiduciária, seguro garantia</li>
                <li className="mb-2"><strong>Registro:</strong> Averbação no Registro de Imóveis para segurança jurídica</li>
                <li><strong>Cláusulas Especiais:</strong> Condições resolutivas, multas por descumprimento, arbitragem</li>
              </ul>
            </div>
            <div className="bg-red-50 p-4 rounded-md">
              <h3 className="font-semibold text-red-800 mb-3">Aspectos Tributários:</h3>
              <ul className="list-disc pl-6 mb-0 text-gray-700">
                <li className="mb-2"><strong>ITBI:</strong> Incidência sobre o valor dos imóveis permutados</li>
                <li className="mb-2"><strong>Imposto de Renda:</strong> Tratamento diferenciado conforme o tipo de permuta</li>
                <li className="mb-2"><strong>PIS/COFINS:</strong> Impactos diferentes para permuta física e financeira</li>
                <li><strong>Planejamento Tributário:</strong> Estruturação para otimização fiscal dentro da legalidade</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Tendências e Inovações em Permutas</h2>
          
          <div className="bg-gray-50 p-4 rounded-md">
            <ol className="list-decimal pl-6 mb-0 text-gray-700">
              <li className="mb-2"><strong>Permutas com Tokenização:</strong> Fracionamento de direitos sobre o terreno ou unidades futuras em tokens digitais, permitindo maior liquidez e divisibilidade.</li>
              <li className="mb-2"><strong>Permutas ESG:</strong> Incorporação de critérios ambientais, sociais e de governança, com bonificações por certificações sustentáveis ou impacto social positivo.</li>
              <li className="mb-2"><strong>Permutas com Equity:</strong> Estruturas híbridas onde o proprietário do terreno se torna sócio do empreendimento, com participação nos resultados além do valor do terreno.</li>
              <li><strong>Permutas Flexíveis:</strong> Contratos que permitem ajustes na composição da permuta conforme evolução do mercado e do empreendimento.</li>
            </ol>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Conclusão</h2>
          
          <p className="text-gray-700 mb-4">
            A diversidade de tipos de permuta disponíveis no mercado imobiliário oferece soluções personalizadas para diferentes perfis de proprietários e empreendimentos. A escolha da estrutura mais adequada deve considerar aspectos financeiros, tributários, jurídicos e as expectativas de longo prazo de todas as partes envolvidas.
          </p>
          
          <p className="text-gray-700">
            Em mercados dinâmicos como o de Porto Alegre, a permuta continua sendo um instrumento fundamental para viabilizar empreendimentos imobiliários, permitindo que incorporadoras desenvolvam projetos com menor exposição de caixa inicial, enquanto proprietários de terrenos participam dos ganhos do desenvolvimento imobiliário de forma personalizada e alinhada aos seus objetivos de investimento.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Permuta;
