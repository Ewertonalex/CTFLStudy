export const glossarioTermos = {
  title: 'Glossário de Termos ISTQB',
  terms: [
    {
      term: 'Análise de Causa Raiz',
      definition: 'Técnica de análise que visa identificar as causas primárias de falhas, em vez de apenas tratar os sintomas.'
    },
    {
      term: 'Análise de Impacto',
      definition: 'Avaliação das mudanças a serem feitas para um componente e a identificação dos produtos de trabalho afetados por essas mudanças.'
    },
    {
      term: 'Análise de Risco',
      definition: 'Processo de avaliar riscos identificados para estimar sua probabilidade de ocorrência e impacto.'
    },
    {
      term: 'Automação de Teste',
      definition: 'Uso de ferramentas de software para executar ou apoiar atividades de teste, como gerenciamento, design, execução e avaliação.'
    },
    {
      term: 'Caso de Teste',
      definition: 'Conjunto de condições de teste, dados de teste, ações e resultados esperados desenvolvidos com base em condições de teste.'
    },
    {
      term: 'Cobertura de Código',
      definition: 'Medida que indica a quantidade de código que foi exercitada por um conjunto de testes.'
    },
    {
      term: 'Critérios de Aceitação',
      definition: 'Critérios que um componente ou sistema deve satisfazer para ser aceito por um usuário, cliente ou outra entidade autorizada.'
    },
    {
      term: 'Defeito',
      definition: 'Imperfeição no componente ou sistema que pode causar uma falha.'
    },
    {
      term: 'Desempenho',
      definition: 'Grau em que um sistema ou componente realiza suas funções designadas dentro das restrições de tempo e recursos.'
    },
    {
      term: 'Design de Teste',
      definition: 'Processo de criar ou identificar casos de teste usando técnicas de teste.'
    },
    {
      term: 'Estratégia de Teste',
      definition: 'Documentação de alto nível que define os níveis de teste a serem executados e o teste dentro desses níveis para uma organização ou programa.'
    },
    {
      term: 'Execução de Teste',
      definition: 'Processo de execução de um teste em um componente ou sistema, produzindo um resultado real.'
    },
    {
      term: 'Falha',
      definition: 'Manifestação de um defeito no software que causa uma discrepância do resultado esperado.'
    },
    {
      term: 'Garantia de Qualidade',
      definition: 'Atividades focadas em fornecer confiança de que os requisitos de qualidade serão cumpridos.'
    },
    {
      term: 'Gestão de Configuração',
      definition: 'Disciplina que aplica direção técnica e administrativa para identificar e documentar características funcionais e físicas de um item de configuração.'
    },
    {
      term: 'Gestão de Teste',
      definition: 'Planejamento, estimativa, monitoramento e controle de atividades de teste.'
    },
    {
      term: 'Manutenibilidade',
      definition: 'Grau de eficácia e eficiência com que um produto ou sistema pode ser modificado.'
    },
    {
      term: 'Plano de Teste',
      definition: 'Documentação que descreve os objetivos, escopo, abordagem, recursos e cronograma das atividades de teste.'
    },
    {
      term: 'Portabilidade',
      definition: 'Facilidade com que um componente ou sistema pode ser transferido para outro ambiente.'
    },
    {
      term: 'Rastreabilidade',
      definition: 'Grau em que um relacionamento pode ser estabelecido entre dois ou mais produtos do processo de desenvolvimento.'
    },
    {
      term: 'Risco',
      definition: 'Fator que pode resultar em consequências negativas no futuro, geralmente expresso como impacto e probabilidade.'
    },
    {
      term: 'Teste Baseado em Riscos',
      definition: 'Teste no qual o planejamento, design e execução são baseados nos riscos e prioridades identificados.'
    },
    {
      term: 'Teste de Aceitação',
      definition: 'Teste formal conduzido para determinar se um sistema atende aos critérios de aceitação, permitindo que o cliente determine se aceita o sistema.'
    },
    {
      term: 'Teste de Caixa Branca',
      definition: 'Teste baseado na análise da estrutura interna do componente ou sistema.'
    },
    {
      term: 'Teste de Caixa Preta',
      definition: 'Teste baseado na análise da especificação de um componente ou sistema, sem referência à sua estrutura interna.'
    },
    {
      term: 'Teste de Integração',
      definition: 'Teste que verifica as interfaces entre componentes ou sistemas.'
    },
    {
      term: 'Teste de Regressão',
      definition: 'Teste de um programa previamente testado após modificações, para garantir que não foram introduzidos ou descobertos defeitos nas áreas não modificadas.'
    },
    {
      term: 'Teste de Unidade',
      definition: 'Teste de componentes individuais de software.'
    },
    {
      term: 'Teste Estático',
      definition: 'Teste realizado sem executar o código, como revisões e análise estática de código.'
    },
    {
      term: 'Testabilidade',
      definition: 'Facilidade com que um componente ou sistema pode ser testado.'
    }
  ]
};

