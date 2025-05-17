// Estrutura para definir os níveis cognitivos do ISTQB
export type CognitiveLevel = 'K1' | 'K2' | 'K3' | 'K4';

export interface SyllabusSubTopic {
  id: string;
  title: string;
  path: string;
  cognitiveLevel: CognitiveLevel;
  keywords: string[];
}

export interface SyllabusTopic {
  id: string;
  title: string;
  path: string;
  subTopics: SyllabusSubTopic[];
}

// Dados completos do syllabus CTFL 4.0
export const syllabusTopics: SyllabusTopic[] = [
  {
    id: 'fundamentos',
    title: 'Fundamentos de Teste',
    path: '/conteudo/fundamentos',
    subTopics: [
      { 
        id: 'fundamentos-1', 
        title: '1.1 O que é Teste?', 
        path: '/conteudo/fundamentos/o-que-e-teste',
        cognitiveLevel: 'K2',
        keywords: ['teste', 'defeito', 'erro', 'falha', 'qualidade', 'verificação', 'validação']
      },
      { 
        id: 'fundamentos-2', 
        title: '1.2 Por que o Teste é Necessário?', 
        path: '/conteudo/fundamentos/por-que-teste-necessario',
        cognitiveLevel: 'K2',
        keywords: ['custo da qualidade', 'riscos', 'bugs', 'falhas', 'problemas', 'segurança'] 
      },
      { 
        id: 'fundamentos-3', 
        title: '1.3 Sete Princípios de Teste', 
        path: '/conteudo/fundamentos/sete-principios',
        cognitiveLevel: 'K2',
        keywords: ['princípios', 'exaustão', 'pesticide paradox', 'teste precoce', 'agrupamento de defeitos'] 
      },
      { 
        id: 'fundamentos-4', 
        title: '1.4 Processos de Teste', 
        path: '/conteudo/fundamentos/processos-teste',
        cognitiveLevel: 'K2',
        keywords: ['planejamento', 'análise', 'modelagem', 'implementação', 'execução', 'conclusão'] 
      },
      { 
        id: 'fundamentos-5', 
        title: '1.5 A Psicologia do Teste', 
        path: '/conteudo/fundamentos/psicologia-teste',
        cognitiveLevel: 'K2',
        keywords: ['mindset', 'independência', 'comunicação', 'feedback', 'confiança'] 
      }
    ]
  },
  {
    id: 'ciclo-vida',
    title: 'Testes ao longo do Ciclo de Vida',
    path: '/conteudo/ciclo-vida',
    subTopics: [
      { 
        id: 'ciclo-vida-1', 
        title: '2.1 Modelos de Ciclo de Vida', 
        path: '/conteudo/ciclo-vida/modelos-ciclo-vida',
        cognitiveLevel: 'K2',
        keywords: ['sequencial', 'incremental', 'iterativo', 'cascata', 'V-model', 'ágil'] 
      },
      { 
        id: 'ciclo-vida-2', 
        title: '2.2 Níveis de Teste', 
        path: '/conteudo/ciclo-vida/niveis-teste',
        cognitiveLevel: 'K2',
        keywords: ['componente', 'integração', 'sistema', 'aceitação', 'alfa', 'beta'] 
      },
      { 
        id: 'ciclo-vida-3', 
        title: '2.3 Tipos de Teste', 
        path: '/conteudo/ciclo-vida/tipos-teste',
        cognitiveLevel: 'K2',
        keywords: ['funcional', 'não-funcional', 'caixa-preta', 'caixa-branca', 'performance', 'usabilidade'] 
      },
      { 
        id: 'ciclo-vida-4', 
        title: '2.4 Testes de Manutenção', 
        path: '/conteudo/ciclo-vida/testes-manutencao',
        cognitiveLevel: 'K2',
        keywords: ['impacto', 'regressão', 'manutenção', 'migração', 'legado'] 
      }
    ]
  },
  {
    id: 'estatico',
    title: 'Teste Estático',
    path: '/conteudo/estatico',
    subTopics: [
      { 
        id: 'estatico-1', 
        title: '3.1 Básico de Teste Estático', 
        path: '/conteudo/estatico/basico-teste-estatico',
        cognitiveLevel: 'K2',
        keywords: ['revisão', 'análise estática', 'processo', 'verificação', 'validação'] 
      },
      { 
        id: 'estatico-2', 
        title: '3.2 Processo de Revisão', 
        path: '/conteudo/estatico/processo-revisao',
        cognitiveLevel: 'K3',
        keywords: ['planejamento', 'iniciar revisão', 'revisão individual', 'comunicação de problemas', 'correção', 'papéis'] 
      }
    ]
  },
  {
    id: 'analise-modelagem',
    title: 'Análise e Modelagem de Teste',
    path: '/conteudo/analise-modelagem',
    subTopics: [
      { 
        id: 'analise-1', 
        title: '4.1 Categorias de Técnicas', 
        path: '/conteudo/analise-modelagem/categorias-tecnicas',
        cognitiveLevel: 'K2',
        keywords: ['caixa-preta', 'caixa-branca', 'experiência', 'cobertura', 'técnicas', 'combinações'] 
      },
      { 
        id: 'analise-2', 
        title: '4.2 Técnicas Caixa-Preta', 
        path: '/conteudo/analise-modelagem/tecnicas-caixa-preta',
        cognitiveLevel: 'K3',
        keywords: ['particionamento', 'valores limite', 'tabela de decisão', 'transição de estado', 'casos de uso'] 
      },
      { 
        id: 'analise-3', 
        title: '4.3 Técnicas Caixa-Branca', 
        path: '/conteudo/analise-modelagem/tecnicas-caixa-branca',
        cognitiveLevel: 'K3',
        keywords: ['cobertura de instrução', 'cobertura de decisão', 'cobertura de condição', 'código', 'estrutura'] 
      },
      { 
        id: 'analise-4', 
        title: '4.4 Técnicas Baseadas em Experiência', 
        path: '/conteudo/analise-modelagem/tecnicas-experiencia',
        cognitiveLevel: 'K2',
        keywords: ['error guessing', 'teste exploratório', 'baseado em checklist', 'heurísticas', 'intuição'] 
      }
    ]
  },
  {
    id: 'gerenciamento',
    title: 'Gerenciamento das Atividades de Teste',
    path: '/conteudo/gerenciamento',
    subTopics: [
      { 
        id: 'gerenciamento-1', 
        title: '5.1 Organização do Teste', 
        path: '/conteudo/gerenciamento/organizacao-teste',
        cognitiveLevel: 'K2',
        keywords: ['independência', 'gerente de teste', 'testador', 'líder de teste', 'papéis', 'tarefas'] 
      },
      { 
        id: 'gerenciamento-2', 
        title: '5.2 Planejamento e Estimativas', 
        path: '/conteudo/gerenciamento/planejamento-estimativas',
        cognitiveLevel: 'K3',
        keywords: ['plano de teste', 'estratégia', 'estimativa', 'abordagem', 'cronograma', 'critérios'] 
      },
      { 
        id: 'gerenciamento-3', 
        title: '5.3 Monitoramento e Controle', 
        path: '/conteudo/gerenciamento/monitoramento-controle',
        cognitiveLevel: 'K2',
        keywords: ['métricas', 'relatórios', 'progresso', 'cobertura', 'rastreabilidade', 'status'] 
      },
      { 
        id: 'gerenciamento-4', 
        title: '5.4 Gestão de Configuração', 
        path: '/conteudo/gerenciamento/gestao-configuracao',
        cognitiveLevel: 'K2',
        keywords: ['versionamento', 'baseline', 'artefatos', 'controle', 'rastreabilidade'] 
      },
      { 
        id: 'gerenciamento-5', 
        title: '5.5 Riscos e Testes', 
        path: '/conteudo/gerenciamento/riscos-testes',
        cognitiveLevel: 'K2',
        keywords: ['riscos do produto', 'riscos do projeto', 'mitigação', 'análise', 'probabilidade', 'impacto'] 
      },
      { 
        id: 'gerenciamento-6', 
        title: '5.6 Gestão de Defeitos', 
        path: '/conteudo/gerenciamento/gestao-defeitos',
        cognitiveLevel: 'K3',
        keywords: ['ciclo de vida de defeito', 'relatório', 'priorização', 'severidade', 'status', 'classificação'] 
      }
    ]
  },
  {
    id: 'ferramentas',
    title: 'Ferramentas de Teste',
    path: '/conteudo/ferramentas',
    subTopics: [
      { 
        id: 'ferramentas-1', 
        title: '6.1 Considerações sobre Ferramentas', 
        path: '/conteudo/ferramentas/consideracoes',
        cognitiveLevel: 'K2',
        keywords: ['tipos', 'classificação', 'seleção', 'riscos', 'benefícios', 'custos'] 
      },
      { 
        id: 'ferramentas-2', 
        title: '6.2 Uso Efetivo de Ferramentas', 
        path: '/conteudo/ferramentas/uso-efetivo',
        cognitiveLevel: 'K2',
        keywords: ['princípios', 'introdução', 'implementação', 'sucesso', 'métricas', 'automação'] 
      }
    ]
  }
];

