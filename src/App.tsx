// import LandingPage from "./assets/Pages/Landingpage/landing-page"
// import { useState } from "react"
// import ProductPage from "./assets/Pages/Products/product-page"
// import { Route, Routes } from "react-router-dom"
// import LandingPage from "./assets/Pages/Landingpage/landing-page"
// import Footer from "./assets/UI/Layout/Footer/Footer"
import { Route, Routes } from "react-router-dom"
import LandingPage from "./assets/Pages/Landingpage/landing-page"
import Header from "./assets/UI/Layout/Header/Header"
import ProductDetails from "./assets/Pages/ProductDetails/ProductDetails"

// import Menubar from "./assets/UI/Layout/Menubar/Menubar"
// import ProductPage from "./assets/Pages/Products/product-page"
// import ProductPageCard from "./assets/Pages/Products/Parts/product-page-card"
// import ProductDetails from "./assets/Pages/ProductDetails/ProductDetails"
// import PopularSearches from "./assets/UI/Pages/ProductPage/Parts/PopularSearches/popular-searches"
// import { FaCheck } from "react-icons/fa6";
// import Error404 from "./assets/UI/Pages/Error404/Error404
const App: React.FC = () => {
  // const [show, setShow] = useState<boolean>(false);



  return (
    <div className="flex flex-col justify-between font-[Poppins] w-full">
     <Header/>
     <LandingPage/>
     {/* <Routes>
     <Route path="/" element={<LandingPage />} />
     <Route path="/product-details" element={<ProductDetails/>} />
      </Routes> */}
     {/* <Menubar/>
     <LandingPage/> */}
    </div>
  )
}

export default App
