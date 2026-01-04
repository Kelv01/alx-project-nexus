export type Navlink = {
  id: string;
  name: string;
  href: string;
};

export const navLinks: Navlink[] = [
  { id: "home", name: "Home", href: "/" },
  { id: "tours", name: "Tours", href: "/tours/tours" },
  { id: "groups", name: "Groups", href: "/groups/create" },
  { id: "about", name: "About", href: "/about/about" },
];
