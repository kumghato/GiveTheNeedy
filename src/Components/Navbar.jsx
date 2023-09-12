import React, { useState } from 'react'
import logo from '../Assets/Images/GTN-Logo_new.png'
import { Link, NavLink } from 'react-router-dom'
import { BiMenu, BiX } from 'react-icons/bi'


const Navbar = () => {
    const [isOpen, isSetOpen] = useState(false);

    const toggle = () => {
        isSetOpen(!isOpen)
    }

    const Navlinks = () => {
        return (
            <>
                <NavLink to={"/"}><a className='hover:overline' onClick={() => isSetOpen(false)}>HOME</a></NavLink>
                <NavLink to={"/about_us"}><a className='hover:overline' onClick={() => isSetOpen(false)}>ABOUT US</a></NavLink>
                <NavLink to={"/forum"}><a className='hover:overline' onClick={() => isSetOpen(false)}>FORUM</a></NavLink>
                <NavLink to={"/gallery"}><a className='hover:overline' onClick={() => isSetOpen(false)}>GALLERY</a></NavLink>
                <NavLink to={"/contact"}><a className='hover:overline' onClick={() => isSetOpen(false)}>CONTACT US</a></NavLink>

            </>
        )
    }
    return (
        <>
            <nav className='flex py-3 fixed top-0 bg-white w-full z-20 items-center justify-between px-10 md:px-20'>
                <div>
                    <Link to={"/"}>
                        <img src={logo} alt="logo" className='w-40' />
                    </Link>
                </div>
                <div className='md:flex hidden gap-10 font-semibold'>
                    <Navlinks />
                </div>
                <div className="flex w-[75px] justify-end md:hidden ">
                    <button
                        onClick={toggle}>

                        <BiMenu className='text-4xl text-[var(--primaryColor)]' />
                    </button>
                </div>
            </nav>

            {/*Nav for mobile  */}
            <div className={`z-20 flex justify-end fixed top-0 w-full h-screen transition-all duration-500 ease-in ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
                <div className='flex z-30 px-3 py-3'>
                    <button onClick={toggle} className='fixed right-5'>
                        <BiX className='text-4xl text-white ' />
                    </button>
                </div>
                <div className='p-10 text-center font-semibold text-white  w-1/2 bg-[var(--primaryColor)] '>
                    <div className='mt-5 flex flex-col gap-5 '>
                        <Navlinks />
                    </div>
                </div>
            </div>


        </>
    )
}

export default Navbar