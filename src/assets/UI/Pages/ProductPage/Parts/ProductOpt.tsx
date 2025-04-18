import React, { ChangeEvent, MouseEvent, useState } from 'react'
import burger from "../../../Image and Svgs/iconList_noinline.fc368d8e5a57a18cef128d2179dc9b51.svg.svg"
import option from "../../../Image and Svgs/Vector.svg"
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import { SiTicktick } from 'react-icons/si'
const ProductOpt: React.FC = () => {

    const [isShow, setisShow] = useState<boolean>(false);
    const [options, setOption] = useState<string[]>(["Highest price", "Lowest price", "Most relevant", "Newly listed"]);
    const [sort, setSort] = useState<string>("Higher to Lower");

    return (
        <div className='flex justify-between w-[min(1600px,100%)] items-center min-h-8  mb-4 flex-wrap'>
            <h3 className='font-semibold text-2xl'>Related to your Category <span className='text-[#008ECC]'> Mobile Phones</span></h3>
            <div className='flex gap-4 min-h-[30px] items-center max-[411px]:flex-wrap  max-[411px]:justify-between justify-between max-[1200px]:w-full'>
                <p className='text-[14px] font-semibold'>View</p>
                <div>
                    <img src={burger} alt="" />
                </div>
                <div>
                    <img className='h-6' src={option} alt="" />
                </div>

                <div className='relative flex items-center gap-6   h-[20px] max-[411px]:justify-between'>
                    <p className='uppercase font-semibold'> Sort by:</p>
                    <div className='flex items-center  relative bottom-0  gap-8 px-2'>
                        <p className='text-[14px] font-[400]'>{sort}</p>
                        {isShow ? <FaAngleUp onClick={() => setisShow(!isShow)} /> : <FaAngleDown onClick={() => setisShow(!isShow)} />}
                    </div>
                    {isShow ?
                        <div className='flex flex-col  items-center  absolute top-5 left-[94.5px] bg-[#eae9e9] px-2 w-[60%] rounded-sm '>

                            {options.map(function (option,index) {
                                return (
                                    <div key={index} className="flex w-full justify-between">
                                        {sort == option ? <>
                                            <SiTicktick fontSize={'12px'} />
                                        </> : ""}
                                        <p onClick={(e: MouseEvent<HTMLInputElement>) => {
                                            setSort(option);
                                            setisShow(!isShow);
                                        }
                                        } className='text-[14px] font-[400]'>{option}</p>
                                    </div>
                                )
                            })}
                        </div>
                        : <></>}
                </div>
            </div>
        </div >
    )
}

export default ProductOpt
