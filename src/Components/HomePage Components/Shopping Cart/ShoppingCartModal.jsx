import React, { useContext } from 'react'
import ShoppingCartItem from "./ShoppingCartItem"
import Button from "../../Button"
import { CartContext } from "../../../Context/ShoppingCartContext"
import { FiShoppingCart } from "react-icons/fi";
export default function ShoppingCartModal({showModal, setShowModal}) {
  
  const { cart, clearCart } = useContext(CartContext)
  if (!showModal) return null;
  const closeModal = ()=>{
        setShowModal(false)
    }
  const totalPrice = cart.reduce((total, cartItem)=>{
        return total + cartItem.price * cartItem.quantity;
    }, 0);


  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 ">
        <div className="bg-white rounded-xl shadow-lg w-[99%] max-w-md p-6 relative">
          <h1 className="w-full py-3 text-[16px] font-semibold">Shopping Cart <span className="text-[16px] text-[#5F6C72]">({cart.length})</span></h1>
          <button className="absolute top-3 right-5" onClick={closeModal}>X</button>
           <div className="p-4 border-t border-[#E5E5E5] border-b flex flex-col gap-3">
          {cart.length === 0 ? (
            <div className="text-center flex flex-col items-center justify-center">
              <span className="bg-[#FFF2ED] h-[99px] w-[99px] rounded-full flex items-center justify-center"><FiShoppingCart size={50} /></span>
              <p className="text-gray-500 text-[28px]">Your cart is empty!</p>
              <p className="text-[16px]">browse all categories and discover our new arrivals</p>
              </div>
          ) : (
            cart.map((item) => (
              <ShoppingCartItem key={item.id} {...item} />
            ))
          )}
        </div>

          <div className="flex items-center justify-between py-2">
            <p className="text-[#475156] text-[14px]">Sub-Total:</p>
            <h1 className="text-[16px] font-semibold">₦{totalPrice}</h1>
          </div>
          <Button className="w-full bg-[#FA8232] hover:bg-[#db6b21] my-2 rounded-md text-white h-[48px]" content="Checkout Now" />
          <Button className="w-full text-[#FA8232] border border-[#FA8232] hover:bg-[#FA8232] hover:text-white rounded-md h-[48px]" content="View Cart" />
        </div>

    </div>
  )
}
