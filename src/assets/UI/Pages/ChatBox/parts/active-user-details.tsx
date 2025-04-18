import React from 'react'
import { StyledPicture, StyledPictureWrapper } from '../index.style'
import text from "..//parts/utils/Group.svg"
import call from "../parts/utils/Vector.svg"
import dots from "../parts/utils/Group 1597883245.svg"
import cancel from "../parts/utils/Cancel.svg"
import user from "../parts/utils/image.png"

const ActiveUserDetails: React.FC = () => {
    return (
        <div className='flex justify-between items-center w-full gap-4'>
            <div className='flex items-center gap-5 max-[370px]:gap-2'>
                <StyledPictureWrapper> <StyledPicture src={user} /> </StyledPictureWrapper>
                <div>
                    <p className='text-2xl font-semibold max-[500px]:text-xl max-[363px]:text-[12px]'>Usman Ashraf</p>
                    <p className='text-sm font-[400] max-[500px]:text-[10px]'>Last Active 3 hours ago</p>
                </div>
            </div>
            <div className='flex gap-7 relative max-[500px]:gap-3'>
                <div className='absolute top-10 right-11 bg-white w-[180px] px-[10px] py-3 rounded-lg shadow-xl shadow-[#eeeeee]'>
                    <p className='pb-3 pt-2 text-[13px] border-b-1 border-[#eeeeee] font-[400]'>Delete Chat</p>
                    <p className='py-4 text-[13px]  font-[400]'>Block User</p>
                </div>
                <img className='h-6 max-[500px]:h-4' src={text} alt="" />
                <img className='h-5 max-[500px]:h-4' src={call} alt="" />
                <img className='h-5 max-[500px]:h-4' src={dots} alt="" />
                <img className='h-5 max-[500px]:h-4' src={cancel} alt="" />
            </div>
        </div>
    )
}

export default ActiveUserDetails
