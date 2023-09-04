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
import NavBarSide from './NavBarSide'

const Forums = () => {
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
        const res = await axios.get('http://localhost:8000/get/all/thread')
        if (res.data.status === 1) {
            console.log(res)
            setData(res.data.response)
        }
    }
    const fetchUserById = async () => {
        const res = await axios.get(`http://localhost:8000/get/user`, {
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
        const res = await axios.post('http://localhost:8000/create/thread', threadData, {
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
        const res = await axios.post('http://localhost:8000/user/login', user)
        console.log(res)
        if (res.data.status === 1) {
            localStorage.setItem("token", res.data.token)
            localStorage.setItem('user', res.data.user.username)
            toggle()
            toast.success("Login Successful")
        } else {
            toast.error(res.data.message)
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

    return (
        <div className='mt-16 md:flex'>
            <NavBarSide />

            {/* ============================================================================================================= */}


            <div className='sm:absolute sm:right-0 w-full sm:w-[75%]'>
                <div className='text-center bg-gray-100 p-5'>
                    <button className='text-white w-[90%] bg-[var(--primaryColor)] rounded-lg py-2 px-3 ' type='submit' onClick={() => toggle()}>Ask Question</button>
                </div>
                <div className='sm:flex gap-2 w-full mt-2'>
                    <div className='p-10 sm:w-[70%] bg-gray-100'>
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
                                            <p className='text-gray-500'>Created by: {item.createdBy}</p>
                                            <p className='text-gray-500'>Created on: {new Date(item.createdAt).toLocaleString()}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className='p-10 hidden sm:flex w-full sm:w-[30%] bg-gray-100'>
                        google ads
                    </div>
                </div>
            </div>

            {/* ========================================================Modal===================================================== */}

            {isAuthenticate ? (
                <>
                    <div className={`flex flex-col bg-[rgba(0,0,0,40%)] w-full h-screen items-center fixed top-10 justify-center ${popUp ? "fixed" : "hidden"}`}>
                        <div className='bg-white w-[80%] sm:w-1/2 m-auto rounded-lg p-5 h-[70%]'>
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
                                    <div className='flex items-center'>
                                        <button
                                            className="px-10 py-2 mt-5 rounded text-white bg-[var(--primaryColor)] hover:border hover:border-[var(--primaryColor)] hover:bg-white hover:text-[var(--primaryColor)]"
                                            id="submitButton"
                                            type="submit"
                                        >
                                            Login
                                        </button>
                                        <a href="/forgot-password" className='ms-auto text-[var(--primaryColor)]'>Forgot Password?</a>
                                    </div>

                                    <div className='text-center items-center p-10'>
                                        <p>Don't have an account? <a href="/register" className='text-[var(--primaryColor)]'>Register</a></p>

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