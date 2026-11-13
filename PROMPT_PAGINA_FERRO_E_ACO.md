# PROMPT DE CONSTRUÇÃO DO SITE: MINASFERRO (MATERIAIS, FERRO E AÇO)

Atue como um desenvolvedor web sênior e UI/UX designer especializado no setor industrial e de materiais pesados. Sua tarefa é construir o código completo de uma página web institucional e comercial para a empresa **Minasferro Comércio de Ferro e Aço** (Rede com mais de 20 lojas em Rondônia e Mato Grosso, com Matriz em Vilhena - RO e mais de 43 anos de experiência no mercado).

A página deve transmitir máxima solidez, grandeza corporativa e autoridade no fornecimento de ferro, aço, materiais de construção, ferramentas e produtos elétricos, priorizando a conversão rápida de visitantes em solicitações de orçamento via WhatsApp e balcão de vendas.

---

## 1. CONTEXTO INSTITUCIONAL DA EMPRESA
* **Histórico & Grandeza Regional:** A Minasferro atua há mais de **43 anos de experiência**, consolidando-se como uma potência regional com uma rede de **mais de 20 lojas espalhadas por 2 estados estratégicos: Rondônia (RO) e Mato Grosso (MT)**.
* **Proposta de Valor:** Grande poder de compra direto de usinas, amplo estoque à pronta entrega, variedade e atendimento técnico humanizado, fortalecendo grandes obras da construção civil, reformas, indústrias e o agronegócio de toda a região.
* **Matriz Estratégica:** Sede central localizada na Av. Celso Mazutti, 5179 - Jardim Eldorado, Vilhena - RO (ponto chave no corredor logístico da BR-364 que conecta RO e MT).

---

## 2. STACK TECNOLÓGICA & PADRÕES DE CÓDIGO
* **Estrutura:** HTML5 semântico, acessível e otimizado para SEO interestadual (Rondônia e Mato Grosso).
* **Estilização:** Tailwind CSS (via CDN ou classes utilitárias) com configuração de paleta industrial robusta.
* **Ícones:** Lucide Icons ou Font Awesome (versão SVG embutida).
* **Interatividade:** JavaScript Vanilla puro, modular e sem dependências pesadas.
* **Responsividade:** Abordagem Mobile-First, com grid fluido adaptável para smartphones, tablets e desktops.

---

## 3. GUIA DE DESIGN & IDENTIDADE VISUAL
* **Conceito:** Brutalismo industrial refinado, solidez estrutural, magnitude corporativa e confiança técnica.
* **Paleta de Cores Obrigatória:**
  * `Fundo Principal / Dark Steel`: `#0A192F` (azul marinho estrutural profundo).
  * `Superfícies de Cards / Grafite Metálico`: `#1E293B` e `#334155`.
  * `Acentos de Ação / Laranja de Segurança`: `#EA580C` (hover: `#C2410C`) para botões de conversão e badges de destaque.
  * `Bordas e Linhas Técnicas`: `#475569` e `#64748B`.
  * `Textos e Contrastes`: `#F8FAFC` (branco gelo para títulos) e `#94A3B8` (cinza metálico para descrições).
* **Tipografia:**
  * Títulos: Sans-serif geométrica em caixa-alta e peso pesado (`Montserrat`, `Barlow` ou `Inter` com `font-extrabold tracking-wider`).
  * Textos, tabelas e FAQ: Sans-serif nítida e técnica (`Inter` ou `Roboto`).
* **Texturas e Acabamentos:** Bordas sólidas, cantos estruturados (`rounded-sm` ou `rounded-md`), sombras projetadas sóbrias e microinterações mecânicas suaves nos botões.

---

## 4. ESTRUTURA E SEÇÕES A SEREM CONSTRUÍDAS

### SEÇÃO 1: Topbar de Informações Operacionais & Rede
* Faixa superior escura destacando a matriz e a presença interestadual:
  * Selo de Rede: *Rede com +20 Lojas em Rondônia e Mato Grosso*
  * Endereço Matriz: *Av. Celso Mazutti, 5179 - Jardim Eldorado, Vilhena - RO*
  * Horário: *Seg a Sex: 07h30 às 12h00 | 13h30 às 18h00 • Sáb: 07h30 às 12h00*
  * Telefones fixos: *(69) 3322-3312 / 3322-3121 / 3321-3969*

