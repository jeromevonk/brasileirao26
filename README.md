# Brasileirão 2026

Aplicação para acompanhamento das tabelas, resultados e estatísticas do Campeonato Brasileiro 2026.

## 📋 Funcionalidades

- **Tabela de Classificação**: Visualize a posição atualizada de todos os times
- **Resultados**: Acompanhe os placares de todos os jogos da rodada
- **Raio-X**: Análise detalhada de cada time com estatísticas
- **Matriz de Resultados**: Visualização completa dos resultados entre times

## 🛠️ Tecnologias

- **Frontend**: Next.js, React, Material-UI
- **Backend**: Node.js
- **Dados**: API Globo Esporte

## 📂 Estrutura do Projeto

```
├── backend-frontend/     # Aplicação Next.js
│   ├── src/
│   │   ├── components/   # Componentes React
│   │   ├── pages/        # Páginas da aplicação
│   │   ├── services/     # Serviços de API
│   │   └── helpers/      # Funções auxiliares
│   └── package.json
│
└── cloud-function/       # Funções para processamento de dados
    └── getRounds.js
```

## 🚀 Como Iniciar

### Instalação

```bash
cd backend-frontend
npm install
```

### Desenvolvimento

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:3000`

### Build para Produção

```bash
npm run build
npm start
```

## 📝 Licença

Projeto pessoal para fins educacionais.
