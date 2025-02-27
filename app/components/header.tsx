import React from "react";
import Navbar from "./navbar";

export default function Header() {
  return (
    <header className="bg-opacity-20 bg-black backdrop-blur-sm w-full p-4 flex justify-center fixed">
      <Navbar />
    </header>
  );
}
