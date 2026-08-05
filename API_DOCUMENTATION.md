# 📚 Documentação da REST API — Blog Amplifica Marketing

Esta documentação fornece todas as instruções necessárias para integrar, criar, editar e excluir artigos do blog da **Amplifica Marketing** de forma externa (via sistemas próprios, n8n, Make, scripts Python, cURL, Postman ou aplicações móveis).

---

## 🌐 Informações de Conexão

- **Base URL**: `http://localhost:3001/api/posts`
- **Banco de Dados**: SQLite3 (`server/data/blog.db`)
- **Formato de Dados**: `JSON (application/json)`
- **Autenticação**: Aberta (CORS ativado para requisições locais e externas)

---

## 📊 Estrutura do Objeto (JSON Schema)

| Campo | Tipo | Obrigatório | Descrição |
| :--- | :--- | :--- | :--- |
| `title` | `string` | **Sim** | Título principal do artigo |
| `content` | `string` | **Sim** | Conteúdo completo em HTML estilizado (suporta imagens, links, destaques) |
| `excerpt` | `string` | Não | Breve resumo para o cartão do blog (1-2 frases) |
| `category` | `string` | Não | Categoria (`Tráfego Pago`, `Redes Sociais`, `SEO & Content`, `Automação B2B`, `Audiovisual & Drone`, `Estratégia de Marca`) |
| `author` | `string` | Não | Nome do autor (Padrão: `"Werik Oliveira"`) |
| `readTime` | `string` | Não | Tempo estimado de leitura (Padrão: `"5 min de leitura"`) |
| `image` | `string` | Não | URL da imagem de capa do artigo |

---

## 📡 Endpoints da REST API

### 1. Listar Todos os Artigos
- **Método**: `GET`
- **Endpoint**: `http://localhost:3001/api/posts`
- **Resposta Sucesso (`200 OK`)**:
```json
[
  {
    "id": 1785501234567,
    "slug": "como-otimizar-anuncios-no-meta-ads",
    "title": "Como Otimizar Anúncios no Meta Ads em 2026",
    "excerpt": "Descubra como aumentar o retorno sobre investimento das suas campanhas.",
    "content": "<h2 class='text-2xl font-bold text-white mb-3'>Introdução</h2><p>Texto do artigo...</p>",
    "category": "Tráfego Pago",
    "readTime": "5 min de leitura",
    "date": "01 de Agosto, 2026",
    "author": "Werik Oliveira",
    "source": "Amplifica REST API",
    "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
  }
]
```

---

### 2. Obter um Artigo Específico
- **Método**: `GET`
- **Endpoint**: `http://localhost:3001/api/posts/:id`
- **Exemplo**: `http://localhost:3001/api/posts/1785501234567`

---

### 3. Criar Novo Artigo
- **Método**: `POST`
- **Endpoint**: `http://localhost:3001/api/posts`
- **Header**: `Content-Type: application/json`
- **Body Exemplo**:
```json
{
  "title": "Estratégias de Tráfego Pago para Negócios Locais",
  "category": "Tráfego Pago",
  "excerpt": "Aprenda a atração diária de clientes qualificados na sua cidade.",
  "content": "<h2 class='text-2xl font-bold text-white mb-3'>O Poder da Geolocalização</h2><p>Anúncios com <mark class='bg-[#FF6B00]/30 text-white font-semibold px-2 py-0.5 rounded'>raio de alcance direcionado</mark> reduzem o custo por lead.</p><figure class='my-6 rounded-2xl overflow-hidden border border-white/10 bg-zinc-900/50 p-2'><img src='https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&q=80' alt='Geo' class='w-full object-cover rounded-xl max-h-[420px]' /><figcaption class='text-center text-xs text-zinc-400 mt-2 italic'>Configuração de raio no gerenciador de anúncios</figcaption></figure><p>Para solicitar um orçamento direto, <a href='https://wa.me/5517991951381' target='_blank' class='text-[#FF6B00] underline font-bold'>fale conosco no WhatsApp (+55 17 99195-1381)</a>.</p>",
  "author": "Werik Oliveira",
  "readTime": "6 min de leitura",
  "image": "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&q=80"
}
```
- **Resposta Sucesso (`201 Created`)**: Retorna o objeto do artigo criado com ID e data gerados automaticamente.

