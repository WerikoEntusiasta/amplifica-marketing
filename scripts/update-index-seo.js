const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const POSTS_FILE = path.join(ROOT_DIR, 'server', 'data', 'posts.json');
const INDEX_FILE = path.join(ROOT_DIR, 'index.html');

const posts = JSON.parse(fs.readFileSync(POSTS_FILE, 'utf8'));

// Build semantic blog articles list for crawler HTML
const blogListHtml = posts
  .map((p, idx) => {
    return `            <article class="seo-article-card mb-6 pb-6 border-b border-zinc-800">
              <h3 class="text-xl font-bold mb-2"><a href="#artigo-${p.slug}" class="text-orange-500 hover:underline">${idx + 1}. ${p.title}</a></h3>
              <p class="text-sm text-zinc-400 mb-2">${p.excerpt}</p>
              <div class="text-xs text-zinc-500">Categoria: <span class="text-purple-400 font-semibold">${p.category}</span> • Leitura: ${p.readTime} • Autor: ${p.author || 'Werik Oliveira'}</div>
            </article>`;
  })
  .join('\n');

const preRenderedHtml = `<div id="root">
      <!-- SEMANTIC SEO & CRAWLER FALLBACK (Googlebot, Bing, Yahoo Slurp, DuckDuckGo, GPTBot, ClaudeBot, PerplexityBot) -->
      <header class="sr-only-crawler p-6 bg-zinc-950 border-b border-zinc-800">
        <div class="max-w-6xl mx-auto flex items-center justify-between">
          <a href="https://amplificagroup.com/" class="text-2xl font-extrabold text-orange-500 tracking-wider">AMPLIFICA MARKETING</a>
          <nav aria-label="Navegação Principal" class="space-x-4 text-sm font-semibold">
            <a href="#hero">Início</a>
            <a href="#servicos">Serviços</a>
            <a href="#portfolio">Vídeos</a>
            <a href="#artes">Artes</a>
            <a href="#sistemas">Sistemas</a>
            <a href="#sobre">Sobre</a>
            <a href="#blog">Blog (${posts.length} Artigos)</a>
            <a href="#contato">Contato</a>
          </nav>
        </div>
      </header>

      <main class="sr-only-crawler max-w-6xl mx-auto px-6 py-12 space-y-16">
        <!-- Hero Section -->
        <section id="hero-fallback">
          <span class="text-xs uppercase tracking-widest text-orange-500 font-bold">Marketing Digital em Catanduva, São José do Rio Preto (SJRP) & Raio de 100km</span>
          <h1 class="text-4xl sm:text-6xl font-black mt-2 mb-6">Amplifique Seus Resultados Digitais: Tráfego Pago, Redes Sociais, Videomaker e Sistemas</h1>
          <p class="text-lg text-zinc-300 max-w-3xl leading-relaxed mb-6">
            A Amplifica Marketing (Amplifica Group) é a agência especialista em performance digital, gestão diária de tráfego pago (Google Ads e Meta Ads), linha editorial e social mídia, videomaker para eventos com drone 4K, criação de sistemas web sob medida e automação B2B com CRM WhatsApp para empresas de Catanduva, São José do Rio Preto e toda a região noroeste paulista.
          </p>
          <div class="flex flex-wrap gap-4 text-sm font-bold">
            <a href="https://wa.me/5517991951381?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento!" class="bg-orange-600 text-white px-6 py-3 rounded-full">Solicitar Orçamento no WhatsApp: (17) 99195-1381</a>
            <a href="#servicos" class="border border-zinc-700 px-6 py-3 rounded-full">Ver Todos os Serviços & Tabela</a>
          </div>
        </section>

        <!-- Services Section -->
        <section id="servicos-fallback">
          <h2 class="text-3xl font-bold mb-6">Soluções Completas de Marketing Digital & Tecnologia</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="p-6 bg-zinc-900 rounded-2xl border border-zinc-800">
              <h3 class="text-xl font-bold text-orange-400 mb-2">1. Gestor de Tráfego Pago (Google Ads & Meta Ads)</h3>
              <p class="text-sm text-zinc-300 mb-4">Campanhas diárias focadas em ROI, aquisição de leads qualificados no WhatsApp e escala de vendas online em Catanduva, SJRP e todo o Brasil. Preço a partir de R$ 500,00/mês.</p>
            </div>
            <div class="p-6 bg-zinc-900 rounded-2xl border border-zinc-800">
              <h3 class="text-xl font-bold text-orange-400 mb-2">2. Gestão de Redes Sociais & Social Mídia</h3>
              <p class="text-sm text-zinc-300 mb-4">Planejamento editorial estratégico, design visual autoral, linha de autoridade e rotina para Instagram, TikTok e Facebook. Preço a partir de R$ 200,00/mês.</p>
            </div>
            <div class="p-6 bg-zinc-900 rounded-2xl border border-zinc-800">
              <h3 class="text-xl font-bold text-orange-400 mb-2">3. Videomaker para Eventos & Filmagens com Drone 4K</h3>
              <p class="text-sm text-zinc-300 mb-4">Cobertura institucional, Reels e TikTok em alta resolução, captação aérea em 4K e edição profissional. Preço a partir de R$ 250,00 ou R$ 100,00/hora em eventos.</p>
            </div>
            <div class="p-6 bg-zinc-900 rounded-2xl border border-zinc-800">
              <h3 class="text-xl font-bold text-orange-400 mb-2">4. Criação de Websites & Landing Pages</h3>
              <p class="text-sm text-zinc-300 mb-4">Websites ultra-rápidos, responsivos, estruturados com SEO técnico para topo do Google. Landing pages por R$ 1.000,00; E-commerce e sites completos por R$ 2.000,00.</p>
            </div>
            <div class="p-6 bg-zinc-900 rounded-2xl border border-zinc-800">
              <h3 class="text-xl font-bold text-orange-400 mb-2">5. Sistemas Sob Medida & Automação B2B</h3>
              <p class="text-sm text-zinc-300 mb-4">Desenvolvimento de plataformas web, dashboards, CRM integrado ao WhatsApp e automação comercial de vendas. Preço a partir de R$ 500,00.</p>
            </div>
            <div class="p-6 bg-zinc-900 rounded-2xl border border-zinc-800">
              <h3 class="text-xl font-bold text-orange-400 mb-2">6. Design Gráfico & Artes para Painéis de LED</h3>
              <p class="text-sm text-zinc-300 mb-4">Artes publicitárias para mídias digitais, flyers comerciais para shows e painéis de LED de alta definição. A partir de R$ 50,00 por arte.</p>
            </div>
          </div>
        </section>

        <!-- Geo-Location 100km Coverage Section -->
        <section id="regiao-fallback">
          <h2 class="text-3xl font-bold mb-4">Atendimento Regional em Catanduva e Raio de 100km</h2>
          <p class="text-sm text-zinc-300 mb-4">Atendemos presencial e estrategicamente empresas e agências parceiras em todas as 20 cidades do noroeste e centro do estado de São Paulo:</p>
          <ul class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-sm text-zinc-400 font-medium">
            <li>📍 Catanduva (Sede)</li>
            <li>📍 São José do Rio Preto (SJRP)</li>
            <li>📍 Mirassol</li>
            <li>📍 Pindorama</li>
            <li>📍 Santa Adélia</li>
            <li>📍 Ibirá</li>
            <li>📍 Urupês</li>
            <li>📍 Tabapuã</li>
            <li>📍 Novo Horizonte</li>
            <li>📍 Itápolis</li>
            <li>📍 Taquaritinga</li>
            <li>📍 Matão</li>
            <li>📍 Araraquara</li>
            <li>📍 Bebedouro</li>
            <li>📍 Olímpia</li>
            <li>📍 Barretos</li>
            <li>📍 Jaboticabal</li>
            <li>📍 Monte Alto</li>
            <li>📍 Votuporanga</li>
            <li>📍 Sertãozinho</li>
          </ul>
        </section>

        <!-- Blog Articles Directory -->
        <section id="blog-fallback">
          <h2 class="text-3xl font-bold mb-4">Blog & Artigos Estratégicos de Marketing Digital (${posts.length} Artigos)</h2>
          <p class="text-sm text-zinc-400 mb-8">Confira nossa biblioteca completa de artigos autorais sobre tráfego pago, inteligência artificial, SEO, rotina empreendedora e conversão de vendas:</p>
          <div class="space-y-4">
${blogListHtml}
          </div>
        </section>

        <!-- FAQ Section -->
        <section id="faq-fallback">
          <h2 class="text-3xl font-bold mb-6">Perguntas Frequentes (FAQ) sobre Marketing Digital</h2>
          <div class="space-y-6">
            <div>
              <h3 class="text-lg font-bold text-white">Qual a melhor agência de marketing digital em Catanduva e São José do Rio Preto (SJRP)?</h3>
              <p class="text-sm text-zinc-400 mt-1">A Amplifica Marketing (Amplifica Group) é referência em marketing digital de performance, unindo gestão de tráfego pago, redes sociais, videomaker para eventos, drone 4K e desenvolvimento de sistemas próprios.</p>
            </div>
            <div>
              <h3 class="text-lg font-bold text-white">Como contratar gestor de tráfego pago em Catanduva?</h3>
              <p class="text-sm text-zinc-400 mt-1">Basta entrar em contato pelo WhatsApp oficial (+55 17 99195-1381). Criamos e gerenciamos suas campanhas no Google Ads e Meta Ads com relatórios transparentes e otimização diária.</p>
            </div>
            <div>
              <h3 class="text-lg font-bold text-white">Como funciona a tabela de revenda de marketing para outras agências?</h3>
              <p class="text-sm text-zinc-400 mt-1">Disponibilizamos planos completos de terceirização B2B (white-label) para agências revenderem serviços de social media, artes, tráfego pago, videomaker e criação de sites com margens competitivas.</p>
            </div>
          </div>
        </section>
      </main>

      <footer class="sr-only-crawler p-8 bg-zinc-950 border-t border-zinc-800 text-center text-xs text-zinc-500 space-y-2">
        <p>© 2026 Amplifica Marketing (Amplifica Group) • Fundador: Werik Oliveira (@recwerikoliveira)</p>
        <p>Telefone / WhatsApp: +55 (17) 99195-1381 • Catanduva - SP, Brasil</p>
        <p><a href="https://amplificagroup.com/sitemap.xml" class="text-orange-500 hover:underline">Sitemap XML</a> • <a href="https://amplificagroup.com/rss.xml" class="text-orange-500 hover:underline">Feed RSS</a> • <a href="https://amplificagroup.com/llms.txt" class="text-orange-500 hover:underline">LLMs.txt</a> • <a href="https://amplificagroup.com/llms-full.txt" class="text-orange-500 hover:underline">LLMs Full</a></p>
      </footer>
    </div>`;

