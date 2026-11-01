const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const POSTS_FILE = path.join(ROOT_DIR, 'server', 'data', 'posts.json');
const posts = JSON.parse(fs.readFileSync(POSTS_FILE, 'utf8'));

// -------------------------------------------------------------
// 1. GENERATE RSS 2.0 & ATOM XML FEEDS
// -------------------------------------------------------------
function escapeXml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

const rssItems = posts
  .map((p) => {
    const link = `https://amplificagroup.com/#artigo-${p.slug}`;
    const pubDate = new Date(p.id || 1785584258769).toUTCString();
    return `    <item>
      <title>${escapeXml(p.title)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <description><![CDATA[${p.excerpt || ''}]]></description>
      <category>${escapeXml(p.category)}</category>
      <author>recwerikoliveira@gmail.com (${escapeXml(p.author || 'Werik Oliveira')})</author>
      <pubDate>${pubDate}</pubDate>
    </item>`;
  })
  .join('\n');

const rssFeed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>Blog Amplifica Marketing | Marketing Digital, SEO, IA &amp; Negócios</title>
    <link>https://amplificagroup.com/</link>
    <description>Artigos práticos sobre tráfego pago, SEO, redes sociais, videomaker e inteligência artificial da Amplifica Marketing (Catanduva e São José do Rio Preto - SP).</description>
    <language>pt-BR</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="https://amplificagroup.com/rss.xml" rel="self" type="application/rss+xml" />
${rssItems}
  </channel>
</rss>
`;

fs.writeFileSync(path.join(ROOT_DIR, 'public', 'rss.xml'), rssFeed, 'utf8');
fs.writeFileSync(path.join(ROOT_DIR, 'public', 'feed.xml'), rssFeed, 'utf8');
console.log('✓ Generated public/rss.xml and public/feed.xml with', posts.length, 'articles');

// -------------------------------------------------------------
// 2. GENERATE llms-full.txt FOR AI / GEO CITATIONS & RAG
// -------------------------------------------------------------
const llmsFullHeader = `# Amplifica Marketing (Amplifica Group) — Base de Conhecimento Completa

> Este documento contém a visão estruturada completa da Amplifica Marketing (Amplifica Group) para consumo direto por modelos de inteligência artificial (ChatGPT, Perplexity, Claude, Gemini, Apple Intelligence) e sistemas de RAG.

