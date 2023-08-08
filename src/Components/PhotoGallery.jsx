import React from 'react'
import Footer from './Footer'
import image from '../Assets/Images/child-pic.jpg'

const PhotoGallery = () => {
    const Photos = [
        {
            title: "Demo",
            img: image
        }
    ]
    return (
        <>
            <div className='mt-20'>
                <h1 className='text-[#fc6a03] text-2xl sm:text-[3rem] font-bold text-center'>Photo Gallery</h1>
                <hr className='w-1/2 sm:mt-5 m-auto border-[var(--primaryColor)] border' />
            </div>
            <div className='container mt-20 w-[80%] m-auto mb-10'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {Photos.map((item) => {
                        return (
                            <div className='box-shadow p-5 rounded-xl m-auto w-full'>
                                <img src={item.img} alt="img" className='rounded-lg' />

                                <h3 className='mt-4 font-semibold text-xl' >{item.title}</h3>
                            </div>
                        )
                    })}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default PhotoGallery