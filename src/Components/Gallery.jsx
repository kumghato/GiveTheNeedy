import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../Assets/Images/logo.png'
import Footer from './Footer'

const Gallery = () => {

    return (
        <>
            <div className='flex flex-col mt-20'>
                <h1 className='m-auto font-bold text-[3rem] text-[var(--primaryColor)]'>Gallery</h1>
                <hr className='w-1/2 m-auto border-[var(--primaryColor)] border' />
                <div className='flex w-[80%] m-auto mt-20 justify-between'>
                    <div className='w-[45%] mb-20'>
                        <div className='box-shadow p-5 rounded-lg text-center pb-20'>
                            <h1 className='text-4xl font-bold'>Video Gallery</h1>
                            <img src={logo} alt="logo" className='m-auto mb-10' />
                            <Link to={"/video-gallery"}
                                className='bg-[var(--primaryColor)] px-4 py-2 text-white rounded-lg mt-10 hover:bg-white hover:border-[var(--primaryColor)] hover:border hover:text-[var(--primaryColor)]'>
                                Click to view Videos
                            </Link>
                        </div>
                    </div>
                    <div className='w-[45%]'>
                        <div className='box-shadow p-5 rounded-lg text-center pb-20'>
                            <h1 className='text-4xl font-bold'>Photo Gallery</h1>
                            <img src={logo} alt="logo" className='m-auto mb-10' />
                            <Link to={"/photo-gallery"} className='bg-[var(--primaryColor)] px-4 py-2 text-white rounded-lg  hover:bg-white hover:border-[var(--primaryColor)] hover:border hover:text-[var(--primaryColor)]'>Click to view Photos</Link>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>

        </>

    )
}

export default Gallery