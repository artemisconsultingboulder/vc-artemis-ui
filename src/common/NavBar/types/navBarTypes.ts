/** @module types */

export type NavItem = {
  name: string;
  href: string;
};

export type NavBarProps = {
  items: NavItem[];
}; 