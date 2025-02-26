"use client";
import { useDogs } from "@/app/providers/dogs-provider";
import Link from "next/link";
import Image from "next/image";
import TogglePresent from "@/app/components/toggle-present";

export default function Page({ params }: { params: { id: string } }) {
  const { dogs } = useDogs(); // ✅ Use dogs from context instead of fetching
  const { id: chipNumber } = params;

  const currentDog = dogs.find((dog) => dog.chipNumber === chipNumber);

  if (!currentDog) return <div>Dog not found</div>;

  const currentDogIndex = dogs.findIndex(
    (dog) => dog.chipNumber === chipNumber
  );
  const prevDog = currentDogIndex > 0 ? dogs[currentDogIndex - 1] : null;
  const nextDog =
    currentDogIndex < dogs.length - 1 ? dogs[currentDogIndex + 1] : null;

  const { name, breed, age, img, description, present } = currentDog;

  return (
    <main className="flex flex-col bg-slate-100">
      <div className="flex flex-col">
        <Image
          src={img}
          width={1000}
          height={200}
          alt={name}
          className="aspect-square object-cover max-w-full h-auto"
        />

        <h1>{name}</h1>
        <p>{description}</p>
        <p>Chip Number: {chipNumber}</p>
        <p>Breed: {breed}</p>
        <p>Age: {age}</p>
        <p>Present: {present ? "Yes" : "No"}</p>

        <TogglePresent chipNumber={chipNumber} />

        <div>
          {prevDog && <Link href={`/dogs/${prevDog.chipNumber}`}>Prev</Link>}
          {nextDog && <Link href={`/dogs/${nextDog.chipNumber}`}>Next</Link>}
        </div>
      </div>
    </main>
  );
}
