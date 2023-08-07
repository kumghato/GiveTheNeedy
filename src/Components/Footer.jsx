import React from 'react';
import logo from '../Assets/Images/logo.png'
import { MdLocationPin } from 'react-icons/md'
import { FiPhoneCall } from 'react-icons/fi'
import { FaYoutube } from 'react-icons/fa';
import { AiFillFacebook } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'
import playstore from '../Assets/Images/play.png'
import AppStore from '../Assets/Images/apple1.png'

const Footer = () => {
  return (
    <footer className=''>
      <div className='bg-[var(--secondaryColor)] px-10 py-10 text-gray-100'>
        <div className='text-center'>
          <h3 className='font-bold sm:text-[1.5rem] m-auto mb-10'>GiveTheNeedy is a platform to connect donors and recievers for impactful giving.</h3>
        </div>
        <div className='flex'>
          <div className='sm:w-[40%] '>
            <div className='my-5'>
              <MdLocationPin className='text-sm sm:text-2xl' />
              <h4 className='font-bold leading-10'>Find us</h4>
              <p className='text-xs sm:text-base'>H-Apartments, 2nd floor,<p>House.no : 1329,</p>  Jorapukhri, Purana Bazar, <p>Dimapur, Nagaland 797116</p></p>
            </div>
            <div className='my-5'>
              <FiPhoneCall className='text-1 sm:text-2xl' />
              <h4 className='font-bold leading-10'>contact us</h4>
              <p className='text-xs sm:text-base'>+91 986 269 4100</p>
            </div>
            <div className='my-5'>
              <MdEmail className='text-sm sm:text-2xl' />
              <h4 className='font-bold leading-10'>Email us</h4>
              <p className='text-xs sm:text-base'>support@givetheneedy.org.in</p>
            </div>
          </div>
          <div className='ms-auto md:me-20'>
            <img src={logo} alt='logo' className='m-auto w-20 sm:w-40' />
            <h4 className='font-bold text-center mt-40 text-sm'>Download the App!!</h4>
            <div className='flex items-center h-20'>
              <img className='object-cover w-20 sm:w-40 cursor-pointer' src={AppStore} alt='logo' />
              <img className='object-cover w-20 sm:w-40 cursor-pointer' src={playstore} alt='logo' />
            </div>
          </div>
        </div>
      </div>

      <div className='text-center p-5'>
        <div className='m-auto'>
          <h4 className=' leading-10'>Follow Us</h4>
          <div className='flex justify-center text-2xl gap-3'>
            <a href=""><AiFillFacebook /></a>
            <a href=""><AiFillInstagram /></a>
            <a href=""><AiFillLinkedin /></a>
            <a href=""><FaYoutube /></a>
          </div>
        </div>
        <p className=' leading-10'> {new Date().getFullYear()} &copy; All rights reserved</p>
      </div>

    </footer >
  );
}

export default Footer;
