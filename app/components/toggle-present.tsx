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
        <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
        <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
          Checked toggle
        </span>
      </label>
    </>
  );
}
