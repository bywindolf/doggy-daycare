import { Filter, Search } from "lucide-react";
import ListDogs from "../components/list-dogs";
export default function Dogs() {
  return (
    <main className="flex flex-col w-full">
      <h1 className="text-3xl text-center">Our dogs</h1>
      <form className="grid grid-cols-2 gap-4 py-4 justify-between">
        <div className="flex">
          <Search></Search>
          <input
            type="search"
            placeholder="Söktem"
            className="text-red-500 w-full"
          />
        </div>
        <div className="flex">
          <Filter></Filter>
          <select className="w-full">
            <option>safasf</option>
            <option>dsgdsg</option>
          </select>
        </div>
      </form>
      <ListDogs></ListDogs>
    </main>
  );
}
