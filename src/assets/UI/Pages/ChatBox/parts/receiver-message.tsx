import React from 'react'
import { StyledPicture, StyledPictureWrapper } from '../index.style'
import user from ".././parts/utils/image.png"
const ReceiverMessage: React.FC = () => {
  return (
    <div className='flex w-full justify-end pr-[60px] gap-5 max-[500px]:pr-[10px]'>
      <div className='flex bg-[#DAF4FF] text-black font-[500] gap-2 px-4 py-3 rounded-xl whitespace-nowrap'>
        <p className='max-[500px]:text-[12px]'>Wow, this is really epic😂😂</p>
        <p className='text-[12px]'>10:43 am</p>
      </div>
      <div className='max-[500px]:hidden'>
      <StyledPictureWrapper> <StyledPicture src={user} /> </StyledPictureWrapper>
      </div>
    </div>
  )
}

export default ReceiverMessage
