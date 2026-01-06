"use client"

import React from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import Link from "next/link";
 
function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <li className="p-1 font-medium">
        <Link href="/#" className="flex items-center hover:text-[#D8BFD8] transition-colors">
          Home
        </Link>
      </li>
      <li className="p-1 font-medium">
        <Link href="/#projects" className="flex items-center hover:text-[#D8BFD8] transition-colors">
          Projects
        </Link>
      </li>
      <li className="p-1 font-medium">
        <Link href="/#resume" className="flex items-center hover:text-[#D8BFD8] transition-colors">
          Resume
        </Link>
      </li>
    </ul>
  );
}
 
export function NavbarSimple() {
  const [openNav, setOpenNav] = React.useState(false);
 
  const handleWindowResize = () =>
    window.innerWidth >= 1024 && setOpenNav(false);
 
  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
 
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
 
  return (
    <nav role="navigation" className="mx-auto rounded-b-lg sticky top-0 z-50 px-6 py-3 bg-[#192A51]">
      <div className="flex items-center justify-between text-gray-100">
        <Link
          href="/#"
          className="mr-4 cursor-pointer py-1.5 text-lg font-semibold hover:text-[#D8BFD8] transition-colors"
        >
          CLYDE GEYER | FULL STACK
        </Link>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <button
          className="ml-auto h-6 w-6 text-inherit lg:hidden focus:outline-none"
          onClick={() => setOpenNav(!openNav)}
          aria-label="Toggle navigation"
        >
          {openNav ? (
            <HiX className="h-6 w-6" />
          ) : (
            <HiMenuAlt3 className="h-6 w-6" />
          )}
        </button>
      </div>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          openNav ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <NavList />
      </div>
    </nav>
  );
}