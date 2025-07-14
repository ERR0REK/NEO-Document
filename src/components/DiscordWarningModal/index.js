// src/components/DiscordWarningModal/index.js

import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

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
    } else {
      // Jeśli modal ma być zamknięty, rozpocznij animację zamykania
      setIsClosing(true);
      // Ustaw timeout na czas trwania animacji + mały bufor,
      // a następnie usuń modal z DOM
      const timeoutId = setTimeout(() => {
        setShouldRender(false);
        setIsClosing(false); // Zresetuj stan zamykania
      }, 350); // Czas animacji to 0.3s, więc 350ms to bezpieczny bufor

      // Funkcja cleanup do clearTimeout, aby uniknąć wycieków pamięci
      return () => clearTimeout(timeoutId);
    }
  }, [isOpen]); // Ten efekt reaguje tylko na zmiany w propie 'isOpen'

  // Nie renderuj modala, jeśli nie powinien być w DOM (po zakończeniu animacji zamykania)
  if (!shouldRender) return null;

  return (
    // Overlay ostrzeżenia - kliknięcie zamyka, ale bez przekierowania
    <div className={clsx(styles.warningOverlay, isClosing && styles.closing)} onClick={() => onClose(false)}>
      {/* Kontener zawartości ostrzeżenia - zatrzymuje propagację kliknięcia */}
      {/* Dodajemy klasę 'closing' również tutaj */}
      <div className={clsx(styles.warningContent, isClosing && styles.closing)} onClick={e => e.stopPropagation()}>
        {/* Kliknięcie "X" zamyka bez przekierowania */}
        <button className={styles.closeButton} onClick={() => onClose(false)}>
          &times;
        </button>
        <h3>Uwaga!</h3>
        <p>Właściciel N.E.O. może mieć wyłączone wiadomości prywatne (DM) od osób spoza znajomych.</p>
        <p>W takim przypadku, prosimy o dodanie go do znajomych na Discordzie, aby móc wysłać wiadomość.</p>
        {/* Kliknięcie "Rozumiem" zamyka ORAZ przekierowuje */}
        <button className={styles.okButton} onClick={() => onClose(true)}>
          Rozumiem
        </button>
      </div>
    </div>
  );
};

export default DiscordWarningModal;