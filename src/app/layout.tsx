import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { FocusProvider } from '@/providers/FocusProvider';

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});



export const metadata: Metadata = {
  title: 'Jerry Williams - Ideator | Founder | Architect',
  description: 'Building scalable AI Stack Solutions',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${poppins.variable} font-sans bg-background text-foreground antialiased`}>
        {/* Skip link for keyboard navigation - a11y */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-cyan-500 focus:text-white focus:rounded-md focus:outline-none focus:ring-2 focus:ring-white"
        >
          Skip to main content
        </a>
        <ThemeProvider defaultTheme="dark">
          <FocusProvider>
            <main id="main-content">
              {children}
            </main>
          </FocusProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

