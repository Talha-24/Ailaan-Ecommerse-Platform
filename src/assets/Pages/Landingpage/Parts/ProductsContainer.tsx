import React, { Fragment } from 'react'
import ProductCard from '../../../UI/Pages/LandingPage/Parts/ProductCard'
import { Options, ProductWrapper, Text, Wrapper } from './index.style'
import { Link } from 'react-router-dom'
interface options{
    show:boolean,
}
const ProductsContainer: React.FC<options> = ({ show }) => {

    return (
        <Fragment>
            <Wrapper>
                <Options>
                    {!show ? "" : <><Text> Mobile Phones</Text> <Text>View All</Text></>}
                </Options>
                {/* <ProductWrapper>
                    <Link to="/product-details"><ProductCard /></Link>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </ProductWrapper> */}
            </Wrapper>
        </Fragment>
    )
}

export default ProductsContainer
