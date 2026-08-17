export interface FooterCategoryNavigation {
  id: string;
  title: string;
  navigation: FooterNavigationLink[];
}

interface FooterNavigationLink {
  href: string;
  text: string;
}
