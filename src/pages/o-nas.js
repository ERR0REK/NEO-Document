import React from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './o-nas.module.css';

const DIVISIONS = [
  {
    title: 'N.E.O. HQ (Kwatera Główna)',
    desc:
      'Główne centrum operacyjne odpowiedzialne za prowadzenie działań w grach MadCity, LockedUp oraz Weaponry. To tutaj zarządzamy strukturą i dbamy o najwyższy standard gry.'
  },
  {
    title: 'Frakcja — War Tycoon',
    desc: 'Oficjalna frakcja zintegrowana z naszą organizacją. Skupiamy się na budowaniu potęgi militarnej, dominacji na serwerach i ścisłej współpracy taktycznej.',
  },
  {
    title: 'Gildia — Minecraft',
    desc: 'Plany dotyczące stworzenia oficjalnej gildii są w toku. Czekamy na wybór odpowiedniego serwera i ustalenie zasad działania.',
  }
];

const LEADERS = [
  {
    role: 'Główny Właściciel',
    nick: 'ERR0R_Gl1tchTV',
    img: '/img/pfp-owner.png',
    desc:
      'Założyciel i główny strateg N.E.O. Weteran "Sztucznej Elity" (2020-2022). Odpowiada za wizję organizacji, najważniejsze sojusze oraz pilnowanie, by Kodeks nigdy nie stał się tylko martwym zapisem.'
  },
  {
    role: 'Współwłaściciel / Koordynator',
    nick: 'Tiuulgu1',
    img: '/img/pfp-partner.png',
    desc:
      'Prawa ręka dowództwa. Odpowiada za codzienne życie organizacji, organizację wypadów w Weaponry i Mad City oraz dbanie o to, by każdy członek czuł się częścią zgranej ekipy.'
  }
];

export default function AboutPage() {
  return (
    <Layout title="O nas" description="O nas - Nowa Elitarna Organizacja">
      <main className={clsx('container', styles.container)}>

        <header className={styles.hero} aria-labelledby="about-heading">
          <div className={styles.heroContent}>
            <h1 id="about-heading" className={styles.title}>O nas</h1>
            <div className={styles.titleLine} aria-hidden></div>
            <p className={styles.subtitle}>
              N.E.O. (Nowa Elitarna Organizacja) to społeczność doświadczonych graczy,
              dowódców i strategów utrzymujemy dyscyplinę, strukturę i wysoką jakość działań
              w grach, w których działamy.
            </p>
            <p className={styles.ctaNote}>
              Strona dokumentacji zawiera Kodeks, Logi operacyjne oraz zasady bezpieczeństwa.
            </p>
          </div>
          <div className={styles.heroVisual} aria-hidden>
            <div className={styles.badge}>N.E.O.</div>
          </div>
        </header>

        <section className={styles.section} aria-labelledby="divisions-heading">
          <h2 id="divisions-heading">Podział organizacji</h2>
          <p className={styles.sectionDesc}>
            Jednostki N.E.O. mają wyspecjalizowane role i współpracują w sieci dowodzenia.
          </p>

          <div className={styles.divisionGrid}>
            {DIVISIONS.map((d) => (
              <article key={d.title} className={styles.divisionCard}>
                <h3>
                  {d.title} {d.wip ? <span className={styles.wip}>WIP</span> : null}
                </h3>
                <p>{d.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section} aria-labelledby="board-heading">
          <h2 id="board-heading">Zarząd i kluczowi członkowie</h2>
          <p className={styles.sectionDesc}>
            Osoby odpowiedzialne za rozwój, koordynację i utrzymanie porządku w organizacji.
          </p>

          <div className={styles.leadershipGrid}>
            {LEADERS.map((m) => (
              <div key={m.nick} className={styles.memberCard} role="listitem">
                <img src={m.img} alt={m.role} className={styles.pfp} />
                <h3>{m.role}</h3>
                <p className={styles.nick}>{m.nick}</p>
                <div className={styles.divider} aria-hidden></div>
                <p>{m.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <footer className={styles.footerNote}>
          <p>„Brak aktywności = zbędne ogniwo. A N.E.O. nie ciągnie martwego balastu.”</p>
          <span>// Kodeks N.E.O.</span>
        </footer>

      </main>
    </Layout>
  );
}
