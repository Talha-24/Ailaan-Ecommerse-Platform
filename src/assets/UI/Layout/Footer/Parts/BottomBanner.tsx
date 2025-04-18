import React from 'react'
import { Banner, Description, Title } from './index.style'
import mobile from "../../../Image and Svgs/Header/Footer/Frame 1597882911 1.png"
import apple from "../../../Image and Svgs/Header/Footer/Logo.svg"
import playStore from "../../../Image and Svgs/Header/Footer/Google Play logo.svg"
const BottomBanner: React.FC = () => {


    return (
        <Banner>
            <div className='h-[293px] w-full'>
                <img className='h-full w-full object-cover' src={mobile} alt="" />
            </div>
            <div className='flex items-center flex-wrap max-[816px]:justify-center max-[780px]:justify-start max-[816px]:py-[40px] max-[716px]:gap-[30px]'>
                <div>
                    <Title>TRY Classified APP</Title>
                    <Description>
                        Buy, sell and find just about anything using the app on your mobile.</Description>
                </div>

                <div className='flex flex-col gap-[20px] w-full justify-center items-center max-[816px]:w-fit'>
                    <Title>GET YOUR APP TODAY</Title>
                    <div className='flex gap-[15px] min-w-[100%] max-[816px]:flex-col'>
                        <div className='bg-white p-2 flex gap-2 items-center justify-center w-[33%] rounded-lg border-[2px] max-[816px]:w-full'>
                            <div>
                                <img src={apple} alt="" />
                            </div>
                            <div className=''>
                                <p className='text-[8px]  font-medium'>Download on the</p>
                                <p className='text-sm font-semibold'>App Store</p>
                            </div>
                        </div>
                        <div className='bg-white p-2 flex items-center justify-center w-[35%] rounded-lg border-[2px] max-[816px]:w-full'>
                            <div>
                                <img src={playStore} alt="" />
                            </div>
                            <div className=''>
                                <p className='text-[10px]  font-normal uppercase '>Get It on</p>
                                <p className='text-sm font-semibold'>Google Play</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </Banner>
    )
}

export default BottomBanner
