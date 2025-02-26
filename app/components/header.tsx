import React from "react";
import Navbar from "./navbar";

export default function Header() {
  return (
    <header className="bg-slate-500 w-full p-4 flex justify-center fixed">
      <Navbar />
    </header>
  );
}
