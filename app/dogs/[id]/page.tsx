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

  const { name, breed, age, img, owner, description } = currentDog;

  return (
    <main className="flex flex-col min-h-screen justify-center max-w-screen-md">
      <div className="flex flex-col rounded-3xl overflow-hidden shadow-orange-800 shadow-2xl">
        <Image
          src={img}
          width={1000}
          height={200}
          alt={name}
          className="aspect-square object-cover max-w-full h-auto"
        />
        <div className="">
          <div className="flex justify-between p-8 bg-opacity-10 bg-black">
            <h1 className="text-5xl font-bold">{name}</h1>
            <TogglePresent chipNumber={chipNumber} />
          </div>
          <div className="grid grid-cols-2 gap-x-8 p-8 text-xl">
            <ul className="space-y-2">
              <li>
                <span className="font-bold">Name:</span>
                <p>{name}</p>
              </li>
              <li>
                <span className="font-bold">Breed:</span>
                <p>{breed}</p>
              </li>
              <li>
                <span className="font-bold">Age:</span>
                <p>{age}</p>
              </li>
            </ul>
            <ul className="space-y-2">
              <li>
                <span className="font-bold">Owner:</span>
                <p>
                  {owner.name} {owner.lastName}
                </p>
              </li>
              <li>
                <span className="font-bold">Phone:</span>
                <p>{owner.phoneNumber}</p>
              </li>
              <li>
                <span className="font-bold">E-mail:</span>
                <p>unknow@mail.com</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="p-8 flex gap-8 justify-center">
          {prevDog && <Link href={`/dogs/${prevDog.chipNumber}`}>Prev</Link>}
          {nextDog && <Link href={`/dogs/${nextDog.chipNumber}`}>Next</Link>}
        </div>
      </div>
    </main>
  );
}
