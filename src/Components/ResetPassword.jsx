import axios from 'axios';
import React, { useState } from 'react'
import { Toaster, toast } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

const ResetPassword = () => {
    const serverLink = "https://givetheneedy-server.onrender.com/"
    const serverLinkLocal = "http://localhost:8000/"

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
    const handleSubmit = async () => {
        try {
            if (password.newPassword !== password.confirmPassword) {
                alert("Password does not match")
            } else {
                await axios.put(`${serverLink}reset/password/${id}/${token}`, { password });
                toast.success('Password Successfully updated')
                navigate('/forum');
            }

        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div className=' h-full w-full items-center flex flex-col'>
            <from className="m-auto w-1/2 box-shadow p-10 flex flex-col rounded text-center">
                <h2 className='text-2xl font-bold'>Reset Password</h2>
                <input className='border border-black rounded px-2 py-2 my-5' type='password' placeholder='New password' name='NewPassword' onChange={(e) => handleChange(e)} required />
                <input className='border border-black rounded px-2 py-2 mb-5' type='password' placeholder='Confirm Password' name='ConfirmPassword' onChange={(e) => handleChange(e)} required />
                <button onClick={handleSubmit} className='px-4 py-2 text-white font-bold bg-[var(--primaryColor)] rounded-lg'>Update Password</button>
            </from>
            <Toaster />
        </div>
    )
}

export default ResetPassword