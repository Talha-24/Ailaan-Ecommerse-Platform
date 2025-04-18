import React from 'react'
import user from "../parts/utils/image.png"
import { StyledActiveChatProduct, StyledProductContainer } from '../index.style'
const ActiveChatProduct: React.FC = () => {
    return (

        <StyledActiveChatProduct>
            <StyledProductContainer>
                <img className='h-full w-full  rounded-xl' src={user} alt="" />
            </StyledProductContainer>
            {/* <StyledProductContainer> */}
            <div className='flex flex-col items-center justify-center'>
                <p className='text-2xl w-full  font-semibold max-[500px]:text-[16px] max-[426px]:text-[12px]'>Samsung Galaxy Note 20 Ultra</p>
                <p className='text-lg font-[400] text-[#141821] max-[500px]:text-[18px] w-full'>Rs. 1,44,500</p>
            </div>
            {/* </StyledProductContainer> */}

        </StyledActiveChatProduct>


    )
}

export default ActiveChatProduct
