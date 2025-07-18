import React, { useState } from 'react'
import { categoryData } from '../../../../Data/Data';
import arrowRight from "../parts/arrowRight (2).svg"
const SubCategories: React.FC = () => {

    const [showCategory, setSubCategory] = useState<boolean>(true);
    const [showSub, setshowSub] = useState<boolean>(true);

    
    return (
        <>
            {showCategory ? <div onMouseOver={() => setshowSub(true)} className='flex justify-between flex-col gap-2 h-full max-[1000px]:w-[100%] max-[1000px]:hidden'>
                {categoryData.map(function (val, index) {

                    if (index > 5) {
                        return (

                            <div key={index} className='flex items-center justify-between w-[360px] max-[1240px]:w-full bg-white shadow-2xl shadow-gray-500 hover:bg-[#EFEFFD] py-2 px-4 rounded-xl'>
                                <div className='flex items-center gap-5'>
                                    <div className='h-13 w-13'>
                                        <img className='h-full w-full rounded-full' src={val.icon} alt="" />
                                    </div>
                                    <p className='text-[17px] text-[#000000] font-[400]'>{val.name}</p>
                                </div>
                                {index == 7 ? <div>
                                    <img className='h-[15px]' src={arrowRight} alt="" />
                                </div> : ""}
                                {/* */}
                            </div>
                        )

                    }

                })}
            </div> : ""}
        
        </>
        
    )

}

export default SubCategories
