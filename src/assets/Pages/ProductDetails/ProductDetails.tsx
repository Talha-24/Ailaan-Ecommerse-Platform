import React, { useState } from 'react'
import Carousel from '../../UI/Pages/ProductDetails/parts/carousel';
import ProductOwnerContact from '../../UI/Pages/ProductDetails/parts/product-owner-contact';
import ProductImages from '../../UI/Pages/ProductDetails/parts/product-images';
import ProductDescription from '../../UI/Pages/ProductDetails/parts/product-description';
import 'pure-react-carousel/dist/react-carousel.es.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainWrapper, OwnerWrapper, ProductDetailsWrapper, RelatedAdds } from './parts/index.style';
import RecentlyViewed from '../../UI/Pages/ProductPage/Parts/popular-searches';
const ProductDetails: React.FC = () => {

    const [relatedads, setRelatedAds] = useState<boolean>(true);
    const [images, setImaes] = useState<string[]>(["https://s3-alpha-sig.figma.com/img/161b/26d5/16823360a368724c12b02dc42bae9854?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=d1u9yWgBKDam40OneGloGBhxSxKOCXKdTz1QMyUtR-VV9vNwqImxngYNVAnc2EkcejjADKqxd4maBEjOTIaEhDebxvddt9OV6akvINg~Vyo-XMg3xF1ixJwlacNoVHoCXVCUbkOqy21rGSPgWMR0imi9YgsklkDKMkUXlAbhS4cvI5SaHS~alHy1NUSScxsg2Ccg0hV7NXXdTvUkf1ZSwptNWXtoRIP3DErGdU2efa5eaVjmIZZeXZxZ1fO0K7yp3ufg7ld4V8o1wpoo8L~H8ps7AsEKohoBZztA5K8imiWEUj~IvBadc8KZWoN97rEsp3PqN6j5llqemzw0iawSJQ__", "https://images.olx.com.pk/thumbnails/529303212-800x600.webp", "https://images.olx.com.pk/thumbnails/529303210-800x600.webp", "https://images.olx.com.pk/thumbnails/529303211-800x600.webp", "https://images.olx.com.pk/thumbnails/529303210-800x600.webp", "https://images.olx.com.pk/thumbnails/529303210-800x600.webp", "https://images.olx.com.pk/thumbnails/529303210-800x600.webp", "https://images.olx.com.pk/thumbnails/529303210-800x600.webp"]);
    const [count, setCount] = useState<number>(0);


    return (
        <MainWrapper>
            <OwnerWrapper><Carousel count={count} setCount={setCount} images={images} /><ProductOwnerContact /></OwnerWrapper>
            <ProductImages count={count} images={images} setCount={setCount} />
            <ProductDetailsWrapper>
                {/* <ProductDetails /> */}
                <h1>hello talh</h1>
                <ProductDescription />
            </ProductDetailsWrapper>
            <RelatedAdds>
                <RecentlyViewed product={true} relatedads={relatedads} />
            </RelatedAdds>
        </MainWrapper>
    )
}

export default ProductDetails
