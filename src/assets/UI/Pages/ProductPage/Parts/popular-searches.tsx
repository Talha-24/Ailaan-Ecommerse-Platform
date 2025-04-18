import React from 'react'
import ProductPageCard from '../../../../Pages/Products/Parts/product-page-card'
interface relatedadds{
    product?:boolean;
    relatedads:boolean;

}
const RecentlyViewed: React.FC<relatedadds> = ({product,relatedads}) => {
    return (
        <div className='flex flex-col gap-2'>
           
            {relatedads?  <>
                <h1 className='text-xl font-bold text-[#333333]'>  Related <span className='text-[#008ECC]'>Ads</span></h1>
            </>: <>
                <h1 className='text-xl font-bold text-[#333333]'>  Recently <span className='text-[#008ECC]'>Viewed</span></h1>
            </>}
            <ProductPageCard product={product} relatedads={relatedads} />
        </div>
    )
}

export default RecentlyViewed
