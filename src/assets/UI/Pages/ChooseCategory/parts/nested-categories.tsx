import React, { useState } from 'react'
import { categoryData } from '../../../../Data/Data';
import arrowRight from "../parts/arrowRight (2).svg"

const NestedCategories: React.FC = () => {
    const [showSub, setshowSub] = useState<boolean>(true);
    
    return (
        <>
            {showSub ? <>

                <div className='flex justify-between flex-col gap-2 b h-full max-[1000px]:w-full max-[1000px]:hidden'>

                    {categoryData.map(function (val, index) {
                        return (
                            <div key={index} className='flex items-center justify-between w-[360px] max-[1240px]:w-full bg-white shadow-2xl shadow-gray-500 hover:bg-[#EFEFFD] py-2 px-4 rounded-xl'>
                                <div className='flex items-center gap-5'>
                                    <div className='h-13 w-13'>
                                        <img className='h-full w-full rounded-full' src={val.icon} alt="" />
                                    </div>
                                    <p className='text-[17px] text-[#000000] font-[400]'>{val.name}</p>
                                </div>
                                <div>
                                    <img className='h-[15px]' src={arrowRight} alt="" />
                                </div>
                            </div>
                        )
                    })}
                </div>

            </> : ""}

        </>
    )
}

export default NestedCategories
