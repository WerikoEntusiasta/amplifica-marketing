# 📚 Documentação da REST API — Blog Amplifica Group

Esta documentação fornece todas as instruções necessárias para integrar, criar, editar e excluir artigos do blog da **Amplifica Marketing (Amplifica Group)** via sistemas próprios, n8n, Make, scripts Python, cURL, Postman ou automações.

---

## 🌐 Informações de Conexão

- **Base URL Oficial**: `https://amplificagroup.com/api/posts`
- **Base URL Local**: `http://localhost:3001/api/posts`
- **Banco de Dados**: SQLite 3 (`server/data/blog.db`)
- **Formato de Dados**: `JSON (application/json)`
- **Autenticação**: Requer `x-api-key` ou `Authorization: Bearer <API_KEY>` nos endpoints de escrita (POST, PUT, DELETE).

---

## 🔑 Autenticação (Header)

Nos endpoints de criação (`POST`), edição (`PUT`) e exclusão (`DELETE`), envie o header:

```http
x-api-key: amplifica_sec_key_991951381_2026
```

*(Ou a chave configurada no arquivo `.env` do seu servidor)*

---

## 📊 Estrutura do Objeto (JSON Schema)

| Campo | Tipo | Obrigatório | Descrição |
| :--- | :--- | :---: | :--- |
| `title` | `string` | **Sim** | Título principal do artigo (mínimo 3 caracteres) |
| `content` | `string` | **Sim** | Conteúdo em HTML ou texto (mínimo 10 caracteres) |
| `excerpt` | `string` | Não | Resumo do artigo para o card |
| `category` | `string` | Não | Categoria (`Tráfego Pago`, `Redes Sociais`, `SEO & Content`, `Automação B2B`, `Audiovisual & Drone`, `Estratégia de Marca`) |
| `author` | `string` | Não | Nome do autor (Padrão: `"Werik Oliveira"`) |
| `readTime` | `string` | Não | Tempo estimado de leitura (Padrão: `"5 min de leitura"`) |
| `image` | `string` | Não | URL da imagem de capa |

---

## 📡 Endpoints da REST API

### 1. Listar Todos os Artigos (Público)
- **Método**: `GET`
- **URL**: `https://amplificagroup.com/api/posts`
- **Resposta (`200 OK`)**:
```json
[
  {
    "id": 1,
    "slug": "como-gerar-leads-qualificados-com-trafego-pago",
    "title": "Como Gerar Leads Qualificados com Tráfego Pago em 2026",
    "excerpt": "Descubra como otimizar suas campanhas no Google Ads e Meta Ads.",
    "content": "<p>Conteúdo do artigo...</p>",
    "category": "Tráfego Pago",
    "readTime": "5 min de leitura",
    "date": "07 de Agosto, 2026",
    "author": "Werik Oliveira",
    "source": "Amplifica Blog",
    "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
  }
]
```

---

### 2. Obter Artigo por ID (Público)
- **Método**: `GET`
- **URL**: `https://amplificagroup.com/api/posts/:id`

---

### 3. Criar Novo Artigo (🔑 Requer API Key)
- **Método**: `POST`
- **URL**: `https://amplificagroup.com/api/posts`
- **Headers**:
  - `Content-Type: application/json`
  - `x-api-key: amplifica_sec_key_991951381_2026`

**Exemplo de JSON (Body)**:
```json
{
  "title": "Estratégias de Tráfego Pago para Negócios B2B",
  "category": "Tráfego Pago",
  "excerpt": "Como atrair empresas e tomadores de decisão usando anúncios focados em conversão.",
  "content": "<h2>Alta Performance em Anúncios</h2><p>Captação diária de leads qualificados através de campanhas segmentadas...</p>",
  "author": "Werik Oliveira",
  "readTime": "6 min de leitura",
  "image": "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&q=80"
}
```

---

### 4. Editar Artigo (🔑 Requer API Key)
- **Método**: `PUT`
- **URL**: `https://amplificagroup.com/api/posts/:id`
- **Headers**:
  - `Content-Type: application/json`
  - `x-api-key: amplifica_sec_key_991951381_2026`

---

### 5. Excluir Artigo (🔑 Requer API Key)
- **Método**: `DELETE`
- **URL**: `https://amplificagroup.com/api/posts/:id`
- **Headers**:
  - `x-api-key: amplifica_sec_key_991951381_2026`

---

## 💻 Exemplos de Integração em Código

### 1. cURL (Terminal / Bash)

```bash
curl -X POST https://amplificagroup.com/api/posts \
  -H "Content-Type: application/json" \
  -H "x-api-key: amplifica_sec_key_991951381_2026" \
  -d '{
    "title": "Importância da Gestão de Redes Sociais",
    "excerpt": "Construa autoridade de marca com conteúdo autoral.",
    "content": "<p>A constância aliada ao design autoral gera reconhecimento de marca...</p>",
    "category": "Redes Sociais",
    "author": "Werik Oliveira"
  }'
```

---

### 2. JavaScript / Node.js / React (Fetch)

```javascript
const novoPost = {
  title: "Vídeos e Drone 4K no Marketing de Impacto",
  excerpt: "Produções audiovisuais aumentam em até 300% o engajamento.",
  content: "<p>Vídeos institucionais e imagens aéreas transmitem credibilidade...</p>",
  category: "Audiovisual & Drone",
  author: "Werik Oliveira"
};

fetch('https://amplificagroup.com/api/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': 'amplifica_sec_key_991951381_2026'
  },
  body: JSON.stringify(novoPost)
})
  .then(res => res.json())
  .then(data => console.log('Criado:', data))
  .catch(err => console.error('Erro:', err));
```

---

### 3. Python

```python
import requests

url = "https://amplificagroup.com/api/posts"
headers = {
    "Content-Type": "application/json",
    "x-api-key": "amplifica_sec_key_991951381_2026"
}
data = {
    "title": "Automação B2B e Atendimento Inteligente",
    "excerpt": "Escalando o atendimento no WhatsApp com CRM e automações.",
    "content": "<p>Sistemas integrados de atendimento reduzem tempo de resposta...</p>",
    "category": "Automação B2B",
    "author": "Werik Oliveira"
}

response = requests.post(url, json=data, headers=headers)
print(response.json())
```
