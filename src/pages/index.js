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
import DiscordVerificationModal from '../components/DiscordVerificationModal'; // <-- NOWY IMPORT: Modal weryfikacji Discorda

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const [isRecruitmentModalOpen, setIsRecruitmentModalOpen] = useState(false); // Stan do kontrolowania widoczności głównego modala rekrutacji
  const [isDiscordVerificationModalOpen, setIsDiscordVerificationModalOpen] = useState(false); // <-- NOWY STAN: Kontrola widoczności modala weryfikacji Discorda

  // Dane Discorda właściciela (do przekazania do modali)
  const ownerDiscordUsername = "polonia.errorglitchtv"; // Twój nick Discord
  const ownerDiscordId = "687701665771814939"; // Twój Discord ID (np. 123456789012345678)

  // Link do dokumentacji "Dawna Elita"
  const dawnaElitaDocUrl = "/docs/dawna-elita/dawni-czlonkowie"; // <-- UPEWNIJ SIĘ, ŻE TO POPRAWNA ŚCIEŻKA W Docusaurus

  // Funkcja otwierająca główny modal rekrutacji
  const handleOpenRecruitmentModal = () => {
    setIsRecruitmentModalOpen(true);
  };

  // Funkcja zamykająca główny modal rekrutacji
  const handleCloseRecruitmentModal = () => {
    setIsRecruitmentModalOpen(false);
  };

  // <-- NOWA FUNKCJA: Wywoływana, gdy użytkownik zaakceptuje warunki w DiscordWarningModal
  // i chce przejść do weryfikacji Discorda.
  const handleDiscordAcceptAndVerify = () => {
    setIsRecruitmentModalOpen(false); // Zamknij główny modal rekrutacji
    setIsDiscordVerificationModalOpen(true); // Otwórz modal weryfikacji Discorda
  };

  // <-- NOWA FUNKCJA: Zamyka modal weryfikacji Discorda
  const handleCloseDiscordVerificationModal = () => {
    setIsDiscordVerificationModalOpen(false);
  };

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        {/* TUTAJ UMIESZCZAMY KOMPONENT BANNERA OSTRZEGAWCZEGO O JĘZYKU */}
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
            to="/docs/category/kodeks-neo"
          >
            📜 Kodeks N.E.O.
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/Wojenne%20Logi/wojenne-logi"
          >
            📊 Wojenne Logi {/* Zmieniono emotkę zgodnie z sugestią */}
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/category/struktura-i-hierarchia"
          >
            📊 Struktura i Hierarchia
          </Link>

          {/* Przycisk, który otwiera główny modal rekrutacji */}
          <button
            className="button button--primary button--lg"
            onClick={handleOpenRecruitmentModal}
          >
            🤝 Rekrutacja do N.E.O.
          </button>
        </div>
      </div>

      {/* Renderowanie głównego modala rekrutacji */}
      <RecruitmentModal
        isOpen={isRecruitmentModalOpen}
        onClose={handleCloseRecruitmentModal}
        discordUsername={ownerDiscordUsername}
        discordId={ownerDiscordId}
        dawnaElitaDocUrl={dawnaElitaDocUrl} // <-- NOWY PROP: Link do Dawnej Elity
        onDiscordAccept={handleDiscordAcceptAndVerify} // <-- NOWY PROP: Funkcja do wywołania po akceptacji DiscordWarningModal
      />

      {/* <-- NOWY KOMPONENT: Renderowanie modala weryfikacji Discorda */}
      <DiscordVerificationModal
        isOpen={isDiscordVerificationModalOpen}
        onClose={handleCloseDiscordVerificationModal}
        discordUsername={ownerDiscordUsername}
        discordId={ownerDiscordId}
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
