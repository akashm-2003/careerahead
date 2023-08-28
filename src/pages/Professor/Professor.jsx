import React, { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar";
import { AiOutlineArrowRight } from "react-icons/ai";
import ResearcherCard from "../../components/ProfessorCard/ProfessorCard";
import Pagination from "../../components/Pagination";
import Carousel from "../../components/Carousel/Carousel";
import Sidebar from "../../components/Sidebar";
import ProfessorCard from "../../components/ProfessorCard/ProfessorCard";
import ProfessorCardSkeleton from "../../components/ProfessorCard/ProfessorCardSkeleton";
import "./Professor.css";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../auth/firebase";


const Professor = ({ showSidebar, onSetShowSidebar, selected, setSelected }) => {
  const teachersCollectionRef = collection(db, "Teachers");
  const [teachers,setTeachers]=useState({}) 
  const [teachersLoading,setTeachersLoading]=useState(true)
  const getTeachersDomainWise = async (domain) => {
    const teachersData= query(teachersCollectionRef, where("details", "==", domain));
    const querySnapshot = await getDocs(teachersData);
    const data =[]
    querySnapshot.forEach((doc) => {
      data.push(doc.data())
    });
    // setTeachers({[domain]:data})
    setTeachers((prev)=>({...prev,[domain]:data}))
  }
  const aiTeachers=async (key)=>{
    await getTeachersDomainWise('AI')
  }
  const mlTeachers=async ()=>{
    await getTeachersDomainWise('ML')
  }
  const nlpTeachers=async ()=>{
    await getTeachersDomainWise('NLP')
  }
  const dbTeachers=async ()=>{
    await getTeachersDomainWise('DB')
    setTeachersLoading(false)
  }
console.log(teachers);
  useEffect(() => {
    const timer = setTimeout(() => {
      aiTeachers()
      mlTeachers()
      nlpTeachers()
      dbTeachers()
    }, 1000);
    return () => clearTimeout(timer);
   
  },[])
  return (
    <>
      <Sidebar showSidebar={showSidebar} onSetShowSidebar={onSetShowSidebar} selected={selected} setSelected={setSelected} />
      <div className="flex w-full">
        <div className="smallerDevice-container"></div>
        <div className="main-container">
          <SearchBar onSetShowSidebar={onSetShowSidebar} />


          <div className="collegesDashboardContainer w-full p-2">
            <div className="collegeHeading">
              <p className='text-base sm:text-lg md:text-xl lg:text-2xl'>Professors in AI</p>
            </div>

            {/* <div className="rounded-lg bg-card sm:h-30 h-40"> */}
            <div className="rounded-lg bg-card ">
              <div className="professorContent">
                <div className="professorScroll">
                  {!teachersLoading&&teachers['AI']?teachers['AI'].map((teacher)=>(
                    <ProfessorCard key={teacher.id} {...teacher} />
                  )):Array.from({length:5},()=> <ProfessorCardSkeleton/>)}
                </div>
              </div>
            </div>
          </div>


          <div className="collegesDashboardContainer w-full p-2">
            <div className="collegeHeading">
              <p className='text-base sm:text-lg md:text-xl lg:text-2xl'>Professors in ML</p>
            </div>

            {/* <div className="rounded-lg bg-card sm:h-30 h-40"> */}
            <div className="rounded-lg bg-card ">
              <div className="professorContent">
                <div className="professorScroll">
                  {!teachersLoading&&teachers['ML']?teachers['ML'].map((teacher)=>(
                    <ProfessorCard key={teacher.id} {...teacher} />
                  )):Array.from({length:5},()=> <ProfessorCardSkeleton/>)}
                </div>
              </div>
            </div>
          </div>


          <div className="collegesDashboardContainer w-full p-2">
            <div className="collegeHeading">
              <p className='text-base sm:text-lg md:text-xl lg:text-2xl'>Professors in NLP</p>
            </div>

            {/* <div className="rounded-lg bg-card sm:h-30 h-40"> */}
            <div className="rounded-lg bg-card ">
              <div className="professorContent">
                <div className="professorScroll">
                  {!teachersLoading&&teachers['NLP']?teachers['NLP'].map((teacher)=>(
                    <ProfessorCard key={teacher.id} {...teacher} />
                  )):Array.from({length:5},()=> <ProfessorCardSkeleton/>)}
                </div>
              </div>
            </div>
          </div>



          <div className="collegesDashboardContainer w-full p-2">
            <div className="collegeHeading">
              <p className='text-base sm:text-lg md:text-xl lg:text-2xl'>Professors in DB</p>
            </div>

            {/* <div className="rounded-lg bg-card sm:h-30 h-40"> */}
            <div className="rounded-lg bg-card ">
              <div className="professorContent">
                <div className="professorScroll">
                  {!teachersLoading&&teachers['DB']?teachers['DB'].map((teacher)=>(
                    <ProfessorCard key={teacher.id} {...teacher} />
                  )):Array.from({length:5},()=> <ProfessorCardSkeleton/>)}
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

