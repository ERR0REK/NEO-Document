import React, { useState, useEffect, useCallback } from 'react';
import clsx from 'clsx';
import styles from '../LanguageDetailsModal/styles.module.css';
import useFocusTrap from '../../hooks/useFocusTrap';

const LanguageDetailsModal = ({ isOpen, onClose }) => {
  const [shouldRender, setShouldRender] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      document.body.style.overflow = 'hidden';
    } else {
      const timeoutId = setTimeout(() => {
        setShouldRender(false);
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

  return (
    <div
      className={clsx(styles.modalOverlay, isOpen && styles.open)}
      onClick={onClose}
      role="presentation"
    >
      <div
        ref={containerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Informacje o języku i dostępności strony"
        className={clsx(styles.modalContent, !isOpen && styles.closing)}
        onClick={e => e.stopPropagation()}
      >
        <button className={styles.closeButton} onClick={onClose} aria-label="Close">
          &times;
        </button>
        
        {/* WERSJA ANGIELSKA */}
        <div className={styles.languageSection}>
            <h3>Additional Information: N.E.O.</h3>
            <p>
              The New Elite Organization was created to unite the Polish-speaking gaming community. Our goal is not global expansion, but rather to build a strong and cohesive group within Roblox. 
            </p>
            <p>
              All our resources, protocols, and operational procedures are adapted to the specific needs of the Polish community, which allows for effective and organized collaboration. 
            </p>
            <p>
              Therefore, all communication, documentation, and the recruitment process are conducted exclusively in Polish, which is a fundamental requirement for membership.
            </p>
        </div>

        <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <button className={styles.okButton} onClick={onClose}>
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageDetailsModal;