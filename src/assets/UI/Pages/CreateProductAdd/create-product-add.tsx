import React, { useState } from 'react'
import PostHeader from '../ChooseCategory/parts/post-header'
import arrow from "../ChooseCategory/parts/arrowRight (2).svg"
import { StyledWrapper } from './parts/index.style'
import {  FaAngleDown, FaAngleUp } from 'react-icons/fa'
import camera from "./parts/Camera.svg"
import { FaCirclePlus } from 'react-icons/fa6'
import Location from '../../Particles/searchInput/Location'
const CreateProductAdd: React.FC = () => {

    const [isOpen, setisOpen] = useState<boolean>(false);

    const Condition: string[] = ["New", "Used", "Open Box", "Refurbished", "For Parts or Not Working"];
    const [isToggle, setToggle] = useState<boolean>(false);

    return (
        <div className='px-[100px]  max-[1400px]:px-[30px] max-[500px]:px-[10px]  h-30 w-[min(100%,1600px)]'>
            <PostHeader />
            <StyledWrapper>
                <div className='flex items-center gap-6'>
                    <p className='text-xl font-semibold max-[370px]:text-[16px]'>Selected Category</p>
                    <div className='bg-[#2BBEF917] flex items-center gap-3 font-[400] text-[#667085] px-7 py-4 rounded-full max-[370px]:px-4 max-[370px]:py-3 max-[370px]:text-[12px]'>
                        <p>Mobiles</p>
                        <img src={arrow} alt="" />
                        <p>Tablets</p>
                    </div>
                </div>

                <div className='w-full flex flex-col'>
                    <p className='text-xl font-semibold mt-10'>Include details of your AD</p>
                    <div className='flex w-full gap-8 max-[600px]:flex-col max-[600px]:gap-0'>
                        <div className='flex flex-col gap-3 my-3 w-1/2 max-[600px]:w-full'>
                            <label htmlFor="Addtitle" className='text-[#414141] text-[16px] font-[400]'>Ad Title</label>
                            <input className='border-[#979797] border-1 px-5 py-4 font-[400] rounded-[7px] text-[#979797]  max-[600px]:py-2 max-[600px]:rounded-[2px]' placeholder='Enter Title' type="text" />
                            <p className='text-[10px] font-[500] text-right'>Mention the key features of your item (e.g. brand, model, age, type)</p>
                        </div>
                        <div className='flex flex-col gap-3 my-3 w-1/2 max-[600px]:w-full'>
                            <label htmlFor="brand" className='text-[#414141] text-[16px] font-[400]'>Brand</label>
                            <div className='flex  w-full relative max-[600px]:flex-col'>
                                <input className='border-[#979797] border-1 border-b px-5 py-4 font-[400] rounded-[7px] text-[#979797] w-full max-[600px]:py-2 max-[600px]:rounded-[2px]' placeholder='Select Your Brand' type="text" />
                                {isOpen ? <>
                                    <FaAngleUp onClick={() => { setisOpen(!isOpen) }} fontSize={'30px'} className='absolute right-4 top-4 max-[600px]:right-2 max-[600px]:top-2 max-[600px]:text-[23px]' />
                                </> : <>
                                    <FaAngleDown onClick={() => { setisOpen(!isOpen) }} fontSize={'30px'} className='absolute right-4 top-4 max-[600px]:right-2 max-[600px]:top-2 max-[600px]:text-[23px]' />
                                </>}
                                {isOpen ? <>
                                    <div className="brands bg-[#dadada] px-5  absolute top-[54px] h-20 overflow-scroll  font-[400] rounded-[2px] text-[#979797] w-full flex flex-col gap-3 transition-all">
                                        <p className='font-[500]   w-full'>a</p>
                                        <p className='font-[500]  w-full'>b</p>
                                        <p className='font-[500]  w-full'>c</p>
                                        <p className='font-[500]  w-full'>d</p>
                                    </div></> : ""}
                            </div>
                        </div>
                    </div>
                    {/*  */}
                    <div className='flex w-full gap-8 max-[600px]:flex-col max-[600px]:gap-0'>
                        <div className='flex flex-col gap-3 my-3 w-1/2 max-[600px]:w-full'>
                            <label htmlFor="Addtitle" className='text-[#414141] text-[16px] font-[400]'>Description</label>
                            <textarea className='border-[#979797] border-1 px-5 py-4 font-[400] rounded-[7px] text-[#979797] h-40 max-[600px]:w-full' placeholder='Enter Title'></textarea>
                            <p className='text-[10px] font-[500] text-right'>Include condition, features and reason for selling</p>
                        </div>
                        <div className='flex flex-col gap-3 my-3 w-1/2 max-[600px]:w-full'>
                            <label htmlFor="brand" className='text-[#414141] text-[16px] font-[400]'>Condition</label>
                            <div className='flex w-full flex-wrap gap-4 max-[975px]:gap-2'>
                                {Condition.map(function (button, idx) {
                                    return (
                                        <button className='border-[#D0D0D0] border-2 py-[10px] px-6 text-[#858997] font-[400] rounded-full max-[975px]:px-3 max-[975px]:py-1 max-[975px]:text-[12px] max-[975px]:border-1' key={idx}>{button}</button>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className='flex w-1/2  flex-col max-[600px]:gap-0 max-[900px]:w-full'>
                        <div className='flex flex-col gap-3  w-full'>
                            <p className='text-xl font-semibold mt-10'>Set A Price</p>
                            <label htmlFor="Addtitle" className='text-[#414141] text-[16px] font-[400]'>Price</label>
                            <input className='border-[#979797] border-1 px-5 py-4 font-[400] rounded-[7px] text-[#2e2e2e]' placeholder='Enter Price in Rupees' />
                            <p className='text-[10px] font-[500] text-right'>Include condition, features and reason for selling</p>
                        </div>
                        <div className='flex flex-col gap-3 w-full'>
                            <label htmlFor="image" className='text-[#414141] text-[16px] font-[400]'>Images
                                <div className='flex w-full gap-4'>
                                    <div id='border' className='border-2 border-[#858997] w-1/5 h-30 rounded-lg border-dashed flex items-center justify-center max-[500px]:w-1/2'>
                                        <img className='h-8' src={camera} alt="" />
                                        <input onChange={(e) => {
                                            imageUploads(e);
                                        }} type="file" name="" hidden id="image" multiple />
                                    </div>
                                    <div id='border' className='bg-[#2BBEF9] w-1/5 h-30 rounded-lg  flex flex-col items-center justify-center cursor-pointer  max-[500px]:w-1/2'>
                                        <FaCirclePlus fontSize={'42px'} className='text-white' />
                                        <p className='text-[13px] font-[500] mt-[6px] text-white'>Add more
                                        </p>
                                        <span className='leading-[13px] font-[500] text-[14px] text-white'>IMAGES</span>
                                    </div>
                                </div>
                            </label>
                            <p className='text-[10px] font-[500]'>Add more images using the plus button. For the cover picture we recommend using the landscape mode.</p>
                        </div>
                        <div className='flex flex-col gap-3  w-full relative'>
                            <p className='text-xl font-semibold mt-10'>Your Ads Location</p>
                            <Location style={true} styleTwo={true} />
                        </div>
                        <div className='flex flex-col gap-3  w-full'>
                            <p className='text-xl font-semibold mt-10'>Review your Details</p>
                            <label htmlFor="name" className='text-[#414141] text-[16px] font-[400]'>Name</label>
                            <input id='name' className='border-[#979797] border-1 px-5 py-4 font-[400] rounded-[7px] text-[#2e2e2e] placeholder:text-[#2e2e2e]' placeholder='Taimoor A' />
                        </div>
                        <div className='flex flex-col gap-3  w-full'>
                            <p className='text-xl font-semibold mt-4'>Lets Verify Your Phone Number</p>
                            <label htmlFor="name" className='text-[#414141] text-[16px] font-[400]'>Mobile Phone Number</label>
                            <span className='w-full  border-[#979797] border-1 px-5 py-2 font-[400] rounded-[7px] flex flex-row items-center' >
                                <p className='w-1/13  outline-none text-lg'>92+</p>
                                <input id='name' className='px-5 py-2 outline-none font-[400] rounded-[7px] text-[#2e2e2e] placeholder:text-[#2e2e2e]' placeholder='Enter your number' />
                            </span>
                        </div>
                        <div className='w-full flex justify-between mt-10'> 
                            <p className='text-xl font-semibold  max-[420px]:text-[15px] max-[334px]:text-[12px]'>Show my Phone Number in Ads</p>
                            <span onClick={() => {
                                setToggle(!isToggle);
                            }} className={isToggle ? `bg-[#000000] px-2 rounded-full relative  max-[420px]:py-[2px] max-[420px]:px-[2px] ` : "border-1 border-[#000000] rounded-full relative px-2 text-white  max-[420px]:py-[2px] max-[420px]:px-[2px] "}>
                                Hello
                                <span className={isToggle ? `absolute top-[12%] right-[8%] h-[22px] w-[22px] bg-white rounded-full ` : "absolute top-[12%] left-[8%] h-[22px] w-[22px] bg-black rounded-full"}></span>
                            </span>
                        </div>
                    </div>
                </div>
            </StyledWrapper>
        </div>
    )
}

export default CreateProductAdd
