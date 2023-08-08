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
import { FaCcVisa, FaCcPaypal, FaCcMastercard, FaGooglePay, FaApple, FaGooglePlay } from 'react-icons/fa'
import { SiPaytm } from 'react-icons/si'
import Paypal from '../Assets/Images/paypal.png'
import Mastercard from '../Assets/Images/mastercard.png'
import Visa from '../Assets/Images/visa.png'
import Paytm from '../Assets/Images/paytm.png'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className=''>
      <div className='bg-[var(--secondaryColor)] px-10 py-10 text-gray-100'>
        <div className='text-center'>
          <h3 className='font-bold sm:text-[1.5rem] m-auto mb-10'>GiveTheNeedy is a platform to connect donors and recievers for impactful giving.</h3>
        </div>
        <div className=' m-auto w-full'>

          <div id='row-1' className=' flex justify-between '>
            <div className='gap-2 w-full'>
              <div className='flex items-center gap-2 '>
                <h4 className='font-bold text-[0.6rem] sm:text-xl'>Find us</h4>
                <MdLocationPin className='text-sm sm:text-2xl' />
              </div>
              <p className='text-[0.5rem] sm:text-base'>
                H-Apartments, 2nd floor,
                <p>House.no : 1329,</p>
                Jorapukhri, Purana Bazar,
                <p>Dimapur, Nagaland 797116</p></p>
            </div>
            <div className='w-full'>
              <img src={logo} alt='logo' className='mx-auto w-14 sm:w-32' />
            </div>
            <div className='text-center w-full'>
              <h4 className='font-bold text-center text-[0.6rem] sm:text-xl'>Useful links</h4>
              <div className='flex flex-col justify-center px-2 gap-1 md:gap-2 mt-2 text-[0.5rem] sm:text-base'>
                <Link to={"/forum"}>
                  Forum
                </Link>
                <Link to={"/FAQ"}>
                  FAQ
                </Link>
              </div>
            </div>
          </div>


          {/*====================================================================================*/}


          <div id="row-2" className='my-5 flex  justify-between '>
            <div className='w-full'>
              <div className='flex items-center gap-2 '>
                <h4 className='font-bold text-[0.6rem] sm:text-xl '>Contact us</h4>
                <FiPhoneCall className='text-[0.6rem]sm:text-2xl' />
              </div>
              <p className='text-[0.5rem] sm:text-base'>+91 986 269 4100</p>
            </div>


          </div>

          {/*====================================================================================*/}
          <div id='row-3' className='flex justify-between'>

            <div className='mb-5 gap-2 w-full'>
              <div className='flex items-center gap-2 '>
                <h4 className='font-bold text-[0.6rem] sm:text-xl'>Email us</h4>
                <MdEmail className='text-[sm] sm:text-2xl' />
              </div>
              <p className='text-[0.5rem] sm:text-base'>support@givetheneedy.org.in</p>
            </div>

            <div className='flex flex-col w-full'>
              <h4 className='font-bold text-center text-[0.6rem] sm:text-xl'>Download the App!!</h4>
              <div className='flex justify-center px-2 gap-1 md:gap-2 mt-2 text-[0.5rem] sm:text-base'>
                <a href="" className='bg-black flex py-1 md:py-2 px-4 md:px-6 items-center rounded md:rounded-lg gap-2 '>
                  <FaApple />
                  <span className='lg:flex hidden'>Download</span>
                </a>
                <a href="" className='bg-black flex py-1 md:py-2 px-4 md:px-6 items-center rounded md:rounded-lg gap-2'>
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
        </div>
      </div>


      {/*===========================================================*/}
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
