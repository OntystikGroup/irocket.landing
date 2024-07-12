"use client"
import { useState, useEffect } from "react";
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/app/assets/home/irocket_logo.svg";
import { useRouter } from 'next/navigation';
import { ChevronIcon } from "../icons/Chevron.icon";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [height, setHeight] = useState('2.5rem');
  const router = useRouter();

  useEffect(() => {
    const updateHeight = () => {
      setHeight(window.innerWidth < 768 ? '4rem' : '2.5rem');
    };

    updateHeight(); // Initial call
    window.addEventListener('resize', updateHeight);

    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  const menuItems = [
    { title: "Инструменты", toHref: "offer", dropdown: true },
    { title: "Как начать", toHref: "step" },
    { title: "Отзывы", toHref: "feedback" },
    { title: "FAQ", toHref: "faq" },
    { title: "Контакты", toHref: "contacts" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    toHref: string
  ) => {
    e.preventDefault();
    if (toHref === "offer") {
      setIsMenuOpen(!isMenuOpen);
    } else {
      router.push(`/#${toHref}`);
      setIsMenuOpen(false); // Collapse the burger menu
    }
  };

  return (
    <div className="lg:mt-2 lg:fixed sticky top-0 left-0 lg:w-full z-50 lg:px-10">
      <Navbar
        height={height}
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        isBlurred={false}
        className="justify-between lg:px-10 lg:border lg:rounded-full lg:py-2 lg:flex lg:items-center lg:justify-between lg:shadow-sm lg:glassmorphism"
        maxWidth="full"
      >
        <NavbarContent className="pr-3 h-fit">
          <div className="flex items-center w-fit cursor-pointer" onClick={() => router.push('/')}>
            <Image
              src={logo}
              alt="Logo"
              className="md:h-8 mr-2 object-contain w-fit h-8"
            />
            <div className="flex flex-col">
              <p className="font-semibold md:text-2xl text-2xl md:tracking-wider font-stapel">
                IROCKET
              </p>
            </div>
          </div>
        </NavbarContent>

        <NavbarContent className="hidden lg:flex gap-4 h-fit" justify="center">
          {menuItems.map((item, index) => (
            <NavbarItem key={`${item.title}-${index}`}>
              {item.dropdown ? (
                <Dropdown>
                  <DropdownTrigger>
                    <Button
                      color="primary"
                      variant="light"
                      className="p-0 bg-transparent data-[hover=true]:bg-transparent transition-transform duration-300 ease-in-out"
                      endContent={<ChevronIcon />}
                      radius="sm"
                    >
                      {item.title}
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu>
                    <DropdownItem>
                      <Link
                        href="/dumping"
                        className="font-semibold hover:text-primary"
                      >
                        Автоизменение цены/Демпинг
                      </Link>
                    </DropdownItem>
                    <DropdownItem>
                      <Link
                        href="/notifications"
                        className="font-semibold hover:text-primary"
                      >
                        Авторассылка
                      </Link>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              ) : (
                <a
                  className="font-meduim text-sm hover:text-primary cursor-pointer"
                  onClick={(e) => handleLinkClick(e, item.toHref)}
                >
                  {item.title}
                </a>
              )}
            </NavbarItem>
          ))}
        </NavbarContent>

        <NavbarContent justify="end" className="h-fit">
          <NavbarItem className="md:ml-10">
            <Button
              href="https://app.irocket.kz/login"
              as={Link}
              color="primary"
              variant="shadow"
              className="text-md sm:text-sm"
            >
              Вход
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button
              as={Link}
              color="primary"
              href="https://app.irocket.kz/register"
              variant="ghost"
              className="font-semibold hidden md:flex"
            >
              Попробовать
            </Button>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="lg:hidden"
          icon={(isOpen) =>
            isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10 transition-transform duration-300 ease-in-out"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10 transition-transform duration-300 ease-in-out"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )
          }
        />

        <NavbarMenu> {/* Align menu to the left for mobile */}
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item.title}-${index}`}>
              {item.dropdown ? (
                <Dropdown>
                  <DropdownTrigger>
                    <Button
                      color="primary"
                      variant="light"
                      className="w-fit p-0"
                    >
                      {item.title}
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu>
                    <DropdownItem>
                      <Link
                        href="/dumping"
                        className="font-semibold hover:text-primary"
                      >
                        Автоизменение цены/Демпинг
                      </Link>
                    </DropdownItem>
                    <DropdownItem>
                      <Link
                        href="/notifications"
                        className="font-semibold hover:text-primary"
                      >
                        Авторассылка
                      </Link>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              ) : (
                <a
                  className="w-full cursor-pointer font-meduim text-sm"
                  onClick={(e) => handleLinkClick(e, item.toHref)}
                >
                  {item.title}
                </a>
              )}
            </NavbarMenuItem>
          ))}
          <NavbarMenuItem>
            <Button
              as={Link}
              href="https://app.irocket.kz/register"
              color="primary"
              variant="bordered"
              className="w-full font-semibold"
            >
              Регистрация
            </Button>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </div>
  );
}
