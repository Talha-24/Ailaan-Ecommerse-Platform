import React, { useState } from 'react'
import { StyledWrapper } from '../CreateProductAdd/parts/index.style'
import MessageSentModale from './parts/message-send-modale'
const HelpForm: React.FC = () => {
    const [isModale, setisModale] = useState<boolean>();
    return (
        <div className={`${isModale ? "bg-gray-400" : ""}  w-[min(1600px,100%)]`}>
            <StyledWrapper>
                <div className='flex flex-col w-full gap-4 max-[600px]:flex-col max-[600px]:gap-0'>
                    <p className='font-[600] text-[24px]'>Help</p>
                    <div className='w-full flex max-[500px]:flex-col max-[500px]:gap-0  gap-10 max-[1000px]:gap-4'>
                        <div className='flex flex-col gap-3 my-3 w-1/2 max-[600px]:w-full'>
                            <label htmlFor="Addtitle" className='text-[#414141] text-[16px] font-[400]'>Name</label>
                            <input className='border-[#979797] border-1 px-5 py-4 font-[400] rounded-[7px] text-[#979797]  max-[600px]:py-2 max-[600px]:rounded-[2px] placeholder:text-[#858997]' placeholder='Type here' type="text" />
                        </div>
                        <div className='flex flex-col gap-3 my-3 w-1/2 max-[600px]:w-full'>
                            <label htmlFor="brand" className='text-[#414141] text-[16px] font-[400]'>Email</label>
                            <div className='flex  w-full relative max-[600px]:flex-col'>
                                <input className='border-[#979797] border-1 border-b px-5 py-4 font-[400] rounded-[7px] text-[#979797] w-full max-[600px]:py-2 max-[600px]:rounded-[2px]  placeholder:text-[#858997]' placeholder='Type here' type="email" />
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex  gap-10'>
                        <div className='flex flex-col gap-3  w-1/2 max-[600px]:w-full'>
                            <label htmlFor="Addtitle" className='text-[#414141] text-[16px] font-[400]'>Phone Number</label>
                            <input className='border-[#979797] border-1 px-5 py-4 font-[400] rounded-[7px] text-[#979797]  max-[600px]:py-2 max-[600px]:rounded-[2px] placeholder:text-[#858997]' placeholder='Type here' type="text" />
                        </div>
                    </div>
                    <div className='flex flex-col gap-3  w-1/2 max-[600px]:w-full'>
                        <label htmlFor="Addtitle" className='text-[#414141] text-[16px] font-[400] mt-2'>Message</label>
                        <textarea className='border-[#979797] border-1 px-5 py-4 font-[400] h-40 rounded-[7px] text-[#979797]  max-[600px]:py-2 max-[600px]:rounded-[2px]  placeholder:text-[#858997]' placeholder='Write a  message here'></textarea>
                        <p className='text-right font-[500]'> 0/200</p>
                    </div>
                    <div>
                        <button onClick={() => { setisModale(!isModale) }} className='bg-[var(--blue)] text-white font-[500] py-5 px-8 rounded-full uppercase max-[500px]:py-3 max-[500px]:px-5 max-[500px]:text-[14px]'>Send Message</button>
                    </div>
                    {isModale ? <>
                        <div className='absolute top-[50%] left-[30%]'>
                            <MessageSentModale />
                        </div>
                    </> : ""}
                </div>
            </StyledWrapper>
        </div>
    )
}

export default HelpForm
