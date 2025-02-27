"use client";
import React from "react";
import { useDogs } from "../providers/dogs-provider";
import Card from "./card";

export default function ListDogs() {
  // Ok, we want to do some little magic with our dogs,
  // not showing all if there is searchterms.
  // If none, lets map or originaly dogs.

  const { dogs, searchTerm, sortOrder } = useDogs();

  const filteredDogs =
    searchTerm.trim() === ""
      ? dogs
      : dogs.filter((dog) =>
          dog.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

  // Sort dogs alphabetically based on `sortOrder`
  const sortedDogs = [...filteredDogs].sort(
    (a, b) =>
      sortOrder === "asc"
        ? a.name.localeCompare(b.name) // A → Z
        : b.name.localeCompare(a.name) // Z → A
  );
  console.log(dogs);
  return (
    <ul className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
      {sortedDogs.map((dog) => (
        <Card key={dog.chipNumber} dog={dog} />
      ))}
    </ul>
  );
}
