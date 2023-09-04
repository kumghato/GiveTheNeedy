import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { BsChatLeftText, BsQuestionCircle, BsCheck2All } from 'react-icons/bs'
import { MdOutlineCommentsDisabled } from 'react-icons/md'
import { VscAccount } from 'react-icons/vsc'
import axios from 'axios'
import { Toaster, toast } from 'react-hot-toast'
import LoginModal from './LoginModal'
import NavBarSide from './NavBarSide'

const ForumThread = () => {
    const isAuthenticate = localStorage.getItem("token")
    let params = useParams()

    const [data, setData] = useState({})
    const [commentData, setCommentData] = useState([])
    const [comment, setComment] = useState({
        comment: ""
    })

    const [popUp, setPopUp] = useState(false)

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const handleChangeUser = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const UserLogin = async (e) => {
        e.preventDefault()
        const res = await axios.post('http://localhost:8000/user/login', user)
        console.log(res)
        if (res.data.status === 1) {
            setPopUp(!popUp)
            localStorage.setItem("token", res.data.token)
            toast.success("Login Successful")
        } else {
            toast.error(res.data.message)
        }
    }

    const fetchSingleData = async () => {
        const res = await axios.get(`http://localhost:8000/get/thread/${params.id}`)
        console.log(res)
        setData(res.data.response)
    }

    const fetchCommentData = async () => {
        const res = await axios.get(`http://localhost:8000/get/thread/${params.id}`)
        setCommentData(res.data.response.comments)
    }

    const handleChange = async (e) => {
        setComment({ ...comment, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        // const formdata = new FormData()
        // Object.entries(comment).forEach(([key, value]) => {
        //     formdata.append(key, value)
        // })
        if (isAuthenticate) {
            const res = await axios.post(`http://localhost:8000/create/comment/${params.id}`, comment, {
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            })
            if (res.status === 200) {
                e.target.reset()
                toast.success("Your comment has been posted.")
            }
            fetchCommentData()
        } else {
            setPopUp(true)
        }

    }

    useEffect(() => {
        fetchSingleData()
        fetchCommentData()

    }, [])

    return (
        <>

            <div className='mt-16 md:flex'>
                <NavBarSide />
                <div>
                    <div className='sm:absolute sm:right-0 w-full sm:w-[75%] py-5 pt-10'>
                        <div className='sm:flex gap-2 w-full mt-2'>
                            <div className='p-10 sm:w-[70%] bg-gray-100'>
                                <div className='sticky top-16 px-5 py-3 box-shadow rounded my-2 w-full  bg-gray-100 '>
                                    <div className='flex'>
                                        <div className='flex items-center'>
                                            <VscAccount className='text-4xl me-10' />
                                        </div>
                                        <div className='w-full'>
                                            <h5 className='font-bold text-2xl mb-2'>{data.title}</h5>
                                            <p>{data.post}</p>
                                            <div className='sm:flex justify-between mt-5' >
                                                <p className='text-gray-500'>Created by: {data.createdBy}</p>
                                                <p className='text-gray-500'>Created on: {new Date(data.createdAt).toLocaleString()}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=' mt-5 bg-white rounded w-full p-5 items-center '>
                                        <form action="/" method='POST' className='flex gap-4' onSubmit={handleSubmit}>
                                            <textarea
                                                name="comment"
                                                type='text'
                                                placeholder='Comment'
                                                className='p-2 resize-none border-black border rounded w-full h-10 overflow-hidden'
                                                onChange={(e) => handleChange(e)}
                                                required
                                            >
                                            </textarea>
                                            <button
                                                type='submit'
                                                className="px-10 py-2 rounded text-white bg-[var(--primaryColor)] hover:border hover:border-[var(--primaryColor)] hover:bg-white hover:text-[var(--primaryColor)]"
                                            >
                                                Share
                                            </button>
                                        </form>
                                    </div>
                                </div>

                                {commentData.map((item) => {
                                    return (
                                        <div className='ms-auto flex px-5 border border-black py-3 rounded my-2 w-[95%] '>
                                            <div className='flex items-center'>
                                                <VscAccount className='text-4xl me-10' />
                                            </div>
                                            <div className='flex flex-col'>
                                                <h1 className='font-bold mb-2'>{item.user}</h1>
                                                <p>Ans: {item.comment}</p>
                                            </div>

                                        </div>
                                    )
                                })}
                            </div>
                            <div className='fixed right-0 p-10 hidden h-screen sm:flex w-full sm:w-[22%] bg-gray-100'>
                                google ads
                            </div>
                        </div>
                    </div>
                </div>
                {popUp && (
                    <LoginModal closeModal={setPopUp} />
                )}
            </div>
            <Toaster />
        </>
    )
}

export default ForumThread