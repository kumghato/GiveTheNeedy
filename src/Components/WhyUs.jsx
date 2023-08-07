import React from 'react'
import balance from '../Assets/Images/balance.png'
import community from '../Assets/Images/community.png'
import donation from '../Assets/Images/donation.png'
import express from '../Assets/Images/express-delivery.png'

const WhyUs = () => {

    const contents = [
        {
            image: donation,
            title: "Effortless Giving, Instant Receiving",
            content: "Donate and receive stuff in a single transaction."
        },
        {
            image: balance,
            title: "Monetary Aid & Essential Donations",
            content: "Empower every livelihood to balance living standards."
        },
        {
            image: express,
            title: "Seamless Low-cost",
            content: "Delivery of orders right at your doorstep."
        },
        {
            image: community,
            title: "Empower & Support Communities",
            content: "Fostering hope, spreading love, and helping those in need!."
        },
    ]
    return (
        <div className='mt-14 text-center'>
            <div className='m-auto'>
                <h1 className='text-[#fc6a03] sm:text-[2rem] font-semibold tracking-widest sm:leading-[3rem]'>
                    Someone somewhere is in need!<br /> Make<br />
                    <span className='font-extrabold sm:leading-[3rem]'> 'GIVE THE NEEDY APP' </span>
                    <br />Your Extended hand to give cheerfully from your comfort!
                </h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mx-5 lg:mx-10 my-5'>
                {contents.map((item) => {
                    return (
                        <div className=' rounded-lg px-5 py-10 w-full lg:my-10 box-shadow cursor-default'>
                            <img className="w-[3rem] m-auto" src={item.image} alt="icon" />
                            <h3 className='font-bold my-4'>{item.title}</h3>
                            <p>{item.content}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default WhyUs