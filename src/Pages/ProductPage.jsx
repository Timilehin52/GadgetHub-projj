import React from 'react'
import AppLayout from "../Layouts/AppLayout"
import ProductCard from "../Components/ProductCard"
import { FaGreaterThan } from "react-icons/fa";
import { products } from "../productData.js"
import FilterSideBar from "../Components/ProductPage Components/FilterSideBar"
import vector from "../assets/Vector.png"
import ServiceAd from "../Components/HomePage Components/ServiceAd"


export default function ProductPage() {
  return (
   <AppLayout>
    <div className="px-5 py-1 lg:py-4 mx-auto container">
         <h1 className="flex items-center gap-1 text-[16px] text-[#5F6C72]">Home  <span className="text-[12px] text-[#434545]"><FaGreaterThan /></span> <span className="font-semibold">All Categories</span> </h1>
        <div className="flex justify-between items-center">
            <div className="py-2">
                 <h1 className="text-[24px] font-semibold ">All Categories</h1>
            <p className="text-[15px]">Showing 1 - 15 of 2000 photos</p>
            </div>
            <div className="flex items-center gap-3">Sort by <select className="border border-[#E8E6E6] h-[49px] w-[100px] rounded-md text-center font-semibold"><option value="">Newest</option></select></div>
        </div>

        <div className="grid lg:flex lg:justify-between py-4 w-full">
           <FilterSideBar />
           
           <div className="flex flex-col items-center py-4 lg:py-0">
             <div className="grid lg:grid-cols-3 gap-5">
            {products.map((product)=>{
                return <ProductCard key={product.id} {...product} />
            })}

            </div>
            
            <div className="pagination flex gap-2 mt-10">
            <button className="bg-[#FA8232] text-white rounded-md h-10 w-10 flex justify-center items-center">1</button>
            <button className="border border-[#E8E6E6] rounded-md h-10 w-10 flex justify-center items-center">2</button>
            <button className="border border-[#E8E6E6] rounded-md h-10 w-10 flex justify-center items-center">3</button>
            <button className="border border-[#E8E6E6] rounded-md h-10 w-10 flex justify-center items-center">4</button>
            <button className="flex justify-center items-center ml-2"><img className="h-4 w-5" src={vector} alt="" /></button>
            </div>
           </div>

        </div>
    </div>
    <ServiceAd />
   </AppLayout>
  )
}
