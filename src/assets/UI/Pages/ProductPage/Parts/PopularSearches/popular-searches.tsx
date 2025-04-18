import React from 'react'

const PopularSearches:React.FC = () => {
    return (
        <div className="flex row justify-start px-[120px] my-10">
            <div className="flex gap-2 items-center">
                <p className="font-[700] text-[#002F34]">Popular Searches:</p>
                <p className="text-[#002F34A3] text-[12px] font-[500]">iphone</p>
                <p className="text-[#002F34A3] text-[12px] font-[500]">-</p>
                <p className="text-[#002F34A3] text-[12px] font-[500]">vivo s1</p>
                <p className="text-[#002F34A3] text-[12px] font-[500]">-</p>
                <p className="text-[#002F34A3] text-[12px] font-[500]">oppo</p>
                <p className="text-[#002F34A3] text-[12px] font-[500]">-</p>
                <p className="text-[#002F34A3] text-[12px] font-[500]">infinix</p>
                <p className="text-[#002F34A3] text-[12px] font-[500]">-</p>
                <p className="text-[#002F34A3] text-[12px] font-[500]">samsung</p>
                <p className="text-[#002F34A3] text-[12px] font-[500]">-</p>
                <p className="text-[#002F34A3] text-[12px] font-[500]">laptop</p>
            </div>
        </div>
    )
}

export default PopularSearches
