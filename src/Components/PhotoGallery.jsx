import React, { useState } from 'react'
import Footer from './Footer'
import pic_1 from '../Assets/Images/pic_1.jpg'
import pic_2 from '../Assets/Images/pic_2.jpg'
import pic_3 from '../Assets/Images/pic_3.jpg'
import pic_4 from '../Assets/Images/pic_4.jpg'
import pic_5 from '../Assets/Images/pic_5.jpg'
import pic_6 from '../Assets/Images/pic_6.jpg'
import pic_7 from '../Assets/Images/pic_7.jpg'
import pic_8 from '../Assets/Images/pic_8.jpg'
import pic_9 from '../Assets/Images/pic_9.jpg'
import pic_10 from '../Assets/Images/pic_10.jpg'
import pic_11 from '../Assets/Images/pic_11.jpg'
import pic_12 from '../Assets/Images/pic_12.jpg'
import pic_13 from '../Assets/Images/pic_13.jpg'
import pic_14 from '../Assets/Images/pic_14.jpg'
import pic_15 from '../Assets/Images/pic_15.jpg'
import pic_16 from '../Assets/Images/pic_16.jpg'

const PhotoGallery = () => {
    const [fullScreen, setFullScreen] = useState(false)

    const toggleFullscreen = () => {
        setFullScreen(!fullScreen);
    };

    const fullScreenActive = 'cursor-pointer max-w-full max-h-full transition-all duration-500 ease-in-out '

    const Photos = [
        {
            title: "Donated hand sanitizers, antiseptics, masks etc during World Drugs Day 26th June 2021 at Ngwalwa village, Peren district, Nagaland",
            img: pic_1
        },
        {
            title: "Donated hand sanitizers, antiseptics, masks etc during World Drugs Day 26th June 2021 at Ngwalwa village, Peren district, Nagaland",
            img: pic_2
        },
        {
            title: "Donated hand sanitizers, antiseptics, masks etc during World Drugs Day 26th June 2021 at Ngwalwa village, Peren district, Nagaland",
            img: pic_3
        },
        {
            title: "Father - son duo, Brainchild of 'Give The Needy' app",
            img: pic_4
        },
        {
            title: "Give The Needy' app bagged 2nd position at HACKATHON 2021, organised by the Dept of Industries and Commerce, Govt of Nagaland.",
            img: pic_5
        },
        {
            title: "Master Zaiyigum, the brainchild of GTN Helping the elderly with his first fruit of earning.",
            img: pic_6
        },
        {
            title: "Master Zaiyigum, the brainchild of GTN Helping the elderly with his first fruit of earning.",
            img: pic_7
        },
        {
            title: "Lifesquare church reaching out to the needy during COVID 19 lockdown",
            img: pic_8
        },
        {
            title: "Lifesquare church reaching out to the needy during COVID 19 lockdown.",
            img: pic_9
        },
        {
            title: "Lifesquare church reaching out to the needy during COVID 19 lockdown.",
            img: pic_10
        },
        {
            title: "Lifesquare church reaching out to the needy during COVID 19 lockdown",
            img: pic_11
        },
        {
            title: "Lifesquare church reaching out to the needy during COVID 19 lockdown.",
            img: pic_12
        },
        {
            title: "Lifesquare church reaching out to the needy during COVID 19 lockdown.",
            img: pic_13
        },
        {
            title: "Lifesquare church reaching out to the needy during COVID 19 lockdown",
            img: pic_14
        },
        {
            title: "Lifesquare church reaching out to the needy during COVID 19 lockdown",
            img: pic_15
        },
        {
            title: "Lifesquare church reaching out to the needy during COVID 19 lockdown",
            img: pic_16
        }

    ]
    return (
        <>
            <div className='mt-20'>
                <h1 className='text-[#fc6a03] text-2xl sm:text-[3rem] font-bold text-center'>Photo Gallery</h1>
                <hr className='w-1/2 sm:mt-5 m-auto border-[var(--primaryColor)] border' />
            </div>
            <div className='container mt-20 w-[80%] m-auto mb-10'>
                <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 cursor-pointer`}>
                    {Photos.map((item) => {
                        return (
                            <div className={`box-shadow p-5 rounded-xl m-auto w-full text-center h-[24rem] fullscreen-image ${fullScreen ? 'actives' : ''}`} onclick={toggleFullscreen}>
                                <img src={item.img} alt="img" className='rounded-lg h-[14rem] m-auto' />

                                <h3 className='mt-4 font-semibold text-justify' >{item.title}</h3>
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