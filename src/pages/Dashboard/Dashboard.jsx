import React from 'react'
import SearchBar from '../../components/SearchBar';
const Dashboard = ({ onSidebarHide }) => {
  return (
    <div className="flex w-full">
      <div className="smallerDevice-container">
      </div>
      <div className="main-container">
        <SearchBar onSidebarHide={onSidebarHide} />
       


      </div>
    </div>
  )
}

export default Dashboard