export const provaModelo = {
  title: 'Prova Modelo CTFL 4.0',
  description: 'Este é um exemplo simplificado do formato de prova utilizado no exame de certificação CTFL (Certified Tester Foundation Level) versão 4.0 do ISTQB. A prova real contém 40 questões para serem respondidas em 60 minutos.',
  questoes: [
    {
      id: 1,
      pergunta: 'Qual das seguintes afirmações melhor descreve como as atividades de teste devem ser alocadas a testadores e desenvolvedores?',
      alternativas: [
        'Testadores devem realizar testes de aceitação, desenvolvedores devem realizar testes de componente.',
        'Testadores devem projetar os testes, desenvolvedores devem executar os testes.',
        'Testadores devem realizar testes funcionais, desenvolvedores devem realizar testes não-funcionais.',
        'A maioria dos tipos de teste pode ser realizada por testadores ou desenvolvedores, mas eles geralmente assumem diferentes responsabilidades.'
      ],
      resposta: 'D',
      explicacao: 'A maioria dos tipos de teste pode ser realizada por testadores ou desenvolvedores, mas eles geralmente assumem diferentes responsabilidades. A alocação de tarefas depende das restrições do projeto, competências e conhecimentos da equipe.'
    },
    {
      id: 2,
      pergunta: 'Qual das seguintes afirmações sobre os princípios de teste está correta?',
      alternativas: [
        'É possível testar exaustivamente um sistema, mas apenas se houver tempo suficiente.',
        'Testes exaustivos são teoricamente possíveis somente para casos simples.',
        'Testes exaustivos são teoricamente impossíveis para qualquer coisa além de problemas triviais.',
        'Testes exaustivos são possíveis apenas com automação avançada.'
      ],
      resposta: 'C',
      explicacao: 'Testes exaustivos são teoricamente impossíveis para qualquer coisa além de problemas triviais. Em vez de testes exaustivos, técnicas como análise de risco e priorização são usadas para concentrar os esforços de teste.'
    },
    {
      id: 3,
      pergunta: 'Qual das seguintes opções é um exemplo de teste baseado em experiência?',
      alternativas: [
        'Usar o conhecimento sobre falhas passadas para determinar áreas que precisam de mais testes.',
        'Criar casos de teste a partir de modelos como diagrama de estados.',
        'Usar requisitos para criar casos de teste.',
        'Testar sem um plano ou design.'
      ],
      resposta: 'A',
      explicacao: 'Usar o conhecimento sobre falhas passadas é um exemplo de teste baseado em experiência. Este tipo de teste depende do conhecimento, habilidades e intuição do testador.'
    },
    {
      id: 4,
      pergunta: 'Qual das seguintes é a melhor definição de qualidade?',
      alternativas: [
        'Zero defeitos no código.',
        'Fazer testes suficientes para encontrar todos os bugs.',
        'Grau em que um componente ou sistema satisfaz as necessidades e expectativas das partes interessadas.',
        'Conformidade com os requisitos funcionais especificados.'
      ],
      resposta: 'C',
      explicacao: 'Qualidade é o grau em que um componente ou sistema satisfaz as necessidades e expectativas das partes interessadas. Este é um conceito mais amplo que vai além da simples conformidade com requisitos.'
    },
    {
      id: 5,
      pergunta: 'Em um processo típico de análise e design de teste, qual das seguintes atividades normalmente vem primeiro?',
      alternativas: [
        'Identificação dos objetos de teste.',
        'Criação de casos de teste.',
        'Especificação de procedimentos de teste.',
        'Verificação da rastreabilidade.'
      ],
      resposta: 'A',
      explicacao: 'A identificação dos objetos de teste é tipicamente a primeira atividade no processo de análise e design de teste, seguida pela identificação de condições de teste, projeto e criação de casos e procedimentos de teste.'
    }
  ]
};

