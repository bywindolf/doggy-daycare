"use client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col">
        <div className="flex flex-col  items-center  justify-center text-center gap-8 p-16 aspect-[4/3]">
          <h1 className="text-4xl font-bold uppercase leading-none text-white drop-shadow-lg break-words">
            Welcome to doggy daycare!
          </h1>

          <Link
            href="/dogs"
            className=" rounded-xl uppercase bg-blue-800 hover:bg-blue-900 transition-colors drop-shadow-lg text-xl font-semibold text-white px-4 py-3"
          >
            Go to dogs
          </Link>
        </div>
        <Image
          src={"/image.png"}
          width={600}
          height={600}
          alt={"asfas"}
        ></Image>
      </main>
    </div>
  );
}
