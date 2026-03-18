import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: {
    default: 'Daniel Holler | Osobní trenér – Praha 6',
    template: '%s | Daniel Holler Trenér',
  },
  description: 'Certifikovaný osobní trenér v Max Fitness Dejvice, Praha 6. Individuální tréninky, transformace postavy, hubnutí i nabírání. Úvodní konzultace zdarma.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="cs">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