let html = fs.readFileSync(INDEX_FILE, 'utf8');

// 1. Replace <div id="root"></div> with our pre-rendered semantic block
html = html.replace(/<div id="root"><\/div>/, preRenderedHtml);

// 2. Add extra SEO and search engine verification tags
const extraMeta = `    <!-- Search Engine Syndication, Verification & Indexing Protocols -->
    <link rel="alternate" type="application/rss+xml" title="Blog Amplifica Marketing (Feed RSS 2.0)" href="https://amplificagroup.com/rss.xml" />
    <link rel="alternate" type="application/atom+xml" title="Blog Amplifica Marketing (Feed Atom)" href="https://amplificagroup.com/feed.xml" />
    <link rel="author" href="https://instagram.com/recwerikoliveira" />
    <meta name="author" content="Werik Oliveira - Amplifica Marketing" />
    <meta name="msvalidate.01" content="76db301b56d7a3424c9e9b746e39694f" />
    <meta name="yandex-verification" content="76db301b56d7a342" />
    <meta name="rating" content="general" />
    <meta name="revisit-after" content="1 days" />
    <meta name="format-detection" content="telephone=yes" />
`;

if (!html.includes('name="msvalidate.01"')) {
  html = html.replace(/<link rel="canonical" href="https:\/\/amplificagroup\.com\/" \/>/, `<link rel="canonical" href="https://amplificagroup.com/" />\n${extraMeta}`);
}

// 3. Enhance JSON-LD Schema.org in index.html
if (!html.includes('"speakable"')) {
  html = html.replace(
    /"inLanguage": "pt-BR"\s*}/,
    `"inLanguage": "pt-BR",
          "speakable": {
            "@type": "SpeakableSpecification",
            "cssSelector": ["h1", ".hero-title-el", ".hero-sub-el"]
          }
        },
        {
          "@type": "Blog",
          "@id": "https://amplificagroup.com/#blog",
          "name": "Blog Amplifica Marketing",
          "url": "https://amplificagroup.com/#blog",
          "description": "Artigos estratégicos sobre marketing digital de performance, tráfego pago, SEO, inteligência artificial e automação B2B.",
          "publisher": {
            "@id": "https://amplificagroup.com/#organization"
          }
        }`
  );
}

fs.writeFileSync(INDEX_FILE, html, 'utf8');
console.log('✓ Successfully enhanced index.html with pre-rendered semantic SEO fallback and rich search meta tags!');
