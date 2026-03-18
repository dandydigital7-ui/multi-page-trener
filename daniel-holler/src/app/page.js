import Link from 'next/link'
import Image from 'next/image'
import styles from './page.module.css'

export const metadata = {
  title: 'Daniel Holler | Osobní trenér Praha 6',
  description: 'Certifikovaný osobní trenér v Max Fitness Dejvice. Individuální tréninky, transformace postavy. Úvodní konzultace zdarma.',
}

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroGrid}>
          <div className={styles.heroContent}>
            <p className={`section-label animate-fadeUp`}>
              Osobní trenér · Max Fitness Dejvice · Praha 6
            </p>
            <h1 className={`${styles.heroTitle} animate-fadeUp animate-fadeUp-delay-1`}>
              <span className={styles.titleLine1}>ZMĚŇTE</span>
              <span className={`${styles.titleLine2} serif-heading`}>svou</span>
              <span className={styles.titleLine3}>POSTAVU</span>
            </h1>
            <p className={`${styles.heroDesc} animate-fadeUp animate-fadeUp-delay-2`}>
              Efektivní trénink pod vedením profesionála. Individuální přístup, 
              správná technika a výsledky, které vydrží.
            </p>
            <div className={`${styles.heroCtas} animate-fadeUp animate-fadeUp-delay-3`}>
              <Link href="/kontakt" className="btn-primary">
                Konzultace zdarma →
              </Link>
              <Link href="/o-mne" className="btn-outline">
                Poznat trenéra
              </Link>
            </div>
            <div className={`${styles.heroStats} animate-fadeUp animate-fadeUp-delay-4`}>
              <div className={styles.stat}>
                <span className={styles.statNum}>20+</span>
                <span className={styles.statLabel}>let sportovní praxe</span>
              </div>
              <div className={styles.statDivider}></div>
              <div className={styles.stat}>
                <span className={styles.statNum}>6</span>
                <span className={styles.statLabel}>druhů tréninkových programů</span>
              </div>
              <div className={styles.statDivider}></div>
              <div className={styles.stat}>
                <span className={styles.statNum}>P6</span>
                <span className={styles.statLabel}>Praha · Dejvice</span>
              </div>
            </div>
          </div>

          <div className={`${styles.heroImage} animate-fadeUp animate-fadeUp-delay-2`}>
            <div className={styles.imageFrame}>
              <Image
                src="https://osobni-trener-web.vercel.app/images/foto-1.png"
                alt="Daniel Holler – osobní trenér"
                width={560}
                height={700}
                className={styles.img}
                priority
              />
              <div className={styles.imageBadge}>
                <span className={styles.badgeDot}></span>
                Kapacita otevřená
              </div>
            </div>
            <div className={styles.imageAccent}></div>
          </div>
        </div>

        <div className={styles.heroScroll}>
          <span>Scroll</span>
          <div className={styles.scrollLine}></div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className={styles.marqueeWrap}>
        <div className={styles.marquee}>
          {['Síla', 'Technika', 'Progres', 'Mobilita', 'Kondice', 'Výsledky', 'Transformace', 'Praha 6'].map((word, i) => (
            <span key={i} className={styles.marqueeItem}>
              {word} <span className={styles.marqueeDot}>·</span>
            </span>
          ))}
          {['Síla', 'Technika', 'Progres', 'Mobilita', 'Kondice', 'Výsledky', 'Transformace', 'Praha 6'].map((word, i) => (
            <span key={`b-${i}`} className={styles.marqueeItem} aria-hidden>
              {word} <span className={styles.marqueeDot}>·</span>
            </span>
          ))}
        </div>
      </div>

      {/* INTRO */}
      <section className={styles.intro}>
        <div className="container">
          <div className={styles.introGrid}>
            <div className={styles.introLeft}>
              <span className="gold-line"></span>
              <span className="section-label">Přístup</span>
              <h2 className={styles.introTitle}>
                Trenér, který staví<br />
                na <em className="serif-heading">technice</em> a progresu.
              </h2>
            </div>
            <div className={styles.introRight}>
              <p className={styles.introText}>
                Každý klient je pro mě individuální projekt. Trénuji v Max Fitness Dejvice 
                a přizpůsobuji každý plán kondici, zkušenostem a časovým možnostem klienta.
              </p>
              <p className={styles.introText}>
                Věřím v kvalitní techniku, progresivní přetížení a rovnováhu mezi tréninkem 
                a regenerací — ne v rychlé zkratky.
              </p>
              <Link href="/o-mne" className={styles.introLink}>
                Více o mně →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className={styles.services}>
        <div className="container">
          <div className={styles.sectionHead}>
            <span className="section-label">Služby</span>
            <h2 className={styles.sectionTitle}>Co pro vás<br /><em className="serif-heading">vybudujeme</em></h2>
            <Link href="/sluzby" className={styles.seeAll}>Všechny služby →</Link>
          </div>

          <div className={styles.servicesGrid}>
            {services.map((s, i) => (
              <Link href="/sluzby" key={i} className={styles.serviceCard}>
                <span className={styles.serviceNum}>0{i + 1}</span>
                <span className={styles.serviceIcon}>{s.icon}</span>
                <h3 className={styles.serviceTitle}>{s.title}</h3>
                <p className={styles.serviceDesc}>{s.desc}</p>
                <span className={styles.serviceArrow}>→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className={styles.ctaBanner}>
        <div className="container">
          <div className={styles.ctaInner}>
            <div>
              <p className="section-label">Začněte dnes</p>
              <h2 className={styles.ctaTitle}>
                Úvodní konzultace<br />
                <em className="serif-heading">je zdarma.</em>
              </h2>
            </div>
            <div className={styles.ctaActions}>
              <p className={styles.ctaNote}>
                Probereme vaše cíle a nastavíme realistický plán, 
                jak se k nim dostat.
              </p>
              <Link href="/kontakt" className="btn-primary">
                Napsat Danielovi →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

const services = [
  {
    icon: '1:1',
    title: 'Osobní trénink',
    desc: 'Individuální vedení s korekcí techniky a jasným plánem pro každý trénink.',
  },
  {
    icon: 'Δ',
    title: 'Transformace postavy',
    desc: 'Kompletní změna od analýzy výchozího stavu po trvalé návyky.',
  },
  {
    icon: '–kg',
    title: 'Hubnutí a rýsování',
    desc: 'Udržitelný úbytek tuku bez extrémních diet a s důrazem na techniku.',
  },
  {
    icon: '+kg',
    title: 'Nabírání hmoty',
    desc: 'Systematický silový trénink s důrazem na progres a správnou techniku.',
  },
  {
    icon: '⚡',
    title: 'Kondiční trénink',
    desc: 'Zlepšení fyzičky pro sport i běžný život s kombinací různých metod.',
  },
  {
    icon: '↺',
    title: 'Návrat po pauze',
    desc: 'Bezpečný restart tréninku po delší pauze nebo zranění.',
  },
]
