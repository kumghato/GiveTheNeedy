import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import Cookies from 'js-cookie'

const LoginModal = ({ closeModal }, { openModal }) => {

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

        if (res.data.status === 1) {
            closeModal(false)
            localStorage.setItem("token", res.data.token)
            toast.success("Login Successful")
        } else {
            toast.error(res.data.message)
        }
    }

    return (
        <>
            <div className={`flex sm:flex-col bg-[rgba(0,0,0,40%)] z-10 w-full h-screen sm:items-center fixed top-10 justify-center`}>
                <div className={`bg-white w-[80%] sm:w-1/2 m-auto rounded-lg p-10 sm:h-[70%]`}>
                    <div className='flex justify-between mb-10'>
                        <h1 className=" text-2xl font-bold">Login to continue</h1>
                        <button onClick={() => closeModal(false)} className='px-4 font-bold border border-black rounded-lg'>X</button>
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
                                <a href="/register" className='ms-auto text-[var(--primaryColor)]'>Forgot Password?</a>
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

export default LoginModal