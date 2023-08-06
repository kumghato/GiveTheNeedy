import React from 'react'
import VideoPlayer from 'react-video-js-player'
import VideoOne from '../Assets/Videos/Video1.mp4'
import VideoTwo from '../Assets/Videos/Video2.mp4'
import VideoThree from '../Assets/Videos/Video3.mp4'
import VideoFour from '../Assets/Videos/Video4.mp4'
import poster from '../Assets/Images/logo.png'
import ReactPlayer from 'react-player'
import Footer from './Footer'


const VideoGallery = () => {
    const Videos = [
        {
            title: "Mobile Apps, Coming soon!!!",
            video: VideoTwo,
            poster: poster
        },
        {
            title: "Charity work at Village",
            video: VideoOne,
            poster: poster
        },
        {
            title: "Give the needy!!!!!",
            video: VideoThree,
            poster: poster
        },
        {
            title: "Mobile Apps, Coming soon!!!",
            video: VideoFour,
            poster: poster
        },
    ]


    return (
        <>
            <div className='mt-20'>
                <h1 className='text-[#fc6a03] text-[3rem] font-bold text-center'>Video Gallery</h1>
                <hr className='w-1/2 m-auto border-[var(--primaryColor)] border' />
            </div>
            <div className='container mt-20 w-[80%] m-auto mb-10'>
                <div className='grid grid-cols-3 gap-4'>
                    {Videos.map((item) => {
                        return (
                            <div className='box-shadow p-5 rounded-xl m-auto'>
                                <ReactPlayer
                                    controls={true}
                                    url={item.video}
                                    width={350}
                                    height={200}
                                />
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

export default VideoGallery