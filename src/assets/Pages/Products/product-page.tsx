import React from 'react'
import SideBar from '../../UI/Pages/ProductPage/Parts/SideBar'
import ProductOpt from '../../UI/Pages/ProductPage/Parts/ProductOpt'
import ProductPageCard from './Parts/product-page-card'
import LoadMore from '../../UI/Pages/ProductPage/Parts/LoadMore'
import RecentlyViewed from '../../UI/Pages/ProductPage/Parts/popular-searches'

const ProductPage: React.FC = () => {
    return (
        <div className='min-h-[100vh] px-[100px] flex max-[1400px]:px-[30px] max-[500px]:px-[10px] w-[min(1600px,100%)]'>
            <SideBar />
            <div className='flex flex-col  ml-10 w-[min(1600px,100%)] h-full mt-18 max-[940px]:ml-0 max-[940px]:mt-3'>
                <ProductOpt />
                <ProductPageCard />
                <ProductPageCard />
                <ProductPageCard />
                <LoadMore />
                <RecentlyViewed />
            </div>

        </div>
    )
}

export default ProductPage
