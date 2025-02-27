"use client";
import React, { createContext, useContext } from "react";

export default function ThemeProvider({
  children,
  theme,
}: {
  children: React.ReactNode;
  theme: string;
}) {
  const ThemeContext = createContext<{ theme: string } | undefined>(undefined);

  return (
    <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
  );
}
