import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.logoMark}>DH</div>
            <div>
              <p className={styles.name}>Daniel Holler</p>
              <p className={styles.sub}>Osobní trenér · Max Fitness Dejvice, Praha 6</p>
            </div>
          </div>

          <nav className={styles.nav}>
            <Link href="/">Domů</Link>
            <Link href="/o-mne">O mně</Link>
            <Link href="/sluzby">Služby</Link>
            <Link href="/jak-to-funguje">Spolupráce</Link>
            <Link href="/reference">Reference</Link>
            <Link href="/kontakt">Kontakt</Link>
          </nav>

          <div className={styles.contact}>
            <p className={styles.contactLabel}>Spojte se se mnou</p>
            <a
              href="https://www.instagram.com/danielholler_fitness"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ig}
            >
              Instagram @danielholler_fitness ↗
            </a>
            <Link href="/kontakt" className={styles.ctaFooter}>
              Úvodní konzultace zdarma →
            </Link>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} Daniel Holler · Všechna práva vyhrazena</p>
          <p className={styles.location}>Praha 6 · Dejvice</p>
        </div>
      </div>
    </footer>
  )
}
