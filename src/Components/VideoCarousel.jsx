import React from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import ReactPlayer from 'react-player';
import VideoOne from '../Assets/Videos/Video1.mp4'
import VideoTwo from '../Assets/Videos/Video2.mp4'
import VideoThree from '../Assets/Videos/Video3.mp4'
import VideoFour from '../Assets/Videos/Video4.mp4'

const VideoCarousel = () => {

    const Videos = [
        {
            title: "Mobile Apps, Coming soon!!!",
            video: VideoTwo,

        },
        {
            title: "Charity work at Village",
            video: VideoOne,

        },
        {
            title: "Give the needy!!!!!",
            video: VideoThree,

        },
        {
            title: "Mobile Apps, Coming soon!!!",
            video: VideoFour,

        },
    ]
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
    };
    return (
        <div className='p-10 text-center mb-10 w-full '>
            <h3 className='text-[var(--primaryColor)] sm:text-[2rem] font-semibold tracking-widest sm:leading-[3rem]'>Some of our works</h3>
            <div className='m-auto rounded-lg sm:p-10 leading-10 sm:w-[70%]'>
                <Slider {...settings}>
                    {Videos.map((item, index) => (
                        <div key={index} className={`mb-10`}>
                            <div className='border border-black p-5 rounded-xl m-auto w-full'>
                                <ReactPlayer
                                    controls={false}
                                    loop={true}
                                    playing={true}
                                    muted={true}
                                    url={item.video}
                                    width="100%"
                                    height={400}
                                    style={{ borderRadius: "5rem" }}
                                />
                                <h3 className='mt-4 font-semibold text-xl' >{item.title}</h3>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default VideoCarousel