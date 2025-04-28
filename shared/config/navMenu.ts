type NavMenuItemsType = {
  id: number;
  title: string;
  icon: string;
  href: string;
  alt: string;
};

export const NavMenuItems: NavMenuItemsType[] = [
  {
    id: 1,
    title: 'Главная',
    icon: '',
    href: '/',
    alt: 'Переход на главную страницу',
  },
  {
    id: 2,
    title: 'Проекты',
    icon: '',
    href: '/projects',
    alt: 'Переход на страницу проектов',
  },
  {
    id: 3,
    title: 'Блог',
    icon: '',
    href: '/blog',
    alt: 'Переход на страницу блога',
  },
  {
    id: 4,
    title: 'Контакты',
    icon: '',
    href: '/contact',
    alt: 'Переход на страницу контактов',
  },
];
