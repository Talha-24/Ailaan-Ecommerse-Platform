import React, { useState } from 'react'
import { StyledWrapper } from '../CreateProductAdd/parts/index.style'
import { FaCirclePlus } from 'react-icons/fa6'
import { IoMdInformationCircleOutline } from "react-icons/io";
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import idea from "./parts/Idea.svg"
const MyProfile: React.FC = () => {


    let array: number[] = [];
    for (let i = 1; i <= 31; i++) {
        array.push(i);
    }

    const [day, setday] = useState<number | boolean>(0);
    const [month, setMonth] = useState<number | boolean>();
    const [year, setYear] = useState<number | boolean>();
    const [gender, setGender] = useState<number | boolean>();
    return (
        <> 
            <div className='flex flex-col gap-2 p-10 relative max-[600px]:p-1'>
                <StyledWrapper>
                    <div className='w-full flex flex-col'>
                        <p className='text-xl font-semibold mt-4'>Profile</p>
                        <div className='flex w-full gap-8 max-[600px]:flex-col max-[600px]:gap-0'>
                            <div className='flex flex-row items-center gap-4 my-3 w-1/2 max-[600px]:w-full'>
                                <div className='h-25 w-25'><img className='rounded-full h-full w-full object-cover' src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?cs=srgb&dl=pexels-sulimansallehi-1704488.jpg&fm=jpg" alt="" /></div>
                                <div className='flex flex-col gap-1'>
                                    <button className='bg-[var(--blue)] text-white py-3 w-[70%] px-4 font-[500] text-[10px] rounded-full'>Upload Photo</button>
                                    <div className='flex items-center gap-1'>
                                        <IoMdInformationCircleOutline fontSize={'16px'} />
                                        <p className='text-[8px] font-[400] text-[#333333]'>JPG, JPEG, PNG Min: 400px, Max: 1024px</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        {/*  */}
                        <div className='flex flex-col w-full gap-4 max-[600px]:flex-col max-[600px]:gap-0'>
                            <div className='flex flex-row gap-3 justify-between   mt-5 max-[900px]:w-full max-[900px]:flex-col'>
                                <div className=' flex flex-col gap-3 w-1/2 max-[900px]:w-full'>
                                    <label htmlFor="Addtitle" className='text-[#414141] text-[16px] font-[400]'>Name</label>
                                    <input className='border-[#979797] border-1 px-5 py-4 font-[400] rounded-[7px] text-[#2e2e2e]' placeholder='Enter Price in Rupees' />
                                    <p className='text-[10px] font-[500] text-right'>Include condition, features and reason for selling</p>
                                </div>
                                <div className='flex flex-col gap-6  w-1/3 text-justify border-1 border-[#D0D0D0] px-4  py-3 mt-4 max-[900px]:w-full'>
                                    <div className='flex items-center gap-2'>
                                        <img src={idea} alt="" />
                                        <p className='font-[600]'>Why it is important</p>
                                    </div>
                                    <p className='font-[500] text-[12px]'>Classified is built on trust. Help other people get to know you. Tell them about the things you like. Share your favorite brands, books, movies, shows, music, food. And you will see the results…</p>
                                </div>
                            </div>
                            <div className='flex flex-col gap-3  w-full'>
                                <label htmlFor="Addtitle" className='text-[#414141] text-[16px] font-[400] max-[900px]:mt-2'>Date of Birth</label>
                                <div className='w-1/2 flex flex-row gap-2 items-center relative max-[820px]:w-full'>
                                    <span className='w-1/2 border-[#979797] border-1 rounded-[7px] relative'>
                                        <input type='number' value={day} onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setday(e.target.value) }} className='px-5 py-4 font-[400] rounded-[7px] text-[#2e2e2e] outline-none w-full' placeholder='DD' />
                                        {day == true ? <FaAngleUp onClick={() => { setday(false) }} fontSize={'22px'} className='absolute right-[9%] top-[35%]' /> : <FaAngleDown onClick={() => { setday(true) }} fontSize={'22px'} className='absolute right-[9%] top-[35%]' />}
                                    </span>
                                    {day == true ? <>
                                        <span className={`flex flex-col absolute top-[92%] w-1/3  left-[0%] overflow-y-scroll h-50`}>
                                            {array.map(function (day) {
                                                return (
                                                    <>
                                                        <p onClick={(e: React.MouseEvent<HTMLInputElement>) => {
                                                            let date = Number(e.target.innerHTML);
                                                            console.log(date);
                                                            setday(date)
                                                        }} className='bg-white w-full px-2 font-[500] hover:bg-[#c9f98a]'>{day}</p></>)
                                            })} </span>
                                    </> : <></>}

                                    <span className='w-1/2 border-[#979797] border-1 rounded-[7px] relative'>
                                        <input type='number' value={month} onChange={(e) => { setMonth(e.target.value) }} className='px-5 py-4 font-[400] rounded-[7px] text-[#2e2e2e] outline-none w-full' placeholder='MM' />
                                        {month == true ? <FaAngleUp onClick={() => { setMonth(false) }} fontSize={'22px'} className='absolute right-[9%] top-[35%] cursor-pointer' /> : <FaAngleDown onClick={() => { setMonth(true) }} fontSize={'22px'} className='absolute right-[9%] top-[35%] cursor-pointer' />}
                                    </span>
                                    {month == true ? <>
                                        <span className={`flex flex-col absolute top-[92%] w-1/3  left-[33%] overflow-y-scroll h-50`}>
                                            {array.map(function (day, idx) {
                                                if (idx < 12) {
                                                    return (
                                                        <>
                                                            <p onClick={(e: React.MouseEvent<HTMLInputElement>) => {
                                                                let date = Number(e.target.innerHTML);
                                                                console.log(date);
                                                                setMonth(date)
                                                            }} className='bg-white w-full px-2 font-[500] hover:bg-[#c9f98a]'>{day}</p></>)

                                                }

                                            })} </span>
                                    </> : <></>}
                                    <span className='w-1/2 border-[#979797] border-1 rounded-[7px] relative'>
                                        <input type='number' value={year} onChange={(e: React.ChangeEvent<HTMLInputElement>) => { }} className='px-5 py-4 font-[400] rounded-[7px] text-[#2e2e2e] outline-none w-full' maxLength={'2'} placeholder='YYYY' />
                                        {year == true ? <FaAngleUp onClick={() => { setYear(false) }} fontSize={'22px'} className='absolute right-[9%] top-[35%] cursor-pointer' /> : <FaAngleDown onClick={() => { setYear(true) }} fontSize={'22px'} className='absolute right-[9%] top-[35%] cursor-pointer' />}
                                    </span>
                                    {year == true ? <>
                                        <span className={`flex flex-col absolute top-[92%] w-1/3  left-[67%] overflow-y-scroll h-50`}>
                                            {array.map(function (day, idx) {
                                                let cY = 1990 + idx;
                                                if (idx < 12) {
                                                    return (
                                                        <>
                                                            <p onClick={(e: React.MouseEvent<HTMLInputElement>) => {
                                                                let date = Number(e.target.innerHTML); setYear(date)
                                                            }} className='bg-white w-full px-2 font-[500] hover:bg-[#c9f98a]'>{cY}</p></>)

                                                }

                                            })} </span>
                                    </> : <></>}
                                </div>
                            </div>
                        </div>
                        <div className='flex w-1/2  flex-col max-[600px]:gap-0 max-[900px]:w-full'>
                            <div className='flex flex-col gap-3  w-full mt-6 relative'>
                                <label htmlFor="Addtitle" className='text-[#414141] text-[16px] font-[400]'>Gender</label>
                                <select onChange={(e) => { setGender(e.target.value) }} className=' border-[#979797] border-1 rounded-[7px] relative px-5 py-4'>
                                    <option value="male">Male</option>
                                    <option className='font-[500]' value="female">Female</option>
                                    <option className='font-[500]' value="others">Others</option>
                                </select>
                            </div>

                            <div className='flex flex-col gap-3 w-full'>
                                <label htmlFor="" className='font-[500] mt-10'>Description</label>
                                <textarea name="" placeholder='About Yourself(optional)' className='w-full h-50 border-2 border-[#D0D0D0] p-4 font-[500] outline-none mt-2 rounded-lg' id=""></textarea>
                                <p className='self-end font-[500] text-[12px]'>0/200</p>
                            </div>
                            <div className='flex flex-col gap-6  w-full'>
                                <p className='text-xl font-semibold mt-10'>Contact Information</p>
                                <div className='w-full flex flex-col gap-2'>
                                    <span className='w-full  border-[#979797] border-1 px-5 py-2 font-[400] rounded-[7px] flex flex-row items-center' >
                                        <p className='w-1/13  outline-none text-lg'>92+</p>
                                        <input id='name' className='px-5 py-2 outline-none font-[400] rounded-[7px] text-[#2e2e2e] placeholder:text-[#2e2e2e]' placeholder='Phone Number' />
                                    </span>
                                    <p className='font-[500] text-[10px] self-end'>This is the number for buyers contacts, reminders, and other notifications.</p>
                                </div>
                                <div className='w-full flex flex-col'>
                                    <span className='w-full  border-[#979797] border-1 px-5 py-2 font-[400] rounded-[7px] flex flex-row items-center' >
                                        <input id='name' className='px-5 py-2  w-full font-[400] rounded-[7px] text-[#2e2e2e] placeholder:text-[#2e2e2e] outline-none' placeholder='name.connect@gmail.com' />
                                    </span>
                                    <p className='font-[500] text-[10px] self-end mt-2'>We won't reveal your email to anyone else nor use it to send you spam</p>
                                </div>
                            </div>


                            {/*  */}
                            {/*  */}



                            <div className='flex flex-col gap-6  w-full'>
                                <p className='text-xl font-semibold mt-10'>Optional Information</p>
                                <div className='w-full flex flex-col gap-2'>
                                    <span className='w-full flex flex-row  justify-between  px-5 py-2 font-[400] rounded-[7px]  items-start' >
                                        <div>
                                            <p className='outline-none text-lg'>Facebook</p>
                                            <p className='outline-none text-[12px] my-1 text-[#858997] max-[400px]:text-[8px]'>Sign in with Facebook and discover your trusted connections to buyers</p>
                                        </div>
                                        <button className='py-3 px-10 border-1 border-[#2BBEF9]  text-[#2BBEF9] rounded-full font-[600] max-[400px]:py-2 max-[400px]:px-6'>Connect</button>
                                    </span>
                                </div>
                                <div className='w-full flex flex-col gap-2'>
                                    <span className='w-full flex flex-row  justify-between  px-5 py-2 font-[400] rounded-[7px]  items-start' >
                                        <div>
                                            <p className='outline-none text-lg'>Facebook</p>
                                            <p className='outline-none text-[12px] my-1 text-[#858997] max-[400px]:text-[8px]'>Connect your OLX account to your Google account for simplicity and ease</p>
                                        </div>
                                        <button className='py-3 px-7 border-1 border-[#2BBEF9]  text-[#2BBEF9] rounded-full font-[600] max-[400px]:py-3 max-[400px]:px-6 max-[400px]:text-[12px]'>Disconnect</button>
                                    </span>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <button className='py-3 px-7 border-1 border-[#2BBEF9]  bg-[#2BBEF9] text-white rounded-full font-[600] max-[400px]:text-[11px] max-[400px]:px-4'>Save Changes</button>
                                    <button className='py-3 px-11 border-1 border-[#2BBEF9]  text-[#2BBEF9] rounded-full font-[600] max-[400px]:text-[11px]'>Discard</button>
                                </div>
                            </div>


                            {/* <div className='flex flex-col gap-3  w-full'>
                        <p className='text-xl font-semibold mt-4'>Lets Verify Your Phone Number</p>
                        <label htmlFor="name" className='text-[#414141] text-[16px] font-[400]'>Mobile Phone Number</label>
                        <span className='w-full  border-[#979797] border-1 px-5 py-2 font-[400] rounded-[7px] flex flex-row items-center' >
                            <p className='w-1/13  outline-none text-lg'>92+</p>
                            <input id='name' className='px-5 py-2 outline-none font-[400] rounded-[7px] text-[#2e2e2e] placeholder:text-[#2e2e2e]' placeholder='Enter your number' />
                        </span>
                    </div>
                    <div className='w-full flex justify-between mt-10'>
                        <p className='text-xl font-semibold  max-[420px]:text-[15px] max-[334px]:text-[12px]'>Show my Phone Number in Ads</p>
                       
                    </div> */}
                        </div>
                    </div>
                </StyledWrapper>
                <div className='flex flex-col gap-6  w-full border-1 border-[#D0D0D0] px-12  py-8'>
                    <p className='font-[600]'>Delete this account</p>
                    <div>
                        <p className='font-[400] py-4 text-[#414141]'>Are you sure you want to delete your account?</p>
                        <button className='border-1 px-8 py-4 rounded-full text-white bg-[var(--blue)] font-[600] text-[15px]'>Yes, delete my account</button>
                    </div>
                </div>



            </div>
        </>
    )
}

export default MyProfile
