import React,{useEffect} from 'react'
import Sidebar from '../../components/Sidebar'
import SearchBar from '../../components/SearchBar'
import ResearchPaperCard from '../../components/ResearchPaperCard/ResearchPaperCard'
import './ResearchPaper.css'
import ResearchPaperCardSkeleton from '../../components/ResearchPaperCard/ResearchPaperCardSkeleton'
const ResearchPaper = ({ onSetShowSidebar, showSidebar, selected, setSelected }) => {
  useEffect(() => {
    setSelected("2")
  }, [])
  return (
    <>
      <Sidebar showSidebar={showSidebar} onSetShowSidebar={onSetShowSidebar} selected={selected} setSelected={setSelected} />
      <div className="flex w-full">
        <div className="smallerDevice-container">
        </div>
        <div className="main-container">
          <SearchBar onSetShowSidebar={onSetShowSidebar} />
          {/* <ResearchPaperCard/> */}


          <div className="researchPaperContainer1 w-full  p-1">
            <div className="researchPaperHeading">
              <p className='text-base sm:text-lg md:text-xl lg:text-2xl pb-2 lg:pb-4'>Recommended Research Paper</p>
            </div>
            <div className="rounded-lg bg-card p-2  h-fit">
              <div className="researchContent">
                <div className="researchScroll">
                  <ResearchPaperCard />
                 <ResearchPaperCardSkeleton/>
                 <ResearchPaperCardSkeleton/>
                 <ResearchPaperCardSkeleton/>
                 <ResearchPaperCardSkeleton/>
                 <ResearchPaperCardSkeleton/>
                 <ResearchPaperCardSkeleton/>
                 <ResearchPaperCardSkeleton/>
                 <ResearchPaperCardSkeleton/>
                </div>
              </div>
            </div>
          </div>
          <div className="researchPaperContainer1 w-full  p-1">
            <div className="researchPaperHeading">
              <p className='text-base sm:text-lg md:text-xl lg:text-2xl pb-2 lg:pb-4'>Research paper Based On AI</p>
            </div>
            <div className="rounded-lg bg-card p-2  h-fit">
              <div className="researchContent">
                <div className="researchScroll">
                  <ResearchPaperCard />
                  <ResearchPaperCard />
                  <ResearchPaperCard />
                  <ResearchPaperCard />
                  <ResearchPaperCard />
                  <ResearchPaperCard />
                  <ResearchPaperCard />
                  <ResearchPaperCard />
                  <ResearchPaperCard />
                  <ResearchPaperCard />
                  <ResearchPaperCard />
                </div>
              </div>
            </div>
          </div>





        </div>
      </div>
    </>
  )
}

export default ResearchPaper