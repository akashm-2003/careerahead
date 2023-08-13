import React from 'react'
import clsx from "clsx";
import SidebarIcons from '../assests/SidebarIcons';
import { useNavigate } from 'react-router-dom'
const MenuItem = ({ item: { id, title, notifications, endpoint }, setSelected, selected }) => {
  const navigate = useNavigate()
  console.log(id);
  return (
    <div onClick={() => { setSelected(id); navigate(endpoint) }}>
      <div
        className={clsx(
          "w-full mt-6 flex items-center px-3 sm:px-0 xl:px-3 justify-start sm:justify-center xl:justify-start sm:mt-6 xl:mt-3 cursor-pointer",
          selected === id ? "sidebar-item-selected" : "sidebar-item"
        )}
      >
        <SidebarIcons id={id} />
        <div className="block sm:hidden xl:block ml-2">{title}</div>
        <div className="block sm:hidden xl:block flex-grow" />
        {notifications && (
          <div className="flex sm:hidden xl:flex bg-pink-600  w-5 h-5 items-center justify-center rounded-full mr-2">
            <div className="text-white text-sm">{notifications}</div>
          </div>

        )}
      </div>
    </div>
  )
}

export default MenuItem