import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Toaster, toast } from 'react-hot-toast'

function ForgotPassword() {
    const serverLink = "http://43.204.149.22:8000/"
    const serverLinkLocal = "http://localhost:8000/"


    const [user, setUser] = useState({
        email: ""
    })

    const sentSuccess = () => {
        return (
            <p className='mt-20'>Reset link sent to your Email address</p>
        )
    }

    const handleChange = (e) => {
        setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }
    const handleSubmit = async () => {
        const res = await axios.post(`${serverLink}forgot/password`, user)
        if (res.data.status === 1) {
            toast.error("Password reset link sent to your Email")
            localStorage.setItem('mail', user.email)
            sentSuccess()
        }
        else if (res.data.status === 0) {
            console.log(res.data.message)
        }
    }

    return (
        <>
            <div className=' h-full w-full items-center flex flex-col'>
                <form onSubmit={handleSubmit} className="m-auto w-1/2 box-shadow p-10 flex flex-col rounded text-center">
                    <h1 className='text-2xl font-bold'>Forgot Password?</h1>
                    <input type='email' onChange={handleChange} placeholder='Email Address' className='border border-black rounded px-2 py-2 my-5' />
                    <button
                        className="w-full px-10 py-2  rounded text-white bg-[var(--primaryColor)] hover:border hover:border-[var(--primaryColor)] hover:bg-white hover:text-[var(--primaryColor)]"
                        type="submit"
                    >
                        Submit
                    </button>
                </form>

            </div >
            <Toaster />
        </>

    )
}

export default ForgotPassword