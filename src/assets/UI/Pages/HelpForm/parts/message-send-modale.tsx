import React from 'react'
import tick from "./Vector (7).svg"
const MessageSentModale: React.FC = () => {
    return (
        <div className='absolute h-96 p-7 w-140  bg-white rounded-2xl flex flex-col align-center'>
            <div className='text-center gap-2 flex flex-col items-center'>
                <p className='font-[600] text-2xl'>Message Sent Successfully!</p>
                <p className='text-[14px] w-[80%] font-[400]'>Thanks for Reaching out for help at Classified. You are
                    Always welcome here.</p>
                <div className='place-self-center mt-2'>
                    <img src={tick} alt="" />
                </div>
                <button className='bg-[var(--blue)] text-white px-15 py-4 font-[500] rounded-full mt-4 w-1/2'>Go to home</button>
            </div>
            <div className='w-full relative'>
                <img className='w-60 h-60 opacity-5 absolute top-[-200px] left-[58%]' src={tick} alt="" />
            </div>
        </div>
    )
}

export default MessageSentModale
