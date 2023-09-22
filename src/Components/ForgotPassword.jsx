import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Toaster, toast } from 'react-hot-toast'

function ForgotPassword() {

    const serverLink = "https://server.givetheneedy.org.in/"
    const serverLink2 = "http://localhost:8000/"

    const navigate = useNavigate()


    const [user, setUser] = useState({
        email: ""
    })



    const handleChange = (e) => {
        setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await axios.post(`${serverLink}forgot/password`, user)
        console.log(res)
        if (res.data.status === 1) {
            toast.success("Password reset link sent to your Email")
            localStorage.setItem('mail', user.email)
            e.target.reset()
        }
        else if (res.data.status === 0) {
            toast.error(res.data.message)
        }
    }
    return (
        <>
            <div className=' h-full w-full items-center flex flex-col'>
                <form onSubmit={(e) => handleSubmit(e)} className="m-auto w-[90%] sm:w-1/2 box-shadow p-10 flex flex-col rounded ">
                    <h1 className='text-2xl font-bold m-auto'>Forgot Password?</h1>
                    <label className='text-red-500 my-5' htmlFor="email">Enter the Email address associated with Give The Needy account*</label>
                    <input required type='email' name="email" onChange={(e) => handleChange(e)} placeholder='Email Address' className='border border-black rounded px-2 py-2 mb-5' />
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