import React, { useState, useContext } from 'react'
import Logo from "../assets/GadgetHub Logo.png"
import Input from "../Components/Input"
import { CiSearch } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa6";
import { GoPerson } from "react-icons/go";
import { Link } from "react-router"
import ShoppingCartModal from "./HomePage Components/Shopping Cart/ShoppingCartModal"
import { CartContext } from "../Context/ShoppingCartContext"
import { LikeContext } from "../Context/LikeContext"
export default function Header() {
  const [showModal, setShowModal] = useState(false)
  const { cart } = useContext(CartContext)
  const { likes } =  useContext(LikeContext)

  const showCart=()=>{setShowModal(true)}

    const icons= [
        {
        id: 1,
        icon: <FiShoppingCart />,
        linkTo: "/cart"
    },
    {
        id: 2,
        icon: <FaRegHeart />,
        linkTo: "/likes"
    },
    {
        id: 3,
        icon: <GoPerson />,
        linkTo: "/profile"
    }
    ]

    const filters = [
        {
            id: 1,
            name: "All Categories",
            linkTo: "/products"
        },
          {
            id: 2,
            name: "Smart Phones",
            linkTo: ""
        },
          {
            id: 3,
            name: "Laptop",
            linkTo: ""
        },
          {
            id: 4,
            name: "Wearables",
            linkTo: ""
        },
          {
            id: 5,
            name: "Gaming",
            linkTo: ""
        },
        {
            id:6,
            name: "Accessories",
            linkTo: "",
        },
        {
            id:7,
            name:"Smart Homes",
            linkTo: "",
        }

    ]
  return (
    <div className="flex flex-col w-full">
       {showModal && <ShoppingCartModal showModal={showModal} setShowModal={setShowModal} />}
        <div className="hidden lg:flex bg-[#191C1F] text-white">
           <div className="flex container mx-auto items-center justify-between w-full h-[7vh] px-5">
             <h1><span className="text-[#ACACAC]">Mon-Sat:</span> 9:00 AM - 5:30 PM</h1>
            <h1 className="text-[#ACACAC]">Visit our showroom in 12 Street Address City, Lagos</h1>
            <h1>Call Us: (+234) 01234 5678</h1>
           </div>
        </div>

        <div  className="container mx-auto flex items-center justify-between gap-0 lg:gap-25 h-[14vh] py-10 lg:py-2 px-5">
            <Link to="/"><img src={Logo} alt="" /></Link>

            <div className="hidden md:flex relative lg:w-[556px]">
                <Input type="text" className="w-full h-[12] rounded-md border-[#ACACAC]" placeholder="Search for a gadget..." />
                <span className="absolute right-3 top-3"><CiSearch size={30} /></span>
            </div>

             <div className="flex gap-5">
            <div className="flex gap-5">
              {icons.map((icon) => ( icon.id === 1 ? (
                <button onClick={showCart} className="relative" key={icon.id}>
                  <span className="text-3xl">{icon.icon}</span>
                  {cart.length > 0 && (
                    <span className="bg-[#FA8232] text-white w-6 h-6 rounded-full flex items-center justify-center absolute -top-2 -right-2">
                      {cart.length}
                      </span>
                    )}
                    </button>
                    ) :  icon.id === 2 ? (
              <Link to={icon.linkTo} key={icon.id} className="relative">
                <span className="text-3xl">{icon.icon}</span>
                {likes.length > 0 && (
                  <span className="bg-[#FA8232] text-white w-6 h-6 rounded-full flex items-center justify-center absolute -top-2 -right-2">
                    {likes.length}
                  </span>
                )}
              </Link>) :  (
                    <Link to={icon.linkTo} key={icon.id}>
                      <span className="text-3xl">{icon.icon}</span>
                      </Link>)
                    ))}
                </div>
                </div>
        </div>

        <div className="flex bg-[#191C1F] text-white mt-1">
            <div className="hidden lg:flex items-center container mx-auto h-[15vh] lg:h-[7vh] text-sm lg:text-lg px-5 gap-8">
                {filters.map((filter)=>{
                return <Link key={filter.id} to={filter.linkTo}>{filter.name}</Link>
            })}
            </div>
        </div>

    </div>
  )
}
