import React from 'react'

const ProductDetails:React.FC = () => {
    return (
        <div className='h-40 rounded-lg border-1 border-[#D8DFE0] w-1/4 p-4 flex flex-col gap-2 max-[800px]:w-full'>
            <p className='font-bold text-2xl'>Details</p>
            <div className='flex justify-between w-full'>
                <p className='text-[var(--black)] text-[13px] font-[400] my-1'>Brand</p>
                <p className='font-bold text-[var(--black)] mr-2'>Infinix</p>
            </div>
            <div className='flex justify-between w-full'>
                <p className='text-[var(--black)] text-[13px] font-[400] my-1'>Brand</p>
                <p className='font-bold text-[var(--black)] mr-2'>Infinix</p>
            </div>
            <div className='flex justify-between w-full'>
                <p className='text-[var(--black)] text-[13px] font-[400] my-1'>Brand</p>
                <p className='font-bold text-[var(--black)] mr-2'>Infinix</p>
            </div>
        </div>
    )
}

export default ProductDetails
