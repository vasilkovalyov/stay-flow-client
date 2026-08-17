import { PAGES } from '@/constants';

import { FooterCategoryNavigation } from './footer.type';

export const FOOTER_NAVIGATION: FooterCategoryNavigation[] = [
  {
    id: 'company',
    title: 'Company',
    navigation: [
      {
        href: PAGES.about,
        text: 'About',
      },
      {
        href: PAGES.contact,
        text: 'Contact',
      },
      {
        href: PAGES.faq,
        text: 'FAQ',
      },
    ],
  },
  {
    id: 'legal',
    title: 'Legal',
    navigation: [
      {
        href: PAGES.terms,
        text: 'Terms',
      },
      {
        href: PAGES.privacy,
        text: 'Privacy',
      },
    ],
  },
  {
    id: 'explore',
    title: 'Explore',
    navigation: [
      {
        href: '/',
        text: 'Search',
      },
      {
        href: '/',
        text: 'Become a Host',
      },
      {
        href: '/',
        text: 'Design System',
      },
    ],
  },
];
