import axios from 'axios';
import React, { useEffect, useState } from 'react'
import NavBarSide from './NavBarSide';
import logo from '../Assets/Images/logo.png'

import { VscAccount } from 'react-icons/vsc'
import { Link, useParams } from 'react-router-dom';

const MyPost = () => {
    const [data, setData] = useState([])
    const [userData, setUserData] = useState([])
    const [singleUser, setSingleUser] = useState({})
    const [id, setId] = useState("")
    const [popUp, setPopUp] = useState(false)
    const isAuthenticate = localStorage.getItem('token')
    const params = useParams()

    const fetchData = async () => {
        const res = await axios.get("http://localhost:8000/get/all/thread/owner", {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
        console.log(res)
        if (res.data.status === 1) {
            setData(res.data.response);
        }
    };
    const fetchUSer = async () => {
        const res = await axios.get(`http://localhost:8000/get/single/user`, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        });
        if (res.data.status === 1) {
            setUserData(res.data.response);
        }
    };
    useEffect(() => {
        fetchData()
        fetchUSer()
    }, [])


    return (
        <div className='mt-16 md:flex'>
            <NavBarSide />
            <div className='sm:absolute sm:right-0 w-full sm:w-[75%]'>
                <div className=' bg-gray-100 p-5 w-full'>
                    <div className='flex m-auto w-[80%]'>
                        <div className='p-10 bg-white rounded-[50%] w-40 h-40'>
                            <img src={logo} alt="Profile" className='w-20' />
                        </div>
                        <div className='p-5 ms-10'>
                            {isAuthenticate ? (<>
                                {userData.map((item) => {
                                    return (
                                        <div>
                                            <h1 className='text-2xl font-bold'>{item.username}</h1>
                                            <h1>{item.email}</h1>
                                            <div className='flex gap-4 mt-6'>
                                                <Link to={`/edit_profile/${item._id}`} className='text-blue-500'>Edit profile</Link>
                                            </div>
                                        </div>

                                    )
                                })}
                            </>) : (

                                <h1 className='text-2xl font-bold'>Please login to continue</h1>

                            )}

                        </div>
                    </div>
                </div>

                <div className='sm:flex gap-2 w-full mt-2'>
                    <div className='p-10 sm:w-[70%] bg-gray-100'>
                        <h1 className=' w-[90%] text-center mb-10 text-4xl font-bold text-[var(--primaryColor)] rounded-lg py-2 px-3 ' >My Posts</h1>
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
                                            <p className='text-gray-500'>Created by: You</p>
                                            <p className='text-gray-500'>Created on: {new Date(item.createdAt).toLocaleString()}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className='p-10 hidden sm:flex w-full sm:w-[30%] bg-gray-100'>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default MyPost