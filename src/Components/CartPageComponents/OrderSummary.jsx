import React, { useContext } from 'react'
import { CartContext } from "../../Context/ShoppingCartContext"

export default function OrderSummary() {
    const {totalPrice} = useContext(CartContext)
  return (
    <div className="border border-[#E8E6E6] p-4">
        <h1 className="font-semibold">Order Summary</h1>
        <div className="flex items-center justify-between py-2"> 
            <p>Subtotal</p>
            <p className="font-semibold">{totalPrice}</p>
        </div>
        <p>Delivery Fees not included yet</p>
        <button className="bg-[#6C4CF1] w-full h-[48px] flex items-center justify-center text-white rounded-md mt-2" >Proceed to checkout</button>
    </div>
  )
}
