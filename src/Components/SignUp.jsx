import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    const navigate = useNavigate()
    const [createUser, setCreateUser] = useState({
        username: "",
        email: "",
        password: ""
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await axios.post('http://localhost:8000/create/user', createUser)
        if (res.data.status === 1) {
            e.target.reset()
            navigate("/forum")
        }
        else if (res.data.status === 0) {
            toast.error("Cannot register")
        }
    }

    const handleChange = (e) => {
        setCreateUser({ ...createUser, [e.target.name]: e.target.value })


    }
    return (
        <>
            <div className={`flex sm:flex-col w-full h-screen sm:items-center`}>
                <div className={`border border-black w-[80%] sm:w-1/2 m-auto rounded-lg p-10 sm:h-[70%]`}>
                    <div className='flex justify-between mb-10'>
                        <h1 className=" text-2xl font-bold">Register to continue</h1>
                    </div>
                    <div className="flex flex-col">
                        <form action="/" method='post' onSubmit={handleSubmit}>
                            <label>Username</label>
                            <input
                                placeholder="Username"
                                name="username"
                                type='text'
                                required
                                onChange={handleChange}
                                className="p-2 mb-5 resize-none border-black border rounded w-full" />
                            <label>Email</label>
                            <input
                                placeholder="Email"
                                name="email"
                                type='email'
                                required
                                onChange={handleChange}
                                className="p-2 mb-5 resize-none border-black border rounded w-full" />
                            <label >Password</label>
                            <input
                                placeholder="Password"
                                name="password"
                                type='password'
                                required
                                onChange={handleChange}
                                className="p-2 resize-none border-black border rounded w-full" />
                            <button
                                className="w-full px-10 py-2 mt-5 rounded text-white bg-[var(--primaryColor)] hover:border hover:border-[var(--primaryColor)] hover:bg-white hover:text-[var(--primaryColor)]"
                                id="submitButton"
                                type="submit"
                            >
                                Register
                            </button>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SignUp