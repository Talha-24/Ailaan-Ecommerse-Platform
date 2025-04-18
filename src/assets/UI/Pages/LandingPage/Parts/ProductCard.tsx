import React from 'react'
import { AddTime, Price, PriceContainer, Product, ProductImage, ProductLocation, ProductName } from './index.style'
import CardButton from './CardButton'
interface product {
  isproduct?: boolean,
  product?: boolean,
  relatedads?: boolean,

}
const ProductCard: React.FC<product> = ({ isproduct, product,relatedads}) => {


  return (
    <Product isproduct={true} product={product} relatedads={relatedads}>
      <ProductImage product={product}><img className={`${product ? "h-[100%] w-[100%] object-cover rounded-t-[15px]" :  "h-[100%] w-[100%] object-cover rounded-t-[15px]"}`} src={"https://s3-alpha-sig.figma.com/img/dd2d/5517/b9ecd21732e76844b3200e7d0c0f8974?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=H~48EXd02tXuaKgSai8sveet73aSNEKhvhOoN2c3ESYLNPBtnQQM3Ztb2yZy9xQYAs3f6vyhC6~z0VjoCYT7Fftp41yku6yKnGBQdAOk92I4zntAxnaDZzbkEp2GQAY0Ux5XwcYpgRGHmpNpXDDvR4Rf2yVwEAUReru-w7m31th6IWTzMDap8Dg3ApwEAFnfnK0IMWDEuhAvgH4yjG7gLJsYuVWfOkpm1mvPRot0xoBbs97ClpVd6ui1zuSwSYEPeGbM91s-ywSCqZcc-jNFArcBSLR55nywCJi-vmHHBpVvFASuWsIZPkyVHxdZ8bFBH77uYgTO3eOadvgJv4e5Hg__"} alt="" /></ProductImage>
      <div className='p-[16px]'>
        <ProductName product={product}>Samsung Galaxy Note 20 Ultra</ProductName>
        <ProductLocation product={product}>DC Chowk, Rahim Yar Khan</ProductLocation>
        <AddTime product={product}>6 days  ago</AddTime>
        <PriceContainer product={product}>
          <Price product={product}>Rs. 1,80,000</Price><svg className={`  ${product ? "w-[15px] h-[15px]": "w-[21px] h-[23px]"}`} viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M11.535 19.6508L2.55484 10.4055C1.76559 9.62705 1.24467 8.62306 1.06597 7.53594C0.887262 6.44882 1.05984 5.33375 1.55922 4.34889V4.34889C1.93579 3.60568 2.48587 2.96142 3.16414 2.46921C3.84241 1.977 4.62946 1.65092 5.46043 1.51783C6.29141 1.38475 7.14252 1.44847 7.94366 1.70375C8.74479 1.95903 9.47301 2.39856 10.0683 2.98613L11.535 4.43302L13.0018 2.98613C13.5971 2.39856 14.3253 1.95903 15.1264 1.70375C15.9275 1.44847 16.7787 1.38475 17.6096 1.51783C18.4406 1.65092 19.2277 1.977 19.9059 2.46921C20.5842 2.96142 21.1343 3.60568 21.5109 4.34889C22.0096 5.33337 22.1818 6.44778 22.0033 7.53428C21.8248 8.62078 21.3045 9.6243 20.5162 10.4027L11.535 19.6508Z" stroke="#333333" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" /></svg></PriceContainer>
        {isproduct ? <>
          <CardButton product={product} />
        </> : <></>}
      </div>
    </Product>

  )
}

export default ProductCard