export const checklistEstudos = {
  title: 'Checklist de Estudos CTFL 4.0',
  description: 'Use este checklist para acompanhar seu progresso nos estudos para a certificação CTFL 4.0. Marque os tópicos à medida que estudá-los e revisá-los.',
  capitulos: [
    {
      titulo: 'Fundamentos de Teste',
      topicos: [
        'Por que o Teste é Necessário',
        'O que é Teste',
        'Sete Princípios de Teste',
        'Processos de Teste',
        'A Psicologia do Teste',
        'Código de Ética'
      ]
    },
    {
      titulo: 'Teste Durante o Ciclo de Vida de Desenvolvimento de Software',
      topicos: [
        'Modelos de Ciclo de Vida de Desenvolvimento de Software',
        'Níveis de Teste',
        'Tipos de Teste',
        'Teste de Manutenção',
        'Teste de Alterações'
      ]
    },
    {
      titulo: 'Teste Estático',
      topicos: [
        'Benefícios do Teste Estático',
        'Técnicas de Revisão',
        'Análise Estática por Ferramentas',
        'Processo de Revisão',
        'Tipos de Defeitos Identificados'
      ]
    },
    {
      titulo: 'Técnicas de Teste',
      topicos: [
        'Categorias de Técnicas de Teste',
        'Técnicas Caixa-Preta',
        'Técnicas Caixa-Branca',
        'Técnicas Baseadas na Experiência',
        'Técnicas de Teste para Requisitos Não-Funcionais'
      ]
    },
    {
      titulo: 'Gerenciamento de Teste',
      topicos: [
        'Papel e Responsabilidades do Testador',
        'Planejamento e Estimativa de Teste',
        'Monitoramento e Controle de Teste',
        'Gestão de Configuração',
        'Riscos e Testes',
        'Gerenciamento de Defeitos'
      ]
    },
    {
      titulo: 'Ferramentas de Suporte ao Teste',
      topicos: [
        'Tipos de Ferramentas de Teste',
        'Uso Eficaz de Ferramentas',
        'Benefícios e Riscos da Automação',
        'Abordagem de Automação',
        'Tendências de Ferramentas de Teste'
      ]
    }
  ]
};

export const dicasDiaProva = {
  title: 'Dicas para o Dia da Prova CTFL',
  description: 'Estas dicas ajudarão você a se preparar adequadamente para o dia do exame CTFL e aumentar suas chances de aprovação.',
  categorias: [
    {
      titulo: 'Antes do Dia da Prova',
      dicas: [
        'Revise o syllabus completo pelo menos duas vezes.',
        'Faça pelo menos 3 simulados completos, cronometrando seu tempo.',
        'Identifique seus pontos fracos e reforce o estudo nessas áreas.',
        'Prepare todos os documentos necessários (documento de identidade, confirmação de inscrição).',
        'Verifique o endereço do local da prova e planeje sua rota com antecedência.',
        'Durma bem na noite anterior ao exame.',
        'Evite estudar novos conteúdos na véspera da prova, foque em revisar conceitos-chave.',
        'Prepare roupas confortáveis para o dia da prova.'
      ]
    },
    {
      titulo: 'No Dia da Prova',
      dicas: [
        'Chegue ao local do exame com pelo menos 30 minutos de antecedência.',
        'Leve apenas o necessário para o exame (documentos, água, etc.).',
        'Evite consumir alimentos pesados antes da prova.',
        'Faça uma leitura completa da prova antes de começar a responder.',
        'Responda primeiro as questões que você tem certeza.',
        'Administre bem seu tempo (60 minutos para 40 questões = 1,5 minutos por questão).',
        'Marque questões difíceis para revisão posterior.',
        'Se ficar em dúvida entre duas alternativas, tente eliminar as incorretas primeiro.',
        'Não deixe questões em branco, não há penalidade para respostas erradas.'
      ]
    },
    {
      titulo: 'Estratégias para Responder Questões',
      dicas: [
        'Leia a questão inteira antes de olhar as alternativas.',
        'Preste atenção a palavras-chave como "sempre", "nunca", "todos", que geralmente indicam afirmações falsas.',
        'Cuidado com questões que pedem "qual alternativa é INCORRETA" ou "qual NÃO é verdadeira".',
        'Nas questões K2 (compreensão), elimine primeiro as alternativas obviamente erradas.',
        'Nas questões K3 (aplicação), analise cuidadosamente o cenário antes de escolher a resposta.',
        'Caso não saiba a resposta, tente relacionar com os princípios fundamentais de teste.',
        'Nas questões sobre técnicas de teste, visualize mentalmente a aplicação da técnica.'
      ]
    },
    {
      titulo: 'Após o Exame',
      dicas: [
        'Anote os tópicos que você achou mais difíceis para futuro aprimoramento.',
        'Se você não passar, não desanime - analise seu desempenho e crie um plano de estudos focado.',
        'Ao receber o resultado, analise cuidadosamente seu desempenho em cada área do syllabus.',
        'Compartilhe sua experiência com outros candidatos para ajudá-los em sua preparação.'
      ]
    }
  ]
};

