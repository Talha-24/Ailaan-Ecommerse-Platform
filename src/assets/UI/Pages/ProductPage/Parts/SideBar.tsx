import React, { useState } from 'react'
import { SideWrapper } from './Ts/index.style'
import Location from '../../../Particles/searchInput/Location'
import CheckBox from '../../../../Utils/Checkbox/CheckBox'

interface userref{
    val:string,
}
const SideBar: React.FC = () => {



    const [show, setShow] = useState<boolean>(false);
    const [selected, setSelected] = useState<string[]>([]);

    console.log("Selected", selected);
    const conditions = ["a", "b", "c", "e", "j", "f"]


    return (

        <SideWrapper>
            <p className='text-[14px] font-[500] text-[#002F34A3]'>Home</p>
            <h4 className='text-[22px] font-[600] my-4 text-[#002F34]'>Mobiles in Pakistan</h4>
            <div className='pl-[14px] mb-[7px]'>
                <p className='text-[14px] font-[600] text-[#002F34A3'>Filters</p>
            </div>
            <hr className='text-[#A3b4c6] border-1' />
            <div className='pl-[14px]'>
                <p className='text-[14px] font-[600] text-[#002F34A3 uppercase my-[17px]'>Categories</p>
                <p className='text-[14px] font-[500] text-[#002F34A3]'>All categories</p>
                <p className='text-[14px] font-[600]  my-[17px]'>Mobiles</p>

                <div className='ml-[15px] flex flex-col gap-[22px]'>
                    {/* Api DAta */}
                    <p className='text-[15px] font-[500] text-[#002F34A3]'>Mobile Phones (0000)</p>
                    <p className='text-[15px] font-[500] text-[#002F34A3]'>Accessories (0000)</p>
                    <p className='text-[15px] font-[500] text-[#002F34A3]'>Smart Watches (0000)</p>
                    <p className='text-[15px] font-[500] text-[#002F34A3]'>Tablets (0000)</p>
                </div>
                <p className='text-[14px] font-[600]  my-[17px] uppercase'>Locations</p>

                <div className='relative border-2 border-black rounded-lg'>
                    <Location style={true} />
                </div>
                <p className='text-[14px] font-[600]  my-[17px]'>Pakistan</p>

                <div className='ml-[15px] flex flex-col gap-[22px]'>
                    {/* Api DAta */}
                    <p className='text-[15px] font-[500] text-[#002F34A3]'>Mobile Phones (0000)</p>
                    <p className='text-[15px] font-[500] text-[#002F34A3]'>Accessories (0000)</p>
                    <p className='text-[15px] font-[500] text-[#002F34A3]'>Smart Watches (0000)</p>
                    <p className='text-[15px] font-[500] text-[#002F34A3]'>Tablets (0000)</p>
                    <p className='text-[15px] font-[500] text-[#002F34A3]'>Tablets (0000)</p>
                    <p className='text-[15px] font-[500] text-[#3A77FF]'>View more</p>

                </div>
                <div className='relative  rounded-lg' >
                    {/* <Location style={true} /> */}
                    <p className='text-[14px] font-[600]  my-[17px]'>Price</p>
                    <input type="range" className='w-full' />
                    <div className='flex justify-between'>
                        <div className='flex gap-2'>
                            <p className='text-[12px] font-[500] text-[#5A5A5A]'>Price: </p>
                            <p className='text-[12px] font-[500]'> $0-$20000</p>
                        </div>
                        <p className='text-[12px] font-[500] text-[#5A5A5A]'>Filter </p>
                    </div>
                </div>
                <p className='text-[14px] font-[600]  my-[17px]'>Brand</p>

                <div className='ml-[15px] flex flex-col gap-[22px]'>
                    {/* Api DAta */}
                    <p className='text-[15px] font-[500] text-[#002F34A3]'>Mobile Phones (0000)</p>
                    <p className='text-[15px] font-[500] text-[#002F34A3]'>Accessories (0000)</p>
                    <p className='text-[15px] font-[500] text-[#002F34A3]'>Smart Watches (0000)</p>
                    <p className='text-[15px] font-[500] text-[#002F34A3]'>Tablets (0000)</p>
                    <p className='text-[15px] font-[500] text-[#002F34A3]'>Tablets (0000)</p>
                    <p className='text-[15px] font-[500] text-[#3A77FF]'>View more</p>
                </div>
                <p className='text-[14px] font-[600]  my-[17px]'>Condition</p>

                <div className='ml-[15px] flex flex-col gap-[22px]'>
                    {/* Api DAta */}
                    {conditions.map((val,idx) => {
                        return (
                            <div key={idx} className='flex items-center gap-2'>
                                <CheckBox idx={idx} val={val} select={selected} setSelected={setSelected} />
                            </div>
                        )
                    })}

                    {/* <div className='flex items-center gap-2'>
                        <CheckBox show={show} setShow={setShow} />

                        <p className='text-[17px] font-[400] text-[#002F34A3]'>Mobile Phones (0000)</p>
                    </div>
                    <div className='flex items-center gap-2'>

                        <CheckBox show={show} setShow={setShow} />

                        <p className='text-[17px] font-[400] text-[#002F34A3]'>Mobile Phones (0000)</p>
                    </div>
                    <div className='flex items-center gap-2'>

                        <CheckBox show={show} setShow={setShow} />


                        <p className='text-[17px] font-[400] text-[#002F34A3]'>Mobile Phones (0000)</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <CheckBox show={show} setShow={setShow} />
                        <p className='text-[17px] font-[400] text-[#002F34A3]'>Mobile Phones (0000)</p>
                    </div> */}
                </div>


            </div>

        </SideWrapper>


    )
}

export default SideBar
