# CTFL Study - Plataforma de Estudos para Certificação CTFL

Uma plataforma educacional moderna, interativa e eficiente voltada para profissionais de Qualidade de Software (QAs) que estão estudando para a certificação CTFL - Certified Tester Foundation Level do ISTQB/BSTQB (versão 4.0).

## Visão Geral

A CTFL Study é uma aplicação web completa que segue fielmente o conteúdo do syllabus ISTQB/BSTQB. Ela foi desenvolvida para facilitar o estudo e aumentar as chances de aprovação na certificação CTFL 4.0, oferecendo diferentes recursos de estudo em um ambiente moderno e gamificado.

## Recursos Principais

### 🧠 Conteúdo Completo do Syllabus
- Todo o conteúdo do syllabus CTFL 4.0 organizado por capítulos e tópicos
- Explicações claras, exemplos práticos e exercícios interativos
- Classificação por níveis cognitivos (K1, K2, K3)
- Navegação intuitiva entre os tópicos

### 📝 Simulados
- Simulados completos no formato oficial da prova CTFL
- Simulados por capítulo para focar em áreas específicas
- Análise detalhada de desempenho após cada simulado
- Recomendações de estudo baseadas nos resultados

### 🎮 Quiz Game
- Formato divertido e interativo para testar conhecimentos
- Diferentes modos de jogo:
  - Contra o Tempo: responda o máximo de perguntas em um tempo limitado
  - Sequência Perfeita: veja quantas perguntas você consegue acertar em sequência
  - Desafio Diário: conjunto diário de questões para prática regular

### 📊 Plano de Estudos Personalizado
- Cronograma adaptado às suas disponibilidades e nível de conhecimento
- Distribuição inteligente dos tópicos ao longo do tempo
- Priorização de áreas que precisam de mais atenção
- Monitoramento de progresso
- Exportação do plano em PDF para facilitar o acompanhamento offline

### 📚 Downloads
- Acesso a materiais complementares importantes em formato PDF
- Syllabus oficial, glossário, provas modelo e outros recursos
- Materiais em português do Brasil
- Visualização e geração de PDFs diretamente na plataforma

### 🌓 Tema Claro/Escuro
- Suporte completo para modo claro e escuro
- Adaptação automática às preferências do sistema
- Troca manual de tema com persistência via localStorage
- Melhor contraste no tema escuro para maior acessibilidade

## Atualizações Recentes

- ✨ **Página Splash:** Adicionada uma página splash com logo e efeitos visuais
- 📄 **Conversão de Documentos:** Materiais de download convertidos de HTML para PDF
- 🎨 **Melhoria de Contraste:** Corrigidos problemas de contraste no tema escuro
- 🔍 **Eliminação de 404:** Criadas todas as páginas de conteúdo para eliminar erros 404
- 💾 **Plano de Estudos:** Implementada funcionalidade de salvar e exportar PDF
- 🧭 **Navegação:** Adicionados botões para voltar à home em todas as seções
- 🔄 **Remoção do modo duelo:** Removido o modo duelo do quiz game
- 📋 **Git:** Adicionado arquivo .gitignore para controle adequado de versão

## Tecnologias Utilizadas

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Context API para gerenciamento de estado
- Sistema de temas com ThemeProvider
- html2canvas e jsPDF para geração de PDFs

## Componentes Implementados

- Layout responsivo com Header, Footer e Sidebar
- UI Components: Button, Card, Badge, Alert
- Forms com validação
- ThemeProvider para gerenciamento de tema claro/escuro
- Navegação entre páginas com Next.js
- Modelos de dados completos para o syllabus e simulados
- Sistema de geração de PDF para materiais de estudo

## Como Iniciar

1. Clone o repositório
```bash
git clone https://github.com/Ewertonalex/CTFLStudy.git
cd CTFLStudy
```

2. Instale as dependências
```bash
npm install
```

3. Inicie o servidor de desenvolvimento
```bash
npm run dev
```

4. Acesse a aplicação em `http://localhost:3000`

## Estrutura do Projeto

```
src/
├── app/               # Páginas da aplicação (Next.js App Router)
│   ├── conteudo/      # Páginas de conteúdo do syllabus
│   ├── simulados/     # Simulados e testes
│   ├── plano/         # Plano de estudos personalizado
│   ├── quiz/          # Quiz Game e suas modalidades
│   ├── splash/        # Página inicial animada
│   └── downloads/     # Materiais para download
├── components/        # Componentes React reutilizáveis
│   ├── layout/        # Componentes de layout (Header, Footer, etc)
│   └── ui/            # Componentes de UI (Button, Card, etc)
├── context/           # Context API (ThemeContext, etc)
├── data/              # Dados estáticos da aplicação
├── utils/             # Utilidades (htmlToPdf, etc)
└── styles/            # Estilos globais
```

## Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo LICENSE.md para mais detalhes. 