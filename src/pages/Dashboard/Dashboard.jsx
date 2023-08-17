import React from 'react' 
import SearchBar from '../../components/SearchBar';
import TopResearcher from '../../components/ResearcherCard/ResearcherCard';
import Sidebar from '../../components/Sidebar';
import './Dashboard.css'
const Dashboard = ({ onSetShowSidebar,showSidebar }) => {
  return (
    <>
    <Sidebar showSidebar={showSidebar} onSetShowSidebar={onSetShowSidebar}/>
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

        <div className="w-full p-2">
          <div className="rounded-lg bg-card sm:h-80 h-60">
            <div className="universityContent">

            </div>
          </div>
        </div>


        <div className="w-full p-2 lg:w-1/3">
          <div className="rounded-lg bg-card h-80">

          </div>
        </div>

        <div className="w-full p-2 lg:w-1/3">
          <div className="rounded-lg bg-card h-80">

          </div>
        </div>


        <div className="w-full p-2 lg:w-1/3">
          <div className="rounded-lg bg-card h-80">

          </div>
        </div>


        <div className="w-full p-2 lg:w-1/3">
          <div className="rounded-lg bg-card overflow-hidden h-80">

          </div>
        </div>


      </div>
    </div>
    </>
  )
}

export default Dashboard