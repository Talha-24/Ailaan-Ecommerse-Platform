import React from 'react'
import { CiLocationOn } from 'react-icons/ci'
import { TbFlag3 } from 'react-icons/tb'
import heart from "../../../Image and Svgs/Heart.svg"
import share from "../../../Image and Svgs/Share.svg"
import ArrowRight from "../../../Image and Svgs/arrowRight.svg"
import phone from "../../../Image and Svgs/phone.svg"
import chat from "../../../Image and Svgs/chat.svg"


const ProductOwnerContact:React.FC = () => {
  return (
    <div className='flex flex-col  max-[1100px]:w-full w-[min(60%,1600px)]'>
    <div>
        <h5 className='font-bold text-[31px] text-[#222222]  max-[500px]:text-[25px]'>Samsung Galaxy Note 20 Ultra</h5>
        <h6 className='font-semibold text-[42px] text-[#222222] max-[500px]:text-[22px]'>Rs. 1,44,500</h6>
        <div className='my-2 flex items-center justify-between'>
            <h6 className='font-[400] text-[28px] max-[500px]:text-[20px]'>6 days ago</h6>
            <div className='flex gap-4'>
                <img className='h-10 max-[500px]:h-7' src={heart} alt="" />
                <img className='h-10 max-[500px]:h-7' src={share} alt="" />
            </div>
        </div>
    </div>
    <div className='border-1 border-[#D8DFE0] mt-3 p-3 flex flex-col gap-3'>
        <div className='flex items-center gap-3'>
            <div className='h-16 w-16'><img className='w-full h-full rounded-full object-cover' src="https://s3-alpha-sig.figma.com/img/ce52/6fb5/e53a1cf9e87c4d8c3bb70cf42490d778?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Yx42ScyePyijTeszFfp8ZU0vjbiJNC4biCxkFh-PTlIW9hW8CT189Akt1PyGZrFOl4lL5GP~yFA31HSutdfq117CxpM6D0KIDuD159tuzVmdW-ABkhaVIAiuw9KDggoOHnKsVta5QSPUqAva~YdXi3LXNpUStmC~bQ2TBOgdjsD0TmtNTBNQ9IQroA7vUfOJIws2puYKAwsAEGzG5vLvjM30LMRCtp4XhqIagMRVCe~6aYOcA6SsTzDz23-bJljp~JTlg9~S67rkna6NJ~cDGqzKku44Kb7lblqgnuwr~cc1iWv6mFMJW9Id8UADtVjltImAs79-QDdGp-1aeA0HhA__" alt="" /></div>
            <div>
                <h4 className='font-semibold text-[#002F34]'>Usman Saeed</h4>
                <h3 className='text-[#002F34] font-[400]'>Member since Aug 2017</h3>
                <div className='flex gap-2'>
                    <h4 className='font-semibold text-[#002F34]'>See profile</h4>
                    <img src={ArrowRight} alt="" />
                </div>
            </div>

        </div>
        <div className='flex flex-col gap-2'>
            <button className='bg-[var(--blue)] w-full flex items-center justify-center h-12 gap-2 rounded-full font-semibold text-[15px] text-white'>
                <img className='h-5' src={phone} alt="" />
                Show phone number
            </button>
            <button className='bg-[#FFFFFF] w-full flex items-center justify-center h-12 gap-2 rounded-full border-1 border-[#2BBEF9] font-semibold text-[15px] text-[#2BBEF9]'>
                <img className='h-5' src={chat} alt="" />
                Chat
            </button>
        </div>


    </div>
    <div className='border-1 border-[#D8DFE0] px-3 py-2 mt-3'  >
        <div>
            <p className='font-bold text-[#002F34] text-[18px]'>Location</p>
            <div className='flex items-center gap-1 font-[400]'>
                <CiLocationOn fontSize={"22px"} />
                <p>Dharampura, Lahore</p>
            </div>
        </div>
    </div>
    <div className='flex justify-between'>
        <p className=' text-[#002F34] text-[14px] font-[400] uppercase mt-4'>Ad id 1071950120</p>
        <div className='flex items-center gap-1 font-[400]'>
            <TbFlag3 />
            <p className='text-[14px] font-semibold'>Report this ad</p>
        </div>

    </div>

</div>
  )
}

export default ProductOwnerContact
