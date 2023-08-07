import React from 'react'
import { FaPhoneAlt, FaWhatsapp, FaRegEnvelope } from 'react-icons/fa'
import Footer from './Footer';


const Contact = () => {
    return (
        <>
            <div className='mt-20'>
                <h1 className='text-[#fc6a03] text-2xl sm:text-[3rem] font-bold text-center'>Contact</h1>
                <hr className='w-1/2 sm:mt-5 m-auto border-[var(--primaryColor)] border' />
            </div>
            <div className='container flex mt-20 mb-10 m-auto'>
                <div className='border my-3 lg:flex m-auto w-[90%] md:w-[80%]'>
                    <div className='lg:w-1/2'>
                        <form className='flex flex-col p-10 gap-2'>
                            <input className='border p-3 rounded' type='text' name='fullname' placeholder='Fullname' />
                            <input className='border p-3 rounded' type='email' name='email' placeholder='Email Address' />
                            <input className='border p-3 rounded' type='number' name='phone' placeholder='Phone' />
                            <textarea className='border p-3 rounded resize-none' name="message" id="" cols="30" rows="5" placeholder='Message'></textarea>
                            <input className="bg-[var(--primaryColor)] rounded-lg text-white py-2 cursor-pointer hover:bg-white hover:border hover:border-[var(--primaryColor)] hover:text-[var(--primaryColor)]" type='submit' placeholder='Fullname' />
                        </form>
                    </div>
                    <hr className='w-3/5 lg:w-0 h-0 lg:h-3/5 m-auto border border-gray-400' />
                    <div className='lg:w-1/2'>
                        <div className='text-[0.7rem] md:text-base p-10 flex flex-col'>
                            <h5 className='text-start mb-10 font-bold m-auto'>
                                For any inquiries, please contact us at
                            </h5 >
                            <div className='my:2 lg:my-4'>
                                <div className='flex items-center'>
                                    <FaPhoneAlt className='text-lg lg:text-3xl me-2 md:me-3' />
                                    <p className='mb-0'>+91 986 269 4100</p>
                                </div>
                                <div className='flex items-center mt-5'>
                                    <FaRegEnvelope className='text-lg lg:text-3xl me-2 md:me-3' />
                                    <p className='mb-0'>support@givetheneedy.org.in</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

        </>
    );
}



export default Contact