// Dados para simulados
export interface SimuladoQuestion {
  id: string;
  question: string;
  options: {
    id: string;
    text: string;
    isCorrect: boolean;
  }[];
  explanation: string;
  topicId: string;
  cognitiveLevel: CognitiveLevel;
  difficulty: 'easy' | 'medium' | 'hard';
}

// Exemplo de questões para simulados
export const sampleQuestions: SimuladoQuestion[] = [
  {
    id: 'q1',
    question: 'Qual das seguintes afirmações descreve corretamente o conceito de "Teste Exaustivo"?',
    options: [
      { id: 'q1-a', text: 'Testar todas as combinações de entradas e pré-condições é geralmente possível para pequenos aplicativos', isCorrect: false },
      { id: 'q1-b', text: 'Realizar testes exaustivos é a maneira mais eficiente de garantir que todos os defeitos foram encontrados', isCorrect: false },
      { id: 'q1-c', text: 'Teste exaustivo é quase sempre impossível de realizar devido às restrições de tempo e recursos', isCorrect: true },
      { id: 'q1-d', text: 'Testes exaustivos são recomendados apenas para testes de segurança críticos', isCorrect: false }
    ],
    explanation: 'O teste exaustivo, que envolve testar todas as combinações possíveis de entradas e pré-condições, é praticamente impossível, exceto em casos triviais. Em vez de testes exaustivos, técnicas como análise de risco, particionamento, priorização e cobertura são usadas para concentrar os esforços de teste.',
    topicId: 'fundamentos-3',
    cognitiveLevel: 'K1',
    difficulty: 'easy'
  },
  {
    id: 'q2',
    question: 'Qual técnica de teste caixa-preta seria MAIS apropriada para testar as regras de negócio complexas que determinam o cálculo de um bônus baseado em múltiplas condições diferentes?',
    options: [
      { id: 'q2-a', text: 'Particionamento de Equivalência', isCorrect: false },
      { id: 'q2-b', text: 'Análise de Valor Limite', isCorrect: false },
      { id: 'q2-c', text: 'Tabela de Decisão', isCorrect: true },
      { id: 'q2-d', text: 'Teste de Transição de Estado', isCorrect: false }
    ],
    explanation: 'A Tabela de Decisão é ideal para testar combinações de condições com diferentes resultados. As tabelas de decisão são particularmente úteis quando há regras de negócio complexas com múltiplos critérios que devem ser considerados em conjunto para determinar um resultado.',
    topicId: 'analise-2',
    cognitiveLevel: 'K3',
    difficulty: 'medium'
  },
  {
    id: 'q3',
    question: 'Ao realizar testes de integração, qual é o principal objetivo?',
    options: [
      { id: 'q3-a', text: 'Verificar se funcionalidades específicas funcionam conforme esperado', isCorrect: false },
      { id: 'q3-b', text: 'Verificar se os componentes ou sistemas funcionam em conjunto corretamente', isCorrect: true },
      { id: 'q3-c', text: 'Encontrar o maior número possível de defeitos no software', isCorrect: false },
      { id: 'q3-d', text: 'Validar se o sistema atende aos requisitos do usuário', isCorrect: false }
    ],
    explanation: 'O teste de integração concentra-se em verificar as interfaces e interações entre componentes ou sistemas integrados. Seu objetivo principal é identificar defeitos nas interfaces e na interação entre os componentes integrados.',
    topicId: 'ciclo-vida-2',
    cognitiveLevel: 'K2',
    difficulty: 'medium'
  }
];

