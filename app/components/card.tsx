import Image from "next/image";
import { Dog } from "../interfaces";
import Link from "next/link";
import { Mars } from "lucide-react";
import { Venus } from "lucide-react";

interface CardProps {
  dog: Dog;
}

export default function Card({
  dog: { name, sex, breed, age, owner, present, img, chipNumber },
}: CardProps) {
  const fullNameOwner = owner.name + " " + owner.lastName;

  return (
    <li
      className={` outline outline-8 rounded-2xl${
        present ? " " : " outline-background"
      }`}
    >
      <Link href={`dogs/${chipNumber}`}>
        <Image
          src={img}
          width={100}
          height={100}
          alt="asfafs"
          className="min-w-full aspect-square object-cover"
        ></Image>
      </Link>
      <div className="p-4 flex flex-col">
        <div className="flex justify-between text-4xl font-semibold">
          <h2 className=" flex items-center">
            {name}
            {sex === "female" ? (
              <Venus className="size-8" />
            ) : (
              <Mars className="size-8" />
            )}
          </h2>
          <span className="">{age}y/o</span>
        </div>
        <p>{breed}</p>
        <p>Present: {present ? "Yes" : "No"}</p>

        <div>
          <span className="uppercase">Owner: </span>
          {fullNameOwner}
        </div>
      </div>
    </li>
  );
}
