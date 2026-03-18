import Link from 'next/link'
import styles from './page.module.css'

export const metadata = {
  title: 'Služby',
  description: 'Osobní tréninky, transformace postavy, hubnutí, nabírání svalové hmoty a kondiční trénink v Max Fitness Dejvice.',
}

export default function Sluzby() {
  return (
    <>
      <section className={styles.header}>
        <div className={styles.headerInner}>
          <div>
            <span className="section-label animate-fadeUp">Co nabízím</span>
            <h1 className={`${styles.pageTitle} animate-fadeUp animate-fadeUp-delay-1`}>
              SLUŽBY
            </h1>
          </div>
          <p className={`${styles.headerDesc} animate-fadeUp animate-fadeUp-delay-2`}>
            Každý program je postavený na míru — kondici, zkušenostem a cíli klienta. 
            Tréninky probíhají v Max Fitness Dejvice, Praha 6.
          </p>
        </div>
        <div className={styles.headerLine}></div>
      </section>

      <section className={styles.services}>
        <div className="container">
          {services.map((s, i) => (
            <div key={i} className={styles.serviceRow}>
              <div className={styles.serviceLeft}>
                <span className={styles.serviceNum}>0{i + 1}</span>
                <span className={styles.serviceIcon}>{s.icon}</span>
              </div>
              <div className={styles.serviceMain}>
                <h2 className={styles.serviceTitle}>{s.title}</h2>
                <p className={styles.serviceDesc}>{s.desc}</p>
                <ul className={styles.servicePoints}>
                  {s.points.map((p, j) => (
                    <li key={j} className={styles.servicePoint}>
                      <span className={styles.pointDot}>—</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.serviceRight}>
                <span className={styles.serviceFor}>Vhodné pro</span>
                <p className={styles.serviceForText}>{s.for}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING NOTE */}
      <section className={styles.pricing}>
        <div className="container">
          <div className={styles.pricingInner}>
            <div>
              <span className="section-label">Ceník</span>
              <h2 className={styles.pricingTitle}>
                Cena tréninků se<br />
                odvíjí od <em className="serif-heading">vašeho plánu.</em>
              </h2>
              <p className={styles.pricingDesc}>
                Konkrétní ceny probíráme na úvodní konzultaci zdarma, 
                kde nastavíme program přesně na vaše potřeby a frekvenci.
              </p>
            </div>
            <div className={styles.pricingCta}>
              <p className={styles.pricingNote}>
                Úvodní konzultace v Max Fitness Dejvice je <strong>vždy zdarma</strong> — 
                bez závazků.
              </p>
              <Link href="/kontakt" className="btn-primary">
                Domluvit konzultaci →
              </Link>
              <Link href="/jak-to-funguje" className="btn-outline">
                Jak spolupráce probíhá
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
    title: 'Osobní trénink (1 na 1)',
    desc: 'Individuální vedení v posilovně Max Fitness Dejvice. Detailní korekce techniky a jasný plán pro každý trénink.',
    points: [
      'Trénink přizpůsobený vašemu dni a energii',
      'Průběžné sledování techniky a korekce',
      'Pravidelná analýza pokroku',
      'Podpora mimo tréninky',
    ],
    for: 'Každý, kdo chce efektivní trénink s přímým vedením a korekcí.',
  },
  {
    icon: 'Δ',
    title: 'Transformace postavy',
    desc: 'Kompletní změna postavy – od analýzy výchozího stavu až po nastavování návyků, které vydrží i po skončení spolupráce.',
    points: [
      'Vstupní diagnostika a zhodnocení postavy',
      'Tréninkový plán s progresivní strukturou',
      'Základy výživy pro podporu cíle',
      'Pravidelné vyhodnocování a úpravy',
    ],
    for: 'Klienti s konkrétním cílem – estetika, zdraví nebo obojí.',
  },
  {
    icon: '–kg',
    title: 'Hubnutí a rýsování',
    desc: 'Udržitelný úbytek tuku bez extrémních diet. Důraz na techniku, tempo a vhodnou skladbu tréninku.',
    points: [
      'Kombinace silového a kondičního tréninku',
      'Bez extrémních zákazů a jojo efektu',
      'Práce s tělesným složením, ne jen s váhou',
      'Edukace o udržitelném přístupu',
    ],
    for: 'Klienti s nadváhou nebo cílem snížit tělesný tuk trvale.',
  },
  {
    icon: '+kg',
    title: 'Nabírání svalové hmoty',
    desc: 'Systematický silový trénink s důrazem na progres a správnou techniku základních i pokročilých cviků.',
    points: [
      'Periodizovaný silový trénink',
      'Práce na základních i doplňkových cvicích',
      'Progresivní přetížení jako základ',
      'Regenerace a mobilita jako součást programu',
    ],
    for: 'Začátečníci i pokročilí, kteří chtějí přibrat svalovou hmotu systematicky.',
  },
  {
    icon: '⚡',
    title: 'Kondiční trénink',
    desc: 'Zlepšení fyzičky pro sport i běžný život. Kombinace silových, intervalových a stabilizačních prvků.',
    points: [
      'Funkční pohybové vzory',
      'Intervalové a aerobní metody',
      'Stabilizace a mobilita',
      'Příprava pro konkrétní sport nebo aktivitu',
    ],
    for: 'Sportovci i rekreační cvičenci, kteří chtějí být fit a odolní.',
  },
  {
    icon: '↺',
    title: 'Návrat do formy po pauze',
    desc: 'Bezpečný restart tréninku po delší pauze, zranění nebo náročném období. Postupné navyšování zátěže.',
    points: [
      'Vstupní zhodnocení pohybového stavu',
      'Práce s omezeními a kompenzacemi',
      'Postupné budování základů',
      'Prevence opakování zranění',
    ],
    for: 'Klienti vracející se po pauze, mateřské dovolené nebo zranění.',
  },
]
