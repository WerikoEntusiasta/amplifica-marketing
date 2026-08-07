# 🚀 Amplifica Marketing — Site Institucional & Blog

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-4-000000?logo=express&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite3-003B57?logo=sqlite&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white)
![ZimaOS](https://img.shields.io/badge/ZimaOS-CasaOS-FF6B00?logo=docker&logoColor=white)
![Railway](https://img.shields.io/badge/Railway-0B0D0E?logo=railway&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

Site institucional premium da **Amplifica Marketing**, agência de marketing digital fundada por **Werik Oliveira** ([@recwerikoliveira](https://instagram.com/recwerikoliveira)).

Inclui landing page com vídeos, galeria 3D de portfólio audiovisual, blog independente com REST API protegida por API Key e banco de dados SQLite3.

---

## 🖥️ Instalação no ZimaOS / CasaOS (ZimaBoard / ZimaCube)

O repositório possui suporte nativo ao **ZimaOS** e **CasaOS** com metadados `x-casaos` prontos para exibição de ícone, porta e atalho no Dashboard:

### 📌 Como Instalar no ZimaOS / CasaOS em 1 Clique:

1. Abra o painel do seu **ZimaOS / CasaOS**
2. Clique no ícone de **`+`** no Dashboard → Selecione **Instalar App Personalizado (Custom App)**
3. No canto superior direito, clique em **`import` (Importar)**
4. Copie e cole a URL do `docker-compose.yml` abaixo:
   ```
   https://raw.githubusercontent.com/WerikoEntusiasta/amplifica-marketing/main/docker-compose.yml
   ```
5. Clique em **Submit / Submit App**!
6. O ZimaOS baixará a imagem `werikoliveira/amplificagroup:latest`, configurará a porta `3001` e adicionará o atalho com o ícone oficial da Amplifica Marketing no seu Dashboard!

---

## 🔑 Configuração de Segredos no GitHub (Push Automático para o Docker Hub)

Para que o GitHub faça o **Build e Push automático da imagem Docker** para o Docker Hub (`werikoliveira/amplificagroup:latest`) a cada `git push` na branch `main`, adicione os segredos no repositório:

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

### Opção A: Deploy via Repositório GitHub (Recomendado)
1. Acesse o **[Railway.app](https://railway.app)** e clique em **+ New Project**
2. Selecione **Deploy from GitHub repo** e escolha `WerikoEntusiasta/amplifica-marketing`
3. Em **Variables**, adicione:
   - `PORT` = `3001`
   - `API_KEY` = `sua_chave_secreta_aqui`
4. Em **Volumes**, adicione um volume persistente montado em:
   - Mount Path: `/app/server/data`
5. Clique em **Deploy**!

---

## 🛠️ Stack Tecnológica

| Camada | Tecnologia |
| :--- | :--- |
| **Frontend** | React 19 + TypeScript + Vite 8 |
| **Estilização** | Tailwind CSS v4 + Glassmorphism + CSS Custom Properties |
| **Backend** | Express.js (Node.js) |
| **Banco de Dados** | SQLite3 (better-sqlite3) |
| **Home Server** | Native ZimaOS / CasaOS App Integration (`x-casaos`) |
| **Containerização** | Docker (Multi-stage) + Docker Compose + GitHub Actions CI/CD |
| **Segurança** | Helmet + Rate Limiting + API Key + Prepared Statements |

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
