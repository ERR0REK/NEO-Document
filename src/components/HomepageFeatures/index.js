import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: '📖 Czym jest N.E.O?',
    Image: require('@site/static/img/CzymJestNeo.png').default,
    description: 'N.E.O (Nowa Elitarna Organizacja) to społeczność powstała na fundamentach starej Elity z lat 2020–2022. Dowiedz się, czym jest i dlaczego powstała.',
    link: '/docs/category/wprowadzenie',
  },
  {
    title: '🏛️ Struktura i Kodeks',
    Image: require('@site/static/img/StrukturaIKodeks.png').default,
    description: 'Poznaj hierarchię N.E.O, właścicieli, zasady komunikacji i kodeks obowiązujący członków organizacji.',
    link: '/docs/category/struktura-i-hierarchia',
  },
  {
    title: '🤝 Sojusze i Wrogowie',
    Image: require('@site/static/img/Sojusze i wrogowie.png').default,
    description: 'Zacznij z kim współpracujemy, a kto aktualnie jest naszym wrogiem. Bądź na bieżąco z relacjami międzyklanowymi w Robloxie.',
    link: '/docs/category/sojusze-i-wrogowie',
  },
  {
    title: '⏳ Historia i Rozwój',
    Image: require('@site/static/img/HistoriaIRozwoj.png').default,
    description: 'Odkryj korzenie N.E.O. od jej powstania z Elity, przez kluczowe wydarzenia, aż po obecny kształt i plany na przyszłość.',
    link: '/docs/category/historia-organizacji',
  },
  {
    title: '🛡️ Rekrutacja i Członkostwo',
    Image: require('@site/static/img/RekrutacjaICzlonkowstwo.png').default,
    description: 'Dowiedz się, jak dołączyć do N.E.O. i jakie są wymagania stawiane naszym członkom. Twoja droga do Elity zaczyna się tutaj.',
    link: '/docs/FAQ/FAQ#-czy-mogę-dołączyć-do-neo',
  },
  {
    title: '❓ Pytania i Odpowiedzi (FAQ)',
    Image: require('@site/static/img/FAQ.png').default,
    description: 'Znajdź odpowiedzi na najczęściej zadawane pytania dotyczące N.E.O., jej zasad, działań i przyszłości.',
    link: '/docs/category/faq',
  },
];

function Feature({ Image, title, description, link }) {
  return (
    <div className={clsx('col col--4', styles.featureCard)}>
      <div className="text--center">
        <img src={Image} className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h2">{title}</Heading>
        <p>{description}</p>
        <Link
          className={clsx('button button--primary', styles.featureButton)}
          to={link}>
          Dowiedz się więcej
        </Link>
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