import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import "./header.css"
import logo from "../../images/logo.png"
import { IoLanguage } from "react-icons/io5";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdMenu } from "react-icons/md";
import 'react-modern-drawer/dist/index.css'
import Drawer from 'react-modern-drawer'
function Header(props) {
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
    return (
        <>
            <nav className='h-[70px] sticky top-0 transition-all border-b-slate-300 duration-300  md:h-24 max-w-screen-xl mx-auto px-3 border-b-[1px]  flex items-center justify-between flex-wrap w-full'>
                <Link to={"/"}>
                    <img className='h-10 md:h-16 filter contrast-more' alt='logo' src={logo} />
                </Link>
                <div className='h-full flex items-center '>
                    <ul className='hidden items-center mt-2 md:hidden lg:flex'>
                        <li className='mx-1'>
                            <Link to={"/"} className='py-4 ps-5 pe-7 text-base no-underline flex items-center gap-x-1.5 text-white '>
                                <span>Biz Haqimizda</span> <RiArrowDropDownLine className='!text-[30px]' />
                            </Link>
                        </li>
                        <li className=' mx-1'>
                            <Link to={"/"} className='py-4 ps-5 pe-7 text-base no-underline flex items-center gap-x-1.5 text-white '>
                                <span>Tuzilma</span> <RiArrowDropDownLine className='!text-[30px]' />
                            </Link>
                        </li>
                        <li className=' mx-1'>
                            <Link to={"/"} className='py-4 ps-5 pe-7 text-base no-underline flex items-center gap-x-1.5  text-white '>
                                <span> Qabul</span> <RiArrowDropDownLine className='!text-[30px]' />
                            </Link>
                        </li>
                        <li className=' mx-1'>
                            <Link to={"/"} className='py-4 ps-5 pe-7 text-base no-underline flex items-center gap-x-1.5 text-white '>
                                <span> Campus Life</span> <RiArrowDropDownLine className='!text-[30px]' />
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='flex items-center gap-x-3' >
                    <button className='w-[36px] rounded-md h-[36px] bg-white text-2xl'>
                        <IoLanguage color='#000' className='mx-auto' />
                    </button>
                    <button onClick={toggleDrawer} className='flex items-center  gap-x-2 text-white  w-[36px] h-[36px] lg:w-[145px] lg:h-[36px] bg-[#004c88] justify-center rounded-md text-[16px] uppercase'>
                        <MdMenu color='#FFF' size={"24px"} className='flex lg:hidden' />
                        <IoCheckmarkCircleSharp className='hidden lg:flex' color='#FFF' size={"16px"} /> <span className='hidden lg:flex' >Qabul 2024</span>
                    </button>
                </div>

            </nav>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='left'
                className='block lg:hidden'
            >
                <div>Hello World</div>
            </Drawer>
        </>

    );
}

export default Header;