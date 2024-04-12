import { useEffect, useRef, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { RiArrowDropRightFill, RiMenu3Fill } from "react-icons/ri";
import logo from "../assests/logo.png";
import { auth } from "../auth/firebase";
import "./SearchBar.css";
import fetchProfessorsByNames from "../data/ProfessorByCollege";
import { NavLink } from "react-router-dom";
const SearchBar = ({ onSetShowSidebar }) => {
  const user = auth.currentUser;
  const windowWidth = window.innerWidth;
  const isMobile = windowWidth < 620;
  const searchValue =useRef("");
  const [data, setData] = useState([]);
  const currentDate = new Date();
  const options = { month: "short", day: "numeric" };
  const formattedDate = currentDate.toLocaleDateString(undefined, options);
  // console.log(data);
  const search = async (searchItem) => {
    console.log(searchItem);
    const response = await fetchProfessorsByNames(searchItem);
    console.log(response);
    setData(response);
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
            <div className="ml-2">{}</div>
            

            <div className="ml-{0.2em}">{formattedDate}</div>
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
              // setSearchValue(e.target.value);
              searchValue.current=e.target.value;
              search(searchValue.current);
              console.log("searching:", searchValue.current);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                search(searchValue.current);
              }
            }}
          />
          <AiOutlineSearch
            className="w-5 h-5 search-icon left-3 top-0 absolute"
            onClick={() => {
              search(searchValue.current);
            }}
          />
        </div>

        <div className="dropdownSearch">
          {data &&
            data.map((item) => {
              return (
                <NavLink
                  to={`/college/${item?.college_name.replace(
                    " ",
                    "%20"
                  )}/professorprofile/${item.id}`}
                >
                  <div
                    key={item.professor_name}
                    className="flex items-center justify-between p-2 searchEachItem"
                    onClick={() => {
                      search(item.professor_name);
                    }}
                  >
                    <div className="userData flex flex-row items-baseline">
                      <AiOutlineSearch className="w-5 h-5 pt-1" />
                      <div>{item.professor_name} </div>
                      <div className="text-xs ">
                        <span>&nbsp; • {shorterData(item.college_name)}</span>
                      </div>
                      <div className="text-xs ">
                        &nbsp; • {shorterData(item?.interests[0])}
                      </div>
                    </div>
                    <div className="profilePhoto">
                      <img src={logo} width="30px" />
                    </div>
                  </div>
                </NavLink>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
