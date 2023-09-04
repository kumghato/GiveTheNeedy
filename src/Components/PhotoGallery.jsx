import React, { useState } from 'react'
import Footer from './Footer'
import { media } from '../Assets/Images'
import Modal from './ImageModal'
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
    const [clickedImg, setClickedImg] = useState(null)
    const [currentIndex, setCurrentIndex] = useState(null)

    const handleClick = (item, index) => {
        setCurrentIndex(index)
        setClickedImg(item.url)
    }

    return (
        <>
            <div className='mt-20'>
                <h1 className='text-[#fc6a03] text-2xl sm:text-[3rem] font-bold text-center'>Photo Gallery</h1>
                <hr className='w-1/2 sm:mt-5 m-auto border-[var(--primaryColor)] border' />
            </div>
            <div className='container mt-20 w-[80%] m-auto mb-10'>
                <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 cursor-pointer`}>
                    {media.map((item, index) => {
                        return (
                            <div className={`box-shadow p-5 rounded-xl m-auto w-full text-center h-[24rem] `} key={index} >
                                <img src={item.url} alt="img" className='rounded-lg h-[14rem] m-auto' onClick={() => handleClick(item, index)} />
                                <h3 className='mt-4 font-semibold text-justify' >{item.title}</h3>

                            </div>

                        )
                    })}
                </div>
            </div>
            <div>
                {clickedImg && (
                    <Modal
                        clickedImg={clickedImg}
                        setClickedImg={setClickedImg}
                    />
                )
                }
            </div>

            <Footer />
        </>
    )
}

export default PhotoGallery