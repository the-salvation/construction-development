import type { Metadata } from 'next';

import '@/styles/globals.css';
import { getFontVariables } from '@/lib/fonts';
import { ReduxProvider } from '@/lib/redux/provider';

export const metadata: Metadata = {
  title: 'Construction Project',
  description: 'A modern construction project management application',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const fontVariables = getFontVariables();

  // TODO: change lang to pl
  return (
    <html lang="en" className={fontVariables}>
      <ReduxProvider>
        <body className="antialiased">
          <div className="min-h-screen bg-background font-sans">{children}</div>
        </body>
      </ReduxProvider>
    </html>
  );
}