// Glossário de termos do ISTQB
export interface GlossaryTerm {
  term: string;
  definition: string;
  relatedTerms?: string[];
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    term: 'Teste',
    definition: 'Um conjunto de atividades realizadas para facilitar a descoberta e/ou avaliação das propriedades de um ou mais itens de teste.',
    relatedTerms: ['Testador', 'Caso de teste', 'Execução de teste']
  },
  {
    term: 'Defeito',
    definition: 'Uma imperfeição ou deficiência em um produto de trabalho onde ele não atende às suas especificações ou requisitos.',
    relatedTerms: ['Erro', 'Falha', 'Bug']
  },
  {
    term: 'Cobertura',
    definition: 'O grau, expresso como uma porcentagem, em que um item de cobertura especificado foi exercitado por um conjunto de testes.',
    relatedTerms: ['Cobertura de código', 'Cobertura de decisão', 'Cobertura de caminho']
  },
  {
    term: 'Teste caixa-preta',
    definition: 'Teste baseado em uma análise da especificação de um componente ou sistema sem referência à sua estrutura interna.',
    relatedTerms: ['Teste funcional', 'Teste de especificação', 'Teste caixa-branca']
  },
  {
    term: 'Teste caixa-branca',
    definition: 'Teste baseado em uma análise da estrutura interna do componente ou sistema.',
    relatedTerms: ['Teste estrutural', 'Teste caixa-preta', 'Teste baseado em código']
  }
]; 