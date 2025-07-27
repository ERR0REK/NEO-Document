// src/components/LanguageWarningBanner/index.js

import React, { useState, useEffect } from 'react'; // Dodajemy useState i useEffect
import styles from './styles.module.css';
import clsx from 'clsx';

const LanguageWarningBanner = () => {
  // Stan do kontrolowania widoczności banera
  const [isVisible, setIsVisible] = useState(true);
  // Stan do kontrolowania animacji zamykania
  const [isClosing, setIsClosing] = useState(false);

  // Efekt uruchamiany raz po załadowaniu komponentu
  useEffect(() => {
    // Sprawdzamy, czy użytkownik zamknął baner podczas poprzedniej sesji
    const bannerClosed = localStorage.getItem('languageWarningBannerClosed');
    if (bannerClosed === 'true') { // Używamy 'true' jako string, bo localStorage przechowuje stringi
      setIsVisible(false); // Jeśli tak, ukrywamy baner
    }
  }, []); // Pusta tablica zależności oznacza, że efekt uruchomi się tylko raz

  // Funkcja do obsługi zamykania banera
  const handleClose = () => {
    setIsClosing(true); // Ustawiamy stan na 'zamykanie', aby aktywować animację
    // Po krótkim opóźnieniu (czas trwania animacji zamykania)
    setTimeout(() => {
      setIsVisible(false); // Ukrywamy baner całkowicie
      // Zapisujemy w pamięci lokalnej przeglądarki, że baner został zamknięty
      localStorage.setItem('languageWarningBannerClosed', 'true');
    }, 400); // Ten czas (w ms) powinien odpowiadać czasowi trwania animacji 'closing' w CSS
  };

  // Jeśli baner nie jest widoczny, nie renderujemy nic
  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={clsx(styles.languageWarningBanner, {
        [styles.closing]: isClosing, // Dodajemy klasę 'closing' tylko gdy baner się zamyka
      })}
    >
      <p>
        This site is available only in Polish.
        {/* Możesz tutaj dodać bardziej szczegółowe informacje, np. o selektorze języka */}
      </p>
      {/* Przycisk do zamykania banera */}
      <button
        className={styles.closeBannerButton}
        onClick={handleClose}
        aria-label="Close language warning" // Ważne dla dostępności
      >
        &times; {/* Symbol "X" */}
      </button>
    </div>
  );
};

export default LanguageWarningBanner;