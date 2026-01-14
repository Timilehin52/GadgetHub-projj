import React from 'react'
import {products} from "../../productData.js"
import ProductCard from "../ProductCard"

export default function MayLike() {
    const randomProducts = [...products].sort(() => Math.random() - 0.5).slice(0, 4)
  return (
    <div className="container mx-auto px-5 py-5">
        <h1 className="text-[28px] font-semibold">You May Also Like</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-5">
            {randomProducts.map((product)=>{
                return <ProductCard  key={product.id} {...product} />
            })}-
        </div>
    </div>
  )
}
