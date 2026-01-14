import React from 'react'
import {Link} from "react-router"

export default function productCardd({id,image,name,description,rating,reviews,price,isNew,displayPrice}) {
  return (
      <Link to={`/product/${id}`}>
        <div className="relative w-full lg:w-[295px] border border-[#E8E6E6] rounded-md">
            {isNew ? <span className="bg-[#EE2020] absolute top-3 left-3 rounded-xl flex items-center justify-center w-[50px] h-[23px] text-white text-[12px]">New</span> : <span></span>}
            <button className="absolute top-3 right-3 rounded-full bg-white flex items-center justify-center h-7 w-7">
              (
              <CiHeart size={25} />
            )</button>
            <img className="w-full object-cover rounded-t-md h-[274px]" src={image} alt="" />
    
            <div className="w-full flex flex-col gap-2 p-4 border-t border-t-[#E8E6E6]">
                <p className="text-[16px]">{name}</p>
                <p className="text-[#5F6C72] text-[14px]">{description}</p>
                <div className="flex gap-2 items-center text-[#5F6C72]">
                    <p>{rating ? <span>{rating}</span> : <span>0</span>}</p>
                    <p>({reviews  ? <span>{reviews}</span> : <span>0</span>})</p>
                </div>
                <p className="text-[18px]">{displayPrice}</p>
                <Button className="bg-[#FA8232] hover:bg-[#db6b21] w-full h-12 text-[16px] rounded-md text-white font-semibold" content="Add To Cart" />
            </div>
        </div>
        </Link>
  )
}
