"use client"
import { useState } from 'react'; 
import ActiveLink from './active-Link';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown relative">
      <div
        tabIndex={0}
        role="button"
        onClick={toggleMenu}
        className="btn btn-ghost lg:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </div>
      {isOpen && (
        <ul className="menu menu-lg dropdown-content absolute top-10 -left-10 mt-3 z-10 p-2 shadow bg-base-100  w-28 lg:w-52">
          <ActiveLink href={'/'} onClick={toggleMenu} className="w-full">Home</ActiveLink>
          <ActiveLink href={'/about'} onClick={toggleMenu} className="w-full">About</ActiveLink>
          <ActiveLink href={'/contact'} onClick={toggleMenu} className="w-full">Contact Us</ActiveLink>
          <ActiveLink className="w-full"  href={'/hotproducts'}>Hot Products</ActiveLink>
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
