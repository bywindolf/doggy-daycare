"use client";
import React, { createContext, useContext, useState } from "react";
import { Dog } from "../interfaces";

type DogContextType = {
  dogs: Dog[];
  togglePresent: (chipNumber: string) => void;
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  sortOrder: "asc" | "desc";
  setSortOrder: React.Dispatch<React.SetStateAction<"asc" | "desc">>;
};

const DogsContext = createContext<DogContextType | undefined>(undefined);

export function useDogs() {
  const context = useContext(DogsContext);
  if (!context) throw new Error("useDogs must be used within a DogsProvider");
  return context;
}

export default function DogsProvdider({
  children,
  initialDogs = [],
}: {
  children: React.ReactNode;
  initialDogs?: Dog[];
}) {
  //Initial dogs
  const [dogs, setDogs] = useState<Dog[]>(initialDogs);
  // Searchterm state
  const [searchTerm, setSearchTerm] = useState("");
  // Sort order state
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const togglePresent = (chipNumber: string) => {
    setDogs((prevDogs) =>
      prevDogs.map((dog) =>
        dog.chipNumber === chipNumber ? { ...dog, present: !dog.present } : dog
      )
    );
  };

  // console.log(dogs);
  return (
    <DogsContext.Provider
      value={{
        dogs,
        togglePresent,
        searchTerm,
        setSearchTerm,
        sortOrder,
        setSortOrder,
      }}
    >
      {children}
    </DogsContext.Provider>
  );
}
