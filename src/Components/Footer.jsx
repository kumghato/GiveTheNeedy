import React, { useState } from 'react';
import logo from '../Assets/Images/logo.png'
import { MdLocationPin } from 'react-icons/md'
import { BiSolidPhoneCall } from 'react-icons/bi'
import { FaYoutube } from 'react-icons/fa';
import { AiFillFacebook, AiFillTwitterSquare } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
import { HiMail } from 'react-icons/hi'
import { FaCcVisa, FaCcPaypal, FaCcMastercard, FaGooglePay, FaApple, FaGooglePlay } from 'react-icons/fa'
import { SiPaytm } from 'react-icons/si'
import { Link } from 'react-router-dom';

const Footer = () => {
  const [popUp, setPopUp] = useState(false)

  const toggle = async (e) => {
    setPopUp(!popUp)
  }

  return (
    <div>
      <footer className='relative bottom-0'>
        <div className='bg-[var(--secondaryColor)] px-10 py-10 text-gray-100'>
          <div className='text-center'>
            <h3 className='font-bold sm:text-[1.5rem] m-auto mb-10'>GiveTheNeedy is a platform to connect donors and recievers for impactful giving.</h3>
          </div>
          <div className=' m-auto w-full'>

            <div id='row-1' className=' flex justify-between'>
              <div className='gap-2 w-full'>
                <div className='flex items-center gap-2 py-2'>
                  <h4 className='font-bold text-[0.6rem] sm:text-xl'>Find us</h4>
                  <MdLocationPin className='text-[0.6rem] sm:text-xl' />
                </div>
                <p className='text-[0.5rem] sm:text-base'>
                  H-Apartments, 2nd floor,
                  <p>House.no : 1329,</p>
                  Jorapukhri, Purana Bazar,
                  <p>Dimapur, Nagaland 797116</p></p>
              </div>
              <div className='w-full'>
                <img src={logo} alt='logo' className='mx-auto w-14 sm:w-[50%]' />
              </div>
              <div className='text-center w-full '>
                <div className='flex items-center gap-2 py-2 justify-center'>
                  <h4 className='font-bold  text-[0.6rem] sm:text-xl'>Useful links</h4>
                </div>
                <div className='flex flex-col justify-center px-2  gap-1 md:gap-2 mt-2 text-[0.5rem] sm:text-base'>
                  <Link to={"/forum"}>
                    Forum
                  </Link>
                  <Link to={"/faq"}>
                    FAQ
                  </Link>
                  <Link to={"/terms_of_use"}>
                    Terms of use
                  </Link>
                  <Link to={"/privacy_policy"}>
                    Privacy policy
                  </Link>
                  <Link to={"/refund_policy"}>
                    Refund policy
                  </Link>
                </div>
              </div>
            </div>


            {/*====================================================================================*/}


            <div id="row-2" className='my-5 flex '>
              <div className='w-full'>
                <div className='flex items-center gap-2'>
                  <h4 className='font-bold text-[0.6rem] sm:text-xl '>Contact us</h4>
                  <BiSolidPhoneCall className='text-[0.6rem] sm:text-xl' />
                </div>
                <p className='text-[0.5rem] sm:text-base'>+91 986 269 4100</p>
              </div>
              <div className='flex flex-col w-full'>
                <h4 className='font-bold text-center text-[0.6rem] sm:text-xl'>Download the App!!</h4>
                <div className='flex justify-center px-2 gap-1 md:gap-2 mt-2 text-[0.5rem] sm:text-base' >
                  <a className='bg-black flex py-1 md:py-2 px-4 md:px-6 items-center rounded md:rounded-lg gap-2 cursor-pointer' onClick={() => setPopUp(!popUp)}>
                    <FaApple />
                    <span className='lg:flex hidden'>Download</span>
                  </a>
                  <a className='bg-black flex py-1 md:py-2 px-4 md:px-6 items-center rounded md:rounded-lg gap-2 cursor-pointer' onClick={() => toggle()}>
                    <FaGooglePlay />
                    <span className='lg:flex hidden'>Download</span>
                  </a>
                </div>
              </div>
              <div className='flex flex-col mb-5 w-full'>
                <h4 className='font-bold text-center text-[0.6rem] sm:text-xl'>Support us</h4>
                <div className='flex justify-center px-2 gap-1 md:gap-2 mt-2 text-[0.5rem] sm:text-base'>
                  <FaCcMastercard className='text-sm md:text-4xl' />
                  <FaCcPaypal className='text-sm md:text-4xl' />
                  <FaCcVisa className='text-sm md:text-4xl' />
                  <FaGooglePay className='text-sm md:text-4xl' />
                  <SiPaytm className='text-sm md:text-4xl' />
                </div>
              </div>
            </div>

            {/*====================================================================================*/}
            <div id='row-3' className='flex justify-between'>

              <div className='mb-5 gap-2 w-full'>
                <div className='flex items-center gap-2 py-2'>
                  <h4 className='font-bold text-[0.6rem] sm:text-xl'>Email us</h4>
                  <HiMail className='text-[0.6rem] sm:text-xl' />
                </div>
                <p className='text-[0.5rem] sm:text-base'>support@givetheneedy.org.in</p>
              </div>



            </div>
          </div>
        </div>


        {/*==========================================================================*/}
        <div className='text-center p-5'>
          <div className='m-auto'>
            <h4 className=' leading-10'>Follow Us</h4>
            <div className='flex justify-center text-2xl gap-3'>
              <a href="https://www.facebook.com/profile.php?id=100083310940497&mibextid=ZbWKwL" target='_blank'><AiFillFacebook /></a>
              <a href="https://instagram.com/zeliang_codetech?utm_source=qr&igshid=OGU0MmVlOWVjOQ==" target='_blank'><AiFillInstagram /></a>
              <a href="https://twitter.com/kangzang_shane?t=dAYOswP3I7AhyuGF3B8jPg&s=09" target='_blank'><AiFillTwitterSquare /></a>
              <a href="https://youtube.com/@zeliangcodetech?si=pfor7ouP07rXVwn6" target='_blank'><FaYoutube /></a>
            </div>
          </div>
          <p className=' leading-10'> {new Date().getFullYear()} &copy; Zeliang Codetech Pvt. Ltd | All rights reserved</p>
        </div>
      </footer >

      {/*============================================================================ */}
      {popUp &&
        (
          <div className={`fixed flex items-center top-8 justify-center bg-[rgba(0,0,0,40%)] w-full h-screen`}>/
            <div className='bg-white sm:w-1/2 h-[20rem] rounded-lg flex flex-col p-5 '>
              <button onClick={() => setPopUp(false)} className='ms-auto px-3 font-bold rounded-lg '>X</button>
              <img src={logo} alt="logo" className='m-auto' />
              <h1 className='text-4xl text-center m-auto'>Mobile App coming soon</h1>
            </div>
          </div>
        )
      }


    </div>
  );
}

export default Footer;
