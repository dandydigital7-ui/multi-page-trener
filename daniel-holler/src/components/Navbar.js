'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import styles from './Navbar.module.css'

const links = [
  { href: '/', label: 'Domů' },
  { href: '/o-mne', label: 'O mně' },
  { href: '/sluzby', label: 'Služby' },
  { href: '/jak-to-funguje', label: 'Spolupráce' },
  { href: '/reference', label: 'Reference' },
  { href: '/kontakt', label: 'Kontakt' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoMark}>DH</span>
          <span className={styles.logoText}>Daniel Holler</span>
        </Link>

        <ul className={styles.links}>
          {links.map(l => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`${styles.link} ${pathname === l.href ? styles.active : ''}`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link href="/kontakt" className={styles.cta}>
          Konzultace zdarma
        </Link>

        <button
          className={styles.burger}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span className={open ? styles.lineOpen1 : ''}></span>
          <span className={open ? styles.lineOpen2 : ''}></span>
          <span className={open ? styles.lineOpen3 : ''}></span>
        </button>
      </div>

      <div className={`${styles.mobile} ${open ? styles.mobileOpen : ''}`}>
        {links.map(l => (
          <Link
            key={l.href}
            href={l.href}
            className={`${styles.mobileLink} ${pathname === l.href ? styles.mobileActive : ''}`}
            onClick={() => setOpen(false)}
          >
            {l.label}
          </Link>
        ))}
        <Link href="/kontakt" className={styles.mobileCta} onClick={() => setOpen(false)}>
          Konzultace zdarma →
        </Link>
      </div>
    </nav>
  )
}
