import axios from 'axios';
import React, { useEffect, useState } from 'react'
import NavBarSide from './NavBarSide';
import logo from '../Assets/Images/logo.png'

import { VscAccount } from 'react-icons/vsc'
import { Link, useParams } from 'react-router-dom';

const MyPost = () => {
    const serverLink3 = "https://givetheneedy-server.onrender.com/"

    const serverLink = "http://ec2-65-0-6-8.ap-south-1.compute.amazonaws.com:8000/"
    const serverLink2 = "http://localhost:8000/"

    const [data, setData] = useState([])
    const [userData, setUserData] = useState([])
    const [singleUser, setSingleUser] = useState({})
    const [id, setId] = useState("")
    const [popUp, setPopUp] = useState(false)
    const isAuthenticate = localStorage.getItem('token')
    const params = useParams()

    const fetchData = async () => {
        const res = await axios.get(`${serverLink}get/all/thread/owner`, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
        if (res.data.status === 1) {
            setData(res.data.response);
        }
    };
    const fetchUSer = async () => {
        const res = await axios.get(`${serverLink}get/single/user`, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        });
        console.log(res)
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
            <div className='sm:absolute  sm:left-[15%] w-full sm:w-[80%] '>
                <div className=' bg-gray-100 p-5 w-full '>
                    <div className=' m-auto w-[100%] sm:w-[80%] items-center sm:flex '>

                        <div className='p-5 w-full'>
                            {isAuthenticate ? (<>
                                {userData.map((item) => {
                                    return (
                                        <div className=' w-full sm:flex gap-3 sm:items-center'>
                                            <div className='m-auto sm:m-0 flex items-center bg-white rounded-[50%] w-[7rem] sm:w-40 h-[7rem] sm:h-40'>
                                                {item.image !== null ? <img src={`${serverLink + item.image}`} alt="Profile" className='w-full h-full rounded-[50%]' /> : <img src={logo} alt="Profile" className='w-full h-full rounded-[50%]' />}

                                            </div>
                                            <div className='mt-4 border-t-2 border-[var(--primaryColor)] flex flex-col sm:ms-10 m-auto p-5 sm:border-0'>
                                                <h1 className='ps-2 pb-2 pe-2  text-2xl font-bold border-b-2 border-gray-300 sm:border-0'>{item.username}</h1>
                                                <h1 className='p-2 border-b-2 border-gray-300 sm:border-0'>{item.email}</h1>
                                                <div className='p-2 flex gap-4'>
                                                    <Link to={`/edit_profile/${item._id}`} className='text-blue-500'>Edit profile</Link>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </>) : (
                                <div className='w-full flex m-auto items-center gap-10'>
                                    <div className='flex items-center bg-white rounded-[50%] sm:w-40 h-[7rem] sm:h-40'>
                                        <img src={logo} alt="Profile" className='w-full h-full rounded-[50%]' />
                                    </div>
                                    <h1 className='text-2xl font-bold'>Please login to continue</h1>

                                </div>

                            )}

                        </div>
                    </div>
                </div>

                <div className='sm:flex gap-2 w-full mt-2'>
                    <div className='p-10 sm:w-full bg-gray-100'>
                        <h1 className=' w-full text-center mb-10 text-4xl font-bold text-[var(--primaryColor)] rounded-lg py-2 px-3 ' >My Posts</h1>
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

                </div>
            </div>

        </div >
    )
}

export default MyPost