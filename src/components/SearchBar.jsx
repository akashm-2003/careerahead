import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { RiArrowDropRightFill, RiMenu3Fill } from "react-icons/ri";
import logo from "../assests/logo.png";
import { auth } from "../auth/firebase";
import "./SearchBar.css";
const SearchBar = ({ onSetShowSidebar }) => {
  const user = auth.currentUser;
  const [searchValue, setSearchValue] = useState("");
  const windowWidth = window.innerWidth;
  const isMobile = windowWidth < 620;
  const data = [
    {
      name: "Akash Manna",
      university: "Indian Institute of Technology Mumbai",
      domain: "Computer Science and Engineering",
    },
    {
      name: "Rahul",
      university: "IIT",
      domain: "Computer Science and Engineering",
    },
    {
      name: "Deepak Parihar",
      domain: "Computer Science and Engineering",
      university: "MIT",
    },
    {
      name: "Deepak",
      domain: "Computer Science and Engineering",
      university: "MIT",
    },
  ];
  const search = (searchItem) => {
    console.log(searchItem);
  };
  const shorterData = (data) => {
    return isMobile
      ? data
          .split(" ")
          .map((word) =>
            word.charAt(0) === word.charAt(0).toUpperCase()
              ? word.charAt(0)
              : ""
          )
          .join("")
      : data;
  };
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
      <div className="w-full lg:w-[40rem] sm:w-80 mt-4 sm:mt-0 sm:mr-14 relative  search-bar flex flex-col">
        <div className="search-inner">
          <input
            type="text"
            name="company_website"
            id="company_website"
            className="pl-8 py-2 pr-2 block w-full rounded-lg border-gray-300 bg-card"
            placeholder="Search for professors, colleges"
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                search(searchValue);
              }
            }}
          />
          <AiOutlineSearch
            className="w-5 h-5 search-icon left-3 top-0 absolute"
            onClick={() => {
              search(searchValue);
            }}
          />
        </div>

        <div className="dropdownSearch">
          {data
            .filter((item) => {
              const searchTerm = searchValue.toLowerCase();
              const fullName = item.name.toLowerCase();

              return (
                searchTerm &&
                fullName.startsWith(searchTerm) &&
                fullName !== searchTerm
              );
            })
            .slice(0, 10)
            .map((item) => {
              return (
                <div
                  key={item.name}
                  className="flex items-center justify-between p-2 searchEachItem"
                  onClick={() => {
                    search(item.name);
                  }}
                >
                  <div className="userData flex flex-row items-baseline">
                    <AiOutlineSearch className="w-5 h-5 pt-1" />
                    <div>{item.name} </div>
                    <div className="text-xs ">
                      <span>&nbsp; • {shorterData(item.university)}</span>
                    </div>
                    <div className="text-xs ">
                      &nbsp; • {shorterData(item.domain)}
                    </div>
                  </div>
                  <div className="profilePhoto">
                    <img src={logo} width="30px" />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
