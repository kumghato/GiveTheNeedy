import React, { useEffect, useRef } from 'react'
import { FaPhoneAlt, FaWhatsapp, FaRegEnvelope } from 'react-icons/fa'
import emailjs from 'emailjs-com'
import Footer from './Footer';
import { Toaster, toast } from 'react-hot-toast';


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_2xw6p9c', 'template_mnl6f31', form.current, 'MlRLGkOZ9NzU8XlJ4')
        e.target.reset()
        toast.success("Your Message has been sent.")
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div className='mt-20'>
                <h1 className='text-[#fc6a03] text-2xl sm:text-[3rem] font-bold text-center'>Contact</h1>
                <hr className='w-1/2 sm:mt-5 m-auto border-[var(--primaryColor)] border' />
            </div>
            <div className='container flex mt-20 mb-10 m-auto'>
                <div className='border my-3 lg:flex m-auto w-[90%] md:w-[80%]'>
                    <div className='lg:w-1/2'>
                        <h5 className='text-[0.7rem] md:text-base text-center mt-10 font-bold m-auto'>
                            Write to us!!!
                        </h5 >
                        <form className='flex flex-col p-10 gap-2' ref={form} onSubmit={(e) => sendEmail(e)}>
                            <input className='border p-3 rounded' type='text' name='fullname' placeholder='Fullname' required />
                            <input className='border p-3 rounded' type='email' name='email' placeholder='Email Address' required />
                            <input className='border p-3 rounded' type='number' name='phone' placeholder='Phone' required />
                            <textarea className='border p-3 rounded resize-none' name="message" id="" cols="30" rows="5" placeholder='Message' required></textarea>
                            <input className="mt-8 bg-[var(--primaryColor)] rounded-lg text-white py-2 cursor-pointer hover:bg-white hover:border hover:border-[var(--primaryColor)] hover:text-[var(--primaryColor)]" type='submit' placeholder='Fullname' />
                        </form>
                    </div>
                    <hr className='w-3/5 lg:w-0 h-0 lg:h-3/5 m-auto border border-gray-400' />
                    <div className='lg:w-1/2'>
                        <div className='text-[0.7rem] md:text-base p-10 flex flex-col'>
                            <h5 className='text-start mb-10 font-bold m-auto'>
                                For any inquiries, please contact us at
                            </h5 >
                            <div className='my-2 lg:my-4'>
                                <div className='flex items-center'>
                                    <FaPhoneAlt className='text-[0.6rem] lg:text-xl me-2 md:me-3' />
                                    <p className='mb-0'>+91 986 269 4100</p>
                                </div>
                                <div className='flex items-center mt-5'>
                                    <FaRegEnvelope className='text-[0.6rem] lg:text-xl me-2 md:me-3' />
                                    <p className='mb-1'>support@givetheneedy.org.in</p>
                                </div>
                            </div>
                        </div>
                        <div className='m-auto w-[80%] rounded-lg mb-10 border border-black' >
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1794.3678305423612!2d93.74605832282305!3d25.91105894377859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37460a088d96b229%3A0x62e5bf7edbfa8089!2sH.%20Apartment!5e0!3m2!1sen!2sin!4v1691656315162!5m2!1sen!2sin"
                                width="100%"
                                height="250"
                                style={{ border: "0", margin: "auto", borderRadius: "10px" }}
                                allowfullscreen=""
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>

                    </div>

                </div>
                <Toaster />
            </div>
            <Footer />

        </>
    );
}



export default Contact