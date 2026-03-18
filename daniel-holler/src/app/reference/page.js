import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export const metadata = {
  title: 'Reference',
  description: 'Skutečné příběhy klientů Daniela Hollera — osobního trenéra v Max Fitness Dejvice, Praha 6.',
}

export default function Reference() {
  return (
    <>
      <section className={styles.header}>
        <div className={styles.headerInner}>
          <div>
            <span className="section-label animate-fadeUp">Co říkají klienti</span>
            <h1 className={`${styles.pageTitle} animate-fadeUp animate-fadeUp-delay-1`}>
              REFER<em className="serif-heading" style={{ fontSize: 'inherit' }}>en</em>CE
            </h1>
          </div>
          <p className={`${styles.headerDesc} animate-fadeUp animate-fadeUp-delay-2`}>
            Skutečné příběhy — ne jen fotky před a po. 
            Důraz na techniku, zdraví a udržitelnost.
          </p>
        </div>
        <div className={styles.headerLine}></div>
      </section>

      {/* FEATURED TESTIMONIALS */}
      <section className={styles.testimonials}>
        <div className="container">
          <div className={styles.testimonialGrid}>
            {testimonials.map((t, i) => (
              <div key={i} className={`${styles.testimonialCard} ${i === 0 ? styles.featured : ''}`}>
                <div className={styles.quoteIcon}>"</div>
                <p className={styles.quoteText}>{t.quote}</p>
                <div className={styles.quoteAuthor}>
                  <div className={styles.authorInitials}>{t.name[0]}</div>
                  <div>
                    <strong className={styles.authorName}>{t.name}</strong>
                    <span className={styles.authorMeta}>{t.age} · {t.goal}</span>
                  </div>
                </div>
                {t.result && (
                  <div className={styles.resultTag}>{t.result}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS SECTION */}
      <section className={styles.results}>
        <div className="container">
          <div className={styles.resultsHeader}>
            <span className="gold-line"></span>
            <span className="section-label">Výsledky</span>
            <h2 className={styles.resultsTitle}>
              Co trénink<br />
              <em className="serif-heading">skutečně přináší.</em>
            </h2>
          </div>
          <div className={styles.resultsGrid}>
            {results.map((r, i) => (
              <div key={i} className={styles.resultCard}>
                <span className={styles.resultNum}>{r.num}</span>
                <h3 className={styles.resultLabel}>{r.label}</h3>
                <p className={styles.resultDesc}>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className={styles.gallery}>
        <div className="container">
          <span className="section-label">Galerie tréninků</span>
          <h2 className={styles.galleryTitle}>Jak <em className="serif-heading">trénujeme</em></h2>
          <div className={styles.galleryGrid}>
            <div className={styles.galleryItem}>
              <Image
                src="https://osobni-trener-web.vercel.app/images/foto-3.png"
                alt="Trénink v posilovně"
                width={600}
                height={450}
                className={styles.galleryImg}
              />
              <div className={styles.galleryCaption}>Max Fitness Dejvice</div>
            </div>
            <div className={styles.galleryItem}>
              <Image
                src="https://osobni-trener-web.vercel.app/images/foto-4.png"
                alt="Trénink – technika"
                width={600}
                height={450}
                className={styles.galleryImg}
              />
              <div className={styles.galleryCaption}>Technika a provedení</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaInner}>
            <div>
              <span className="section-label">Váš příběh</span>
              <h2 className={styles.ctaTitle}>
                Staňte se<br />
                <em className="serif-heading">dalším</em> úspěchem.
              </h2>
            </div>
            <div className={styles.ctaRight}>
              <p className={styles.ctaDesc}>
                Každý z těchto klientů začal prvním krokem — 
                nezávaznou konzultací. Uddělejte ho i vy.
              </p>
              <Link href="/kontakt" className="btn-primary">
                Konzultace zdarma →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

const testimonials = [
  {
    quote: 'Oceňuji důraz na techniku. Díky gymnastické průpravě mě Dan naučil vnímat svaly správně a přestal jsem mít bolesti zad po tréninku. Po třech měsících jsem přidal 20 kg na dřepu.',
    name: 'Marek',
    age: '32 let',
    goal: 'Silový trénink',
    result: '+20 kg na dřepu za 3 měsíce',
  },
  {
    quote: 'Shodila jsem 8 kilo a cítím se mnohem silnější. Daniel mě dokáže motivovat i v těžké dny a nikdy nepříchází s nesmyslnými dietami.',
    name: 'Lucie',
    age: '28 let',
    goal: 'Hubnutí',
    result: '–8 kg trvale',
  },
  {
    quote: 'Bolesti zad ze sezení zmizely. Moje fyzička je teď lepší než ve dvaceti. Doporučuji každému, kdo pracuje v kanceláři.',
    name: 'Petr',
    age: '45 let',
    goal: 'Zdravá záda',
    result: 'Bez bolestí zad',
  },
  {
    quote: 'Začal jsem úplně od nuly po šestileté pauze. Daniel byl trpělivý, postupoval jsme bezpečně a já nikdy neměl pocit, že zaostávám.',
    name: 'Ondřej',
    age: '38 let',
    goal: 'Návrat po pauze',
    result: 'Bezpečný restart tréninku',
  },
]

const results = [
  {
    num: '8 kg',
    label: 'Průměrný úbytek tuku',
    desc: 'U klientů zaměřených na hubnutí při dodržení plánu.',
  },
  {
    num: '20+',
    label: 'Spokojených klientů',
    desc: 'S reálnými a dlouhodobě udržitelnými výsledky.',
  },
  {
    num: '100%',
    label: 'Individuální přístup',
    desc: 'Žádné šablony — každý plán je na míru.',
  },
]
