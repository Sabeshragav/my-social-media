import { IoSearch } from "react-icons/io5";

const SearchBar = ({ setSearch }) => {
  return (
    <main className="flex">
      <IoSearch className="h-14 w-9 pl-3 rounded-l-lg bg-slate-500" />
      <form className="text-white" action="">
        <input
          className="w-72 focus:outline-none bg-slate-500 p-3.5 rounded-r-lg text-xl"
          type="text"
          name=""
          id=""
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search For Posts"
        />
      </form>
    </main>
  );
};

export default SearchBar;
