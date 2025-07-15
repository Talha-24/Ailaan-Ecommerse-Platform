import React from 'react'
import { FaShareAlt } from 'react-icons/fa'
import ProductCard from '../LandingPage/Parts/ProductCard'

const AdvertiserProfilePage: React.FC = () => {
    return (
        <div className='px-10 flex flex-row items-start   mt-10 w-[min(1600px,100%)]'>
            <div className='w-82  flex flex-col items-center'>..
                <div className='h-50 w-50 rounded-full'><img className='w-[100%] h-[100%] rounded-full object-cover' src="https://s3-alpha-sig.figma.com/img/d180/8acd/5c8f68f1c78b54eec04bdb951c15d280?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ni4VRL7PvQ~aZkrO8N8tbI8QFMhcl25Dw6a2CyWoF72s4tMwn4UjFPuvt~dIAfjzjj7E1PfcZc0ebL-OZp0Xzv9Mnh3hrMqAi~2mlcFuFZIgQhziVWasBOWbdpZHvh7xEUdoUMVDh-BnJr15CP-HJ5J3UlXRi-y8vxXKjQcwEVsAI7i1L0zzL5hoaLbm~htd9Wn~jbBw45XPY4Ke3BPA6GP4vfMY0lJPHDsWkRFxeLUFWif5r8LqZJtiYGnmFaWcwxkryPLyVqxoo3k8lvyuf8ykPKPDRvefjFUn6C8Stdz8NtBKZzkKmvX5qO-nojpnl98LLlNT4MtO9LoC5Km2aw__" alt="" /></div>
                <p className='font-[600] text-xl my-5'>Published ads - 2</p>
                <span className='flex items-center gap-2 border-2 py-2  px-3 rounded-sm text-[600]'><FaShareAlt />
                    <p className='font-[600]'> Share user profile</p>
                </span>
                <span className='flex flex-row items-center gap-3 mt-2'>
                    <p className='font-[300] text-[14px] text-[#3A77FF]'>Report User</p>
                    <p className='font-[500]'>|</p>
                    <p className='font-[300] text-[14px] text-[#3A77FF]'>Block User</p>
                </span>
            </div>
            <div className='w-[calc(100%-400px)] flex flex-col gap-1 text-[#002F34]'>
                <h1 className='font-[700] text-5xl my-12 '>Usman Saeed</h1>
                <hr className='text-[#D8DFE0]' />
                <h4 className='text-2xl font-[500] mt-6 '>Ads Posted by <span className='font-[600] text-2xl'> Usman Saeed </span></h4>
               <div className='mt-4 flex flex-wrap gap-2'>
               <ProductCard isproduct={true} product={true}/>
               <ProductCard isproduct={true} product={true}/>
               <ProductCard isproduct={true} product={true}/>
               <ProductCard isproduct={true} product={true}/>
                </div>

            </div>
          

        </div>
    )
}

export default AdvertiserProfilePage
