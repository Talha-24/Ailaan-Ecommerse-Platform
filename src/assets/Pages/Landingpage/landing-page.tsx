import React from 'react'
import AllCategories from '../../UI/Layout/Category/AllCategories'
import Partners from '../../UI/Layout/Partners/Partners'
import ProductsContainer from './Parts/ProductsContainer'
import FrontBanner from '../../UI/Layout/Banner/FrontBanner/FrontBanner'
import { DataWrapper, MainWrapper } from './Parts/index.style'

const LandingPage: React.FC = () => {
  return (
    <MainWrapper>
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
