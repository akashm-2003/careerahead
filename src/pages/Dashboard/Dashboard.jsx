import React from 'react'
import SearchBar from '../../components/SearchBar';
import TopResearcher from '../../components/ResearcherCard/ResearcherCard';
import Sidebar from '../../components/Sidebar';
import './Dashboard.css'
import CollegeCard from '../../components/CollegeCard/CollegeCard';
import ResearchPaperCardHome from '../../components/ResearchPaperCardHome/ResearchPaperCardHome';
const Dashboard = ({ onSetShowSidebar, showSidebar }) => (
  <>
    <Sidebar showSidebar={showSidebar} onSetShowSidebar={onSetShowSidebar} />
    <div className="flex w-full">
      <div className="smallerDevice-container">
      </div>
      <div className="main-container">
        <SearchBar onSetShowSidebar={onSetShowSidebar} />
        {/* {employeeData.map(
        ({
          id,
          name,
          position,
          transactions,
          rise,
          tasksCompleted,
          imgId,
        }) => (
          <NameCard
            key={id}
            id={id}
            name={name}
            position={position}
            transactionAmount={transactions}
            rise={rise}
            tasksCompleted={tasksCompleted}
            imgId={imgId}
          />
        )
      )} */}
        <div className="collegesDashboardContainer w-full p-2">
          <div className="collegeHeading">
            <p className='text-base sm:text-lg md:text-xl lg:text-2xl'>Colleges in your favourite domain</p>
          </div>

          <div className="rounded-lg bg-card sm:h-30 h-30">
            <div className="universityContent">
              <div className="universityScroll">
                <CollegeCard />
                <CollegeCard />
                <CollegeCard />
                <CollegeCard />
                <CollegeCard />
                <CollegeCard />
                <CollegeCard />
                <CollegeCard />
                <CollegeCard />
                <CollegeCard />
                <CollegeCard />
                <CollegeCard />
                <CollegeCard />
                <CollegeCard />
                <CollegeCard />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row w-full lg:height90">
            <div className="flex-col w-full lg:w-2/3 p-2">
              <div className="collegeHeading">
                <p className='text-base sm:text-lg md:text-xl lg:text-2xl'>Colleges you Searched Past</p>
              </div>
              <div className="rounded-lg bg-card height30em">

                <div className="flex px-4">
                  {/* <ResearcherCard /> */}
                

                </div>
              </div>
            </div>

          <div className="w-full p-2 lg:w-1/3 h-full flex flex-col">
            <div className="collegeHeading flex">
              <p className='text-base sm:text-lg md:text-xl lg:text-2xl '>Researcher Paper</p>
            </div>
            <div className="rounded-lg bg-card  researchCardMainHome  height30em">
              <div className="researchCardContentHome">
                <div className="researchCardScrollHome">
                  <ResearchPaperCardHome />
                  <ResearchPaperCardHome />
                  <ResearchPaperCardHome />
                  <ResearchPaperCardHome />
                  <ResearchPaperCardHome />
                </div>
              </div>
            </div>
          </div>
        </div>




        {/* <div className="w-full p-2 lg:w-1/3">
          <div className="rounded-lg bg-card overflow-hidden h-80">

          </div>
        </div> */}



      </div>
    </div>
  </>
)

export default Dashboard