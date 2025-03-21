import type { Metadata } from 'next';

import { fontSans } from '~/lib/fonts';
import { Background } from '~/components/layout/background';
import { SiteHeader } from '~/components/layout/site-header';

import '~/styles/globals.css';

import { cn } from '~/lib/cn';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang='en'>
      <body className={cn(fontSans.variable, 'antialiased')}>
        <SiteHeader />
        <main>
          {children}
          {/* {Array.from({ length: 100 }, (_, i) => (
            <p key={i}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, consectetur voluptatibus? Vero magni
              aliquid debitis dolorem velit exercitationem expedita placeat!
            </p>
          ))} */}
        </main>
        <Background />
      </body>
    </html>
  );
}
