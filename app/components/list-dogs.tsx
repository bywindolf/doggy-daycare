"use client";
import React from "react";
import { useDogs } from "../providers/dogs-provider";
import Card from "./card";

export default function ListDogs() {
  const { dogs } = useDogs(); // ✅ Get dogs from context
  console.log(dogs);
  return (
    <ul>
      {dogs.map((dog) => (
        <Card key={dog.chipNumber} dog={dog} />
      ))}
    </ul>
  );
}
