import React from 'react'
import logo from '../Assets/Images/logo.png'
import { NavLink, useLocation } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className='py-1 fixed top-0 bg-white w-full z-20'>
                <div className='flex justify-between mx-20'>
                    <div>
                        <img className='w-14' src={logo} alt="logo" />
                    </div>
                    <div className='flex content-center flex-wrap'>
                        <ul className='flex gap-10'>
                            <NavLink to={"/"} >
                                <li>
                                    <a className='font-semibold'>HOME</a>
                                </li>
                            </NavLink>
                            <NavLink to={"/about_us"}>
                                <li>
                                    <a className='font-semibold'>ABOUT US</a>
                                </li>
                            </NavLink>
                            <NavLink to={"/gallery"}>
                                <li>
                                    <a className='font-semibold'>GALLERY</a>
                                </li>
                            </NavLink>
                            <NavLink to={"/contact"}>
                                <li>
                                    <a className='font-semibold'>CONTACT </a>
                                </li>
                            </NavLink>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar