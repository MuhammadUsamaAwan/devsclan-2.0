import Link from 'next/link';

import { CodeIcon } from 'lucide-react';

const menuItems = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'About',
    link: '/about',
  },
  {
    title: 'Projects',
    link: '/projects',
  },
  {
    title: 'Portfolio',
    link: '/portfolio',
  },
  {
    title: 'Contact',
    link: '/contact',
  },
];

export function SiteHeader() {
  return (
    <header>
      <div className='container mx-auto flex h-14 items-center justify-between'>
        <Link href='/' className='flex items-center gap-2 text-xl font-semibold'>
          <CodeIcon className='text-primary size-5' />
          <div>
            Devs<span className='text-primary'>Clan</span>
          </div>
        </Link>
        <nav className='flex gap-10'>
          {menuItems.map(item => (
            <Link className='text-muted-foreground hover:text-foreground' key={item.link} href={item.link}>
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
