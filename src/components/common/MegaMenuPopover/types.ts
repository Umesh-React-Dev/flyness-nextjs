export type MegaMenuLink = {
  title: string;
  description: string;
  href: string;
  iconPosition: string;
};

export type MegaMenuCategory = {
  id: string;
  title: string;
  description: string;
  iconPosition: string;
  links: MegaMenuLink[];
};

export type MegaMenuItem = {
  id: string;
  label: string;
  accent?: "pink" | "teal";
  categories: MegaMenuCategory[];
};

export type NavItem = {
  id: string;
  label: string;
  href?: string;
  menu?: MegaMenuItem;
};
