// src/components/LanguageWarningBanner/index.js

import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import clsx from 'clsx';
import LanguageDetailsModal from '../LanguageDetailsModal'; // <-- Nowy import

const LanguageWarningBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isClosing, setIsClosing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // <-- Nowa linia

  useEffect(() => {
    const bannerClosed = localStorage.getItem('languageWarningBannerClosed');
    if (bannerClosed === 'true') {
      setIsVisible(false);
    }
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
      localStorage.setItem('languageWarningBannerClosed', 'true');
    }, 400);
  };
  
  // Funkcje do otwierania i zamykania modala
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  if (!isVisible) {
    return null;
  }

  return (
    <>
      <div
        className={clsx(styles.languageWarningBanner, {
          [styles.closing]: isClosing,
        })}
      >
        <div className={styles.warningContent}>
          <p>
            This site is available only in Polish.
          </p>
          <button
            className={styles.moreInfoButton}
            onClick={handleOpenModal}
          >
            Find out more by clicking here:
          </button>
        </div>
        <button
          className={styles.closeBannerButton}
          onClick={handleClose}
          aria-label="Close language warning"
        >
          &times;
        </button>
      </div>

      <LanguageDetailsModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
};

export default LanguageWarningBanner;