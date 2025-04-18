import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from "embla-carousel-autoplay";
import bannderOne from "../../../Image and Svgs/Header/Banner/Property 1=Default.png"
import bannerTwo from "../../../Image and Svgs/Header/Banner/Property 1=Variant2.png"
import bannderThree from "../../../Image and Svgs/Header/Banner/Property 1=Variant3.png"
import { useEffect } from "react";

const FrontBanner = () => {
    const [emblaRef,emblaApi] = useEmblaCarousel({ loop: true, },[Autoplay()])
    useEffect(() => {
        if (emblaApi) {
          console.log(emblaApi.slideNodes()) // Access API
        }
      }, [emblaApi])
    
    return (
        <div className='w-[min(1600px,100%)]   rounded-sm px-[100px] max-[1400px]:px-[30px] max-[500px]:px-[10px] mt-[20px]'>
            <div className="embla" ref={emblaRef}>
                <div className="embla__container">
                    <div className="embla__slide h-[200px]">
                        <img className="h-[100%] w-[100%]" src={window.innerWidth > 500 ? bannderOne : "https://cdn.vectorstock.com/i/500p/57/56/template-banner-for-online-store-with-shopping-vector-42935756.jpg"} alt="" />
                    </div>
                    <div className="embla__slide h-[200px]">
                        <img  className="h-[100%] w-[100%]" src={window.innerWidth > 500 ? bannerTwo : "https://cdn.vectorstock.com/i/500p/57/56/template-banner-for-online-store-with-shopping-vector-42935756.jpg" } alt="" />
                    </div>
                    <div className="embla__slide h-[200px]">
                        <img className="h-[100%] w-[100%]" src={window.innerWidth > 500 ? bannderThree :  "https://static.vecteezy.com/system/resources/previews/011/640/737/non_2x/shopping-day-sale-banner-template-design-for-web-or-social-media-vector.jpg" } alt="" />
                    </div>
                </div>
            </div>
























        </div>
    )
}

export default FrontBanner
