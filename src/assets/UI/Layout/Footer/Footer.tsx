import React from 'react'
import BottomBanner from './Parts/BottomBanner'
import logo from "../../Image and Svgs/Header/Footer/AppLogo.svg"
import { LogoContainer, Logo } from './Parts/index.style'
import twiter from "./Parts/Images/Vector-1.svg"
import insta from "./Parts/Images/Vector.svg"

import youtube from "./Parts/Images/twitter.svg"
// import youtube from "./Parts/Images/"

const Footer: React.FC = () => {
  return (
    <div className='min-h-[236px] bg-[#141821]'>
      {/* <BottomBanner /> */}
      <div className='min-h-[236px] bg-[#141821] flex flex-col px-25 max-[1400px]:px-8 py-8 max-[500px]:px-3 w-[min(1600px,100%)]'>
        <div className='w-full flex gap-[30px] justify-between flex-wrap'>
          <div className='flex flex-col gap-3'>
            <LogoContainer>
              <Logo src={logo}></Logo>
            </LogoContainer>
            <div className=''>
              <p className='text-[#B8B8B8] text-[12px] font-[400]'>If you have any question, please contact us at
              </p>
              <p className='text-[15px] text-[#2BBEF9] font-[400]'>support@example.com</p>
            </div>
            <div className='flex  items-center gap-[10px]'>
              <img src={youtube} alt="" />
              <img src={insta} alt="" />
              <img src={twiter} alt="" />
            </div>
          </div>

          <div className='flex flex-col gap-3 text-white'>
            <b className='font-[500]'>POPULAR CATEGORIES</b>
            <p className='text-[#B8B8B8] text-[12px] font-[400]'>Cars</p>
            <p className='text-[#B8B8B8] text-[12px] font-[400]'>Flats for Rent</p>
            <p className='text-[#B8B8B8] text-[12px] font-[400]'>Mobile Phones</p>
            <p className='text-[#B8B8B8] text-[12px] font-[400]'>Jobs</p>
          </div>


          <div className='flex flex-col gap-3 text-white'>
            <b className='font-[500]'>ABOUT US</b>
            <p className='text-[#B8B8B8] text-[12px] font-[400]'>About Us</p>
            <p className='text-[#B8B8B8] text-[12px] font-[400]'>Contact Us</p>
          </div>
          <div className='flex flex-col gap-3 text-white'>
            <b className='font-[500]'>POPULAR CATEGORIES</b>
            <p className='text-[#B8B8B8] text-[12px] font-[400]'>Help</p>
            <p className='text-[#B8B8B8] text-[12px] font-[400]'>Terms & Conditions</p>
            <p className='text-[#B8B8B8] text-[12px] font-[400]'>Privacy Policy</p>
          </div>
        </div>
      </div>

      <div className='border-t-1 border-white text-white text-center py-5 font-[400]'><p>© 2023 Classified - Copyrights 2023</p></div>
    </div>
  )
}

export default Footer
