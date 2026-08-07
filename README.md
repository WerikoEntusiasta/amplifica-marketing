# 🚀 Amplifica Marketing — Site Institucional & Blog

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-4-000000?logo=express&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite3-003B57?logo=sqlite&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white)
![Railway](https://img.shields.io/badge/Railway-0B0D0E?logo=railway&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

Site institucional premium da **Amplifica Marketing**, agência de marketing digital fundada por **Werik Oliveira** ([@recwerikoliveira](https://instagram.com/recwerikoliveira)).

Inclui landing page com vídeos, galeria 3D de portfólio audiovisual, blog independente com REST API protegida por API Key e banco de dados SQLite3.

---

## 🔑 Configuração de Segredos no GitHub (Push Automático para o Docker Hub)

Para que o GitHub faça o **Build e Push automático da imagem Docker** para o Docker Hub (`werikoliveira/amplificagroup:latest`) a cada `git push` na branch `main`, adicione os seguintes segredos no repositório:

### 📌 Como Adicionar os Segredos no GitHub:
1. Acesse o repositório: **Settings** → **Secrets and variables** → **Actions**
2. Clique em **New repository secret** e adicione as 2 variáveis abaixo:

| Nome do Segredo (Secret Name) | Valor Exato (Secret Value) | Descrição |
| :--- | :--- | :--- |
| **`DOCKERHUB_USERNAME`** | `werikoliveira` | Seu nome de usuário do Docker Hub |
| **`DOCKERHUB_TOKEN`** | `seu_dockerhub_pat_aqui` | Seu Personal Access Token (PAT) do Docker Hub |

> 🤖 **Workflow de CI/CD**: O arquivo [.github/workflows/docker-publish.yml](./.github/workflows/docker-publish.yml) já está pronto. Assim que você cadastrar essas 2 variáveis no GitHub, qualquer alteração enviada compilará e publicará a imagem automaticamente no Docker Hub em `werikoliveira/amplificagroup:latest`!

---

## 🚂 Deploy no Railway (Passo a Passo)

O repositório e o `docker-compose.yml` estão 100% otimizados para o **Railway**:

### Opção A: Deploy via Repositório GitHub (Recomendado)
1. Acesse o **[Railway.app](https://railway.app)** e clique em **+ New Project**
2. Selecione **Deploy from GitHub repo** e escolha `WerikoEntusiasta/amplifica-marketing`
3. Em **Variables**, adicione as seguintes variáveis de ambiente:
   - `PORT` = `3001`
   - `API_KEY` = `sua_chave_secreta_aqui`
4. Em **Volumes**, adicione um volume persistente montado em:
   - Mount Path: `/app/server/data` *(Garante a retenção do banco SQLite3)*
5. Clique em **Deploy**! O Railway lerá o `Dockerfile` automaticamente.

### Opção B: Deploy via Docker Hub Image
1. No Railway, clique em **+ New Project** → **Deploy a Docker Image**
2. Insira a imagem: `werikoliveira/amplificagroup:latest`
3. Configure o Mount Path do Volume em `/app/server/data`

---

## 🛠️ Stack Tecnológica

| Camada | Tecnologia |
| :--- | :--- |
| **Frontend** | React 19 + TypeScript + Vite 8 |
| **Estilização** | Tailwind CSS v4 + Glassmorphism + CSS Custom Properties |
| **Backend** | Express.js (Node.js) |
| **Banco de Dados** | SQLite3 (better-sqlite3) |
| **Containerização** | Docker (Multi-stage) + Docker Compose + GitHub Actions CI/CD |
| **Segurança** | Helmet + Rate Limiting + API Key + Prepared Statements |

---

## 📁 Estrutura do Projeto

```
amplifica-marketing/
├── .github/
│   └── workflows/
│       └── docker-publish.yml     # Workflow de CI/CD para Docker Hub
├── public/                        # Assets estáticos
│   ├── founder.jpg                # Foto do fundador
│   ├── hero-video.mp4             # Vídeo de fundo do Hero (gitignored)
│   ├── lofi-chill.mp3             # Música de fundo (gitignored)
│   ├── logo-new.png               # Logo principal
│   ├── logo.png                   # Logo alternativa
│   └── portfolio-videos/          # Vídeos do portfólio (gitignored)
├── server/                        # Backend REST API
│   ├── server.js                  # Servidor Express + SQLite3
│   └── data/                      # Diretório do banco de dados (gitignored)
│       └── blog.db                # Arquivo SQLite
├── src/                           # Código-fonte frontend
│   ├── App.tsx                    # App principal com roteamento
│   ├── main.tsx                   # Entry point React
│   ├── index.css                  # Design system global
│   ├── api/
│   │   └── blogApi.ts             # Cliente REST API com fallback offline
│   ├── components/
│   │   ├── About.tsx              # Seções Empresa & Fundador
│   │   ├── BackgroundAudioPlayer.tsx  # Player de música Lofi
│   │   ├── BorderGlow.tsx         # Componente de borda luminosa
│   │   ├── BorderGlow.css         # Estilos do BorderGlow
│   │   ├── ContactFooter.tsx      # CTA WhatsApp & rodapé
│   │   ├── Hero.tsx               # Hero com vídeo de fundo
│   │   ├── Navbar.tsx             # Barra de navegação
│   │   ├── ServicesBento.tsx      # Grid Bento 3x3 de serviços
│   │   ├── TechStackMarquee.tsx   # Marquee infinito de tecnologias
│   │   ├── Video3DCoverflow.tsx   # Galeria 3D de vídeos
│   │   └── WhatsAppButton.tsx     # Botão flutuante WhatsApp
│   ├── data/
│   │   └── blogArticles.ts        # Tipagem dos artigos
│   └── pages/
│       └── BlogPage.tsx           # Página do blog independente
├── .dockerignore                  # Regras de ignore do Docker
├── .env.example                   # Template de variáveis de ambiente
├── .gitignore                     # Regras de ignore do Git
├── API_DOCUMENTATION.md           # Documentação completa da REST API
├── docker-compose.yml             # Orquestração de containers e volume
├── Dockerfile                     # Multi-stage Docker build
├── index.html                     # Entry point HTML
├── package.json                   # Dependências & scripts
├── tsconfig.json                  # Configuração TypeScript
└── vite.config.ts                 # Configuração Vite
```

---

## ⚡ Instalação & Execução Local

```bash
# 1. Clone o repositório
git clone https://github.com/WerikoEntusiasta/amplifica-marketing.git
cd amplifica-marketing

# 2. Instale as dependências
npm install

# 3. Configure as variáveis de ambiente
cp .env.example .env

# 4. Inicie o servidor REST API (Terminal 1)
node server/server.js

# 5. Inicie o servidor de desenvolvimento (Terminal 2)
npm run dev
```

### Execução via Docker Compose (Local)

```bash
docker compose up -d --build
```

---

## 📡 REST API — Endpoints do Blog

**Base URL**: `http://localhost:3001/api/posts`

| Método | Endpoint | Autenticação | Descrição |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/posts` | Pública | Lista todos os artigos |
| `GET` | `/api/posts/:id` | Pública | Retorna artigo por ID |
| `POST` | `/api/posts` | 🔑 API Key | Cria novo artigo |
| `PUT` | `/api/posts/:id` | 🔑 API Key | Atualiza artigo |
| `DELETE` | `/api/posts/:id` | 🔑 API Key | Exclui artigo |

---

## 📞 Contato

| Canal | Link |
| :--- | :--- |
| **WhatsApp** | [+55 (17) 99195-1381](https://wa.me/5517991951381) |
| **Instagram (Agência)** | [@amplificamarketing](https://instagram.com/amplificamarketing) |
| **Instagram (Fundador)** | [@recwerikoliveira](https://instagram.com/recwerikoliveira) |

---

## 📄 Licença

Este projeto está licenciado sob a [MIT License](./LICENSE).

---

<p align="center">
  Desenvolvido com 🧡 por <strong>Werik Oliveira</strong> — Amplifica Marketing © 2026
</p>
