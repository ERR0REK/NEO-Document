// src/components/LanguageWarningBanner/index.js

import React from 'react';
import styles from './styles.module.css';
import clsx from 'clsx'; // Importujemy clsx dla lepszego zarządzania klasami CSS

const LanguageWarningBanner = () => {
  return (
    <div className={clsx(styles.languageWarningBanner)}>
      <p>This site is available only in Polish.</p>
    </div>
  );
};

export default LanguageWarningBanner;