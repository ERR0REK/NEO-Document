// src/components/DiscordVerificationModal/index.js

import React, { useState, useEffect, useCallback } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css'; // Zmieniono ścieżkę na './styles.module.css' dla spójności
import useFocusTrap from '../../hooks/useFocusTrap';

const DiscordVerificationModal = ({ isOpen, onClose, discordUsername, discordId }) => {
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setIsClosing(false);
      document.body.style.overflow = 'hidden';
    } else {
      setIsClosing(true);
      const timeoutId = setTimeout(() => {
        setShouldRender(false);
        setIsClosing(false);
        document.body.style.overflow = 'unset';
      }, 350);
      return () => clearTimeout(timeoutId);
    }
  }, [isOpen]);

  // Obsługa ESC (hooki muszą być wywoływane zawsze, przed wczesnym return)
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') onClose();
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) return;
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleKeyDown]);

  const containerRef = useFocusTrap(isOpen);

  if (!shouldRender) return null;

  const handleOpenDiscordProfile = () => {
    window.open(`https://discord.com/users/${discordId}`, '_blank');
    // Możesz zamknąć modal po kliknięciu, jeśli chcesz
    // onClose();
  };

  // Link do RoSeal Roblox
  const robloxFriendInviteLink = "https://www.roseal.live/friend-invite?code=e42f6e7713fca2409d2ea2ddeff28e74";

  return (
    <div
      className={clsx(styles.modalOverlay, isOpen && styles.open, isClosing && styles.closing)}
      onClick={onClose}
      role="presentation"
    >
      <div
        ref={containerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Weryfikacja rekrutacji"
        className={clsx(styles.modalContent, isClosing && styles.closing)}
        onClick={e => e.stopPropagation()}
      >
        <button className={styles.closeButton} onClick={onClose} aria-label="Zamknij">
          &times;
        </button>

        <h3>Weryfikacja Rekrutacji</h3> {/* Zmieniony tytuł */}
        <p className={styles.introText}>
          Aby kontynuować proces rekrutacji do Elity, musisz najpierw nawiązać bezpośredni kontakt.
          <strong>Kliknij poniżej, aby otworzyć profil Discord właściciela i wyślij zaproszenie do znajomych.</strong>
          <br />
          W pierwszej wiadomości prywatnej <strong>przedstaw się, podając swój DAWNY NICK Z ROBLOXA</strong>.
          Jest to kluczowe do Twojej identyfikacji.
        </p>

        <p className={styles.instructionSeparator}>
          Po weryfikacji tożsamości przez właściciela, przygotuj odpowiedzi na poniższe pytania.
          Będą one wymagane do pełnej autoryzacji.
        </p>

        <div className={styles.questionSection}>
            <h4>1. Czy byłeś(-aś) członkiem Elity w latach 2020–2022?</h4>
            <p className={styles.answerPrompt}>(Odpowiedź: Tak / Nie)</p>
        </div>

        <div className={styles.questionSection}>
            <h4>2. Do której z gier chcesz należeć?</h4>
            <p className={styles.smallText}>(Możesz zaznaczyć kilka albo wszystkie)</p>
            <ul className={styles.gameList}>
                <li>War Tycoon</li>
                <li>LockedUp</li>
                <li>Weaponry</li>
                <li>MadCity: Chapter 1</li>
                <li>MadCity: Chapter 2</li>
            </ul>
        </div>

        <div className={styles.questionSection}>
            <h4>3. Czy chcesz zostać członkiem Elity?</h4>
            <p className={styles.smallText}>(Odpowiedź: Tak → trafiasz na listę jako Nowy albo Stary członek (zależnie od pytania 1))</p>
            <p className={styles.smallText}>(Odpowiedź: Nie → nie trafiasz do Elity, ale możesz być sojusznikiem)</p>
        </div>

        <div className={styles.questionSection}>
            <h4>4. Jaki jest Twój realny nick na Robloxie?</h4>
            <p className={styles.smallText}>(Chodzi o nazwę konta, np. <strong>@Piesel724</strong> — nie wyświetlaną nazwę)</p>
        </div>

        <p className={styles.contactInstruction}>
          Gdy Twoja tożsamość zostanie zweryfikowana, wyślij gotowe odpowiedzi na powyższe 4 pytania w wiadomości prywatnej do właściciela.
        </p>

        <div className={styles.contactButtons}> {/* Nowy kontener dla przycisków kontaktowych */}
            <a
              href={`https://discord.com/users/${discordId}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.discordButton}
              onClick={handleOpenDiscordProfile}
            >
              <img loading="lazy" src="/img/discord-icon.png" alt="Discord Icon" className={styles.discordIcon} />
              Otwórz profil Discord
            </a>
            {/* NOWY LINK ROBLOX */}
            <a
              href={robloxFriendInviteLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.robloxButton} // Nowa klasa do stylizacji
            >
              <img loading="lazy" src="/img/roblox.png" alt="Roblox Icon" className={styles.robloxIcon} /> {/* Będziesz potrzebować ikony Roblox */}
              Dodaj do znajomych (Roblox)
            </a>
        </div>
      </div>
    </div>
  );
};

export default DiscordVerificationModal;
