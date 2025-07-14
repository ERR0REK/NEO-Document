// src/pages/index.js

import React, { useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';
import RecruitmentModal from '../components/RecruitmentModal'; // Importuj komponent modala rekrutacji
import LanguageWarningBanner from '../components/LanguageWarningBanner'; // Importuj komponent bannera ostrzegawczego o języku

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const [isModalOpen, setIsModalOpen] = useState(false); // Stan do kontrolowania widoczności modala rekrutacji

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        {/* TUTAJ UMIESZCZAMY KOMPONENT BANNERA OSTRZEGAWCZEGO O JĘZYKU */}
        {/* Będzie renderowany bezpośrednio w kontenerze nagłówka, nad głównym tytułem */}
        <LanguageWarningBanner />

        <Heading as="h1" className="hero__title">
          N.E.O. – Nowa Elitarna Organizacja
        </Heading>
        <p className="hero__subtitle">
          Oficjalna dokumentacja społeczności graczy Roblox – kontynuacja dziedzictwa legendarnej Elity z lat 2020–2022.
        </p>
        <p className={clsx(styles.heroSubtitle, styles.slogan)}>
          Honor. Dyscyplina. Braterstwo.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/Wprowadzenie/Czym%20jest%20NEO"
          >
            📘 Dowiedz się, czym jest N.E.O.
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/category/kodeks-neo" // Sprawdź dokładny URL w przeglądarce
          >
            📜 Kodeks N.E.O.
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/Wojenne%20Logi/wojenne-logi" // Sprawdź dokładny URL w przeglądarce
          >
            ⚔️ Wojenne Logi
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/category/struktura-i-hierarchia" // Sprawdź dokładny URL
          >
            📊 Struktura i Hierarchia
          </Link>

          {/* Przycisk, który otwiera modal rekrutacji */}
          <button
            className="button button--primary button--lg"
            onClick={() => setIsModalOpen(true)}
          >
            🤝 Rekrutacja do N.E.O.
          </button>
        </div>
      </div>

      {/* Renderowanie komponentu modala rekrutacji */}
      <RecruitmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)} // Funkcja do zamykania modala
        discordUsername="polonia.errorglitchtv" // Twój nick Discord (bez tagu, jeśli masz nowy system)
        discordId="687701665771814939" // Wstaw swój rzeczywisty ID użytkownika Discord
      />
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="N.E.O – Nowa Elitarna Organizacja"
      description="Dokumentacja N.E.O – Nowej Elitarnej Organizacji Roblox. Zasady, struktura, historia i obecna działalność.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}