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
import { getProfessorsFromAllColleges } from "../../data/ProfessorByCollege";

const Professor = ({
  showSidebar,
  onSetShowSidebar,
  selected,
  setSelected,
}) => {
  const listOfColleges = [
    "IIT Bombay",
    "IIT Delhi",
    "IIT GandhiNagar",
    "IIT Goa",
  ];
  const [allProfessor, setAllProfessor] = useState([]);
  const [teacherLoading, setTeacherLoading] = useState(true);
  const getTeachers = async () => {
    setTeacherLoading(true);
    const data = await getProfessorsFromAllColleges(listOfColleges, 10);
    setAllProfessor(data);
    setTeacherLoading(false);
  };
  useEffect(() => {
    getTeachers();
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
                Professors in Bombay
              </p>
            </div>

            {/* <div className="rounded-lg bg-card sm:h-30 h-40"> */}
            <div className="rounded-lg bg-card ">
              <div className="professorContent">
                <div className="professorScroll">
                  {/* {!teacherLoading && allProfessor["AI"]
                    ? allProfessor["AI"].map((teacher) => (
                        <ProfessorCard
                          key={teacher.id}
                          teacher={teacher}
                          domain={teacher.details}
                        />
                      ))
                    : Array.from({ length: 5 }, () => (
                        <ProfessorCardSkeleton />
                      ))} */}
                  {!teacherLoading
                    ? allProfessor
                        .slice(0, 10)
                        .map((teacher) => <ProfessorCard teacher={teacher} />)
                    : Array.from({ length: 8 }, () => (
                        <ProfessorCardSkeleton />
                      ))}
                </div>
              </div>
            </div>
          </div>

          <div className="collegesDashboardContainer w-full p-2">
            <div className="collegeHeading">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl">
                Professors in Delhi
              </p>
            </div>

            {/* <div className="rounded-lg bg-card sm:h-30 h-40"> */}
            <div className="rounded-lg bg-card ">
              <div className="professorContent">
                <div className="professorScroll">
                  {/* {!teacherLoading && allProfessor["ML"]
                    ? allProfessor["ML"].map(
                        (teacher) => (
                          console.log(teacher),
                          (
                            <ProfessorCard
                              key={teacher.id}
                              teacher={teacher}
                              domain={teacher.details}
                            />
                          )
                        )
                      )
                    : Array.from({ length: 5 }, () => (
                        <ProfessorCardSkeleton />
                      ))} */}
                  {!teacherLoading
                    ? allProfessor
                        .slice(10, 20)
                        .map((teacher) => <ProfessorCard teacher={teacher} />)
                    : Array.from({ length: 8 }, () => (
                        <ProfessorCardSkeleton />
                      ))}
                </div>
              </div>
            </div>
          </div>

          <div className="collegesDashboardContainer w-full p-2">
            <div className="collegeHeading">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl">
                Professors in GandhiNagar
              </p>
            </div>

            {/* <div className="rounded-lg bg-card sm:h-30 h-40"> */}
            <div className="rounded-lg bg-card ">
              <div className="professorContent">
                <div className="professorScroll">
                  {/* {!teacherLoading && allProfessor["NLP"]
                    ? allProfessor["NLP"].map((teacher) => (
                        <ProfessorCard
                          key={teacher.id}
                          teacher={teacher}
                          domain={teacher.details}
                        />
                      ))
                    : Array.from({ length: 5 }, () => (
                        <ProfessorCardSkeleton />
                      ))} */}
                  {!teacherLoading
                    ? allProfessor
                        .slice(20, 30)
                        .map((teacher) => <ProfessorCard teacher={teacher} />)
                    : Array.from({ length: 8 }, () => (
                        <ProfessorCardSkeleton />
                      ))}
                </div>
              </div>
            </div>
          </div>

          <div className="collegesDashboardContainer w-full p-2">
            <div className="collegeHeading">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl">
                Professors in Goa
              </p>
            </div>

            {/* <div className="rounded-lg bg-card sm:h-30 h-40"> */}
            <div className="rounded-lg bg-card ">
              <div className="professorContent">
                <div className="professorScroll">
                  {/* {!teacherLoading && allProfessor["DB"]
                    ? allProfessor["DB"].map((teacher) => (
                        <ProfessorCard
                          key={teacher.id}
                          teacher={teacher}
                          domain={teacher.details}
                        />
                      ))
                    : Array.from({ length: 5 }, () => (
                        <ProfessorCardSkeleton />
                      ))} */}
                  {!teacherLoading
                    ? allProfessor
                        .slice(30, 40)
                        .map((teacher) => <ProfessorCard teacher={teacher} />)
                    : Array.from({ length: 8 }, () => (
                        <ProfessorCardSkeleton />
                      ))}
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
