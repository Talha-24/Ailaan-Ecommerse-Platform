import React from 'react'
import AllCategories from '../../UI/Layout/Category/AllCategories'
import Partners from '../../UI/Layout/Partners/Partners'
import ProductsContainer from './Parts/ProductsContainer'
import FrontBanner from '../../UI/Layout/Banner/FrontBanner/FrontBanner'
import { DataWrapper, MainWrapper } from './Parts/index.style'
import { Link } from 'react-router-dom';
import ProductCard from '../../UI/Pages/LandingPage/Parts/ProductCard'

const LandingPage: React.FC = () => {
  return (
    <MainWrapper>
      <Link to="/product-details"><ProductCard /></Link>
      <FrontBanner />
      <DataWrapper>
        <AllCategories />
        <ProductsContainer show={true} />
        <ProductsContainer show={true} />
        <ProductsContainer show={true} />
        <Partners />
      </DataWrapper>
    </MainWrapper>
  )
}

export default LandingPage
