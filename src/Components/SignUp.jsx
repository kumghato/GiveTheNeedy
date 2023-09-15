import axios from 'axios'
import React, { useRef, useState } from 'react'
import { Toaster, toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import logo from '../Assets/Images/logo.png'

const SignUp = () => {

    const serverLink = "http://ec2-65-0-6-8.ap-south-1.compute.amazonaws.com:8000/"
    const serverLink2 = "http://localhost:8000/"

    const navigate = useNavigate()
    const [preview, setPreview] = useState("")
    const [createUser, setCreateUser] = useState({
        username: "",
        email: "",
        password: "",
        image: ""
    })

    const handleFileChange = (e) => {
        console.log(e.target.files)
        const [file] = e.target.files

        setCreateUser({ ...createUser, image: file })
        const objectUrl = URL.createObjectURL(file)
        setPreview(objectUrl)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formdata = new FormData()
        Object.entries(createUser).forEach(([key, value]) => {
            formdata.append(key, value)
        })

        const res = await axios.post(`${serverLink}create/user`, formdata, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
        if (res.data.status === 1) {
            e.target.reset()
            navigate("/forum")
            toast.success("Registered successfully")
        }
        else if (res.data.status === 0) {
            toast.error("Cannot register")
        }
    }

    const handleChange = (e) => {
        setCreateUser({ ...createUser, [e.target.name]: e.target.value })

    }

    const fileInputRef = useRef();
    const upload = () => {
        fileInputRef.current.click()
    }

    return (
        <>
            <div className={`flex sm:flex-col w-full mt-20 sm:items-center`}>
                <div className={`box-shadow w-[80%] sm:w-1/2 m-auto rounded-lg p-10 sm:h-[85%]`}>
                    <div className='flex justify-center mb-10'>
                        <h1 className=" text-2xl font-bold">Register to continue</h1>
                    </div>
                    <div className='m-auto w-40 h-[10rem] flex justify-center border border-black rounded-[50%] object-fill'>
                        {preview ? <img src={preview} className='w-full h-full rounded-[50%]' /> : <img src={logo} className='w-full h-full rounded-[50%]' />}
                    </div>
                    <div className="flex flex-col">
                        <div className='text-center p-5'>
                            <button className='bg-[var(--primaryColor)] w-[12rem] m-auto text-white py-2 px-4 rounded-lg' onClick={upload}>Upload profile image</button>
                        </div>
                        <form action="/" method='POST' enctype="multipart/form-data" onSubmit={handleSubmit}>

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
                                className="p-2 mb-5 resize-none border-black border rounded w-full" />


                            <input className="hidden"
                                name="image"
                                type="file"
                                ref={fileInputRef}
                                onChange={(e) => { handleFileChange(e) }}
                                data-sb-validations="required,email"
                            />
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
            <Toaster />
        </>
    )
}

export default SignUp