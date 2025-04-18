import React from 'react'
import left from "./Vector (4).svg"
import right from "./Vector (3).svg";
interface carouselprop {
    images: string[];
    setCount: (a:any) => any;
    count: number;

}
const Carousel: React.FC<carouselprop> = ({count,setCount,images }) => {
    return (
        <div className='border-1 border-red-800  max-[1100px]:w-full w-[68%]  bg-amber-900 relative'>
            <div className="w-full h-[524px] ">
                {/* Main Images */}
                <img className="h-full w-full object-cover" src={images[count]} alt="" />
            </div>
            {/* LEft Right Buttons */}
            {count !== 0 ? <>
                <div onClick={() => {
                    if (count > 0) { setCount(count - 1) }
                }
                } className="bg-[#969393] h-8 w-8 flex items-center justify-center rounded-full  absolute z-2 left-[3%] top-[50%] cursor-pointer">
                    <img className="h-1/2 w-1/2 " src={left} alt="" />
                </div>
            </> : ""}
            {count < images.length - 1 ? <div onClick={() => {
                if (count < images.length - 1) {
                    setCount(count + 1)
                }
            }} className="bg-[#969393] h-8 w-8 flex items-center justify-center rounded-full absolute z-2 top-[50%] right-[3%] cursor-pointer">
                <img className="h-1/2 w-1/2" src={right} alt="" />
            </div> : ""}

        </div>
    )
}

export default Carousel
