import React from 'react'
interface Productimages {
    images: string[];
    setCount: any,
    count: number,
}


const ProductImages: React.FC<Productimages> = ({ images, setCount, count }) => {
    return (
        <div className='mt-7 flex items-center gap-4 w-full flex-wrap min-h-40'>
            {images.map(function (val, idx) {
                return (
                    <div key={idx} onClick={() => {setCount(idx);}} className={`h-40 w-40 rounded-lg max-[353px]:flex-grow-1  ${count === idx ? `border-4 border-[var(--blue)]` : ``}`}>
                        <img className='h-full w-full object-cover rounded-lg' src={val} alt="" />
</div>)})}
        </div>
    )
}

export default ProductImages
