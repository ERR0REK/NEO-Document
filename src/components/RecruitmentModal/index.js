// src/components/RecruitmentModal/index.js

import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
// Importujemy DiscordWarningModal, który będzie wywoływany z tego modala
import DiscordWarningModal from '../DiscordWarningModal'; 

// Nowy prop: dawnaElitaDocUrl
const RecruitmentModal = ({ isOpen, onClose, discordUsername, discordId, dawnaElitaDocUrl, onDiscordAccept }) => {
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [isClosing, setIsClosing] = useState(false);
  const [isWarningModalOpen, setIsWarningModalOpen] = useState(false);

  // Efekt do zarządzania stanem otwarcia/zamknięcia głównego modala
  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setIsClosing(false);
      document.body.style.overflow = 'hidden'; // Zablokuj scrollowanie tła
    } else {
      setIsClosing(true);
      const timeoutId = setTimeout(() => {
        setShouldRender(false);
        setIsClosing(false);
        document.body.style.overflow = 'unset'; // Odblokuj scrollowanie tła
      }, 350); // Czas trwania animacji zamykania
      return () => clearTimeout(timeoutId);
    }
  }, [isOpen]);

  // Nie renderuj modala, jeśli nie powinien być w DOM
  if (!shouldRender) return null;

  // Funkcja obsługująca kliknięcie w link Discorda (z głównego modala rekrutacji)
  const handleDiscordLinkClick = (e) => {
    e.preventDefault(); // Zapobiega domyślnej akcji linku
    setIsWarningModalOpen(true); // Otwiera modal z ostrzeżeniem
  };

  // Funkcja obsługująca zamknięcie modala ostrzegawczego
  // Teraz przyjmuje argument `accepted`, który mówi, czy kliknięto "Rozumiem i Akceptuję"
  const handleWarningModalClose = (accepted) => {
    setIsWarningModalOpen(false); // Zamyka modal ostrzegawczy
    if (accepted && onDiscordAccept) {
        // Jeśli użytkownik zaakceptował i przekazano funkcję, wywołaj ją
        // Ta funkcja (onDiscordAccept) będzie odpowiedzialna za otwarcie nowego modala weryfikacyjnego
        onDiscordAccept(); 
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
        <button className={styles.closeButton} onClick={onClose} aria-label="Zamknij">
          &times;
        </button>

        <h3>Jak dołączyć do N.E.O.?</h3>
        <p>Proces rekrutacji do Nowej Elitarnej Organizacji jest ściśle powiązany z naszym dziedzictwem. Aby dołączyć do N.E.O., musisz spełnić jeden z poniższych warunków:</p>
        <ul>
          <li>
            Być członkiem dawnej Elity lub posiadać znajomości w jej kręgach.
            {/* Dodajemy link do dokumentacji "Dawnej Elity" */}
            {dawnaElitaDocUrl && (
              <a href={dawnaElitaDocUrl} target="_blank" rel="noopener noreferrer" className={styles.dawnaElitaLink}>
                (Zobacz listę dawnych członków)
              </a>
            )}
          </li>
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
          Po skontaktowaniu się, rozpocznie się proces weryfikacji Twojej tożsamości i kwalifikacji do Elity.
        </p>
      </div>

      {/* Modal ostrzegawczy jest renderowany tutaj */}
      <DiscordWarningModal
        isOpen={isWarningModalOpen}
        onClose={handleWarningModalClose} // Przekazujemy funkcję, która podejmuje decyzję o dalszym kroku
      />
    </div>
  );
};

export default RecruitmentModal;
