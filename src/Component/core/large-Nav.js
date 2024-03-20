import React from "react";
import ActiveLink from "./active-Link";

const LargeNav = () => {
  return (
    <div>
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <ActiveLink href={'/'}>Home</ActiveLink>
          <ActiveLink href={'/about'}>About</ActiveLink>
          <ActiveLink href={'/contact'}>Contact Us</ActiveLink>
        </ul>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex gap-4">
          <ActiveLink className="text-xl" href={'/'}>Home</ActiveLink>
          <ActiveLink className="text-xl" href={'/about'}>About</ActiveLink>
          <ActiveLink className="text-xl" href={'/contact'}>Contact Us</ActiveLink>
          <ActiveLink className="text-xl" href={'/hotproducts'}>Hot Products</ActiveLink>
        </ul>
      </div>
    </div>
  );
};

export default LargeNav;
