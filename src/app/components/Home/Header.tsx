'use client';
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from '@nextui-org/react';
import logo from '../../home/logo.png';
import Image from 'next/image';
import { useState, MouseEvent } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { title: 'Предложение', toHref: 'offer' },
    { title: 'Отзывы', toHref: 'feedback' },
    { title: 'Как начать', toHref: 'step' },
    { title: 'FAQ', toHref: 'faq' },
    { title: 'Наша команда', toHref: 'team' },
    { title: 'Контакты', toHref: 'contacts' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>, toHref: string) => {
    e.preventDefault();
    scrollToSection(toHref);
    setIsMenuOpen(false); // Collapse the burger menu
  };

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      isBlurred={false}
    >
      <NavbarContent>
        <div className="grid lg:ml-[-5em] mt-[1em] ml-[-0.75em]">
          <div className="flex items-center pb-4">
            <Image src={logo} alt="Logo" className="h-12 mr-2 object-contain" />
            <div className="flex flex-col">
              <p className="font-semibold md:text-4xl text-3xl md:tracking-wider">iRocket</p>
              <p className="uppercase text-[10px] text-gray-400 hidden sm:block">
                система роста продаж
              </p>
            </div>
          </div>
        </div>
      </NavbarContent>

      <NavbarContent className="hidden lg:flex gap-4" justify="center">
        {menuItems.slice(0, 6).map((item, index) => (
          <NavbarItem key={`${item.title}-${index}`}>
            <Link
              className="font-semibold hover:text-danger"
              href={`#${item.toHref}`}
              onClick={(e) => handleLinkClick(e, item.toHref)}
            >
              {item.title}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="ml-10">
          <Button
            href="https://app.irocket.kz/login"
            as={Link}
            color="danger"
            variant="shadow"
            className="text-md sm:text-sm"
          >
            Вход
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            color="danger"
            href="https://app.irocket.kz/register"
            variant="ghost"
            className="font-semibold hover:bg-danger hover:text-white hidden md:flex"
          >
            Попробовать
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenuToggle
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        className="lg:hidden"
        icon={(isOpen) =>
          isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 transition-transform duration-300 ease-in-out">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 transition-transform duration-300 ease-in-out">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )
        }
      />

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.title}-${index}`}>
            <Link
              className="w-full"
              href={`#${item.toHref}`}
              onClick={(e) => handleLinkClick(e, item.toHref)}
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
          <Button
            as={Link}
            href="https://app.irocket.kz/register"
            color="danger"
            variant="bordered"
            className="w-full font-semibold"
          >
            Регистрация
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
