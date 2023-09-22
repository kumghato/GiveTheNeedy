import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import { BsChatLeftText, BsQuestionCircle, BsCheck2All } from 'react-icons/bs'
import { BiLogOut, BiLogIn } from 'react-icons/bi'
import { VscAccount } from 'react-icons/vsc'
import { MdOutlineForum } from 'react-icons/md'
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
                    <nav className='bg-[var(--primaryColor)] text-white px-10 py-3 w-full lg:w-[11%] lg:h-screen lg:fixed'>
                        <div className='flex lg:flex-col gap-10 justify-between'>
                            <h1 className='hidden lg:flex font-bold text-2xl'>Forum</h1>
                            <div className='lg:hidden w-full flex justify-evenly text-2xl'>
                                <Link to={"/my/profile"}><VscAccount /></Link>
                                <Link to={"/forum"} ><MdOutlineForum /></Link>
                                <Link onClick={logout}><BiLogOut /></Link>
                            </div>
                            <div className='hidden lg:flex md:flex-col md:gap-10'>
                                <Link to={"/my/profile"}>My Profile</Link>
                                <Link to={"/forum"}>All Post</Link>
                                <Link onClick={logout}>Logout</Link>
                            </div>
                        </div>
                    </nav>
                </>

            ) : (
                <>
                    <nav className='bg-[var(--primaryColor)] text-white px-10 py-3 md:w-[11%] md:h-screen md:fixed'>
                        <div className='flex sm:flex-col gap-10 justify-between'>
                            <h1 className='hidden md:flex font-bold m-auto text-2xl'>Forum</h1>
                            <div className='sm:hidden w-full flex justify-evenly text-2xl'>
                                <Link to={"/my/profile"}><VscAccount /></Link>
                                <Link to={"/forum"} ><MdOutlineForum /></Link>
                                <Link onClick={() => { setPopUp(!popUp) }}><BiLogIn /></Link>
                            </div>

                            <div className='hidden md:flex md:flex-col md:gap-10'>
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