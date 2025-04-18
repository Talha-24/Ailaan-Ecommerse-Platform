import React from 'react'
import Error from "../../Image and Svgs/Error404.png"
const Error404: React.FC = () => {
    return (
        <div className='flex  items-center justify-center px-35 max-[500px]:px-[10px]  w-[min(100%,1440px)] my-20 max-[1000px]:my-2 max-[1400px]:px-[30px]'>
            <div className='flex items-center justify-center w-full h-full max-[1115px]:flex-col max-[1115px]:gap-10 max-[555px]:gap-0'>
                <div className='w-1/2 max-[1115px]:w-full'>
                    <h4 className='text-[80px] font-semibold max-[500px]:text-[10vw]'>Oops!</h4>
                    <h5 className='text-[35px] font-[400]  max-[500px]:text-[6vw] max-[500px]:text-'>We can't seem to find that.
                        Try searching for it
                    </h5>
                    <h6 className='text-[#858997] font-[400] text-2xl'>Error 404</h6>
                </div>
                <div className='w-1/2 flex justify-end max-[1115px]:w-full max-[1115px]:h-1/2 max-[555px]:w-2/3 max-[555px]:h-2/3'>
                    <div className='h-100 w-100'>
                        <img className='w-full h-full object-contain' src={Error} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Error404
