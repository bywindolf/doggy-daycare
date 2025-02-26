"use client"; // Ensure it's a Client Component

import { useDogs } from "@/app/providers/dogs-provider";

interface TogglePresentProps {
  chipNumber: string;
}

export default function TogglePresent({ chipNumber }: TogglePresentProps) {
  const { dogs, togglePresent } = useDogs(); // ✅ Access dogs from context

  const currentDog = dogs.find((dog) => dog.chipNumber === chipNumber);

  if (!currentDog) return null; // Prevents errors if the dog is not found

  return (
    <>
      <input
        type="checkbox"
        checked={currentDog.present ?? false} // ✅ Uses correct state
        onChange={() => togglePresent(chipNumber)}
      />
    </>
  );
}
