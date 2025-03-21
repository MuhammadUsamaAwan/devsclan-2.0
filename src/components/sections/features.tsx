import {
  CircuitBoardIcon,
  CogIcon,
  FlameIcon,
  GlobeIcon,
  HammerIcon,
  SmartphoneIcon,
  WrenchIcon,
  ZapIcon,
} from 'lucide-react';

import { cn } from '~/lib/cn';

export function Features() {
  const features = [
    {
      title: 'Web Development',
      description: 'Crafting modern, responsive, and scalable web applications tailored to your needs.',
      icon: <GlobeIcon />,
    },
    {
      title: 'Mobile Development',
      description: 'Building seamless and intuitive mobile experiences for iOS and Android platforms.',
      icon: <SmartphoneIcon />,
    },
    {
      title: 'AR Solutions',
      description: 'Creating immersive augmented reality experiences to engage your audience.',
      icon: <FlameIcon />,
    },
    {
      title: 'VR Applications',
      description: 'Developing cutting-edge virtual reality applications for various industries.',
      icon: <ZapIcon />,
    },
    {
      title: 'Cross-Platform Apps',
      description: 'Delivering apps that work flawlessly across multiple platforms and devices.',
      icon: <CogIcon />,
    },
    {
      title: 'Custom Software',
      description: 'Tailored software solutions to meet your unique business requirements.',
      icon: <CircuitBoardIcon />,
    },
    {
      title: 'UI/UX Design',
      description: 'Designing user-centric interfaces that enhance usability and engagement.',
      icon: <HammerIcon />,
    },
    {
      title: 'Consulting Services',
      description: 'Providing expert guidance to bring your digital ideas to life.',
      icon: <WrenchIcon />,
    },
  ];
  return (
    <div className='relative z-10 mx-auto grid max-w-7xl grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-4'>
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        'group/feature border-text-muted-foreground relative flex flex-col border-r py-10',
        (index === 0 || index === 4) && 'border-text-muted-foreground border-l',
        index < 4 && 'border-text-muted-foreground border-b'
      )}
    >
      {index < 4 && (
        <div className='pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-800 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100' />
      )}
      {index >= 4 && (
        <div className='pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-800 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100' />
      )}
      <div className='text-muted-foreground relative z-10 mb-4 px-10'>{icon}</div>
      <div className='relative z-10 mb-2 px-10 text-lg font-bold'>
        <div className='group-hover/feature:bg-primary absolute inset-y-0 left-0 h-6 w-1 origin-center rounded-tr-full rounded-br-full bg-neutral-700 transition-all duration-200 group-hover/feature:h-8' />
        <span className='inline-block transition duration-200 group-hover/feature:translate-x-2'>{title}</span>
      </div>
      <p className='text-muted-foreground relative z-10 max-w-xs px-10 text-sm'>{description}</p>
    </div>
  );
};
