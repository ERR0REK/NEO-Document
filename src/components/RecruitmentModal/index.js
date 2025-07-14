// src/components/RecruitmentModal/index.js

import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import DiscordWarningModal from '../DiscordWarningModal'; // Importujemy nowy komponent ostrzegawczy

const RecruitmentModal = ({ isOpen, onClose, discordUsername, discordId }) => {
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [isClosing, setIsClosing] = useState(false);
  const [isWarningModalOpen, setIsWarningModalOpen] = useState(false);

  // Efekt do zarządzania stanem otwarcia/zamknięcia głównego modala
  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setIsClosing(false);
    } else {
      setIsClosing(true);
      const timeoutId = setTimeout(() => {
        setShouldRender(false);
        setIsClosing(false);
      }, 350);
      return () => clearTimeout(timeoutId);
    }
  }, [isOpen]);

  if (!shouldRender) return null;

  // Funkcja obsługująca kliknięcie w link Discorda (z głównego modala rekrutacji)
  const handleDiscordLinkClick = (e) => {
    e.preventDefault(); // Zapobiega domyślnej akcji linku
    setIsWarningModalOpen(true); // Otwiera modal z ostrzeżeniem
  };

  // ZMIENIONA FUNKCJA obsługująca zamknięcie modala ostrzegawczego
  // Teraz przyjmuje argument `shouldRedirect`, który mówi, czy kliknięto "Rozumiem"
  const handleWarningModalClose = (shouldRedirect = false) => { // Domyślnie false
    setIsWarningModalOpen(false); // Zamyka modal ostrzegawczy
    if (shouldRedirect) {
      // Tylko jeśli `shouldRedirect` jest true (czyli kliknięto "Rozumiem"), otwórz link
      window.open(`https://discord.com/users/${discordId}`, '_blank');
    }
  };

  return (
    <div
      className={clsx(styles.modalOverlay, isOpen && styles.open, isClosing && styles.closing)}
      onClick={onClose}
    >
      <div
        className={clsx(styles.modalContent, isClosing && styles.closing)}
        onClick={e => e.stopPropagation()}
      >
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>

        <h3>Jak dołączyć do N.E.O.?</h3>
        <p>Proces rekrutacji do Nowej Elitarnej Organizacji jest ściśle powiązany z naszym dziedzictwem. Aby dołączyć do N.E.O., musisz spełnić jeden z poniższych warunków:</p>
        <ul>
          <li>Być członkiem dawnej Elity lub posiadać znajomości w jej kręgach.</li>
          <li>Mieć znajomego, który był lub jest w Elicie, który może Cię polecić.</li>
        </ul>
        <p>
          Jeśli spełniasz jedno z powyższych kryteriów i chcesz dołączyć do N.E.O., skontaktuj się z:
        </p>
        <p className={styles.discordContact}>
          <strong>{discordUsername}</strong>
          <br />
          <a
            href={`https://discord.com/users/${discordId}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleDiscordLinkClick} // Nadal otwiera modal ostrzegawczy
          >
            <img src="/img/discord-icon.png" alt="Discord Icon" className={styles.discordIcon} />
            Wyślij wiadomość na Discordzie
          </a>
        </p>
        <p className={styles.modalFooter}>
          Po skontaktowaniu się, otrzymasz formularz rekrutacyjny i rozpoczniesz proces.
        </p>
      </div>

      {/* Modal ostrzegawczy */}
      <DiscordWarningModal
        isOpen={isWarningModalOpen}
        // TERAZ PRZEKAZUJEMY FUNKCJĘ, KTÓRA PODEJMUJE DECYZJĘ O PRZEKIEROWANIU
        onClose={handleWarningModalClose}
      />
    </div>
  );
};

export default RecruitmentModal;