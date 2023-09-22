import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BsChatLeftText, BsQuestionCircle, BsCheck2All } from 'react-icons/bs'
import { MdOutlineCommentsDisabled } from 'react-icons/md'
import { VscAccount } from 'react-icons/vsc'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import toast, { Toaster } from 'react-hot-toast'
import CookiesJS from 'js-cookie'
import MyPost from './MyPost'
import { FaYoutube } from 'react-icons/fa';
import { AiFillFacebook, AiFillTwitterSquare } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
import NavBarSide from './NavBarSide'
import Footer from './Footer'

const Forums = () => {


    const serverLink = "https://server.givetheneedy.org.in/"
    const serverLink1 = "http://localhost:8000/"


    const [threadData, setThreadData] = useState({
        title: "",
        post: ""
    })
    const [data, setData] = useState([])
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const [singleUser, setSingleUser] = useState({})
    const [popUp, setPopUp] = useState(false)
    const navigate = useNavigate()
    const params = useParams()


    {/*===========================================Authentication=================================================== */ }
    const isAuthenticate = localStorage.getItem("token")



    {/*===========================================FETCHING DATA=================================================== */ }
    const fetchThreadsData = async () => {
        const res = await axios.get(`${serverLink}get/all/thread`)
        if (res.data.status === 1) {
            console.log(res)
            setData(res.data.response)
        }
    }
    const fetchUserById = async () => {
        const res = await axios.get(`${serverLink}get/user`, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
        console.log(res)
        setSingleUser(res.data.response)
    }




    {/*===========================================SUBMIT THREADS DATA=================================================== */ }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await axios.post(`${serverLink}create/thread`, threadData, {
            headers: {
                Authorization: isAuthenticate,
            },
        });
        console.log(res)

        if (res.data.status === 1) {
            e.target.reset()
            toggle()
            toast.success(res.data.message)
        }
        fetchThreadsData()
        setThreadData({
            title: "",
            post: ""
        })
        if (res.data.status === 0) {
        }
    }

    {/*===========================================USER REGISTER================================================ */ }
    const UserSignUp = () => {
        navigate("/register")
    }



    {/*===========================================USER LOGIN=================================================== */ }
    const UserLogin = async (e) => {
        e.preventDefault()
        const res = await axios.post(`${serverLink}user/login`, user)
        console.log(res)
        if (res.data.status === 1) {
            localStorage.setItem("token", res.data.token)
            localStorage.setItem('user', res.data.user.username)
            toggle()
            toast.success("Login Successful")
        } else {
            toast.error("Incorrect credentials")
        }
    }


    {/*===========================================HANDLE CHANGE=================================================== */ }

    const handleChange = async (e) => {
        setThreadData({ ...threadData, [e.target.name]: e.target.value })
    }

    //change function for login form
    const handleChangeUser = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    {/*===========================================MODAL TOGGLE=================================================== */ }
    const toggle = async () => {
        setPopUp(!popUp)
    }

    {/*===========================================Useefffect THREADS DATA=================================================== */ }
    useEffect(() => {
        fetchThreadsData()
        fetchUserById()
    }, [])
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className='mt-16 lg:flex'>
            <NavBarSide />

            {/* ============================================================================================================= */}


            <div className='sm:absolute left-[10%] lg:left-[15%] sm:w-[80%] py-5 pt-10'>
                <div className='text-center w-full bg-gray-100 p-5'>
                    <button className='text-white w-full sm:w-[30%] bg-[var(--primaryColor)] rounded-lg py-2 px-3 ' type='submit' onClick={() => toggle()}>Ask Question</button>
                </div>
                <div className='sm:flex gap-2 w-full mt-2'>
                    <div className='p-10 sm:w-full bg-gray-100'>
                        {data.map((item) => {
                            return (
                                <div className='flex px-5 py-3 box-shadow rounded my-2 w-full '>
                                    <div className='flex items-center'>
                                        <VscAccount className='text-4xl me-10' />
                                    </div>
                                    <div className='w-full'>
                                        <Link to={`/forum/thread/${item._id}`}>
                                            <h5 className='font-bold cursor-pointer hover:text-gray-500'>{item.title}</h5>
                                        </Link>
                                        <div className='sm:flex justify-between mt-5' >
                                            <p className='text-gray-500'>Created by: {item.owner}</p>
                                            <p className='text-gray-500'>Created on: {new Date(item.createdAt).toLocaleString()}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    <div className='absolute w-full bg-white top-[140%] text-center p-5'>
                        <div className='m-auto'>
                            <h4 className=' leading-10'>Follow Us</h4>
                            <div className='flex justify-center text-2xl gap-3'>
                                <a href="https://www.facebook.com/profile.php?id=100083310940497&mibextid=ZbWKwL" target='_blank'><AiFillFacebook /></a>
                                <a href="https://instagram.com/zeliang_codetech?utm_source=qr&igshid=OGU0MmVlOWVjOQ==" target='_blank'><AiFillInstagram /></a>
                                <a href="https://twitter.com/kangzang_shane?t=dAYOswP3I7AhyuGF3B8jPg&s=09" target='_blank'><AiFillTwitterSquare /></a>
                                <a href="https://youtube.com/@zeliangcodetech?si=pfor7ouP07rXVwn6" target='_blank'><FaYoutube /></a>
                            </div>
                        </div>
                        <p className=' leading-10'> {new Date().getFullYear()} &copy; Zeliang Codetech Pvt. Ltd | All rights reserved</p>
                    </div>
                </div>

            </div>

            {/* ========================================================Modal===================================================== */}

            {isAuthenticate ? (
                <>
                    <div className={`flex flex-col bg-[rgba(0,0,0,40%)] w-full h-screen items-center fixed top-10 justify-center ${popUp ? "fixed" : "hidden"}`}>
                        <div className='bg-white w-[80%] sm:w-1/2 m-auto rounded-lg p-5 '>
                            <div className='flex justify-between'>
                                <h1 className=" text-2xl font-bold">Raise your Question</h1>
                                <button onClick={() => setPopUp(false)} className='px-4 font-bold border border-black rounded-lg'>X</button>
                            </div>
                            <div className="flex flex-col my-5">
                                <form action="/" method='post' onSubmit={handleSubmit}>
                                    <label className="mt-3">Title</label>
                                    <input
                                        placeholder="Ask How, What, Why etc. Eg: When Will the app launch?"
                                        name="title"
                                        required
                                        onChange={handleChange}
                                        className="p-2 mb-5  border-black border rounded w-full" />
                                    <label >Elaborate</label>
                                    <textarea
                                        name="post"
                                        cols="30"
                                        rows="8"
                                        type='text'
                                        placeholder='Elaborate your problem so that people can understand you better'
                                        className='p-2 resize-none border-black border rounded w-full'
                                        onChange={handleChange}>
                                    </textarea>
                                    <button
                                        className="px-10 py-2 mt-5 rounded text-white bg-[var(--primaryColor)] hover:border hover:border-[var(--primaryColor)] hover:bg-white hover:text-[var(--primaryColor)]"
                                        id="submitButton"
                                        type="submit"
                                    >
                                        Post
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                </>
            ) : (
                <>
                    <div className={`flex sm:flex-col bg-[rgba(0,0,0,40%)] w-full h-screen sm:items-center fixed top-10 justify-center ${popUp ? "fixed" : "hidden"}`}>
                        <div className={`bg-white w-[80%] sm:w-1/2 m-auto rounded-lg p-10 sm:h-[70%]`}>
                            <div className='flex justify-between mb-10'>
                                <h1 className=" text-2xl font-bold">Login to continue</h1>
                                <button onClick={() => setPopUp(false)} className='px-4 font-bold border border-black rounded-lg'>X</button>
                            </div>
                            <div className="flex flex-col">
                                <form action="/" method='post' onSubmit={UserLogin}>
                                    <label>Email</label>
                                    <input
                                        placeholder="Email"
                                        name="email"
                                        type='email'
                                        required
                                        onChange={handleChangeUser}
                                        className="p-2 mb-5 resize-none border-black border rounded w-full" />
                                    <label >Password</label>
                                    <input
                                        placeholder="Password"
                                        name="password"
                                        type='password'
                                        required
                                        onChange={handleChangeUser}
                                        className="p-2 resize-none border-black border rounded w-full" />
                                    <div className='flex items-center mt-5'>
                                        <button
                                            className="px-10 py-2  rounded text-white bg-[var(--primaryColor)] hover:border hover:border-[var(--primaryColor)] hover:bg-white hover:text-[var(--primaryColor)]"
                                            id="submitButton"
                                            type="submit"
                                        >
                                            Login
                                        </button>
                                        <Link to={"/forgot-password"} className='ms-auto text-[var(--primaryColor)]'>Forgot Password?</Link>
                                    </div>

                                    <div className='text-center items-center p-10'>
                                        <p>Don't have an account? <Link to={"/register"} className='text-[var(--primaryColor)]'>Register</Link></p>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </>
            )
            }

            <Toaster />
        </div>
    )
}

export default Forums