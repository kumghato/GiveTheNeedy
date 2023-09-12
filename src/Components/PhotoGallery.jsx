import React, { useState } from 'react'
import Footer from './Footer'
import { media } from '../Assets/Images'
import Modal from './ImageModal'


const PhotoGallery = () => {
    const [clickedImg, setClickedImg] = useState(null)
    const [currentIndex, setCurrentIndex] = useState(null)

    const handleClick = (item, index) => {
        setCurrentIndex(index)
        setClickedImg(item.url)
    }
    const handelRotationRight = () => {
        const totalLength = media.length;
        if (currentIndex + 1 >= totalLength) {
            setCurrentIndex(0);
            const newUrl = media[0].url;
            setClickedImg(newUrl);
            return;
        }
        const newIndex = currentIndex + 1;
        const newUrl = media.filter((item) => {
            return media.indexOf(item) === newIndex;
        });
        const newItem = newUrl[0].url;
        setClickedImg(newItem);
        setCurrentIndex(newIndex);
    };
    const handelRotationLeft = () => {
        const totalLength = media.length;
        if (currentIndex === 0) {
            setCurrentIndex(totalLength - 1);
            const newUrl = media[totalLength - 1].url;
            setClickedImg(newUrl);
            return;
        }
        const newIndex = currentIndex - 1;
        const newUrl = media.filter((item) => {
            return media.indexOf(item) === newIndex;
        });
        const newItem = newUrl[0].url;
        setClickedImg(newItem);
        setCurrentIndex(newIndex);
    };

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
                        handelRotationRight={handelRotationRight}
                        handelRotationLeft={handelRotationLeft}
                    />
                )
                }
            </div>

            <Footer />
        </>
    )
}

export default PhotoGallery