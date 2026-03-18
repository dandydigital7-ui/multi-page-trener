# Daniel Holler – Osobní trenér · Next.js Multi-page Web

Kompletní redesign webu jako Next.js multi-page aplikace.

## Struktura stránek

| URL | Stránka |
|-----|---------|
| `/` | Domů (hero, přehled služeb, CTA) |
| `/o-mne` | O mně (bio, sportovní kariéra, hodnoty, galerie) |
| `/sluzby` | Služby (detailní přehled 6 programů) |
| `/jak-to-funguje` | Jak to funguje (4 kroky spolupráce, výhody, lokalita) |
| `/reference` | Reference (testimonials, výsledky, galerie) |
| `/kontakt` | Kontakt (formulář + info o lokaci) |

## Instalace a spuštění

```bash
# Nainstalovat závislosti
npm install

# Spustit vývojový server
npm run dev
# → http://localhost:3000

# Build pro produkci
npm run build
npm start
```

## Deploy na Vercel

1. Nahrajte projekt do GitHub repozitáře
2. Importujte repo na [vercel.com](https://vercel.com)
3. Vercel automaticky detekuje Next.js a nastaví vše

**Nebo přes Vercel CLI:**
```bash
npm i -g vercel
vercel
```

## Vlastní obrázky

Vaše fotky jsou momentálně načítány z původního webu (`osobni-trener-web.vercel.app`).
Pro produkci doporučuji:
1. Stáhnout obrázky z původního webu
2. Vložit je do složky `/public/images/`
3. Aktualizovat src adresy v kódu na `/images/foto-1.png` atd.
4. Odebrat `domains` z `next.config.js`

## Design systém

- **Písma:** Bebas Neue (display) · Instrument Serif (kurzíva) · DM Sans (text)
- **Barvy:** Černá `#0a0a08` · Zlatá `#c9a84c` · Bílá `#f5f3ee`
- **Styl:** Tmavý athletický editorial
