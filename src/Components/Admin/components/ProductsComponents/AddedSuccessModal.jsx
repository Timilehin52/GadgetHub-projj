import React from 'react'
import { TiTick } from "react-icons/ti";
import Button from "../../../Button"

export default function AddedSuccessModal({ setShowSuccess, onClose, product }) {
  const handleClose = () => {
    setShowSuccess(false)
    onClose()
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-xl shadow-lg max-w-md p-6 text-center flex flex-col items-center gap-3">
        <span className="bg-[#F1FFEC] text-[#009320] rounded-full h-[99px] w-[99px] flex items-center justify-center">
          <TiTick size={50} />
        </span>

        <p className="text-[28px] font-semibold">Product Added Successfully!</p>
        <p className="text-[20px] text-[#686565]">
          The product "{product.name}" has been added.
        </p>

        <Button onClick={handleClose} className="w-[84px] h-10 text-white" content="Close" />
      </div>
    </div>
  )
}


