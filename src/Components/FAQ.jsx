import React, { useState } from 'react'
import { MdOutlineKeyboardArrowUp } from 'react-icons/md'
import Footer from './Footer';

const FAQ = () => {
    const [isOpen, setIsOpen] = useState(false)

    const faqData = [
        {
            question: "Q: How can I Donate?",
            answer: `A: I don't know, ask Akhum.`
        },
        {
            question: "Q: How can I Receive donation?",
            answer: `A: I don't know, ask Akhum.`
        },
    ];

    const toggle = (i) => {
        if (isOpen === i) {
            setIsOpen(false)
            return
        }
        setIsOpen(i)
    }

    return (
        <div className='mt-20'>
            <h1 className='text-[#fc6a03] text-2xl sm:text-[3rem] font-bold text-center'>Frequently Asked Questions (FAQs)</h1>
            <hr className='w-1/2 sm:mt-5 m-auto border-[var(--primaryColor)] border' />

            <div className='mx-10 md:mx-20 my-14 '>
                {faqData.map((item, i) => {
                    return (
                        <div onClick={() => toggle(i)} className={`box-shadow rounded-lg my-5 md:w-1/2 py-5 m-auto cursor-pointer `} >
                            <div className='flex'>
                                <div className='flex font-bold justify-between px-2 md:px-5 py-2 items-center'>
                                    <h5>{item.question}</h5>
                                </div>
                                <div className={`ms-auto me-5`} >
                                    <MdOutlineKeyboardArrowUp className={`text-4xl cursor-pointer transition-all duration-500 ease-in ${isOpen === i ? "rotate-0" : "rotate-180"}`} />
                                </div>
                            </div>
                            <div className={`px-5 transition-all duration-500 ease-in ${isOpen === i ? 'translate-y-1 ' : 'translate-y-0'}`}>
                                <p className={`pb-20 ${isOpen === i ? 'flex' : ' hidden'}`}>
                                    {item.answer}
                                </p>
                            </div>
                        </div>
                    )
                })}

            </div>
            <Footer />
        </div >
    )
}

export default FAQ