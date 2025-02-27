"use client";
import { Filter, Search } from "lucide-react";
import ListDogs from "../components/list-dogs";
import { useDogs } from "../providers/dogs-provider";
export default function Dogs() {
  const { searchTerm, setSearchTerm, sortOrder, setSortOrder } = useDogs();

  return (
    <main className="flex flex-col w-full pt-24">
      <form className="flex gap-4 py-4 px-8 rounded-full mx-auto  justify-center bg-slate-50">
        <div className="flex">
          <Search></Search>
          <input
            type="text"
            placeholder="Söktem"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="text-red-500 w-full"
          />
        </div>
        <div className="flex">
          <Filter></Filter>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value as "asc" | "desc")}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </form>
      <h1 className="text-5xl text-center py-8">Our dogs</h1>
      <ListDogs></ListDogs>
    </main>
  );
}
