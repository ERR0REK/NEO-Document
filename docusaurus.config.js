// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'N.E.O. - Dokumentacja',
  tagline: 'Nowa Elitarna Organizacja - Kompletna Dokumentacja',
  favicon: 'img/NEO.png',

  url: 'https://neo-dokumentacja.netlify.app/',
  baseUrl: '/',

  organizationName: 'ERR0REK',
  projectName: 'NEO-Document',
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'pl',
    locales: ['pl'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Upewnij się, że ta ścieżka do Twojego repozytorium jest poprawna
          editUrl:
            'https://github.com/ERR0REK/NEO-Document/tree/main/',
        },
        // WAŻNE: To jest jedyna sekcja 'blog' w presets/classic.
        // Konfiguruje ona bloga dla Twojego Changeloga.
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  // Ważne: NIE MA TUTAJ SEKCJI 'plugins' dla drugiego bloga,
  // ponieważ 'Wojenne Logi' są w 'docs' i są kategorią dokumentacji.

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'N.E.O.',
        logo: {
          alt: 'Logo N.E.O.',
          src: 'img/NEO.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Dokumentacja',
          },
          {
            href: 'https://github.com/ERR0REK/NEO-Document',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Dokumentacja',
            items: [
              {
                label: 'Wprowadzenie',
                to: '/docs/category/wprowadzenie',
              },
              {
                label: 'Wojenne Logi',
                to: '/docs/category/wojenne-logi', // Link do strony indeksowej kategorii
              },
            ],
          },
          {
            title: 'Społeczność',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/your-discord-invite', // Upewnij się, że to Twój link!
              },
            ],
          },
          {
            title: 'Więcej',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/ERR0REK/NEO-Document',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Nowa Elitarna Organizacja. Zbudowano z Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      // TUTAJ DODAJ KONFIGURACJĘ ALGOLIA DOCSEARCH
      algolia: {
        // Te wartości otrzymasz od Algolia po akceptacji zgłoszenia DocSearch
        appId: '6EXZ8BISZ9', // Zastąp tym, co dostaniesz od Algolia
        apiKey: '4ae3f0fb775185d45e72fba5bf608a05', // Zastąp tym, co dostaniesz od Algolia (to jest klucz publiczny do wyszukiwania)
        indexName: 'neo_documentation', // Zastąp tym, co dostaniesz od Algolia

        // Opcjonalne:
        contextualSearch: true, // Wyszukuje tylko w bieżącej wersji dokumentacji
        debug: false, // Ustaw na true, aby debugować problemy z wyszukiwaniem
      },
    }),
};

export default config;