### SEÇÃO 2: Header Fixo com Navegação
* Logotipo com nome **MINASFERRO** em tipografia metálica forte com subtítulo *"Ferro, Aço & Materiais de Construção"*.
* Menu de links âncora: `#produtos`, `#rede`, `#diferenciais`, `#cotacao`, `#faq`, `#contato`.
* Botão de ação direta em destaque (laranja): `[SOLICITAR ORÇAMENTO NO WHATSAPP]`.

### SEÇÃO 3: Hero Section (Dobra de Alto Impacto)
* Fundo escuro com sobreposição visual de ambiente siderúrgico e vigas de aço.
* Selo de autoridade em destaque: `🏆 +43 ANOS DE HISTÓRIA • MAIS DE 20 LOJAS EM RO E MT`.
* Título Principal (H1): *"FORÇA, TRADIÇÃO E A MAIOR ESTRUTURA EM FERRO E AÇO DE RONDÔNIA E MATO GROSSO."*
* Subtítulo: *"Mais de 4 décadas sendo referência no comércio de ferro, aço, materiais de construção, ferramentas e produtos elétricos. Grande capacidade de fornecimento para abastecer desde a autoconstrução até grandes obras e fazendas com entrega rápida e estoque garantido."*
* Dois CTAs principais:
  1. `[FALAR COM CONSULTOR NO WHATSAPP]` (Link direto com mensagem pré-definida).
  2. `[EXPLORAR CATÁLOGO DE PRODUTOS]` (Scroll suave para a seção de catálogo).

### SEÇÃO 4: Barra de Métricas de Autoridade (Poder de Rede)
* Grid com 4 cartões com números de destaque:
  1. `+43 Anos` — Tradição e solidez consolidada em duas grandes regiões do país.
  2. `+20 Lojas` — Presença capilar em Rondônia e Mato Grosso garantindo agilidade.
  3. `Estoque de Matriz` — Alto volume à pronta entrega para sua obra nunca parar.
  4. `Normas ABNT` — Aço 100% certificado direto das maiores usinas siderúrgicas.

### SEÇÃO 5: Catálogo Técnico com Abas Interativas
* Sistema de abas dinâmicas em JavaScript com os filtros:
  - `Todos os Produtos`
  - `Construção Civil & Aço`
  - `Agronegócio & Pecuária`
  - `Coberturas Metálicas`
  - `Chapas, Tubos & Serralheria`
  - `Ferramentas & Elétricos`
* Cada card de produto deve possuir:
  * Imagem de alta qualidade do produto.
  * Título técnico e especificações rápidas.
  * Botão de ação: `[Cotar Este Item]` que abre o WhatsApp já com o nome do produto selecionado.
* **Itens obrigatórios no catálogo:**
  1. **Vergalhões CA-50 / CA-60:** Barras retas e dobradas (todas as bitolas, norma NBR 7480).
  2. **Telas Soldadas para Concreto:** Malhas de alta resistência para pisos industriais e lajes.
  3. **Treliças Metálicas & Estribos:** Estruturas prontas para lajes e vigas.
  4. **Arames Farpados:** Alta carga de ruptura e galvanização pesada contra ferrugem.
  5. **Arames Lisos Ovalados:** Alta tensão (17x15) para cerca pecuária de alta durabilidade.
  6. **Telhas Trapezoidais (TP-40 / TP-25):** Aço galvanizado/galvalume sob medida para galpões e coberturas.
  7. **Telhas Onduladas:** Cobertura tradicional com escoamento eficiente.
  8. **Chapas de Alumínio Lisa:** Leveza, durabilidade e acabamento uniforme.
  9. **Chapas Xadrez (Alumínio e Aço):** Superfície antiderrapante para plataformas, caçambas e escadas.
  10. **Tubos Industriais e Perfis U:** Tubos redondos, quadrados e perfis estruturais para serralheria.
  11. **Linha de Ferramentas & Equipamentos:** Ferramentas manuais e elétricas profissionais para canteiro de obras e serralheria.
  12. **Linha de Materiais Elétricos:** Condutores, fios, cabos e dispositivos de proteção para instalações residenciais e industriais.

