'use client'
import { useState } from 'react'
import styles from './page.module.css'

export default function Kontakt() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    goal: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <section className={styles.header}>
        <div className={styles.headerInner}>
          <div>
            <span className="section-label animate-fadeUp">Napište mi</span>
            <h1 className={`${styles.pageTitle} animate-fadeUp animate-fadeUp-delay-1`}>
              KON<em className="serif-heading" style={{ fontSize: 'inherit' }}>takt</em>
            </h1>
          </div>
          <p className={`${styles.headerDesc} animate-fadeUp animate-fadeUp-delay-2`}>
            Vyplňte formulář a domluvíme si úvodní konzultaci zdarma.
            Ozvu se vám co nejdříve.
          </p>
        </div>
        <div className={styles.headerLine}></div>
      </section>

      <section className={styles.contactSection}>
        <div className="container">
          <div className={styles.contactGrid}>

            {/* LEFT – INFO */}
            <div className={styles.contactInfo}>
              <div className={styles.infoBlock}>
                <span className="section-label">Kde cvičíme</span>
                <h2 className={styles.infoTitle}>Max Fitness<br /><em className="serif-heading">Dejvice</em></h2>
                <p className={styles.infoDesc}>
                  Tréninky probíhají v moderně vybaveném fitness centru v Praze 6,
                  pár minut chůze od metra Dejvická.
                </p>
                <div className={styles.infoDetails}>
                  <div className={styles.infoRow}>
                    <span className={styles.infoLabel}>Adresa</span>
                    <span className={styles.infoValue}>Max Fitness Dejvice, Praha 6</span>
                  </div>
                  <div className={styles.infoRow}>
                    <span className={styles.infoLabel}>MHD</span>
                    <span className={styles.infoValue}>Metro Dejvická · 5 min chůze</span>
                  </div>
                  <div className={styles.infoRow}>
                    <span className={styles.infoLabel}>Instagram</span>
                    <a
                      href="https://www.instagram.com/danielholler_fitness"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.infoLink}
                    >
                      @danielholler_fitness ↗
                    </a>
                  </div>
                </div>
              </div>

              <div className={styles.consultBox}>
                <div className={styles.consultBadge}>Zdarma</div>
                <h3 className={styles.consultTitle}>Úvodní konzultace</h3>
                <p className={styles.consultDesc}>
                  Probereme vaše cíle, zdravotní stav a nastavíme realistický plán.
                  Bez závazků a bez poplatku.
                </p>
              </div>
            </div>

            {/* RIGHT – FORM */}
            <div className={styles.formWrap}>
              {submitted ? (
                <div className={styles.success}>
                  <span className={styles.successIcon}>✓</span>
                  <h2 className={styles.successTitle}>Odesláno!</h2>
                  <p className={styles.successDesc}>
                    Děkuji za zprávu. Ozvu se vám co nejdříve a domluvíme
                    termín úvodní konzultace.
                  </p>
                </div>
              ) : (
                <form className={styles.form} onSubmit={handleSubmit}>
                  <div className={styles.formRow}>
                    <div className={styles.field}>
                      <label className={styles.label}>Jméno *</label>
                      <input
                        type="text"
                        className={styles.input}
                        placeholder="Vaše jméno"
                        required
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className={styles.field}>
                      <label className={styles.label}>E-mail *</label>
                      <input
                        type="email"
                        className={styles.input}
                        placeholder="vas@email.cz"
                        required
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className={styles.field}>
                    <label className={styles.label}>Telefon</label>
                    <input
                      type="tel"
                      className={styles.input}
                      placeholder="+420 000 000 000"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className={styles.field}>
                    <label className={styles.label}>Hlavní cíl *</label>
                    <select
                      className={styles.select}
                      required
                      value={formData.goal}
                      onChange={e => setFormData({ ...formData, goal: e.target.value })}
                    >
                      <option value="">Vyberte cíl</option>
                      <option value="hubnutí">Hubnutí a rýsování</option>
                      <option value="nabírání">Nabírání svalové hmoty</option>
                      <option value="kondice">Zlepšení kondice</option>
                      <option value="záda">Zdravá záda a pohyb</option>
                      <option value="pauza">Návrat do formy po pauze</option>
                      <option value="jiné">Jiné / kombinace</option>
                    </select>
                  </div>

                  <div className={styles.field}>
                    <label className={styles.label}>Zpráva (nepovinné)</label>
                    <textarea
                      className={styles.textarea}
                      placeholder="Stručně napište, s čím vám mohu pomoci..."
                      rows={5}
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    Odeslat nezávaznou poptávku →
                  </button>

                  <p className={styles.formNote}>
                    Odesláním souhlasíte s kontaktováním zpět ohledně tréninků.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
