"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface NavItemProps {
  href: string;
  children: React.ReactNode;
}

export default function NavItem({ href, children }: NavItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li>
      <Link
        href={href}
        className={`${
          isActive ? "bg-cyan-100" : "bg-slate-100"
        } px-4 py-2 rounded-full`}
      >
        {children}
      </Link>
    </li>
  );
}
