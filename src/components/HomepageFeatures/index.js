import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: '📖 Czym jest N.E.O?',
    Image: require('@site/static/img/CzymJestNeo.png').default,
    description: 'Dowiedz się, dlaczego zdecydowaliśmy się na reaktywację legendarnej Elity i co tak naprawdę chcemy razem osiągnąć w świecie Robloxa.',
    link: '/docs/category/wprowadzenie',
  },
  {
    title: '🏛️ Struktura i Kodeks',
    Image: require('@site/static/img/StrukturaIKodeks.png').default,
    description: 'U nas nie ma miejsca na chaos. Sprawdź, jak działamy, jakie zasady nas łączą i kto odpowiada za prowadzenie N.E.O.',
    link: '/docs/category/struktura-i-hierarchia',
  },
  {
    title: '⚔️ Sojusze i Wrogowie',
    Image: require('@site/static/img/Sojusze i wrogowie.png').default,
    description: 'Bądź na bieżąco z sytuacją na serwerach. Zobacz z kim trzymamy sztamę, a kto zdecydował się stanąć po drugiej stronie barykady.',
    link: '/docs/category/sojusze-i-wrogowie',
  },
  {
    title: '⏳ Historia i Rozwój',
    Image: require('@site/static/img/HistoriaIRozwoj.png').default,
    description: 'Nasze korzenie sięgają 2020 roku. Zobacz, jak ewoluowaliśmy od grupy znajomych z Mad City do zorganizowanej organizacji N.E.O.',
    link: '/docs/category/historia-organizacji',
  },
  {
    title: '🛡️ Rekrutacja i Członkostwo',
    Image: require('@site/static/img/RekrutacjaICzlonkowstwo.png').default,
    description: 'Chcesz dołączyć do elitarnego grona? Sprawdź nasze wymagania i dowiedz się, jak przejść pomyślnie proces weryfikacji.',
    link: '/docs/FAQ/FAQ#-czy-mogę-dołączyć-do-neo',
  },
  {
    title: '❓ Pytania i Odpowiedzi (FAQ)',
    Image: require('@site/static/img/FAQ.png').default,
    description: 'Masz wątpliwości? Zebraliśmy tutaj odpowiedzi na najczęstsze pytania, które mogą Cię nurtować przed dołączeniem do N.E.O.',
    link: '/docs/category/faq',
  },
];

function Feature({ Image, title, description, link }) {
  return (
    <div className="col col--4 margin-bottom--lg">
      <div className={styles.featureCard}>
        <div className={styles.featureImageWrapper}>
          <img loading="lazy" decoding="async" src={Image} className={styles.featureSvg} alt={title} />
        </div>
        <div className={styles.featureContent}>
          <Heading as="h2" className={styles.featureTitle}>{title}</Heading>
          <p className={styles.featureDescription}>{description}</p>
        </div>
        <div className={styles.featureButtonWrapper}>
          <Link
            className={clsx('button button--primary', styles.featureButton)}
            to={link}>
            Dowiedz się więcej
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}