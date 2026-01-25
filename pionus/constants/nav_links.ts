export type Navlink = {
  id: string;
  name: string;
  href: string;
};

export const navLinks: Navlink[] = [
  { id: "home", name: "Home", href: "/" },
  { id: "tours", name: "Tours", href: "/tours" },
  { id: "groups", name: "Groups", href: "/groups" },
  { id: "about", name: "About", href: "/about" },
];
