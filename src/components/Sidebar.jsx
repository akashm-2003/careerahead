import React, { useState } from 'react'
import clsx from 'clsx';
import { useSpring, config, animated } from "@react-spring/web";
import { sidebarItems } from '../data/data';
import MenuItem from './MenuItem';
import logo from '../assests/logo.png'
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { BiInfoCircle } from 'react-icons/bi';
const Sidebar = ({ onSetShowSidebar, showSidebar }) => {
    const { dashOffset, indicatorWidth, precentage } = useSpring({
        dashOffset: 26.015,
        indicatorWidth: 70,
        precentage: 77,
        from: { dashOffset: 113.113, indicatorWidth: 0, precentage: 0 },
        config: config.molasses,
    });
    const [selected, setSelected] = useState("0");
    const onClickIcon = () => {
        console.log('hi');
    }
    return (
        <div
            className={clsx(
                "fixed inset-y-0 left-0 bg-card w-full sm:w-20 xl:w-60 sm:flex flex-col z-10",
                showSidebar ? "flex" : "hidden"
            )}
        >
            <div className="flex-shrink-0 overflow-hidden p-2">
                <div className="flex items-center h-full sm:justify-center xl:justify-start p-2 sidebar-separator-top">
                    <button onClick={onClickIcon} type="button" className="w-10 h-10">
                        <img src={logo} alt="icon" className="w-full h-full" />
                    </button>
                    <div className="block sm:hidden xl:block ml-2 font-bold text-xl text-white">
                        Career Ahead
                    </div>
                    <div className="flex-grow sm:hidden xl:block" />

                    <button onClick={()=>{onSetShowSidebar(false)}} type="button" className="block sm:hidden">
                        <AiOutlineCloseCircle className="w-full h-full" size='25px' />
                    </button>
                </div>
            </div>
            <div className="flex-grow overflow-x-hidden overflow-y-auto flex flex-col">
                {sidebarItems[0].map((i) => (
                    <MenuItem
                        key={i.id}
                        item={i}
                        setSelected={setSelected}
                        selected={selected}
                    />
                ))}
            </div>

            <div className="flex-shrink-0 overflow-hidden p-2">
                <div className="flex items-center h-full sm:justify-center xl:justify-start p-2 sidebar-separator-bottom">
                    <img src={logo} alt="profile" className="w-10 h-10" />
                    <div className="block sm:hidden xl:block ml-2 font-bold ">
                        Akash Manna
                    </div>
                    <div className="flex-grow block sm:hidden xl:block xl:ml-4" >
                        <BiInfoCircle size='20px' onClick={onClickIcon} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar