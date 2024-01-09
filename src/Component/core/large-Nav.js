import React from "react";
import ActiveLink from "./active-Link";

const LargeNav = () => {
  return (
    <ul className="flex">
      <li>
        <ActiveLink href="/">Home</ActiveLink>
      </li>
      <li>
        <ActiveLink href="/about">About</ActiveLink>
      </li>
      <li>
        <ActiveLink href="/about">Sicor Motor</ActiveLink>
      </li>
    </ul>
  );
};

export default LargeNav;
