import React from "react";
import SearchBar from "../../components/SearchBar";
import { AiOutlineArrowRight } from "react-icons/ai";
import ResearcherCard from "../../components/ResearcherCard/ResearcherCard";
import ReactPaginate from "react-paginate";

const Professor = ({ onSidebarHide }) => {
  return (
    <div className="flex w-full">
      <div className="smallerDevice-container"></div>
      <div className="main-container">
        <SearchBar onSidebarHide={onSidebarHide} />
        {/* <div className="m-2 flex flex-col"> */}
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
        <div className="flex">
          {/* <ResearcherCard classes={"w-[400px] "} />
          <ResearcherCard classes={"w-[400px]"} />
          <ResearcherCard classes={"w-[400px]"} />
          <ResearcherCard classes={"w-[400px]"} /> */}
          {/* <ResearcherCard classes={'w-[400px]'}/> */}
          <ReactPaginate
            previousLabel={'<'}
            nextLabel={'>'}
            breakLabel={'...'}
            pageCount={5}
          />
        </div>

        {/* <div className="flex w-full bg-[#171717] text-white">Professor</div> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Professor;
