import React, { useContext, useState } from 'react'
import Logo from "../../../assets/GadgetHub Logo.png"
import { RxDashboard } from "react-icons/rx";
import ordersIcon from "../../../assets/dashboardOrdersIcon.png"
import ordersIconPurple from "../../../assets/dashboardOrdersIconPurple.png"
import productsIcon from "../../../assets/dashboardProductsIcon.png"
import productsIconPurple from "../../../assets/dashboardProductsIconPurple.png"
import { GoPerson } from "react-icons/go";
import { MdPayment } from "react-icons/md";
import { RiCustomerServiceLine } from "react-icons/ri";
import { TbDeviceAnalytics } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { AuthContext } from "../../../Context/AuthContext"
import { PiSignOut } from "react-icons/pi";
import { NavLink } from "react-router"
import { motion, AnimatePresence } from "framer-motion"
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

export default function Sidebar() {
    const { logout } = useContext(AuthContext)
      const [ menuOpen, setMenuOpen] = useState(false)
      const toggleMenu = ()=>{
        setMenuOpen(!menuOpen)
      }
  return (
    <div className="py-5 w-[250px] border-r border-r-[#E6E3E3] shadow-md hidden lg:flex lg:flex-col h-screen">
        <img className="w-[134px] h-[33.58px] ml-5" src={Logo} alt="" />

        <div className="pt-6 w-full">
            <NavLink to="/admin" end className={({ isActive }) => `flex items-center gap-2 h-11 pl-5 font-semibold ${isActive ? "border-r-3 border-[#6C4CF1] bg-[#F3F0FF] text-[#6C4CF1]" : "text-[#807D7E]" }`}>
            <RxDashboard size={20} /> Dashboard</NavLink>

            
             <NavLink to="/admin/orders" className={({ isActive }) => `flex items-center gap-2 h-11 pl-5 font-semibold ${isActive ? "border-r-3 border-[#6C4CF1] bg-[#F3F0FF] text-[#6C4CF1]" : "text-[#807D7E]"}`}>{({ isActive }) => (<><img src={isActive ? ordersIconPurple : ordersIcon} alt="Orders icon"/>Orders</>)}</NavLink>

             
             <NavLink to="/admin/products" className={({ isActive }) => `flex items-center gap-2 h-11 pl-5 font-semibold ${isActive ? "border-r-3 border-[#6C4CF1] bg-[#F3F0FF] text-[#6C4CF1]" : "text-[#807D7E]"}`}>{({ isActive }) => (<><img src={isActive ? productsIconPurple : productsIcon} alt="Orders icon"/>Products</>)}</NavLink>


             

             <NavLink to="/admin/customers" end className={({ isActive }) => `flex items-center gap-2 h-11 pl-5 font-semibold ${isActive ? "border-r-3 border-[#6C4CF1] bg-[#F3F0FF] text-[#6C4CF1]" : "text-[#807D7E]" }`}>
            <GoPerson size={20} /> Customers</NavLink>

            <NavLink to="/admin/payments" end className={({ isActive }) => `flex items-center gap-2 h-11 pl-5 font-semibold ${isActive ? "border-r-3 border-[#6C4CF1] bg-[#F3F0FF] text-[#6C4CF1]" : "text-[#807D7E]" }`}>
            <MdPayment size={20} /> Payments</NavLink>

            <NavLink to="/admin/customers" end className={({ isActive }) => `flex items-center gap-2 h-11 pl-5 font-semibold ${isActive ? "border-r-3 border-[#6C4CF1] bg-[#F3F0FF] text-[#6C4CF1]" : "text-[#807D7E]" }`}>
            <RiCustomerServiceLine size={20} /> Supports</NavLink>

            <NavLink to="/admin/analytics" end className={({ isActive }) => `flex items-center gap-2 h-11 pl-5 font-semibold ${isActive ? "border-r-3 border-[#6C4CF1] bg-[#F3F0FF] text-[#6C4CF1]" : "text-[#807D7E]" }`}>
            <TbDeviceAnalytics size={20} /> Reports</NavLink>

             <NavLink to="/admin/settings" end className={({ isActive }) => `flex items-center gap-2 h-11 pl-5 font-semibold ${isActive ? "border-r-3 border-[#6C4CF1] bg-[#F3F0FF] text-[#6C4CF1]" : "text-[#807D7E]" }`}>
            <IoSettingsOutline size={20} /> Account Settings</NavLink>

             <button onClick={()=> logout()} className={`text-[16px] font-semibold text-[#E60E0E] flex gap-2 w-full h-11 items-center pl-5 pt-8  bg-none border-0 hover:cursor-pointer`}>
            <span><PiSignOut size={20} /></span> Sign Out
            </button>
        </div>

        
              <AnimatePresence>
                {menuOpen && (
                  <motion.div  initial={{ opacity: 0, x: -200 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                  className="fixed top-0 left-0 w-[70vw] h-screen bg-gray-50 bg-opacity-95 shadow-md py-6 px-6 md:hidden rounded-b-lg z-[9999]">
                     <button onClick={toggleMenu} className="lg:hidden text-2xl">
                     {menuOpen ? <IoCloseSharp size={30} /> : <GiHamburgerMenu />}</button>


            
                  </motion.div>
                )}
              </AnimatePresence>


    </div>
  )
}
