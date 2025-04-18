import React from 'react'
import ProductCard from '../../../UI/Pages/LandingPage/Parts/ProductCard';
interface card{
    product?:boolean;
    relatedads?:boolean | any,
}
const ProductPageCard:React.FC<card> = ({relatedads}) => {
    const product=true;
    return (
        <div className='flex flex-wrap gap-2 w-full h-full'>
            <ProductCard  product={product} isproduct={true}  relatedads={relatedads} />
            <ProductCard product={product} isproduct={true} relatedads={relatedads} />
            <ProductCard product={product} isproduct={true} relatedads={relatedads} />
            <ProductCard product={product} isproduct={true} relatedads={relatedads} />
        </div>
    )
}

export default ProductPageCard;