export const mapaMental = {
  title: 'Mapa Mental CTFL 4.0',
  description: 'Este mapa mental organiza visualmente os principais conceitos e tópicos do syllabus CTFL 4.0, ajudando na memorização e compreensão da estrutura do conteúdo.',
  centrais: [
    {
      titulo: 'Fundamentos de Teste',
      subtopicos: [
        {
          nome: 'Por que o Teste é Necessário',
          conceitos: ['Causas de defeitos', 'Papel do teste na qualidade', 'Garantia de qualidade x Teste']
        },
        {
          nome: 'Sete Princípios',
          conceitos: ['Teste mostra presença de defeitos', 'Teste exaustivo é impossível', 'Teste antecipado', 'Agrupamento de defeitos', 'Paradoxo do pesticida', 'Teste depende do contexto', 'Ausência de erros é uma falácia']
        },
        {
          nome: 'Processo de Teste',
          conceitos: ['Planejamento', 'Monitoramento e controle', 'Análise', 'Design', 'Implementação', 'Execução', 'Conclusão']
        },
        {
          nome: 'Psicologia do Teste',
          conceitos: ['Perspectivas das partes interessadas', 'Mentalidade testador x desenvolvedor', 'Comunicação construtiva']
        }
      ]
    },
    {
      titulo: 'Teste no Ciclo de Vida',
      subtopicos: [
        {
          nome: 'Modelos de Desenvolvimento',
          conceitos: ['Sequencial (V-Model, Waterfall)', 'Iterativo e Incremental', 'Ágil (Scrum, Kanban, XP)']
        },
        {
          nome: 'Níveis de Teste',
          conceitos: ['Componente/Unidade', 'Integração', 'Sistema', 'Aceitação']
        },
        {
          nome: 'Tipos de Teste',
          conceitos: ['Funcionais', 'Não-funcionais', 'Caixa-preta', 'Caixa-branca', 'Baseados em alterações']
        }
      ]
    },
    {
      titulo: 'Teste Estático',
      subtopicos: [
        {
          nome: 'Benefícios',
          conceitos: ['Detecção antecipada', 'Redução de custo', 'Melhoria de produtividade']
        },
        {
          nome: 'Técnicas',
          conceitos: ['Revisão informal', 'Walkthrough', 'Revisão técnica', 'Inspeção']
        },
        {
          nome: 'Análise estática',
          conceitos: ['Verificação de padrões de código', 'Análise de fluxo de dados', 'Análise de estrutura']
        }
      ]
    },
    {
      titulo: 'Técnicas de Teste',
      subtopicos: [
        {
          nome: 'Caixa-preta',
          conceitos: ['Particionamento de equivalência', 'Análise de valor limite', 'Tabela de decisão', 'Teste de transição de estado']
        },
        {
          nome: 'Caixa-branca',
          conceitos: ['Cobertura de instruções', 'Cobertura de decisões', 'Cobertura de condições']
        },
        {
          nome: 'Baseadas na experiência',
          conceitos: ['Suposição de erro', 'Teste exploratório', 'Teste baseado em checklist']
        }
      ]
    },
    {
      titulo: 'Gerenciamento de Teste',
      subtopicos: [
        {
          nome: 'Organização do Teste',
          conceitos: ['Independência do teste', 'Responsabilidades de testadores e líderes']
        },
        {
          nome: 'Planejamento e estimativa',
          conceitos: ['Estratégia de teste', 'Plano de teste', 'Critérios de entrada e saída']
        },
        {
          nome: 'Monitoramento e controle',
          conceitos: ['Métricas de teste', 'Relatórios de teste', 'Gestão de defeitos']
        },
        {
          nome: 'Teste baseado em risco',
          conceitos: ['Análise de risco', 'Mitigação de riscos', 'Priorização de testes']
        }
      ]
    },
    {
      titulo: 'Ferramentas de Teste',
      subtopicos: [
        {
          nome: 'Classificação',
          conceitos: ['Ferramentas de gestão', 'Ferramentas de teste estático', 'Ferramentas de execução de teste', 'Ferramentas de automação']
        },
        {
          nome: 'Benefícios e Riscos',
          conceitos: ['Redução de tarefas repetitivas', 'Aumento da consistência', 'Riscos de expectativas irrealistas', 'Custos de implementação']
        },
        {
          nome: 'Implementação',
          conceitos: ['Prova de conceito', 'Piloto', 'Implantação', 'Manutenção']
        }
      ]
    }
  ]
}; 