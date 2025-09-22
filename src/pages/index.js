import React, { useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import RecruitmentModal from '../components/RecruitmentModal';
import LanguageWarningBanner from '../components/LanguageWarningBanner';
import DiscordVerificationModal from '../components/DiscordVerificationModal';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const [isRecruitmentModalOpen, setIsRecruitmentModalOpen] = useState(false);
  const [isDiscordVerificationModalOpen, setIsDiscordVerificationModalOpen] = useState(false);

  // Dane Discorda właściciela (do przekazania do modali)
  const ownerDiscordUsername = "polonia.errorglitchtv";
  const ownerDiscordId = "687701665771814939";

  // Link do dokumentacji "Dawna Elita"
  const dawnaElitaDocUrl = "/docs/dawna-elita/dawni-czlonkowie";

  // Funkcja otwierająca główny modal rekrutacji
  const handleOpenRecruitmentModal = () => {
    setIsRecruitmentModalOpen(true);
  };

  // Funkcja zamykająca główny modal rekrutacji
  const handleCloseRecruitmentModal = () => {
    setIsRecruitmentModalOpen(false);
  };

  const handleDiscordAcceptAndVerify = () => {
    setIsRecruitmentModalOpen(false);
    setIsDiscordVerificationModalOpen(true);
  };

  const handleCloseDiscordVerificationModal = () => {
    setIsDiscordVerificationModalOpen(false);
  };

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
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
            📊 Wojenne Logi
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/category/struktura-i-hierarchia"
          >
            📊 Struktura i Hierarchia
          </Link>

          {/* NOWE PRZYCISKI W JEDNEJ LINII */}
          <Link
            className="button button--secondary button--lg"
            to="/docs/category/sojusze-i-wrogowie"
          >
            Sojusze i Wrogowie ⚔️
          </Link>
          <button
            className="button button--primary button--lg"
            onClick={handleOpenRecruitmentModal}
          >
            🤝 Rekrutacja do N.E.O.
          </button>
        </div>
      </div>

      <RecruitmentModal
        isOpen={isRecruitmentModalOpen}
        onClose={handleCloseRecruitmentModal}
        discordUsername={ownerDiscordUsername}
        discordId={ownerDiscordId}
        dawnaElitaDocUrl={dawnaElitaDocUrl}
        onDiscordAccept={handleDiscordAcceptAndVerify}
      />

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