### SEÇÃO 6: Seção "Cotação Express" (Captura de Projetos)
* Box de alto contraste voltado para engenheiros, mestres de obras e compradores:
  * Chamada: *"Já possui a lista de corte de ferro ou o projeto estrutural em mãos?"*
  * Texto explicativo: *"Aproveite o poder de distribuição da nossa rede com mais de 20 lojas. Envie sua relação de materiais ou projeto em PDF para nossa equipe técnica e receba o orçamento detalhado rapidamente."*
  * Botão de conversão de alta visibilidade direcionando para envio de lista via WhatsApp.

### SEÇÃO 7: Diferenciais Operacionais & Poder Logístico
* 3 cards com ícones industriais detalhando as vantagens:
  1. **Capilaridade Logística (+20 Lojas):** Distribuição eficiente em RO e MT, reduzindo prazos de entrega e fretes para fazendas e canteiros.
  2. **Atendimento Especializado:** Balcão técnico consultivo capacitado para interpretar plantas e calcular quantitativos com precisão.
  3. **Poder de Compra de Grande Rede:** Condições comerciais competitivas e fornecimento direto para construtoras, indústrias e produtores rurais.

### SEÇÃO 8: A Rede Minasferro (RO & MT) & Matriz em Vilhena
* Destaque para a expansão da rede ao longo de mais de 4 décadas, conectando os estados de Rondônia e Mato Grosso.
* Reconhecimento da Matriz em Vilhena como o polo fundador e coração administrativo/logístico do grupo.
* Bloco com horários de funcionamento, localização com link integrado para o Google Maps e telefones.

### SEÇÃO 9: Banner CTA Pré-FAQ (Chamada de Alta Conversão)
* Bloco de destaque com fundo escuro texturizado e borda alaranjada, posicionado imediatamente antes do FAQ:
  * **Título Principal:** *"PRONTO PARA COTAR OS MATERIAIS DA SUA OBRA COM UMA REDE DE +20 LOJAS E +43 ANOS DE EXPERIÊNCIA?"*
  * **Subtítulo:** *"Nossa equipe técnica está pronta para analisar sua lista de materiais, tirar dúvidas e oferecer as melhores condições comerciais de Rondônia e Mato Grosso."*
  * **Botão CTA em Destaque:** `[SOLICITAR ATENDIMENTO VIA WHATSAPP]` direcionando para conversa direta com a equipe comercial.

### SEÇÃO 10: FAQ (Perguntas Frequentes — 8 Perguntas Técnicas)
* Sistema accordion interativo (expandir/recolher) contendo exatamente as 8 perguntas abaixo:
  1. **Onde estão localizadas as lojas da Minasferro e qual região é atendida?**
     - *Resposta:* A Minasferro possui uma rede com mais de 20 lojas distribuídas estrategicamente em 2 estados: Rondônia e Mato Grosso. Nossa matriz fica em Vilhena - RO e atendemos com rapidez e frota estruturada obras urbanas, indústrias e propriedades rurais em toda a região.
  2. **Os produtos de ferro e aço comercializados seguem as normas técnicas da ABNT?**
     - *Resposta:* Sim. Todo o nosso aço para construção civil (vergalhões CA-50, CA-60 e telas soldadas) possui procedência de usinas certificadas, atendendo rigorosamente à norma NBR 7480, garantindo segurança estrutural inegociável para seu projeto.
  3. **Como faço para enviar minha lista de corte ou projeto estrutural para orçamento?**
     - *Resposta:* Você pode enviar sua lista de materiais, planilha ou projeto em PDF diretamente pelo nosso botão de WhatsApp ou entregá-la no balcão de uma de nossas unidades. Nossa equipe técnica calcula as quantidades exatas e retorna com o orçamento detalhado.
  4. **A Minasferro vende apenas ferro e aço ou oferece outros materiais para construção?**
     - *Resposta:* Além de sermos especialistas em ferro e aço, oferecemos um mix completo que inclui materiais de construção, telhas galvanizadas, arames para pecuária, chapas metálicas, ferramentas profissionais e linha completa de materiais elétricos.
  5. **Vocês atendem tanto no varejo para pequenas reformas quanto no atacado para grandes construtoras?**
     - *Resposta:* Sim! Atendemos desde o consumidor final que está realizando uma pequena reforma até grandes construtoras, indústrias e pecuaristas, oferecendo condições comerciais diferenciadas e escalonadas graças ao poder de compra da nossa rede.
  6. **As telhas trapezoidais e onduladas podem ser cortadas sob medida para minha cobertura?**
     - *Resposta:* Sim, fornecemos telhas trapezoidais (TP-40 e TP-25) e onduladas cortadas no comprimento ideal do seu projeto, reduzindo emendas, desperdício de material e tempo de instalação na obra.
  7. **Quais são as opções e condições de pagamento disponíveis?**
     - *Resposta:* Aceitamos pagamento via PIX, cartões de débito e crédito com parcelamento, além de faturamento para pessoas jurídicas e produtores rurais (mediante análise cadastral prévia).
  8. **Qual é o horário de funcionamento da matriz em Vilhena?**
     - *Resposta:* Funcionamos de segunda a sexta-feira, das 07h30 às 12h00 e das 13h30 às 18h00. Aos sábados, atendemos das 07h30 às 12h00. Aos domingos estamos fechados.

