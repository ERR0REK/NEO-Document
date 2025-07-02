import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Nowa Elitarna Organizacja
        </Heading>
        <p className="hero__subtitle">
          Dokumentacja społeczności Roblox powstałej z Elity 2020–2022. Historia, struktura, sojusze i zasady.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/Wprowadzenie/Czym jest NEO">
            Wejdź do "Czym jest N.E.O?" 📘
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="N.E.O – Dokumentacja"
      description="Dokumentacja N.E.O – Nowej Elitarnej Organizacji w Roblox. Dowiedz się o historii Elity, zasadach, strukturze i obecnych relacjach.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}


