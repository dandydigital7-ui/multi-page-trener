import Link from 'next/link'
import styles from './page.module.css'

export const metadata = {
  title: 'Jak to funguje',
  description: 'Jasná struktura spolupráce od prvního kontaktu po dlouhodobé výsledky.',
}

export default function JakToFunguje() {
  return (
    <>
      <section className={styles.header}>
        <div className={styles.headerInner}>
          <div>
            <span className="section-label animate-fadeUp">Průběh spolupráce</span>
            <h1 className={`${styles.pageTitle} animate-fadeUp animate-fadeUp-delay-1`}>
              <span>JAK TO</span>
              <em className="serif-heading" style={{ fontSize: 'clamp(3rem, 8vw, 7rem)', display: 'block', marginTop: '0.1em' }}>funguje</em>
            </h1>
          </div>
          <p className={`${styles.headerDesc} animate-fadeUp animate-fadeUp-delay-2`}>
            Chci, abyste přesně věděli, co vás čeká. Jasná struktura 
            od prvního kontaktu po výsledky.
          </p>
        </div>
        <div className={styles.headerLine}></div>
      </section>

      {/* STEPS */}
      <section className={styles.steps}>
        <div className="container">
          {steps.map((step, i) => (
            <div key={i} className={styles.step}>
              <div className={styles.stepNumber}>
                <span className={styles.stepNum}>{String(i + 1).padStart(2, '0')}</span>
                {i < steps.length - 1 && <div className={styles.stepConnector}></div>}
              </div>
              <div className={styles.stepContent}>
                <span className={styles.stepTag}>{step.tag}</span>
                <h2 className={styles.stepTitle}>{step.title}</h2>
                <p className={styles.stepDesc}>{step.desc}</p>
                <ul className={styles.stepDetails}>
                  {step.details.map((d, j) => (
                    <li key={j} className={styles.stepDetail}>
                      <span className={styles.detailMark}>—</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.stepMeta}>
                <span className={styles.stepMetaLabel}>Kde</span>
                <span className={styles.stepMetaValue}>{step.where}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY SECTION */}
      <section className={styles.why}>
        <div className="container">
          <div className={styles.whyGrid}>
            <div className={styles.whyLeft}>
              <span className="gold-line"></span>
              <span className="section-label">Proč si vybrat mě</span>
              <h2 className={styles.whyTitle}>
                Multidisciplinární<br />
                <em className="serif-heading">přístup</em>, který funguje.
              </h2>
            </div>
            <div className={styles.whyRight}>
              <p className={styles.whyText}>
                Nesázím na univerzální šablony. Každý plán vychází z vaší reality – 
                fyzické, časové i psychické. Propojuji sílu, mobilitu a zdraví do jednoho 
                systematického přístupu.
              </p>
              <div className={styles.whyFeatures}>
                {features.map((f, i) => (
                  <div key={i} className={styles.whyFeature}>
                    <span className={styles.featureCheck}>✓</span>
                    <div>
                      <strong>{f.title}</strong>
                      <p>{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className={styles.location}>
        <div className="container">
          <div className={styles.locationGrid}>
            <div>
              <span className="section-label">Lokalita</span>
              <h2 className={styles.locationTitle}>
                Max Fitness<br />
                <em className="serif-heading">Dejvice</em>
              </h2>
              <p className={styles.locationDesc}>
                Tréninky probíhají v moderně vybaveném fitness centru v Praze 6. 
                Skvělá dostupnost MHD — pár minut chůze od metra Dejvická.
              </p>
              <div className={styles.locationPoints}>
                <span>Moderní stroje a činky</span>
                <span>Prostor pro funkční trénink</span>
                <span>Výborná dostupnost MHD</span>
                <span>Parkování v okolí</span>
              </div>
            </div>
            <div className={styles.locationBox}>
              <div className={styles.locationAddress}>
                <span className={styles.locationIcon}>📍</span>
                <div>
                  <strong>Max Fitness Dejvice</strong>
                  <p>Praha 6 · Dejvice</p>
                  <p>Metro Dejvická · pěšky 5 min</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaInner}>
            <h2 className={styles.ctaTitle}>
              Připraveni začít?<br />
              <em className="serif-heading">Napište mi.</em>
            </h2>
            <div className={styles.ctaActions}>
              <Link href="/kontakt" className="btn-primary">
                Konzultace zdarma →
              </Link>
              <Link href="/reference" className="btn-outline">
                Přečíst reference
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

const steps = [
  {
    tag: 'Krok 1',
    title: 'První kontakt',
    desc: 'Vyplníte kontaktní formulář a stručně popíšete svůj cíl. Ozvu se vám do 24 hodin a domluvíme si termín.',
    details: [
      'Žádný závazek ani poplatek',
      'Krátký popis vašeho cíle',
      'Domluvení termínu v Max Fitness Dejvice',
    ],
    where: 'Online / Telefon',
  },
  {
    tag: 'Krok 2',
    title: 'Konzultace a diagnostika',
    desc: 'Probereme váš zdravotní stav, dosavadní zkušenosti s pohybem a očekávání. Zhodnotíme držení těla a pohybové vzory.',
    details: [
      'Analýza zdravotního stavu a omezení',
      'Zhodnocení pohybových vzorů',
      'Definování realistických cílů',
    ],
    where: 'Max Fitness Dejvice · Zdarma',
  },
  {
    tag: 'Krok 3',
    title: 'Tréninkový plán na míru',
    desc: 'Připravím pro vás strukturovaný tréninkový plán, který respektuje vaše možnosti, čas, regeneraci i omezení.',
    details: [
      'Plán přizpůsobený frekvenci tréninků',
      'Jasná progrese a milníky',
      'Případná doporučení pro výživu',
    ],
    where: 'Připravím předem',
  },
  {
    tag: 'Krok 4',
    title: 'Pravidelné tréninky',
    desc: 'Společně trénujeme, průběžně vyhodnocujeme pokrok a upravujeme plán tak, aby vás posouval dál a bavil.',
    details: [
      'Vedení a korekce techniky na každém tréninku',
      'Pravidelné vyhodnocování pokroku',
      'Úpravy plánu dle aktuálního stavu',
    ],
    where: 'Max Fitness Dejvice',
  },
]

const features = [
  {
    title: 'Multidisciplinární přístup (síla + mobilita)',
    desc: 'Kombinuji prvky silového tréninku, mobility a funkčního pohybu.',
  },
  {
    title: 'Individuální strategie pro každého',
    desc: 'Plán přizpůsobuji kondici, zkušenostem a časovým možnostem.',
  },
  {
    title: 'Bezpečný a udržitelný progres',
    desc: 'Nikdy neriskuji zdraví klienta pro rychlé výsledky.',
  },
]
