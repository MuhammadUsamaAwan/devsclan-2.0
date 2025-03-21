import { Features } from '~/components/sections/features';
import { Hero } from '~/components/sections/hero';

export default function HomePage() {
  return (
    <div className='space-y-10'>
      <Hero />
      <Features />
    </div>
  );
}
