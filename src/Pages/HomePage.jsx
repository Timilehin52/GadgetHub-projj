import React, { useState, useEffect } from 'react'
import AppLayout from "../Layouts/AppLayout"
import HeroSlider from "../Components/HomePage Components/HeroSlider"
import ServiceAds from "../Components/HomePage Components/ServiceAd"
import Brands from "../Components/HomePage Components/Brands"
import Trending from "../Components/HomePage Components/Trending"
import FlashDeals from "../Components/HomePage Components/FlashDeals"
import ShopByCategory from "../Components/HomePage Components/ShopByCategory"
import { BounceLoader } from "react-spinners"

export default function HomePage() {
  const [ pageIsLoading , setPageIsLoading ] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => setPageIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);
  if (pageIsLoading) return <div className="flex flex-col mx-auto items-center justify-center h-screen"><BounceLoader color="#6C4CF1" size={100} />
  <p className="text-lg lg:text-3xl pt-2 font-semibold">Loading...</p></div>
  
  return (
    <AppLayout>
      <HeroSlider />
      <ServiceAds />
      <Trending />
      <ShopByCategory />
      <FlashDeals />
      <Brands />
    </AppLayout>
  )
}
