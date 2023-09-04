import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import { BsChatLeftText, BsQuestionCircle, BsCheck2All } from 'react-icons/bs'
import { MdOutlineCommentsDisabled } from 'react-icons/md'
import { Link } from 'react-router-dom'
import LoginModal from './LoginModal'

const NavBarSide = () => {
    const isAuthenticate = localStorage.getItem("token")

    const [popUp, setPopUp] = useState(false)

    const logout = () => {
        localStorage.removeItem("token")
        toast.success("Logged out")
    }

    return (

        <div>
            {isAuthenticate ? (
                <>
                    <nav className='bg-[var(--primaryColor)] text-white px-10 py-3 md:w-[20%] md:h-screen md:fixed'>
                        <div className='flex sm:flex-col gap-10 justify-between'>
                            <h1 className='hidden md:flex font-bold m-auto text-2xl'>Forum</h1>
                            <div className='sm:hidden w-full flex justify-evenly text-2xl'>
                                <Link><BsCheck2All /></Link>
                                <Link ><BsQuestionCircle /></Link>
                                <Link ><MdOutlineCommentsDisabled /></Link>
                            </div>
                            <div className='hidden sm:flex sm:flex-col sm:gap-10'>
                                <Link to={"/my/profile"}>My Profile</Link>
                                <Link to={"/forum"}>All Post</Link>
                                <Link onClick={logout}>Logout</Link>
                            </div>
                        </div>
                    </nav>
                </>

            ) : (
                <>
                    <nav className='bg-[var(--primaryColor)] text-white px-10 py-3 md:w-[20%] md:h-screen md:fixed'>
                        <div className='flex sm:flex-col gap-10 justify-between'>
                            <h1 className='hidden md:flex font-bold m-auto text-2xl'>Forum</h1>
                            <div className='sm:hidden w-full flex justify-evenly text-2xl'>
                                <Link><BsCheck2All /></Link>
                                <Link ><BsQuestionCircle /></Link>
                                <Link ><MdOutlineCommentsDisabled /></Link>
                            </div>
                            <div className='hidden sm:flex sm:flex-col sm:gap-10'>
                                <Link to={"/my/profile"}>My Profile</Link>
                                <Link to={"/forum"}>All Post</Link>
                                <Link onClick={() => { setPopUp(!popUp) }}>Login</Link>
                            </div>
                        </div>
                    </nav>
                </>
            )}
            {popUp && (
                <>
                    <LoginModal closeModal={setPopUp} />
                </>
            )}
        </div>
    )
}

export default NavBarSide