---

### 4. Editar Artigo Existente
- **Método**: `PUT`
- **Endpoint**: `http://localhost:3001/api/posts/:id`
- **Header**: `Content-Type: application/json`
- **Body Exemplo**:
```json
{
  "title": "Estratégias de Tráfego Pago para Negócios Locais (Atualizado)",
  "excerpt": "Nova versão com métricas de ROAS revisadas."
}
```

---

### 5. Excluir Artigo
- **Método**: `DELETE`
- **Endpoint**: `http://localhost:3001/api/posts/:id`
- **Resposta Sucesso (`200 OK`)**:
```json
{
  "message": "Artigo excluído com sucesso"
}
```

---

## 💻 Exemplos de Código para Integração Externa

### 1. cURL (Linha de Comando / Terminal)

#### Criar Artigo via cURL:
```bash
curl -X POST http://localhost:3001/api/posts \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Como Vender Mais pelo Instagram em 2026",
    "category": "Redes Sociais",
    "excerpt": "Dicas essenciais para aumentar seu engajamento.",
    "content": "<p>Confira as melhores estratégias no nosso blog. Fale no <a href=\"https://wa.me/5517991951381\">WhatsApp</a>.</p>",
    "author": "Werik Oliveira"
  }'
```

#### Listar Artigos via cURL:
```bash
curl -X GET http://localhost:3001/api/posts
```

#### Excluir Artigo via cURL:
```bash
curl -X DELETE http://localhost:3001/api/posts/1785501234567
```

---

### 2. JavaScript (Fetch API / Node.js / Browser)

```javascript
// Criar um novo artigo
async function criarArtigo() {
  const response = await fetch('http://localhost:3001/api/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: 'Automação de Atendimento com WhatsApp e CRM',
      category: 'Automação B2B',
      excerpt: 'Como não perder nenhuma oportunidade de vendas.',
      content: '<p>Organize seus leads com atendimento automatizado.</p>',
      author: 'Equipe Amplifica'
    })
  });
  const data = await response.json();
  console.log('Artigo criado:', data);
}

criarArtigo();
```

---

### 3. Python (`requests`)

```python
import requests

url = "http://localhost:3001/api/posts"

payload = {
    "title": "Guia de SEO Local para Empresas",
    "category": "SEO & Content",
    "excerpt": "Coloque sua empresa no topo do Google Maps.",
    "content": "<p>Aprenda a otimizar o Google Meu Negócio.</p>",
    "author": "Werik Oliveira"
}

headers = {
    "Content-Type": "application/json"
}

response = requests.post(url, json=payload, headers=headers)
print("Status Code:", response.status_code)
print("Resposta:", response.json())
```

---

## 🎨 Guia de Formatação Rica do Conteúdo (`content`)

Ao enviar o HTML do artigo no campo `content`, você pode utilizar as seguintes marcações pré-estilizadas:

- **Imagens Anexadas no Meio do Texto**:
  ```html
  <figure class="my-6 rounded-2xl overflow-hidden border border-white/10 bg-zinc-900/50 p-2">
    <img src="URL_DA_IMAGEM" alt="Descrição" class="w-full object-cover rounded-xl max-h-[420px]" />
    <figcaption class="text-center text-xs text-zinc-400 mt-2 italic">Legenda da imagem</figcaption>
  </figure>
  ```
- **Links Clicáveis para WhatsApp**:
  ```html
  <a href="https://wa.me/5517991951381" target="_blank" class="text-[#FF6B00] underline font-bold">Conversar no WhatsApp</a>
  ```
- **Texto Destacado em Laranja**:
  ```html
  <mark class="bg-[#FF6B00]/30 text-white font-semibold px-2 py-0.5 rounded">Texto em Destaque</mark>
  ```
- **Subtítulos (H2 / H3)**:
  ```html
  <h2 class="text-2xl font-bold text-white mt-6 mb-3">Título da Seção</h2>
  <h3 class="text-xl font-bold text-[#FF8A33] mt-4 mb-2">Tópico Secundário</h3>
  ```
- **Blocos de Citação**:
  ```html
  <blockquote class="p-4 rounded-xl neu-well border-l-4 border-l-[#8B5CF6] italic text-zinc-300 my-4">
    "Citação em destaque"
  </blockquote>
  ```
