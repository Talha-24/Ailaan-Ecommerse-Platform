// import LandingPage from "./assets/Pages/Landingpage/landing-page"
// import { useState } from "react"
// import ProductPage from "./assets/Pages/Products/product-page"
import Footer from "./assets/UI/Layout/Footer/Footer"
import Header from "./assets/UI/Layout/Header/Header"
import Menubar from "./assets/UI/Layout/Menubar/Menubar"
// import PopularSearches from "./assets/UI/Pages/ProductPage/Parts/PopularSearches/popular-searches"
// import { FaCheck } from "react-icons/fa6";
// import Error404 from "./assets/UI/Pages/Error404/Error404"
import LandingPage from "./assets/Pages/Landingpage/landing-page"
import ProductDetails from "./assets/Pages/ProductDetails/ProductDetails"
import ChatBox from "./assets/UI/Pages/ChatBox/chat-box"
import ChooseCategory from "./assets/UI/Pages/ChooseCategory/choose-category"


const App: React.FC = () => {
  // const [show, setShow] = useState<boolean>(false);
  return (
    <div className="flex flex-col justify-between font-[Poppins] w-full">
      <Header />
      <Menubar />
      {/* <LandingPage/> */}
      {/* <ProductPage /> */}
      {/* <PopularSearches /> */}
      {/* <Error404/> */}
      {/* <ProductDetails/> */}
      {/* <ProductDetails/> */}
       {/* <ChatBox/>   */}
       <ChooseCategory/>
      {/* <Footer /> */}

    </div>


  )
}

export default App
