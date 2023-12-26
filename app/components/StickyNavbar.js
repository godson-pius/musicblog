'use client'
import React from 'react'
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";
import { FiSearch } from 'react-icons/fi'
import Link from 'next/link';
import Image from 'next/image';

const StickyNavbar = () => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Link
        className="p-1 font-normal text-black"
        href={'/'}
      >
        All Music
      </Link>
      <Link
        className="p-1 font-normal text-black"
        href={'/ng'}
      >
        Nigeria
      </Link>
      <Link
        className="p-1 font-normal text-black"
        href={'/sa'}
      >
        South Africa
      </Link>
      <Link
        className="p-1 font-normal text-black"
        href={'/gh'}
      >
        Ghana
      </Link>
      <Link
        className="p-1 font-normal text-black"
        href={'/blog'}
      >
        Blog
      </Link>
      <Link
        className="p-1 font-normal text-black"
        href={'/contact'}
      >
        Contact us
      </Link>
    </ul>
  );

  return (
    <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Image src={'/logo.png'} width={35} height={35} alt='Music World' />
        {/* <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-bold text-2xl"
        >
          MusicWorld
        </Typography> */}
        {/*   MAIN NAV LIST */}
        <div className="mr-4 hidden lg:block">{navList}</div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-x-1">
            <IconButton>
              <FiSearch size={20} />
            </IconButton>
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
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
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <MobileNav open={openNav}>
        {navList}
        <div className="flex items-center gap-x-1">
          <IconButton>
            <FiSearch size={20} />
          </IconButton>
        </div>
      </MobileNav>
    </Navbar>
  )
}

export default StickyNavbar