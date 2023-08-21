import React from "react";
import SearchBar from "../../components/SearchBar";
import { AiOutlineArrowRight } from "react-icons/ai";
import ResearcherCard from "../../components/ResearcherCard/ResearcherCard";
import Pagination from "../../components/Pagination";
import Carousel from "../../components/Carousel/Carousel";
import Sidebar from "../../components/Sidebar";

// const slides = [
//   <div className="w-full flex flex-row flex-shrink-0" >
//     <ResearcherCard />
//     <ResearcherCard />
//     <ResearcherCard />
//   </div>,
//   <div className="w-full flex flex-row flex-shrink-0" >
//     <ResearcherCard />
//     <ResearcherCard />
//     <ResearcherCard />
//   </div>,
// ];

const slides = [
  <ResearcherCard classes={" flex-shrink-0 "} name={"Professor1"} />,
  <ResearcherCard classes={" flex-shrink-0 "} name={"Professor2"} />,
  <ResearcherCard classes={" flex-shrink-0 "} name={"Professor3"} />,
  <ResearcherCard classes={" flex-shrink-0 "} name={"Professor4"} />,
  <ResearcherCard classes={" flex-shrink-0 "} name={"Professor5"} />,
  <ResearcherCard classes={" flex-shrink-0 "} name={"Professor6"} />,
  <ResearcherCard classes={" flex-shrink-0 "} name={"Professor7"} />,
  <ResearcherCard classes={" flex-shrink-0 "} name={"Professor8"} />,
];

const Professor = ({ showSidebar, onSidebarHide, onSetShowSidebar }) => {
  return (
    <>
      <Sidebar showSidebar={showSidebar} onSetShowSidebar={onSetShowSidebar} />
      <div className="flex w-full">
        <div className="smallerDevice-container"></div>
        <div className="main-container">
          <SearchBar onSetShowSidebar={onSetShowSidebar} />
          <div className="m-2 flex flex-col w-full ">
            <div className=" pt-2 pb-2 flex w-full ">
              <div className="flex flex-row justify-between w-full">
                <h1 className="text-2xl font-bold text-white">
                  Professors in your selected domain
                </h1>
                <div className=" text-[#676767] hover:text-[#a1a0a0] flex flex-row right-0">
                  <p className="mr-2 max-sm:hidden">See all</p>
                  <AiOutlineArrowRight className="pt-2 pr-2 text-xl max-sm:text-3xl" />
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full bg-contain bg-bgCard">
              <div className="w-full flex flex-row flex-shrink-0 justify-between items-center overflow-x-auto scroll-m-1">
                {slides.map((item) => {
                  return item;
                })}
                {/* <Carousel slides={slides}></Carousel> */}
              </div>
            </div>
          </div>
          <div className="m-2 flex flex-col w-full">
            <div className=" pt-2 pb-2 flex w-full ">
              <div className="flex flex-row justify-between w-full">
                <h1 className="text-2xl font-bold text-white">
                  Professors you may know
                </h1>
                <div className=" text-[#676767] hover:text-[#a1a0a0] flex flex-row right-0">
                  <p className="mr-2 max-sm:hidden">See all</p>
                  <AiOutlineArrowRight className="pt-2 pr-2 text-xl max-sm:text-3xl" />
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full bg-contain bg-bgCard">
              {/* <div className="flex flex-row w-full justify-between items-center">
              classes={"w-full lg:w-1/3 md:w-1/2 sm:w-full"}
              <ResearcherCard />
              <ResearcherCard />
              <ResearcherCard />
            </div> */}
              <div className="w-full flex flex-row flex-shrink-0 justify-between items-center overflow-x-auto scroll-m-1">
                {slides.map((item) => {
                  return item;
                })}
                {/* <Carousel slides={slides}></Carousel> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Professor;
