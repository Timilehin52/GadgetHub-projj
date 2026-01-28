import React from 'react'
import { products } from "../../productData.js"
import { IoIosArrowRoundForward } from "react-icons/io";
import ProductsCard from "../ProductCard"

export default function Trending() {
  return (
    <div className="container mx-auto px-5">
        <div className="flex justify-between items-center py-5 lg:py-8">
            <div>
                <h1 className="text-[22px] lg:text-[28px] font-bold">Trending This Week</h1>
                <p className="text-[#5F6C72] text-[16px] lg:text-[18px]">Most popular gadgets right now</p>
            </div>
            <button className="text-[#6C4CF1] flex gap-2 items-center font-semibold">View All <span className="text-[#FA8232] "><IoIosArrowRoundForward size={30} /></span></button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-5">
            {products.filter(p => p.isTrending).length === 0 ? (
                <p className="text-center text-gray-500">No trending products right now.</p>) : 
                ( products.filter(p => p.isTrending).map(product => ( <ProductsCard key={product.id} {...product} />))
                )}
        </div>
    </div>
  )
}

