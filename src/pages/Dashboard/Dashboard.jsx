import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../auth/firebase";
import CollegeCard from "../../components/CollegeCard/CollegeCard";
import CollegeCardSkeleton from "../../components/CollegeCard/CollegeCardSkeleton";
import ProfessorCard from "../../components/ProfessorCard/ProfessorCard";
import ProfessorCardSkeleton from "../../components/ProfessorCard/ProfessorCardSkeleton";
import ResearchPaperCardHome from "../../components/ResearchPaperCardHome/ResearchPaperCardHome";
import ResearchPaperCardHomeSkeleton from "../../components/ResearchPaperCardHome/ResearchPaperCardHomeSkeleton";
import SearchBar from "../../components/SearchBar";
import Sidebar from "../../components/Sidebar";
import {
  fetchPublications,
  getProfessorsByCollege,
  listOfColleges,
} from "../../data/ProfessorByCollege";
import "./Dashboard.css";
const Dashboard = ({
  onSetShowSidebar,
  showSidebar,
  selected,
  setSelected,
}) => {
  const [collegeList, setCollegeList] = useState([]);
  const [collegeLoading, setCollegeLoading] = useState(true);
  const collegesCollectionRef = collection(db, "Colleges");
  const getColleges = async () => {
    try {
      setCollegeLoading(true);
      const collegeData = query(
        collegesCollectionRef,
        where("location", "==", "India")
      );
      const querySnapshot = await getDocs(collegeData);
      // setCollegeList()
      const data = [];
      setCollegeLoading(false);
      querySnapshot &&
        querySnapshot.forEach((doc) => {
          // data.push(doc.data())
          data.push(doc.data());
        });
      setCollegeList(data);
    } catch (err) {
      console.log(err);
    }
  };
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     getColleges();
  //   }, 1000);
  //   return () => clearTimeout(timer);
  // }, []);

  // Teacher Data
  const [teacherList, setTeacherList] = useState([]);
  const [teacherLoading, setTeacherLoading] = useState(true);
  const getTeachers = async () => {
    setTeacherLoading(true);
    for (const college of listOfColleges) {
      const data = await getProfessorsByCollege(college, 2);
      setTeacherList((prev) => [...prev, ...data]);
    }
    setTeacherLoading(false);
  };

  // Publication Data
  const [publications, setPublications] = useState([]);
  const [publicationLoading, setPublicationLoading] = useState(true);
  const countOfProfessor = 5;
  const countOfPaper = 2;
  const college = ["IIT Bombay", "IIT Delhi"];
  const fetchPublication = async () => {
    setPublicationLoading(true);
    const publicationsData = await fetchPublications(
      college,
      countOfProfessor,
      countOfPaper
    );
    setPublications(publicationsData);
    setPublicationLoading(false);
  };
  console.log(publications);
  useEffect(() => {
    getTeachers();
    fetchPublication();
  }, []);
  return (
    <>
      <Sidebar
        showSidebar={showSidebar}
        onSetShowSidebar={onSetShowSidebar}
        selected={selected}
        setSelected={setSelected}
      />
      <div className="flex w-full">
        <div className="smallerDevice-container"></div>
        <div className="main-container">
          <SearchBar onSetShowSidebar={onSetShowSidebar} />

          <div className="collegesDashboardContainer w-full p-2">
            <div className="collegeHeading">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl">
                Colleges in your favourite domain
              </p>
            </div>

            <div className="rounded-lg bg-card sm:h-30 h-30">
              <div className="universityContent">
                <div className="universityScroll">
                  {!collegeLoading && collegeList
                    ? collegeList.map((college) => <CollegeCard {...college} />)
                    : Array.from({ length: 15 }, () => <CollegeCardSkeleton />)}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row w-full lg:height90">
            <div className="flex-col w-full lg:w-2/3 p-2">
              <div className="collegeHeading">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl">
                  Colleges you Searched Past
                </p>
              </div>
              <div className="rounded-lg bg-card height30em professorContainerMainHome">
                <div className="professorCardHomeContainer">
                  <div className="professorCardHomeInnerContainer">
                    {!teacherLoading
                      ? teacherList.map((teacher) => (
                          <ProfessorCard teacher={teacher} />
                        ))
                      : Array.from({ length: 8 }, () => (
                          <ProfessorCardSkeleton />
                        ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full p-2 lg:w-1/3 h-full flex flex-col">
              <div className="collegeHeading flex">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl ">
                  Researcher Paper
                </p>
              </div>
              <div className="rounded-lg bg-card  researchCardMainHome  height30em">
                <div className="researchCardContentHome w-full">
                  <div className="researchCardScrollHome w-full">
                    {!publicationLoading
                      ? publications.map((publication) => (
                          <ResearchPaperCardHome publication={publication} />
                        ))
                      : Array.from({ length: 6 }, () => (
                          <ResearchPaperCardHomeSkeleton />
                        ))}
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
  );
};

export default Dashboard;
