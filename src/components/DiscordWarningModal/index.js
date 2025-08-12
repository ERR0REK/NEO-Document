// src/components/DiscordWarningModal/index.js

import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

// Komponent DiscordWarningModal przyjmuje 'isOpen' i 'onClose' jako propsy.
// 'onClose' będzie wywoływane z wartością boolean:
// - true: jeśli użytkownik kliknie "Rozumiem" (czyli akceptuje przekierowanie)
// - false: jeśli użytkownik kliknie "X" lub "Anuluj" (czyli rezygnuje z przekierowania)
const DiscordWarningModal = ({ isOpen, onClose }) => {
  // shouldRender kontroluje, czy modal jest w drzewie DOM (dla animacji wyjścia)
  const [shouldRender, setShouldRender] = useState(isOpen);
  // isClosing kontroluje, czy modal aktualnie się zamyka (dla animacji)
  const [isClosing, setIsClosing] = useState(false);

  // Efekt do zarządzania stanem otwarcia/zamknięcia modala ostrzegawczego
  useEffect(() => {
    if (isOpen) {
      setShouldRender(true); // Jeśli modal ma być otwarty, renderuj go
      setIsClosing(false); // Upewnij się, że nie ma klasy zamykania
      // Opcjonalnie: Zablokuj scrollowanie tła, gdy modal jest otwarty
      document.body.style.overflow = 'hidden';
    } else {
      // Jeśli modal ma być zamknięty, rozpocznij animację zamykania
      setIsClosing(true);
      // Ustaw timeout na czas trwania animacji (zgodnie z CSS 0.4s) + mały bufor,
      // a następnie usuń modal z DOM
      const timeoutId = setTimeout(() => {
        setShouldRender(false);
        setIsClosing(false); // Zresetuj stan zamykania
        // Odblokuj scrollowanie tła po zamknięciu modala
        document.body.style.overflow = 'unset';
      }, 400); // Czas animacji 'scaleOut' w CSS to 0.4s, więc 400ms jest odpowiednie

      // Funkcja cleanup do clearTimeout, aby uniknąć wycieków pamięci
      return () => clearTimeout(timeoutId);
    }
  }, [isOpen]); // Ten efekt reaguje tylko na zmiany w propie 'isOpen'

  // Nie renderuj modala, jeśli nie powinien być w DOM (po zakończeniu animacji zamykania)
  if (!shouldRender) return null;

  return (
    // Overlay ostrzeżenia - kliknięcie zamyka modal (bez przekierowania)
    <div
      className={clsx(styles.warningOverlay, isClosing && styles.closing)}
      onClick={() => onClose(false)} // Kliknięcie na overlay -> zamknięcie (nie akceptuje)
    >
      {/* Kontener zawartości ostrzeżenia - zatrzymuje propagację kliknięcia */}
      {/* Dodajemy klasę 'closing' również tutaj, aby animacje na zawartości działały */}
      <div
        className={clsx(styles.warningContent, isClosing && styles.closing)}
        onClick={e => e.stopPropagation()} // Zatrzymuje zamykanie modala przy kliknięciu w jego zawartość
      >
        {/* Przycisk "X" zamyka modal (bez przekierowania) */}
        <button className={styles.closeButton} onClick={() => onClose(false)} aria-label="Zamknij">
          &times;
        </button>

        {/* Nagłówek z ikoną ostrzeżenia - używamy klasy warningIcon dla pseudo-elementu */}
        <h3 className={styles.warningHeading}>
          <span className={styles.warningIcon}></span> {/* Ten span zostanie zastąpiony przez h3::before */}
          Uwaga!
        </h3>

        <p>
          Właściciel N.E.O. może mieć wyłączone wiadomości prywatne (DM) od spoza wspólnych serwerów.
        </p>
        <p>
          Jeśli nie możesz wysłać wiadomości bezpośrednio, prosimy o dodanie go do znajomych na Discordzie.
          Po kliknięciu "Rozumiem i Akceptuję" pojawi się kolejne okno z instrukcjami.
        </p>

        {/* Kontener dla przycisków - używamy nowej klasy styles.buttonContainer */}
        <div className={styles.buttonContainer}>
          {/* Przycisk "Rozumiem" - zamyka modal ORAZ sygnalizuje akceptację (przekierowanie) */}
          <button className={styles.okButton} onClick={() => onClose(true)}>
            Rozumiem i Akceptuję
          </button>
          {/* Przycisk "Anuluj" - zamyka modal (bez przekierowania) */}
          <button className={styles.cancelButton} onClick={() => onClose(false)}>
            Anuluj
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiscordWarningModal;