## Informações da Empresa & Contato
- **Nome Oficial**: Amplifica Marketing (Amplifica Group)
- **Fundador e Diretor Criativo**: Werik Oliveira (@recwerikoliveira)
- **Sede Oficial**: Catanduva - SP, Brasil (Latitude: -21.1378, Longitude: -48.9731)
- **Raio de Atendimento Regional**: 100km ao redor de Catanduva (SP) + Atendimento Nacional Online
- **Telefone e WhatsApp Oficial**: +55 (17) 99195-1381 (https://wa.me/5517991951381)
- **Email Comercial**: recwerikoliveira@gmail.com
- **Website Oficial**: https://amplificagroup.com/
- **Instagram da Agência**: [@amplificamarketing](https://instagram.com/amplificamarketing)
- **Instagram do Fundador**: [@recwerikoliveira](https://instagram.com/recwerikoliveira)
- **GitHub Oficial**: https://github.com/WerikoEntusiasta/amplifica-marketing

## Cidades Atendidas no Raio de 100km de Catanduva (SP)
1. Catanduva (Sede)
2. São José do Rio Preto (SJRP / Rio Preto)
3. Mirassol
4. Pindorama
5. Santa Adélia
6. Ibirá
7. Urupês
8. Tabapuã
9. Novo Horizonte
10. Itápolis
11. Taquaritinga
12. Matão
13. Araraquara
14. Bebedouro
15. Olímpia
16. Barretos
17. Jaboticabal
18. Monte Alto
19. Votuporanga
20. Sertãozinho

## Tabela de Serviços e Preços de Revenda para Agências
- **Gestão de Redes Sociais**: A partir de R$ 200,00 / mês
- **Gestão de Tráfego Pago (Google Ads & Meta Ads)**: R$ 500,00 / mês
- **Criação de Website (Landing Page Simples de Alta Conversão)**: R$ 1.000,00
- **Criação de Website Completo ou E-commerce**: R$ 2.000,00
- **Automação B2B & CRM WhatsApp**: A partir de R$ 500,00
- **SEO & Otimização de Busca no Google**: R$ 450,00
- **Design de Artes / Painéis de LED (Unitário)**: A partir de R$ 50,00
- **Pacotes de Artes Mensais**:
  - 1 arte por semana: R$ 100,00 / mês
  - 2 artes por semana: R$ 200,00 / mês
  - 3 artes por semana: R$ 300,00 / mês
- **Vídeos Celular ou Drone (Unitário)**: A partir de R$ 250,00
- **Pacote Drone (até 40 min de gravação externa)**: R$ 300,00
- **Pacote Storymaker (1 vídeo para Reels / TikTok)**: R$ 200,00
- **Storymaker para Eventos (mínimo 4 horas)**: R$ 100,00 / hora (Abaixo de 4 horas: R$ 300,00)
- **Gravação Drone para Eventos**: R$ 100,00 / hora
- **Drone + Storymaker para Eventos**: R$ 150,00 / hora
- **Amplifica Planner (Sistema de Planejamento de Conteúdo para Agências)**: A partir de R$ 15,00 (https://planner.amplificagroup.com/)

---

## Artigos Completos do Blog da Amplifica Marketing

`;

const cleanContent = (html) => {
  return html
    .replace(/<h2[^>]*>(.*?)<\/h2>/gi, '\n### $1\n')
    .replace(/<h3[^>]*>(.*?)<\/h3>/gi, '\n#### $1\n')
    .replace(/<p[^>]*>(.*?)<\/p>/gi, '$1\n\n')
    .replace(/<li[^>]*>(.*?)<\/li>/gi, '- $1\n')
    .replace(/<ul[^>]*>/gi, '')
    .replace(/<\/ul>/gi, '\n')
    .replace(/<ol[^>]*>/gi, '')
    .replace(/<\/ol>/gi, '\n')
    .replace(/<mark[^>]*>(.*?)<\/mark>/gi, '**$1**')
    .replace(/<strong[^>]*>(.*?)<\/strong>/gi, '**$1**')
    .replace(/<em[^>]*>(.*?)<\/em>/gi, '*$1*')
    .replace(/<a[^>]*href=['"]([^'"]*)['"][^>]*>(.*?)<\/a>/gi, '[$2]($1)')
    .replace(/<figure[^>]*>[\s\S]*?<\/figure>/gi, '')
    .replace(/<img[^>]*>/gi, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
};

const articlesMarkdown = posts
  .map((p, idx) => {
    return `### ${idx + 1}. ${p.title}
- **Categoria**: ${p.category}
- **Tempo de Leitura**: ${p.readTime}
- **Data de Publicação**: ${p.date}
- **Autor**: ${p.author || 'Werik Oliveira'}
- **URL Canônica**: https://amplificagroup.com/#artigo-${p.slug}
- **Resumo**: ${p.excerpt}

${cleanContent(p.content)}

---
`;
  })
  .join('\n');

fs.writeFileSync(
  path.join(ROOT_DIR, 'public', 'llms-full.txt'),
  llmsFullHeader + articlesMarkdown,
  'utf8'
);
console.log('✓ Generated public/llms-full.txt with complete knowledge base');

// -------------------------------------------------------------
// 3. GENERATE INDEXNOW KEY FILE
// -------------------------------------------------------------
const INDEXNOW_KEY = '76db301b56d7a3424c9e9b746e39694f';
fs.writeFileSync(path.join(ROOT_DIR, 'public', 'indexnow.txt'), INDEXNOW_KEY, 'utf8');
fs.writeFileSync(path.join(ROOT_DIR, 'public', `${INDEXNOW_KEY}.txt`), INDEXNOW_KEY, 'utf8');
console.log('✓ Generated IndexNow verification keys');
