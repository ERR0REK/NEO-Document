import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css'; // Potwierdzone, że to jest Twój plik CSS dla tego komponentu

const FeatureList = [
  {
    title: '📖 Czym jest N.E.O?',
    Image: require('@site/static/img/CzymJestNeo.png').default,
    description: (
      <>
        N.E.O (Nowa Elitarna Organizacja) to społeczność powstała na fundamentach starej Elity z lat 2020–2022. Dowiedz się, czym jest i dlaczego powstała.
      </>
    ),
  },
  {
    title: '🏛️ Struktura i Kodeks',
    Image: require('@site/static/img/StrukturaIKodeks.png').default,
    description: (
      <>
        Poznaj hierarchię N.E.O, właścicieli, zasady komunikacji i kodeks obowiązujący członków organizacji.
      </>
    ),
  },
  {
    title: '🤝 Sojusze i Wrogowie',
    Image: require('@site/static/img/Sojusze i wrogowie.png').default, // Zauważyłem spacje w nazwie pliku, upewnij się, że są poprawnie obsługiwane
    description: (
      <>
        Zacznij z kim współpracujemy, a kto aktualnie jest naszym wrogiem. Bądź na bieżąco z relacjami międzyklanowymi w Robloxie.
      </>
    ),
  },
  // --- TUTAJ DODAJESZ NOWE KARTY ---
  {
    title: '⏳ Historia i Rozwój', // Nowa karta
    Image: require('@site/static/img/HistoriaIRozwoj.png').default, // Potrzebujesz pliku PNG np. HistoriaIRozwoj.png
    description: (
      <>
        Odkryj korzenie N.E.O. od jej powstania z Elity, przez kluczowe wydarzenia, aż po obecny kształt i plany na przyszłość.
      </>
    ),
  },
  {
    title: '🛡️ Rekrutacja i Członkostwo', // Kolejna nowa karta
    Image: require('@site/static/img/RekrutacjaICzlonkowstwo.png').default, // Potrzebujesz pliku PNG
    description: (
      <>
        Dowiedz się, jak dołączyć do N.E.O. i jakie są wymagania stawiane naszym członkom. Twoja droga do Elity zaczyna się tutaj.
      </>
    ),
  },
  {
    title: '❓ Pytania i Odpowiedzi (FAQ)', // I jeszcze jedna
    Image: require('@site/static/img/FAQ.png').default, // Potrzebujesz pliku PNG
    description: (
      <>
        Znajdź odpowiedzi na najczęściej zadawane pytania dotyczące N.E.O., jej zasad, działań i przyszłości.
      </>
    ),
  },
  // --- KONIEC NOWYCH KART ---
];

function Feature({Image, title, description}) { // Usunięto 'Svg' z propsów, bo nie jest już używane bezpośrednio
  return (
    <div className={clsx('col col--4')}> {/* col--4 oznacza 3 kolumny w rzędzie */}
      <div className="text--center">
        {/* Zawsze renderuj img, ponieważ używasz tylko Image */}
        <img src={Image} className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
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