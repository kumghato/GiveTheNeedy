import React from 'react'

const ImageModal = ({ clickedImg, setClickedImg }) => {
    const handleClick = () => {
        setClickedImg(null)
    }
    return (
        <div className='bg-[rgba(0,0,0,0.8)] fixed top-0 z-[100] w-full h-full flex justify-center p-10'>
            <img src={clickedImg} alt="Bigger_Image" />
            <span onClick={handleClick} className='cursor-pointer fixed top-0 right-10 text-2xl text-white'>X</span>
        </div>
    )
}

export default ImageModal