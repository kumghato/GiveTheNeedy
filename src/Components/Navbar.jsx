import React, { useEffect, useState } from 'react'
import logo from '../Assets/Images/logo.png'
import { NavLink } from 'react-router-dom'
import { BiMenu, BiX } from 'react-icons/bi'
import AOS from 'aos'

const Navbar = () => {
    const [isOpen, isSetOpen] = useState(false);

    const toggle = () => {
        isSetOpen(!isOpen)
    }

    useEffect(() => {
        AOS.init();
    }, []);

    const Navlinks = () => {
        return (
            <>

                <NavLink to={"/"}><a className='hover:overline' onClick={() => isSetOpen(false)}>HOME</a></NavLink>
                <NavLink to={"/about_us"}><a className='hover:overline' onClick={() => isSetOpen(false)}>ABOUT US</a></NavLink>
                <NavLink to={"/gallery"}><a className='hover:overline' onClick={() => isSetOpen(false)}>GALLERY</a></NavLink>
                <NavLink to={"/contact"}><a className='hover:overline' onClick={() => isSetOpen(false)}>CONTACT</a></NavLink>

            </>
        )
    }
    return (
        <>
            <nav className='flex py-1 fixed top-0 bg-white w-full z-20 items-center justify-between px-10 md:px-20'>
                <div>
                    <img src={logo} alt="logo" className='w-14' />
                </div>
                <div className='md:flex hidden gap-10 font-semibold'>
                    <Navlinks />
                </div>
                <div className="flex w-[75px] justify-end md:hidden ">
                    <button
                        onClick={toggle}> <BiMenu className='text-4xl text-[var(--primaryColor)]' />
                    </button>
                </div>
            </nav>

            {isOpen && (
                <div data-aos="fade-left" data-aos-duration="650" className='flex justify-end absolute top-0 w-full'>
                    <div className='flex z-30 px-3 py-2'>
                        <button onClick={toggle}>
                            <BiX className='text-4xl text-white' />
                        </button>
                    </div>
                    <div className='fixed z-20 p-10 text-center gap-7 font-semibold h-screen text-white flex flex-col w-1/2 bg-[var(--primaryColor)]'>
                        <Navlinks />
                    </div>
                </div>

            )}
        </>
    )
}

export default Navbar