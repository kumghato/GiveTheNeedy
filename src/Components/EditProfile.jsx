import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import NavBarSide from './NavBarSide';
import logo from '../Assets/Images/logo.png'

const EditProfile = () => {
    const [singleUser, setSingleUser] = useState({})
    const [id, setId] = useState("")
    const params = useParams()
    const getUserByid = async () => {
        const res = await axios.get(`http://localhost:8000/get/user/${params.id}`, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        });
        console.log(res)
        if (res.data.status === 1) {
            setSingleUser(res.data.response)
        }
    }

    const handleEditChange = (e) => {
        setSingleUser((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    useEffect(() => {
        getUserByid()
    }, [])
    return (
        <>
            <div className='mt-16 md:flex'>
                <NavBarSide />
                <div className='sm:absolute sm:right-16 w-full sm:w-[75%]'>

                    <div className='flex flex-col p-10 sm:w-full bg-gray-100 gap-2'>
                        <div className='p-10 bg-white rounded-[50%] w-40 h-40 m-auto'>
                            <img src={logo} alt="Profile" className='w-20' />
                        </div>
                        <label>Username</label>
                        <input className='border border-black rounded w-full p-2' name='username' value={singleUser.username} onChange={(e) => { handleEditChange(e) }} />
                        <label className='mt-5'>Email</label>
                        <input className='border border-black rounded w-full p-2' name='email' value={singleUser.email} onChange={(e) => { handleEditChange(e) }} />
                        <div className='flex ms-auto gap-2 w-full justify-end mt-5'>
                            <button className='text-white bg-[var(--primaryColor)] rounded-lg py-2 px-3 w-[10rem]' type='submit'>Save</button>
                            <button className='text-white bg-[var(--primaryColor)] rounded-lg py-2 px-3  w-[10rem]' type='submit'>Delete Account</button>
                        </div>

                    </div>

                </div>
            </div>
        </>

    )
}

export default EditProfile