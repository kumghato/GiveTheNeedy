import React, { useEffect } from 'react'
import team from '../Assets/Images/The team.jpg'
import Footer from './Footer'

const AboutUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div className='w-full'>
                <div className='my-20 w-full h-[50%] px-5 sm:px-20 '>
                    <h1 className='text-[#fc6a03] text-2xl sm:text-[3rem] font-bold text-center'>About Us</h1>
                    <hr className='w-1/2 sm:mt-5 m-auto border-[var(--primaryColor)] border' />

                    <div className='card bg-gray-100 lg:flex mt-10 rounded-lg  items-center'>
                        <div className='px-5 py-5'>
                            <img className='rounded-lg w-full' src={team} alt="the_team" />
                        </div>
                        <div className='p-5 '>
                            <h1 className='font-bold text-2xl my-5'>WHAT IS ZELIANG CODE TECH?</h1>
                            <div className='pb-2 tracking-wider leading-6 sm:leading-9 text-justify text-xs sm:text-base'>
                                <p>
                                    We are specialized professionals in designing and execution of software-related services to turn your software solutions requirements into reality. We love challenges and take pride in overcoming them.<br />
                                    We, at Zeliang Code-Tech specialize in a variety of software related Services such as:<br />
                                    • Web & Mobility App Solutions<br />
                                    • IoT-based Applications Solutions<br />
                                    • Cyber-Security and Data Forensics Solutions<br />
                                    • AI and machine learning-driven applications and more..<br />
                                </p>
                            </div>

                            <h1 className='font-bold text-2xl my-4 m-auto'>OUR MISSION</h1>
                            <div className='pb-2 tracking-wider leading-6 sm:leading-9 text-justify text-xs sm:text-base'>
                                <p>

                                    We believe in the power of the internet and  Internet of Things to transform our lives in a positive way. We believe that the “future is now”. With the wide-spread application of artificial Intelligence and machine learning, it’s more so. We live a life filled with technological marvels that aid us ubiquitously. Our mission in this information age is

                                    To create software products for every aspect of life.
                                    To deliver great quality of services… on time, every time.
                                    To Dream Devise Develop .
                                    To believe in integrity and team-work
                                    To believe in expansion.
                                    To create the next big thing.
                                    To increase employment avenues in the north-east software market.
                                    To promote and foster internet security and privacy.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='my-20 w-full h-[50%] px-5 sm:px-20 '>
                    <h1 className='text-[#fc6a03] text-2xl sm:text-[3rem] font-bold text-center'>Give The Needy</h1>
                    <hr className='w-1/2 sm:mt-5 m-auto border-[var(--primaryColor)] border' />

                    <div className='card bg-gray-100 lg:flex mt-10 rounded-lg  items-center'>

                        <div className='px-5 py-3 tracking-wider leading-5 sm:leading-9 text-justify text-xs sm:text-base'>
                            <h1 className='font-bold text-2xl mt-2 mb-5'>MISSION</h1>
                            <p>
                                At GiveTheNeedy, we are passionate about making a long-term, positive impact on society. Our mission is to bridge the gap between those with wealth and a desire to serve, and those in need. Through our platform, we connect contributors and beneficiaries, empowering both donors and recipients to carry out humanitarian acts. We believe in the transformative power of compassion , even in small acts of kindness, which can spark a chain reaction of positive change in communities. Our purpose is to bring people together and make a significant difference in the lives of others. We provide vital services that streamline the donation process, ensuring each contribution has a positive impact
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