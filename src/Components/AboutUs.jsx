import React from 'react'
import team from '../Assets/Images/The team.jpg'
import Footer from './Footer'

const AboutUs = () => {
    return (
        <>
            <div className='w-full'>
                <div className='my-20 w-full h-[50%] px-20 '>
                    <h1 className='text-[#fc6a03] text-[3rem] font-bold text-center'>About Us</h1>
                    <hr className='w-1/2 m-auto border-[var(--primaryColor)] border' />

                    <div className='card bg-gray-100 flex mt-10 rounded-lg'>
                        <div className='p-5'>
                            <img className='rounded-lg' src={team} alt="the_team" />
                        </div>
                        <div className='px-10 py-5 tracking-wider leading-9 text-justify'>
                            <p>
                                At GiveTheNeedy, we are passionate about making a long-term,
                                positive impact on society. Our mission is to bridge the
                                gap between those with wealth and a desire to serve, and
                                those in need. Through our platform, we connect contributors and
                                beneficiaries, empowering both donors and recipients to carry out
                                humanitarian acts. We believe in the transformative power of compassion
                                , even in small acts of kindness, which can spark a chain reaction of positive change in communities. Our purpose is to bring people together and make a significant difference in the lives of others. We provide vital services that streamline the donation process, ensuring each contribution has a positive impact
                            </p>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>


        </>

    )
}

export default AboutUs