import React from 'react'
interface AppCard{
    

}
const AppCard: React.FC = ({logo,title,text,style?}) => {
    return (
        <div className='bg-white p-2 flex items-center justify-center w-[50%] rounded-lg border-[2px]'>
            <div>
                <img src={apple} alt="" />
            </div>
            <div className=''>
                <p className='text-[8px]  font-medium'>Download on the</p>
                <p className='text-sm font-semibold'>App Store</p>
            </div>
        </div>
    )
}

export default AppCard:
