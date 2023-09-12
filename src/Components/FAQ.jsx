import React, { useEffect, useState } from 'react'
import { MdOutlineKeyboardArrowUp } from 'react-icons/md'
import Footer from './Footer';
import { Link } from 'react-router-dom';



const FAQ = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const [isOpen, setIsOpen] = useState(false)
    const Contact = () => {
        return (
            <>
                <Link to={"/contact"} className='hover:underline text-blue-600'>Click Here</Link>
            </>
        )
    }



    const faqData = [
        {
            question: "Q: How can I Donate?",
            answer: `A: You can donate by downloading the Give The Needy App for Android and IOS.`
        },
        {
            question: "Q: How can I receive donation as an Individual?",
            answer: `A: As an individual, you can receive donation by registering in the GTN App by uploading your Aadhar details and other personal information and delivery address. `
        },
        {
            question: "Q: How can I receive donation as an NGO/Social Organisation?",
            answer: `A: As an NGO/Social Organisation, you can receive donation by registering in the GTN App by uploading your NGO/Org. Registration/License details and your organisation information and delivery address. `
        },
        {
            question: "Q: How will I/We get the items delivered?",
            answer: `A: Our logistic partners will deliver the items to your doorstep at nominal logistic charges. `
        },
        {
            question: "Q: Where is GiveTheNeedy located?",
            answer: (
                <>
                    A: Dimapur, Nagaland. To get our physical office address, please <Contact />
                </>
            )
        }
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
            <h1 className='text-[#fc6a03] text-2xl sm:text-[3rem] font-bold text-center'>FAQs</h1>
            <hr className='w-1/2 sm:mt-5 m-auto border-[var(--primaryColor)] border' />

            <div className='mx-10 md:mx-20 my-14 '>
                {faqData.map((item, i) => {
                    return (
                        <>
                            <div onClick={() => toggle(i)} className={`border shadow-xl border-top  rounded-tl-lg rounded-tr-lg mt-5 md:w-1/2 py-2 m-auto cursor-pointer ${isOpen === i ? "border-b-0" : "rounded-lg"}`} >
                                <div className='flex'>
                                    <div className='flex font-bold justify-between px-2 md:px-5 py-2 items-center'>
                                        <h5>{item.question}</h5>
                                    </div>
                                    <div className={`ms-auto me-5`} >
                                        <MdOutlineKeyboardArrowUp className={`text-4xl cursor-pointer transition-all duration-500 ease-in ${isOpen === i ? "rotate-0" : "rotate-180"}`} />
                                    </div>
                                </div>

                            </div>
                            <div className={`shadow-xl rounded-bl-lg rounded-br-lg md:w-1/2 m-auto px-2 md:px-5 transition-all duration-500 ease-in bg-white ${isOpen === i ? 'translate-y-0 border border-t-0 border-b-0' : 'translate-y-[-1rem]'}`}>
                                <p className={`pb-5 ${isOpen === i ? 'block' : 'hidden'} `}>
                                    {item.answer}
                                </p>
                            </div>

                        </>
                    )
                })}

            </div>
            <Footer />
        </div >
    )
}

export default FAQ