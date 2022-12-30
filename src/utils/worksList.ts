export enum TabsNames {
  All = 'All',
  Web = 'UI - UX',
  Branding = 'Branding',
  Lettering = 'Lettering',
  Other = 'Other Things',
}

export type WorkSizes = 'tall' | 'wide' | 'big';

interface Tabs {
  category: TabsNames;
}

export const tabs: Tabs[] = [
  {
    category: TabsNames.All,
  },
  {
    category: TabsNames.Web,
  },
  {
    category: TabsNames.Branding,
  },
  {
    category: TabsNames.Lettering,
  },
  {
    category: TabsNames.Other,
  },
];

export interface Works {
  name: string;
  link: string;
  image: string;
  category: TabsNames;
  size?: WorkSizes;
}

export const works: Works[] = [
  {
    name: 'Lalaland',
    link: 'lalaland',
    image: '01',
    category: TabsNames.Web,
    size: 'big',
  },
  {
    name: 'CP GO',
    link: 'cp-go',
    image: '01',
    category: TabsNames.Web,
    size: 'big',
  },
  {
    name: 'Dr. Q',
    link: 'dr-q',
    image: 'cover',
    category: TabsNames.Web,
    size: 'tall',
  },
  /* {
    name: 'Cervantes',
    link: 'cervantes',
    image: 'photo-2',
    category: TabsNames.Web,
  }, */
  /* {
    name: 'Nowo',
    link: 'nowo',
    image: 'photo-2',
    category: TabsNames.Web,
    size: 'tall',
  }, */
  /* {
    name: 'Read Garden',
    link: 'read-garden',
    image: 'photo-2',
    category: TabsNames.Web,
    size: 'big',
  }, */
  {
    name: 'Luck',
    link: 'luck',
    image: 'luck',
    category: TabsNames.Lettering,
    size: 'big',
  },
  {
    name: 'Chicky Nuggies',
    link: 'chicky-nuggies',
    image: 'chicky-nuggies',
    category: TabsNames.Lettering,
  },
  {
    name: 'Hello World',
    link: 'hello-world',
    image: 'hello-world',
    category: TabsNames.Lettering,
  },
  {
    name: 'Every saint...',
    link: 'saint',
    image: 'saint',
    category: TabsNames.Lettering,
  },
  {
    name: 'Soul Shine',
    link: 'soul-shine',
    image: 'soul-shine',
    category: TabsNames.Lettering,
  },
  {
    name: 'Stay Weird',
    link: 'stay-weird',
    image: 'stay-weird',
    category: TabsNames.Lettering,
    size: 'big',
  },
  {
    name: 'Timing',
    link: 'timing',
    image: 'timing',
    category: TabsNames.Lettering,
    size: 'big',
  },
  /* {
    name: 'Los Cuates',
    link: 'los-cuates',
    image: 'photo-1',
    category: TabsNames.Branding,
    size: 'big',
  }, */
  /* {
    name: 'Publistone',
    link: 'publistone',
    image: 'photo-2',
    category: TabsNames.Branding,
    size: 'wide',
  }, */
];

// Internal Pages

export interface Images {
  name: string;
  title: string;
  size?: string;
}

export const lalalandImages: Images[] = [
  {
    name: '01',
    title: 'Lalaland',
  },
  {
    name: '02',
    title: 'Lalaland',
  },
  {
    name: '04',
    title: 'Lalaland',
    size: 'big',
  },
  {
    name: '05',
    title: 'Lalaland',
  },
  {
    name: '06',
    title: 'Lalaland',
  },
  {
    name: '07',
    title: 'Lalaland',
    size: 'big',
  },
];

export const cpGoImages: Images[] = [
  {
    name: '03',
    title: 'CP Go',
  },
  {
    name: '02',
    title: 'CP Go',
  },
  {
    name: '04',
    title: 'CP Go',
  },
  {
    name: '05',
    title: 'CP Go',
  },
  {
    name: '06',
    title: 'CP Go',
    size: 'big',
  },
  {
    name: '07',
    title: 'CP Go',
  },
  {
    name: '08',
    title: 'CP Go',
  },
  {
    name: '09',
    title: 'CP Go',
    size: 'big',
  },
  {
    name: '10',
    title: 'CP Go',
  },
  {
    name: '11',
    title: 'CP Go',
    size: 'tall',
  },
  {
    name: '12',
    title: 'CP Go',
  },
  {
    name: '13',
    title: 'CP Go',
  },
  {
    name: '14',
    title: 'CP Go',
  },
  {
    name: '18',
    title: 'CP Go',
    size: 'tall',
  },
  {
    name: '15',
    title: 'CP Go',
  },
  {
    name: '17',
    title: 'CP Go',
  },
];
