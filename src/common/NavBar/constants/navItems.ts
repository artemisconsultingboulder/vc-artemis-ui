/** @module constants */

import type { NavItem } from "../types/navBarTypes";

export const NAV_ITEMS: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "Calendar", href: "/calendar" },
  { name: "Portfolio", href: "/portfolio" },
  { 
    name: "Work with Us", 
    dropdown: [
      { name: "Hire Artemis", href: "/hire-artemis" },
      { name: "Work at Artemis", href: "/applications" }
    ]
  },
]; 