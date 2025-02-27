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
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          checked={currentDog.present ?? false} // ✅ Uses correct state
          onChange={() => togglePresent(chipNumber)}
        />
        <div className="relative w-20 h-10 bg-gray-200 rounded-full peer peer-focus:ring-12 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-200 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-8 after:w-8 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-black"></div>
        <span className="ms-3 text-sm font-bold text-gray-90">Present</span>
      </label>
    </>
  );
}
