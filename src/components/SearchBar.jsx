import { RiArrowDropRightFill, RiMenu3Fill } from "react-icons/ri";
import { AiOutlineSearch } from "react-icons/ai";
import { auth } from "../auth/firebase";
const SearchBar = ({ onSetShowSidebar }) => {
  const user = auth.currentUser;

  return (
    <div className="w-full sm:flex p-2 items-end">
      <div className="sm:flex-grow flex justify-between">
        <div className="">
          <div className="flex items-center">
            <div className="text-3xl font-bold">{user?.displayName}</div>
          </div>
          <div className="flex items-center">
            <RiArrowDropRightFill size="25px" />
            <div className="ml-2">October 26</div>
          </div>
        </div>
        <button
          onClick={() => {
            onSetShowSidebar(true);
          }}
          type="button"
          className="block sm:hidden"
        >
          <RiMenu3Fill className="w-5 h-5" />
        </button>
      </div>
      <div className="w-full sm:w-64 mt-4 sm:mt-0 relative">
        <AiOutlineSearch className="w-5 h-5 search-icon left-3 absolute" />
        <form action="#" method="POST">
          <input
            type="text"
            name="company_website"
            id="company_website"
            className="pl-12 py-2 pr-2 block w-full rounded-lg border-gray-300 bg-card"
            placeholder="search"
          />
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
