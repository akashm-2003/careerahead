import React from "react";
import SearchBar from "../../components/SearchBar";
import { AiOutlineArrowRight } from "react-icons/ai";
import ResearcherCard from "../../components/ResearcherCard/ResearcherCard";
import ReactPaginate from "react-paginate";
import Pagination from "../../components/Pagination";

const Professor = ({ onSidebarHide }) => {
  return (
    <div className="flex w-full">
      <div className="smallerDevice-container"></div>
      <div className="main-container">
        <SearchBar onSidebarHide={onSidebarHide} />
        <div className="m-2 flex flex-col w-full">
          <div className=" pt-2 pb-2 flex w-full ">
            <div className="flex flex-row justify-between w-full">
              <h1 className="text-2xl font-bold text-white ">
                Professors in your selected domain
              </h1>
              <div className=" text-[#676767] hover:text-[#a1a1a0] flex flex-row right-0">
                <p className="mr-2">See all</p>
                <AiOutlineArrowRight className="pt-2 pr-2 text-xl" />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full">
            <div className="flex flex-row w-full justify-between items-center">
              {/* classes={"w-full lg:w-1/3 md:w-1/2 sm:w-full"} */}
              <ResearcherCard />
              <ResearcherCard />
              <ResearcherCard />
            </div>
            {/* DO NOTE : while requesting data request 3 professors per page for desktop size and 1 for ipad and phone size  */}
            {/* currently pages are static for dynamic fetching and associating it with pages refer https://www.youtube.com/watch?v=GWsS2eYFZOk&t=16s */}
            <Pagination />
          </div>
        </div>
        <div className="m-2 flex flex-col w-full">
          <div className=" pt-2 pb-2 flex w-full ">
            <div className="flex flex-row justify-between w-full">
              <h1 className="text-2xl font-bold text-white ">
                Professors you may know
              </h1>
              <div className=" text-[#676767] hover:text-[#a1a1a0] flex flex-row right-0">
                <p className="mr-2">See all</p>
                <AiOutlineArrowRight className="pt-2 pr-2 text-xl" />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full">
            <div className="flex flex-row w-full justify-between items-center">
              {/* classes={"w-full lg:w-1/3 md:w-1/2 sm:w-full"} */}
              <ResearcherCard />
              <ResearcherCard />
              <ResearcherCard />
            </div>
            {/* DO NOTE : while requesting data request 3 professors per page for desktop size and 1 for ipad and phone size  */}
            {/* currently pages are static for dynamic fetching and associating it with pages refer https://www.youtube.com/watch?v=GWsS2eYFZOk&t=16s */}
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Professor;
