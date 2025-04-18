import React, { useState } from 'react'
import WebLogo from '../../Layout/Header/parts/WebLogo'
import { FaArrowLeft } from 'react-icons/fa'
import arrowRight from "./parts/arrowRight (2).svg"
import { categoryData } from '../../../Data/Data'

const ChooseCategory: React.FC = () => {
    const [showCategory,setSubCategory]=useState<boolean>(true);
    const [showSub,setshowSub]=useState<boolean>(true);
    return (
        <div className='px-[100px] max-[1400px]:px-[30px] max-[500px]:px-[10px]  h-30 w-[min(100%,1600px)]'>
            <div className='flex justify-center relative items-center  w-full h-full flex-wrap max-[839px]:flex-col'>
                <div className='flex items-center gap-10 absolute left-0'>
                    <div className='bg-[#efeded] p-2 rounded-full max-[500px]:p-[6px]'>
                        <FaArrowLeft fontSize={'23px'} />
                    </div>
                    <div className='max-[690px]:hidden'>
                    <WebLogo />
                    </div>
                </div>
                <div className="place-self-center">
                    <p className='font-[500] text-2xl text-[#333333]'>Post your Add</p>
                </div>
            </div>
            <div className='w-full rounded-lg  flex flex-col p-8 border-2 border-[#D8DFE0] max-[500px]:p-0 max-[500px]:py-0'>
                <div className='font-[500] text-2xl mb-10 max-[500px]:m-3'>
                    Choose A Category
                </div>
                <div className='w-full flex gap-6 flex-wrap'>
                    <div className='flex justify-between flex-col gap-2  h-full max-[500px]:w-full max-[1000px]:w-full'>
                        {categoryData.map(function (val, index) {
                            return (
                                <div onMouseOver={()=>setSubCategory(true)} key={index} className='flex items-center justify-between w-[360px] max-[1240px]:w-full bg-white shadow-2xl shadow-gray-500 hover:bg-[#EFEFFD] py-2 max-[500px]:py-[6px] px-4 rounded-xl'>
                                    <div className='flex items-center gap-5'>
                                        <div className='h-13 w-13 max-[500px]:h-10 max-[500px]:w-10'>
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
                    {showCategory ? <div onMouseOver={()=>setshowSub(true)}  className='flex justify-between flex-col gap-2 h-full max-[1000px]:w-[100%]'>
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
                    {/* SubCategories */}
                    {showSub ? <>

                        <div className='flex justify-between flex-col gap-2 bg-amber-200 h-full max-[1000px]:w-full'>

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


                </div>

            </div>

        </div>
    )
}

export default ChooseCategory
