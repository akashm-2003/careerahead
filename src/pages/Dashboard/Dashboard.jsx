import React from 'react'
import SearchBar from '../../components/SearchBar';
import TopResearcher from '../../components/ResearcherCard/ResearcherCard';
const Dashboard = ({ onSidebarHide }) => {
  return (
    <div className="flex w-full">
      <div className="smallerDevice-container">
      </div>
      <div className="main-container">
        <SearchBar onSidebarHide={onSidebarHide} />
        {/* Do pass these classes as props when calling the component in dashboard */}
        {/* <TopResearcher classes={"w-full lg:w-1/3"} /> */}
        <TopResearcher />
      </div>
    </div>
  )
}

export default Dashboard