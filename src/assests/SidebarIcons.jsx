import React from 'react'
import {PiStudentBold} from 'react-icons/pi'
import {GiTakeMyMoney} from 'react-icons/gi'
import {AiFillInfoCircle} from 'react-icons/ai'
const SidebarIcons = ({id}) => {
    const icons = {
        0: (
          <>
            <path d="M12 19C10.067 19 8.31704 18.2165 7.05029 16.9498L12 12V5C15.866 5 19 8.13401 19 12C19 15.866 15.866 19 12 19Z" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
            />
          </>
        ),
        1: (
          <PiStudentBold size='25px'/>
        ),
        2: (
           <>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3 5C3 3.34315 4.34315 2 6 2H14C17.866 2 21 5.13401 21 9V19C21 20.6569 19.6569 22 18 22H6C4.34315 22 3 20.6569 3 19V5ZM13 4H6C5.44772 4 5 4.44772 5 5V19C5 19.5523 5.44772 20 6 20H18C18.5523 20 19 19.5523 19 19V9H13V4ZM18.584 7C17.9413 5.52906 16.6113 4.4271 15 4.10002V7H18.584Z"
            />
          </>
        ),
        3: (
          <>
            <path d="M19 22H5C3.89543 22 3 21.1046 3 20V6C3 4.89543 3.89543 4 5 4H7V2H9V4H15V2H17V4H19C20.1046 4 21 4.89543 21 6V20C21 21.1046 20.1046 22 19 22ZM5 10V20H19V10H5ZM5 6V8H19V6H5ZM17 14H7V12H17V14Z" />
          </>
        ),
        4: (
          <GiTakeMyMoney size='25px'/>
        ),
        5: (
          <AiFillInfoCircle size='25px' />
        )
        
      };
      return (
        <svg
          className="w-8 h-8 xl:w-5 xl:h-5"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          {icons[id]}
        </svg>
      );
}

export default SidebarIcons