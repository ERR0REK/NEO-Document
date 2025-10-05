import React, { useState } from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './o-nas.module.css';

export default function AboutPage() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <Layout title="O nas" description="O nas - Nowa Elitarna Organizacja">
      <main className={clsx('container', styles.container)}>
        <h1>O nas</h1>
        <p>Strona "O nas" będzie dostępna wkrótce. Trwają prace nad przygotowaniem treści.</p>

        {isModalOpen && (
          <div className={styles.overlay} onClick={() => setIsModalOpen(false)}>
            <div className={styles.modal} onClick={e => e.stopPropagation()} role="dialog" aria-modal="true">
              <button className={styles.close} onClick={() => setIsModalOpen(false)} aria-label="Zamknij">&times;</button>
              <h2>Trwają prace</h2>
              <p>Pracujemy nad zawartością tej strony. Wróć później, aby zobaczyć szczegóły o N.E.O.</p>
              <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                <button className="button button--primary" onClick={() => setIsModalOpen(false)}>Rozumiem</button>
              </div>
            </div>
          </div>
        )}
      </main>
    </Layout>
  );
}
