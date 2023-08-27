import React from "react";
import SearchBar from "../../components/SearchBar";
import { AiOutlineArrowRight } from "react-icons/ai";
import ResearcherCard from "../../components/ProfessorCard/ProfessorCard";
import Pagination from "../../components/Pagination";
import Carousel from "../../components/Carousel/Carousel";
import Sidebar from "../../components/Sidebar";
import ProfessorCard from "../../components/ProfessorCard/ProfessorCard";
import ProfessorCardSkeleton from "../../components/ProfessorCard/ProfessorCardSkeleton";
import "./Professor.css";


const Professor = ({ showSidebar, onSetShowSidebar, selected, setSelected }) => {
  return (
    <>
      <Sidebar showSidebar={showSidebar} onSetShowSidebar={onSetShowSidebar} selected={selected} setSelected={setSelected} />
      <div className="flex w-full">
        <div className="smallerDevice-container"></div>
        <div className="main-container">
          <SearchBar onSetShowSidebar={onSetShowSidebar} />


          <div className="collegesDashboardContainer w-full p-2">
            <div className="collegeHeading">
              <p className='text-base sm:text-lg md:text-xl lg:text-2xl'>Professors in your favourite domain</p>
            </div>

            <div className="rounded-lg bg-card sm:h-30 h-40">
              <div className="professorContent">
                <div className="professorScroll">
                  <ProfessorCardSkeleton />
                  <ProfessorCard />
                  <ProfessorCard />
                  <ProfessorCard />
                  <ProfessorCard />
                  <ProfessorCard />
                </div>
              </div>
            </div>
          </div>


          <div className="collegesDashboardContainer w-full p-2">
            <div className="collegeHeading">
              <p className='text-base sm:text-lg md:text-xl lg:text-2xl'>Professors in your DJCSI</p>
            </div>

            <div className="rounded-lg bg-card sm:h-30 h-40">
              <div className="professorContent">
                <div className="professorScroll">
                  <ProfessorCard />
                  <ProfessorCard />
                  <ProfessorCard />
                  <ProfessorCard />
                  <ProfessorCard />
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
      </>
      );

};

      export default Professor;

