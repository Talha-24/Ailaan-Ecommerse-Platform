import React from 'react'
import { StyledPicture, StyledPictureWrapper } from '../index.style'
import user from "../parts/utils/image.png"

const SenderMessage: React.FC = () => {
    return (
        <div className='flex w-full justify-start'>
            <div className='px-[60px] flex items-center gap-4  w-full max-[500px]:px-[10px]'>
                <div className='max-[500px]:hidden'>
                    <StyledPictureWrapper> <StyledPicture src={user} /> </StyledPictureWrapper>
                </div>
                <div className='flex bg-[#EFEFFE] text-black font-[500] gap-2 px-4 py-3 rounded-xl whitespace-nowrap'>
                    <p className='max-[500px]:text-[12px]'>Wow, this is really epic😂😂</p>
                    <p className='text-[12px]'>10:43 am</p>
                </div>
            </div>
        </div>
    )
}

export default SenderMessage
