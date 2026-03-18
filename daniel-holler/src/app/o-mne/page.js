import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export const metadata = {
  title: 'O mně',
  description: 'Certifikovaný instruktor fitness s více než 20 lety sportovní praxe – fotbal, gymnastika, fitness.',
}

export default function OMne() {
  return (
    <>
      {/* PAGE HEADER */}
      <section className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.headerContent}>
            <span className="section-label animate-fadeUp">Osobní trenér</span>
            <h1 className={`${styles.pageTitle} animate-fadeUp animate-fadeUp-delay-1`}>
              <span>O</span>
              <em className={`${styles.serifWord} serif-heading`}>mně</em>
            </h1>
          </div>
          <p className={`${styles.headerDesc} animate-fadeUp animate-fadeUp-delay-2`}>
            Certifikovaný instruktor fitness. Přes 20 let sportovní praxe 
            v oblasti fotbalu, gymnastiky a fitness.
          </p>
        </div>
        <div className={styles.headerLine}></div>
      </section>

      {/* BIO SECTION */}
      <section className={styles.bio}>
        <div className="container">
          <div className={styles.bioGrid}>
            <div className={styles.bioImageWrap}>
              <div className={styles.bioImage}>
                <Image
                  src="https://osobni-trener-web.vercel.app/images/foto-2.png"
                  alt="Daniel Holler"
                  width={520}
                  height={640}
                  className={styles.bioImg}
                />
              </div>
              <div className={styles.bioCard}>
                <p className={styles.bioCardLabel}>Certifikace</p>
                <p className={styles.bioCardValue}>Instruktor fitness</p>
                <div className={styles.bioCardDivider}></div>
                <p className={styles.bioCardLabel}>Lokace</p>
                <p className={styles.bioCardValue}>Max Fitness Dejvice, Praha 6</p>
              </div>
            </div>

            <div className={styles.bioContent}>
              <span className="gold-line"></span>
              <span className="section-label">Daniel Holler</span>
              <h2 className={styles.bioTitle}>
                Trenér, který věří<br />
                v <em className="serif-heading">dlouhodobé</em> výsledky.
              </h2>
              <div className={styles.bioTexts}>
                <p>
                  Jmenuji se Daniel Holler a pomáhám lidem objevovat jejich potenciál — 
                  ať už jde o první krok k pohybu, nebo posunutí výkonnosti na další úroveň.
                </p>
                <p>
                  Věřím v kvalitní techniku, progresivní přetížení a rovnováhu mezi tréninkem 
                  a regenerací. Cílem není jen „odcvičit" hodinu, ale naučit vás cvičit tak, 
                  aby vás to bavilo, dávalo smysl vašemu zdraví a výsledky byly udržitelné.
                </p>
                <p>
                  Každý klient je pro mě individuální projekt — přizpůsobuji plán kondici, 
                  zkušenostem, časovým možnostem i zdravotním omezením.
                </p>
              </div>
              <Link href="/kontakt" className="btn-primary" style={{ marginTop: '1rem', display: 'inline-flex' }}>
                Konzultace zdarma →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE TIMELINE */}
      <section className={styles.experience}>
        <div className="container">
          <div className={styles.expHeader}>
            <span className="gold-line"></span>
            <span className="section-label">Sportovní kariéra</span>
            <h2 className={styles.expTitle}>
              20+ let <em className="serif-heading">na hřišti</em>,<br />v tělocvičně i v posilovně.
            </h2>
          </div>

          <div className={styles.timeline}>
            {timeline.map((item, i) => (
              <div key={i} className={styles.timelineItem}>
                <div className={styles.timelineDuration}>{item.duration}</div>
                <div className={styles.timelineLine}>
                  <div className={styles.timelineDot}></div>
                  {i < timeline.length - 1 && <div className={styles.timelineConnector}></div>}
                </div>
                <div className={styles.timelineContent}>
                  <h3 className={styles.timelineSport}>{item.sport}</h3>
                  <p className={styles.timelineDesc}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className={styles.values}>
        <div className="container">
          <span className="section-label">Přístup k tréninku</span>
          <h2 className={styles.valuesTitle}>
            Co mě <em className="serif-heading">odlišuje</em>
          </h2>
          <div className={styles.valuesGrid}>
            {values.map((v, i) => (
              <div key={i} className={styles.valueCard}>
                <div className={styles.valueNum}>0{i + 1}</div>
                <h3 className={styles.valueTitle}>{v.title}</h3>
                <p className={styles.valueDesc}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className={styles.gallery}>
        <div className="container">
          <span className="section-label">Galerie</span>
          <h2 className={styles.galleryTitle}>Trénink v <em className="serif-heading">praxi</em></h2>
          <div className={styles.galleryGrid}>
            <div className={styles.galleryMain}>
              <Image
                src="https://osobni-trener-web.vercel.app/images/foto-3.png"
                alt="Trénink"
                width={700}
                height={500}
                className={styles.galleryImg}
              />
            </div>
            <div className={styles.gallerySide}>
              <Image
                src="https://osobni-trener-web.vercel.app/images/foto-4.png"
                alt="Trénink"
                width={400}
                height={300}
                className={styles.galleryImg}
              />
              <div className={styles.galleryQuote}>
                <span className={styles.galleryQuoteMark}>"</span>
                <p>Nesázím na univerzální šablony. Každý plán vychází z vaší reality.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

const timeline = [
  {
    duration: '10 let',
    sport: 'Fotbal',
    desc: 'Práce s rychlostí, obratností a kondicí. Rozvoj týmové dynamiky, taktického myšlení a fyzické odolnosti.',
  },
  {
    duration: '5 let',
    sport: 'Gymnastika',
    desc: 'Vnímání těla, koordinace a technika pohybu. Základ pro pochopení kinestetiky a kontroly pohybových vzorů.',
  },
  {
    duration: '6+ let',
    sport: 'Fitness',
    desc: 'Síla, estetika postavy a zdravé návyky v posilovně. Certifikace a práce s klienty různých úrovní.',
  },
]

const values = [
  {
    title: 'Multidisciplinární přístup',
    desc: 'Kombinuji prvky silového tréninku, mobility, gymnastiky i funkčního pohybu. Tělo musí být nejen silné, ale i odolné a mobilní.',
  },
  {
    title: 'Individuální strategie',
    desc: 'Plán přizpůsobuji kondici, zkušenostem, zdravotním omezením i tomu, kolik času můžete tréninku věnovat.',
  },
  {
    title: 'Certifikovaná odbornost',
    desc: 'Desítky klientů s reálnými změnami — postavy, výkonnosti i zdraví zad — díky důrazu na techniku a konzistenci.',
  },
  {
    title: 'Bezpečný progres',
    desc: 'Nikdy neriskuji zdraví klienta pro rychlé výsledky. Postupné navyšování zátěže chrání před zraněním.',
  },
]
