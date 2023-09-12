import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '../Assets/Images/logo.png'
import Footer from './Footer'

const Gallery = () => {
    const cards = [
        {
            title: "Video Gallery",
            buttonText: "Click to view Videos",
            link: "/video-gallery"
        },
        {
            title: "Photo Gallery",
            buttonText: "Click to view Photos",
            link: "/photo-gallery"
        }
    ]
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div className='flex flex-col mt-20'>
                <h1 className='m-auto font-bold text-2xl sm:text-[3rem] text-[var(--primaryColor)]'>Gallery</h1>
                <hr className='w-1/2 sm:mt-5 m-auto border-[var(--primaryColor)] border' />


                <div className='sm:flex w-[90%] m-auto mt-20 justify-between'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 w-full mb-20'>
                        {cards.map((item) => {
                            return (
                                <div className='box-shadow p-5 rounded-lg text-center pb-20'>
                                    <h1 className='text-xl sm:text-4xl font-bold text-[var(--primaryColor)]'>{item.title}</h1>
                                    <img src={logo} alt="logo" className='m-auto my-10' />
                                    <Link to={item.link}
                                        className='bg-[var(--primaryColor)] px-4 py-2 text-white rounded-lg mt-10 hover:bg-white hover:border-[var(--primaryColor)] hover:border hover:text-[var(--primaryColor)]'>
                                        {item.buttonText}
                                    </Link>
                                </div>
                            )
                        })}

                    </div>
                </div>
                <Footer />
            </div>

        </>

    )
}

export default Gallery