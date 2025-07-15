import React, { useState } from 'react'
import { StyledWrapper } from '../CreateProductAdd/parts/index.style'

const MyAdsSetting: React.FC = () => {

    const [phone, setPhone] = useState<boolean>(true);
    return (
        <div className='px-25 mt-4 max-[1442px]:max-[1400px]:px-[30px] max-[500px]:px-[10px]'>
            <StyledWrapper>
                <p className='font-[600] text-[22px]'> My Ads Settings</p>
                <div className='my-10 flex w-1/2 items-center justify-between max-[980px]:w-full'>
                    <p className='font-[400] text-[17px]'> Show my Phone Number in Ads</p>
                    <span onClick={() => { setPhone(!phone) }} className='h-8 w-15 text-white rounded-full bg-[var(--blue)] relative'>
                        <p className={` ${phone ? "h-[26px] w-[26px] absolute bg-white rounded-full top-[3px] right-[3px]" : "h-[26px] w-[26px] absolute bg-white rounded-full top-[3px] left-[3px]"} `}></p>
                    </span>
                </div>
                <hr />
                <p className='font-[600] text-[22px] mt-11'> Notifications</p>
                <div className='my-8 flex w-1/2 items-center justify-between max-[980px]:w-full'>
                    <div>
                        <p className='font-[400] text-[18px]'> Recommendations</p>
                        <p className='font-[400] text-[14px] text-[#858997]  max-[400px]:text-[10px]'>Receive recommendations based on your activity</p>
                    </div>
                    <span onClick={() => { setPhone(!phone) }} className='h-8 w-15 text-white rounded-full bg-[var(--blue)] relative'>
                        <p className={` ${phone ? "h-[26px] w-[26px] absolute bg-white rounded-full top-[3px] right-[3px]" : "h-[26px] w-[26px] absolute bg-white rounded-full top-[3px] left-[3px]"} `}></p>
                    </span>
                </div>
                <div className='my-7 flex w-1/2 items-center justify-between max-[980px]:w-full'>
                    <div>
                        <p className='font-[400] text-[18px]'> Chat Safety Tips</p>
                        <p className='font-[400] text-[14px] text-[#858997] max-[400px]:text-[10px]'>Receive safety tips based on your chat activity</p>
                    </div>
                    <span onClick={() => { setPhone(!phone) }} className='h-8 w-15 text-white rounded-full bg-[var(--blue)] relative'>
                        <p className={` ${phone ? "h-[26px] w-[26px] absolute bg-white rounded-full top-[3px] right-[3px]" : "h-[26px] w-[26px] absolute bg-white rounded-full top-[3px] left-[3px]"} `}></p>
                    </span>
                </div>

            </StyledWrapper>
        </div>
    )
}

export default MyAdsSetting
