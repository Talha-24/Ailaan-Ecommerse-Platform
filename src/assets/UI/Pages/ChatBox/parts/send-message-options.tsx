import React, { useState } from 'react'
import share from "../parts/utils/shroe.svg"
import arrow from "../parts/utils/arrowUp.svg"
import arrowDown from "../parts/utils/downarrow.svg"
import send from "../parts/utils/send.svg"
const SendMessageOptions: React.FC = () => {
    const [isDown, setDown] = useState<boolean>(false);
    return (
        <div className='w-full h-fit px-[60px] pb-3 flex flex-col gap-5 relative border-t-2 border-[#d1d0d0d9] max-[700px]:px-[10px]  max-[500px]:h-[140px] max-[500px]:py-3'>
            <div onClick={() => setDown(!isDown)} className='bg-[white] flex items-center justify-center max-[500px]:hidden'>
                <img src={isDown ? arrowDown : arrow} className='absolute z-[1] bg-white mt-2  h-11 w-11 p-3 border-t-1 border-l-1 border-[#d1d0d0d9] rounded-full' alt="" />
            </div>
            <div className='flex justify-between gap-4'>
                <button className='bg-[#333333] py-4 w-1/2 text-white font-[400] rounded-full max-[700px]:py-2.5  max-[700px]:w-1/2 max-[400px]:text-[12px]'>Questions</button>
                <button className='bg-[#ffffff] border-1 border-[#858997] py-4 w-1/2 text-[#858997] font-[400] rounded-full  max-[700px]:w-1/2 max-[700px]:py-2.5 max-[400px]:text-[12px]'>Offers</button>
            </div>
            {isDown ? <>
                <div className='w-full flex items-center justify-between flex-wrap gap-1 max-[600px]:gap-4 max-[500px]:hidden'>
                    <span className='border-1 border-black px-7 font-[500] py-2 rounded-full max-[1200px]:flex-grow-1'>Hello</span>
                    <span className='border-1 border-black px-7 font-[500] py-2 rounded-full max-[1200px]:flex-grow-1'>Hello</span>
                    <span className='border-1 border-black px-7 font-[500] py-2 rounded-full max-[1200px]:flex-grow-1'>Hello</span>
                    <span className='border-1 border-black px-7 font-[500] py-2 rounded-full max-[1200px]:flex-grow-1'>Hello</span>
                    <span className='border-1 border-black px-7 font-[500] py-2 rounded-full'>Hello</span>
                    <span className='border-1 border-black px-7 font-[500] py-2 rounded-full'>Hello</span>
                </div>
            </> : ""}

            <div className='flex items-center justify-between w-full  gap-6 max-[400px]:gap-1'>
                <img className='h-9 max-[500px]:h-6' src={share} alt="" />
                <div className='flex w-full border-2  outline-none border-[#888080D9] px-7 rounded-full max-[400px]:px-2'>
                    <input className='w-full py-[15px] font-[400] rounded-full outline-none max-[700px]:py-[8px]' type="text" placeholder='Type a Message here...' />
                    <img src={send} alt="" />
                </div>
            </div>

        </div>
    )
}

export default SendMessageOptions