### SEÇÃO 11: Rodapé Institucional Elaborado (Footer Completo)
* Grid com 4 colunas ricas e informativas sobre fundo `#050D1A`:
  * **Coluna 1 — Sobre o Grupo Minasferro:**
    - Logo oficial e texto institucional: *"Minasferro Comércio de Ferro e Aço: há mais de 43 anos fortalecendo obras, indústrias e o agronegócio com uma rede de mais de 20 lojas em Rondônia e Mato Grosso. Solidez, variedade e compromisso inegociável com a sua construção."*
    - Badges: `+43 Anos` | `+20 Lojas (RO e MT)` | `Aço 100% Certificado`.
  * **Coluna 2 — Linhas de Produtos & Soluções:**
    - Links rápidos: Ferro e Aço para Construção Civil; Arames e Cercamento Agropecuário; Telhas e Coberturas Metálicas; Chapas e Tubos Industriais; Linha de Ferramentas Profissionais; Materiais Elétricos.
  * **Coluna 3 — Horários & Canais de Atendimento:**
    - Horário de atendimento semanal e aos sábados.
    - Telefones de balcão da matriz: `(69) 3322-3312` | `(69) 3322-3121` | `(69) 3321-3969`.
    - WhatsApp comercial: `(69) 93322-3312`.
    - Canal de orçamentos rápidos e recebimento de projetos.
  * **Coluna 4 — Matriz & Presença Regional:**
    - Endereço da Matriz: Av. Celso Mazutti, 5179 - Jardim Eldorado, Vilhena - RO, CEP 76987-037.
    - Presença: Rede com mais de 20 lojas em Rondônia e Mato Grosso.
    - Botão interativo: `[Ver Rota no Google Maps]`.
* **Sub-rodapé (Barra Inferior):**
  - Copyright: *"© 2026 Minasferro Comércio de Ferro e Aço. Todos os direitos reservados."*
  - Razão social, dados cadastrais e identificação interestadual: *"Matriz Vilhena - Rondônia • Presença em Rondônia e Mato Grosso | Fornecendo solidez há mais de quatro décadas."*

---

## 5. REGRAS DE COMPORTAMENTO E INTERATIVIDADE (JAVASCRIPT)
1. **Filtro das Abas do Catálogo:** A troca entre categorias de produtos deve alternar os cards de forma instantânea sem recarregar a página.
2. **Accordion do FAQ:** Abertura e fechamento suaves das 8 perguntas, permitindo abrir uma resposta por vez ou múltiplas com transição suave de altura.
3. **Integração Dinâmica com WhatsApp:** Todos os botões de cotação devem redirecionar para a API do WhatsApp (`https://wa.me/556933223312?text=...`) com mensagem codificada personalizada para o contexto:
   - Botão geral: *"Olá! Gostaria de solicitar um orçamento com a equipe da Minasferro (Rede RO/MT)."*
   - Botão de produto específico: *"Olá! Gostaria de consultar preço e disponibilidade do item: [Nome do Produto]."*
   - Botão de cotação express: *"Olá! Gostaria de enviar uma lista de materiais / projeto em PDF para cotação na Minasferro."*
   - Botão do banner pré-FAQ: *"Olá! Gostaria de falar com um especialista da Minasferro para orçar os materiais da minha obra."*
4. **Navegação Suave:** Implementar `scroll-behavior: smooth` para todos os links âncora internos.
5. **Header Fixo Responsivo:** O cabeçalho deve manter contraste visível durante a rolagem, com menu hambúrguer para dispositivos móveis.
