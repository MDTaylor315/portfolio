// app/layout.tsx
import { Russo_One, Poppins } from 'next/font/google';
import './globals.css';
import { LanguageSelector } from '@/components/LanguageSelector';
import { LanguageProvider } from '@/contexts/LanguageContext';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
});

const russoOne = Russo_One({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-russo',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    /* Agregas las variables de todas tus fuentes en el tag html */
    <html lang="es" className={`${poppins.variable} ${russoOne.variable}`}>
      <body className="bg-black text-white font-poppins">
        <LanguageProvider>
          <LanguageSelector />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
