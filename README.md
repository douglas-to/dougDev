<div align="center">

# 🧑‍💻 Portfólio Pessoal — doug-dev

> Portfólio desenvolvido com HTML5 semântico, CSS3 puro e JavaScript vanilla,
> sem nenhuma dependência externa. Design dark moderno focado em atrair recrutadores.

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![Status](https://img.shields.io/badge/status-concluído-brightgreen?style=flat-square)]()

</div>

---

## 📋 Índice

- [Objetivo do Projeto](#-objetivo-do-projeto)
- [Seções](#-seções)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Estrutura de Pastas](#-estrutura-de-pastas)
- [Como Executar](#-como-executar)
- [O que Foi Aprendido](#-o-que-foi-aprendido)
- [Autor](#-autor)

---

## 🎯 Objetivo do Projeto

Criar uma presença online profissional capaz de apresentar minha trajetória, habilidades e projetos de forma visualmente impactante para recrutadores e potenciais clientes.

O portfólio foi construído do zero, sem frameworks ou bibliotecas externas, com o objetivo de demonstrar domínio real de HTML5, CSS3 e JavaScript puro — as bases da web — além de boas práticas de organização de código e atenção a detalhes de UX.

---

## 📄 Seções

| Seção | Descrição |
|-------|-----------|
| **Hero** | Apresentação com card de código animado mostrando a stack |
| **Sobre** | Resumo profissional com stats (anos de estudo, projetos, tecnologias) |
| **Habilidades** | Grade de tecnologias com barras de progresso animadas |
| **Projetos** | Cards dos principais projetos com tags de tecnologia |
| **Formação** | Timeline da trajetória de 2020 até o ADS |
| **Contato** | Links para e-mail, LinkedIn, GitHub e currículo |

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Finalidade |
|-----------|------------|
| **HTML5 semântico** | Estrutura com `header`, `nav`, `section`, `article`, `footer` |
| **CSS3** | Estilização completa: variáveis, grid, animações, `@keyframes` |
| **CSS Custom Properties** | Sistema de design com tokens de cor e espaçamento |
| **JavaScript vanilla** | Cursor customizado, scroll reveal, stagger de animações |
| **IntersectionObserver API** | Ativação de animações conforme o scroll |
| **Google Fonts** | Tipografia: Syne (display) + DM Mono (código) |

> Nenhuma biblioteca externa foi utilizada — zero dependências, zero `node_modules`.

---

## 📁 Estrutura de Pastas

```
portfolio/
│
├── index.html          # Estrutura e conteúdo (HTML semântico)
│
├── css/
│   └── style.css       # Todo o visual (variáveis, layout, animações)
│
└── js/
    └── main.js         # Interações (cursor, scroll reveal, stagger)
```

O CSS está organizado em 16 seções comentadas e o JS em 3 módulos documentados, facilitando manutenção e futuras expansões.

---

## 🚀 Como Executar

Por ser um projeto puramente front-end, não há instalação ou build necessários.

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/portfolio.git

# 2. Abra o arquivo no navegador
cd portfolio
# Abra o index.html diretamente no browser
# ou use a extensão Live Server no VS Code
```

> Compatível com todos os navegadores modernos (Chrome, Firefox, Edge, Safari).

---

## 📚 O que Foi Aprendido

### CSS sem atalhos
Construir todo o visual sem framework nenhum — grids, animações, gradientes, pseudo-elementos, `backdrop-filter`, `mix-blend-mode` — aprofundou muito o entendimento de como o CSS realmente funciona por baixo dos panos.

### CSS Custom Properties como design system
Centralizar todas as cores, raios e espaçamentos em variáveis no `:root` tornou o projeto muito mais fácil de ajustar. Mudar a paleta inteira virou uma questão de alterar poucos valores.

### IntersectionObserver na prática
Substituir o antigo `scroll event` pelo `IntersectionObserver` foi um aprendizado importante: além de ser mais performático, o código ficou mais limpo e declarativo — o elemento "sabe" quando entrar na tela, sem polling constante.

### Problemas reais de layout com CSS Grid
O overflow no hero — onde o título sobrepunha o card de código — ensinou na prática o comportamento de `min-width: 0` em colunas de grid, um dos problemas mais clássicos e menos documentados de CSS Grid.

### Organização de projeto front-end
Separar HTML, CSS e JS em arquivos bem comentados e com estrutura clara mostrou que organização não é detalhe — é o que permite que o projeto escale e que qualquer pessoa (ou você mesmo no futuro) entenda o código rapidamente.

---

## 👤 Autor

**Douglas** — Desenvolvedor Full Stack | Cursando ADS

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://linkedin.com/in/seu-perfil)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/seu-usuario)

---

<div align="center">
  <sub>Feito com HTML, CSS, JS e muita atenção aos detalhes ✨</sub>
</div>
