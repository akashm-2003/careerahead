import React,{useEffect, useState} from 'react'
import Sidebar from '../../components/Sidebar'
import SearchBar from '../../components/SearchBar'
import ResearchPaperCard from '../../components/ResearchPaperCard/ResearchPaperCard'
import './ResearchPaper.css'
import ResearchPaperCardSkeleton from '../../components/ResearchPaperCard/ResearchPaperCardSkeleton'
import { fetchPublications } from '../../data/ProfessorByCollege'
const ResearchPaper = ({ onSetShowSidebar, showSidebar, selected, setSelected }) => {

  const [publicationsIITBombay, setPublicationsIITBombay] = useState([]);
  const [publicationsIITDelhi, setPublicationsIITDelhi] = useState([]);
  const [publicationLoading, setPublicationLoading] = useState(true);
  const countOfProfessor = 4;
  const countOfPaper = 2;
  const collegeIITBombay = ["IIT Bombay"];
  const collegeIITDelhi = ["IIT Delhi"];
  const fetchPublication = async () => {
    setPublicationLoading(true);
    const publicationsData = await fetchPublications(
      collegeIITBombay,
      countOfProfessor,
      countOfPaper
    );
    const publicationsDataDelhi = await fetchPublications(collegeIITDelhi, countOfProfessor, countOfPaper);
    setPublicationsIITDelhi(publicationsDataDelhi);
    setPublicationsIITBombay(publicationsData);
    setPublicationLoading(false);
  };
  console.log(publicationsIITBombay);
  console.log(publicationsIITDelhi);
  useEffect(() => {
    fetchPublication()
    setSelected("2")
  }, [])
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

          {/* <ResearchPaperCard/> */}

          <div className="researchPaperContainer1 w-full  p-1">
            <div className="researchPaperHeading">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl pb-2 lg:pb-4">
                Recommended Research Paper
              </p>
            </div>
            <div className="rounded-lg bg-card p-2  h-fit">
              <div className="researchContent">
                <div className="researchScroll">
                  {!publicationLoading
                    ? publicationsIITBombay.map((publication) => (
                        <ResearchPaperCard publication={publication} />
                      ))
                    : Array.from({ length: 8 }, () => (
                        <ResearchPaperCardSkeleton />
                      ))}
                </div>
              </div>
            </div>
          </div>
          <div className="researchPaperContainer1 w-full  p-1">
            <div className="researchPaperHeading">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl pb-2 lg:pb-4">
                Research paper from IIT Delhi
              </p>
            </div>
            <div className="rounded-lg bg-card p-2  h-fit">
              <div className="researchContent">
                <div className="researchScroll">
                  {!publicationLoading
                    ? publicationsIITDelhi.map((publication) => (
                        <ResearchPaperCard publication={publication} />
                      ))
                    : Array.from({ length: 8 }, () => (
                        <ResearchPaperCardSkeleton />
                      ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResearchPaper