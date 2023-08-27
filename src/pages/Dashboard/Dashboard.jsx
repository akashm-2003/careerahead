import React from 'react'
import SearchBar from '../../components/SearchBar';
import TopResearcher from '../../components/ProfessorCard/ProfessorCard';
import Sidebar from '../../components/Sidebar';
import './Dashboard.css'
import CollegeCard from '../../components/CollegeCard/CollegeCard';
import ResearchPaperCardHome from '../../components/ResearchPaperCardHome/ResearchPaperCardHome';
import CollegeCardSkeleton from '../../components/CollegeCard/CollegeCardSkeleton';
import ResearchPaperCardHomeSkeleton from '../../components/ResearchPaperCardHome/ResearchPaperCardHomeSkeleton';
import ProfessorCard from '../../components/ProfessorCard/ProfessorCard';
import ProfessorCardSkeleton from '../../components/ProfessorCard/ProfessorCardSkeleton';
import { auth, db } from '../../auth/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { useEffect,useState } from 'react';
const Dashboard = ({ onSetShowSidebar, showSidebar, selected, setSelected }) => {
  const [teacherList,setTeacherList]=useState([])
  const [teacherLoading,setTeacherLoading]=useState(true)
  const getTeachers=async()=>{
    setTeacherLoading(true)
    const teachersCollectionRef = collection(db, "Teachers");
    const data = await getDocs(teachersCollectionRef);
    setTeacherList(data.docs.map((doc) => doc.data()))
    setTeacherLoading(false);
  }
  console.log(auth.currentUser);
  useEffect(() => {
    getTeachers();
  },[])
  return (
    <>
      <Sidebar showSidebar={showSidebar} onSetShowSidebar={onSetShowSidebar} selected={selected} setSelected={setSelected} />
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
                  <CollegeCardSkeleton />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row w-full lg:height90">
            <div className="flex-col w-full lg:w-2/3 p-2">
              <div className="collegeHeading">
                <p className='text-base sm:text-lg md:text-xl lg:text-2xl'>Colleges you Searched Past</p>
              </div>
              <div className="rounded-lg bg-card height30em professorContainerMainHome">
                <div className="professorCardHomeContainer">
                  <div className="professorCardHomeInnerContainer">
                    {!teacherLoading?teacherList.map((teacher)=>(<ProfessorCard {...teacher}/>)):
                    Array.from({length:8},()=> <ProfessorCardSkeleton/>)}
                  </div>
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
                    <ResearchPaperCardHomeSkeleton />
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
}

export default Dashboard