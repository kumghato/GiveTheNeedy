import axios from 'axios';
import React, { useState } from 'react'
import { Toaster, toast } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

const ResetPassword = () => {
    const serverLink = "https://server.givetheneedy.org.in/"
    const serverLink2 = "http://localhost:8000/"

    const navigate = useNavigate()
    const [password, setPassword] = useState({
        email: localStorage.getItem("mail"),
        newPassword: "",
        confirmPassword: ""
    });

    const id = useParams().id;
    const token = useParams().token;

    const handleChange = (e) => {
        setPassword((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            if (password.newPassword !== password.confirmPassword) {
                alert("Password does not match")
            } else {
                const res = await axios.put(`${serverLink}reset/password/${id}/${token}`, password);
                if (res.data.status === 1) {
                    navigate('/forum');
                    toast.success('Password update success')
                }
                else {
                    toast.error(res.data.message)
                }
            }
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div className=' h-full w-full items-center flex flex-col'>
            <form onSubmit={handleSubmit} className="m-auto  w-[90%] sm:w-1/2 box-shadow p-10 flex flex-col rounded text-center" >
                <h2 className='text-2xl font-bold'>Reset Password</h2>
                <input className='border border-black rounded px-2 py-2 my-5' type='password' placeholder='New password' name='newPassword' onChange={(e) => handleChange(e)} required />
                <input className='border border-black rounded px-2 py-2 mb-5' type='password' placeholder='Confirm Password' name='confirmPassword' onChange={(e) => handleChange(e)} required />
                <button className='px-4 py-2 text-white font-bold bg-[var(--primaryColor)] rounded-lg'>Update Password</button>
            </form>
            <Toaster />
        </div>
    )
}

export default ResetPassword