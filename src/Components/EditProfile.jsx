import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import NavBarSide from './NavBarSide';
import logo from '../Assets/Images/logo.png'
import user from '../Assets/Images/user.jpg'
import { Toaster, toast } from 'react-hot-toast';


const EditProfile = () => {

    const serverLink = "https://server.givetheneedy.org.in/"
    const serverLink2 = "http://localhost:8000/"

    const [singleUser, setSingleUser] = useState({
        name: "",
        email: "",
        image: ""
    })
    const [preview, setPreview] = useState("")
    const params = useParams()
    const navigate = useNavigate()

    const handleFileChange = (e) => {
        console.log(e.target.files)
        const [file] = e.target.files

        setSingleUser({ ...singleUser, image: file })
        const objectUrl = URL.createObjectURL(file)
        setPreview(objectUrl)
    }

    const getUserByid = async () => {
        const res = await axios.get(`${serverLink}get/user/${params.id}`, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        });
        console.log(res)
        if (res.data.status === 1) {
            setSingleUser(res.data.response)
        }
    }
    const handleUpdate = async (e) => {
        e.preventDefault()


        const update = await axios.put(`${serverLink}update/user/${params.id}`, singleUser, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
        console.log(update.data)
        if (update.data.status === 1) {
            toast.success("User profile updated successfully")
        }
    }
    const deleteData = async () => {
        const res = await axios.delete(`${serverLink}delete/user/${params.id}`, {
            headers: {
                Authorization: localStorage.getItem('token')
            }

        }
        );
        if (res.data.status === 1) {
            localStorage.clear()
            toast.success("User profile deleted successfully")
            setTimeout(navigate("/forum"), 4000)
        }

    };

    const handleEditChange = (e) => {
        setSingleUser((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    useEffect(() => {
        getUserByid()
    }, [])

    const fileInputRef = useRef();

    return (
        <>
            <div className='mt-16 lg:flex'>
                <NavBarSide />
                <div className='sm:absolute sm:right-16 w-full sm:w-[75%]'>
                    <div class="form-floating mb-3">

                    </div>
                    <div className='flex flex-col p-10 sm:w-full bg-gray-100 gap-2'>
                        <div className=' bg-white rounded-[50%] w-40 h-[10rem] m-auto'>
                            <img src={user} className='w-full h-full rounded-[50%]' />

                            <input className="hidden"
                                //w-[10rem] h-[10rem] cursor-pointer absolute top-40 left-[12rem] sm:top-10 sm:left-[30.6rem] rounded-[50%] opacity-0
                                name="image"
                                // accept='image/*'
                                type="file"
                                ref={fileInputRef}
                                onChange={(e) => { handleFileChange(e) }}
                                data-sb-validations="required,email"
                            />
                        </div>
                        {/* <button className='bg-[var(--primaryColor)] w-[12rem] m-auto text-white py-2 px-4 rounded-lg' onClick={() => fileInputRef.current.click()} >Upload Profile Image</button> */}

                        <label>Username</label>
                        <input className='border border-black rounded w-full p-2' name='username' value={singleUser.username} onChange={(e) => { handleEditChange(e) }} />
                        <label className='mt-5'>Email</label>
                        <input className='border border-black rounded w-full p-2' name='email' value={singleUser.email} onChange={(e) => { handleEditChange(e) }} />
                        <div className='flex ms-auto gap-2 w-full justify-end mt-5'>
                            <button className='text-white bg-[var(--primaryColor)] rounded-lg py-2 px-3 w-[10rem]' type='submit' onClick={handleUpdate}>Save</button>
                            <button className='text-white bg-[var(--primaryColor)] rounded-lg py-2 px-3  w-[10rem]' type='submit' onClick={deleteData}>Delete Account</button>
                        </div>

                    </div>

                </div>
            </div>
            <Toaster />
        </>

    )
}

export default EditProfile