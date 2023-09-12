import React, { useEffect } from 'react'
import background from '../Assets/Images/child-pic.png'
import Sidebar from './Sidebar'
import WhyUs from './WhyUs'
import Footer from './Footer'
import Testimonials from './Testimonials'
import VideoCarousel from './VideoCarousel'
import { Link } from 'react-router-dom'

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>

            <div className='w-full'>
                <div className='h-full'>
                    <Sidebar />
                    <img className='h-[300px] sm:h-screen w-full' src={background} alt="background" />
                </div>
                <div className='w-[70%] absolute top-[11%] sm:top-[15%] lg:top-[20%] ms-14 sm:ms-28'>
                    <div className=' bg-white/[.24] rounded-lg shadow-2xl'>
                        <h1
                            className=' text-[.8rem] lg:text-[4rem] md:text-[3rem] sm:text-[2.5rem] font-semibold tracking-[0.5rem] sm:tracking-[0.7rem] lg:tracking-[1rem] leading-snug text-shadow p-5 text-[var(--primaryColor)]'>
                            A
                            <span className='text-white'> CONTEMPORARY</span><br />
                            GIVING
                            <span className='text-white'> PLATFORM</span><br />
                            WITH REAL
                            <span className='text-white'> IMPACT</span>
                            <span className='text-[#fc6a03]'>!</span>
                        </h1>
                    </div>
                    <div className='text-[.5rem] sm:text-lg md:text-2xl tracking-widest mt-4 sm:my-5 text-shadow lg:leading-9'>
                        <p className='text-[#fc6a03] '>
                            Fostering hope, spreading love and helping those in need
                        </p>
                        <p className='text-white'>
                            Join our network of donors who are talking pressing needs.
                        </p>
                    </div>
                    <Link to={"/forum"} className='hover:bg-white hover:text-[var(--primaryColor)] hover:border hover:border-[var(--primaryColor)] bg-[#fc6a03] px-[0.5rem] py-[0.1rem] md:px-5 md:py-3 rounded-[2rem] text-white md:font-bold mt-3 md:mt-5 lg:mt-10 text-[0.47rem] sm:mt-20 text-sm sm:text-lg'>Join us today</Link>
                </div>
            </div>
            <WhyUs />
            <VideoCarousel />
            <Testimonials />
            <Footer />
        </>
    )
}

export default Home