import React from "react";
import NavLink from "./nav-link";

export default function Navbar() {
  return (
    <ul className="flex gap-4">
      <NavLink href="/">Home</NavLink>
      <NavLink href="/dogs">Dogs</NavLink>
    </ul>
  );
}
