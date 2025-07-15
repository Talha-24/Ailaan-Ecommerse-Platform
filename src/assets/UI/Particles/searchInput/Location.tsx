import React, { ChangeEvent, MouseEvent, useEffect, useState } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import { FaLocationCrosshairs, FaLocationDot } from 'react-icons/fa6'
interface location{
    style?: string,
    styleTwo?: boolean,
}
const Location: React.FC<location> = ({ style,styleTwo }) => {
    const [isShow, setisShow] = useState<boolean>(false);
    const [location, setlocation] = useState<string>('');

    const array: string[] = ["Pakistan", "Rahim Yar Khan", "Idyala", "a", "b"];
    function searchArray(array:string[]) {
        array = array.filter((item:string) => {
            return item.includes(location);
        })


    }
    useEffect(() => {
        if (location) {
            searchArray(array);
        }
    }, [location, array]);
    // 
    return (
        <>
            <div id="" className={` ${style ? "bg-[white]" : "bg-[#2BBEF9]"}  dropdown ${style ? `w-[100%]` : `w-[40%]`} h-[100%] ${style ? "rounded-lg" : "rounded-full"}  flex items-center justify-center gap-4 px-5 ${style ? "py-[10px]" : "py-0"} ${styleTwo ? 'w-full border-1': ""}`}>
                <FaLocationDot className={` ${style ? "hidden" : "text-white"}  text-xl`} />
                <input type="text" value={location} onChange={(e: ChangeEvent<HTMLInputElement>) => { setlocation(e.target.value) }} placeholder="Rahim Yar Khan" className={`outline-none placeholder:font-[400]  font-[400] ${style ? "text-black" : "text-white"} w-full`} />
                {isShow ? <FaAngleUp onClick={() => setisShow(!isShow)} className={`text-3xl ${style ? "text-[gray]" : "text-white"}`} /> : <FaAngleDown onClick={() => setisShow(!isShow)} className={`text-3xl    ${style ? "text-[gray]" : "text-white"}`} />}
            </div>
            {isShow ? <div id='scrollBar' className={`${style ? "w-[100%]" : "w-[37%]"} overflow-y-scroll absolute top-14 left-1 bg-white flex flex-col  h-60 rounded-xl  ${styleTwo? `absolute top-[97%] left-[-5px]`: ``}`}>
                <div className="flex items-center gap-2 text-[gray] hover:text-[#2BBEF9] px-4 border-b-[1.8px] border-[#bdbcbc]">
                    <FaLocationCrosshairs className="text-xl" />
                    <span onClick={(e: MouseEvent<HTMLInputElement>) => {
                        setisShow(!isShow)
                        setlocation(e.target.innerHTML);
                    }} className="font-[500] py-7">Use current location</span>
                </div>
                <div className="flex items-center gap-2 text-[gray] hover:text-[#2BBEF9] px-3">
                    <FaLocationDot className="text-xl" />
                    <span onClick={(e: MouseEvent<HTMLInputElement>) => {
                        setisShow(!isShow)
                        setlocation(e.target.innerHTML);
                    }} className="font-[500] py-7">See Ads in all Pakistan</span>
                </div>
                <p className="px-4 text-[12px] font-[400] uppercase text-[gray]">Choose region</p>

                {location ? <>
                    {array.filter((val) => {

                        if (val.includes(location)) {
                            console.log("Hello")
                            return (
                                <div className="flex items-center text-[gray] gap-2 hover:text-[#2BBEF9] px-4 py-">
                                    <FaLocationDot className="text-xl" />
                                    <span onClick={(e: MouseEvent<HTMLInputElement>) => {
                                        setisShow(!isShow)
                                        setlocation(e.target.innerHTML);
                                    }} className="">{val}</span>
                                </div>
                            )

                        } ""

                    })}

                </> : <>

                    {array.map((val) => {
                        return (
                            <div className="flex items-center text-[gray] gap-2 hover:text-[#2BBEF9] px-4 py-">
                                <FaLocationDot className="text-xl" />
                                <span onClick={(e: MouseEvent<HTMLInputElement>) => {
                                    setisShow(!isShow)
                                    setlocation(e.target.innerHTML);
                                }} className="font-[500] py-3">{val}</span>
                            </div>
                        )
                    })
                    }
                </>}




            </div> : ""}

        </>
    )
}

export default Location
