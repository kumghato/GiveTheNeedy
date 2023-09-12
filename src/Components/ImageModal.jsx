import React from 'react'
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai'

const ImageModal = ({ clickedImg, setClickedImg, handelRotationRight, handelRotationLeft }) => {
    const handleClick = () => {
        setClickedImg(null)
    }
    return (
        <div className='bg-[rgba(0,0,0,0.8)] fixed top-0 z-[100] w-full h-full flex justify-center p-10'>

            <span onClick={handleClick} className='cursor-pointer fixed top-0 right-10 text-2xl text-white'>X</span>
            <div className="text-white text-4xl items-center flex me-auto cursor-pointer">
                <div onClick={handelRotationLeft}>
                    <AiOutlineLeft />
                </div>
            </div>
            <img src={clickedImg} alt="Bigger_Image" className='object-contain m-auto sm:m-0' />
            <div className="text-white text-4xl items-center flex ms-auto  cursor-pointer">
                <div onClick={handelRotationRight}>
                    <AiOutlineRight />
                </div>
            </div>
        </div>
    )
}

export default ImageModal