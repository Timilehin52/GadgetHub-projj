import React, { useState, useContext} from 'react'
import { AuthContext } from "../../../Context/AuthContext"
import { useNavigate, Link } from "react-router"
import { FaChevronDown, FaChevronUp } from "react-icons/fa"
import { motion } from "framer-motion"
import { IoMdNotificationsOutline } from "react-icons/io";
import Input from "../../Input"
import { CiSearch } from "react-icons/ci";
import { FiFilter } from "react-icons/fi";

export default function Orders() {
          const { user,logout } = useContext(AuthContext)
          const navigate = useNavigate()
          
          const UserMenu = ()=>{
            const [isOpen, setIsOpen] = useState(false)
            const handleLogout= ()=>{
              logout()
              setIsOpen(false)
              navigate("/login")
            }
            return (
              <div className="flex relative gap-2">
                <div className="flex gap-2 items-center">
                    <span className="flex items-center justify-center rounded-full w-[25px] h-[25px] bg-[#F5F7FA]"><IoMdNotificationsOutline size={40} /></span>
                  
                 <div onClick={()=> setIsOpen(!isOpen)} className="flex items-center cursor-pointer h-10 gap-1">
                  <img className="h-[30px] w-[30px] rounded-full" src={user?.image || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRadJ-YmNxJTg6v9iO22fzR_65KenYJHFB5zg&s"} alt={user.firstName} />
                 <div className="flex flex-col gap-1">
                     <p className="text-[14px] font-semibold">Admin {user.firstName}</p>
                     <p className="text-[14px]">{user.email}</p>
                 </div>
                 </div>
                </div>
                <button> {isOpen ? <FaChevronUp /> : <FaChevronDown />}</button>
        
                {isOpen && (
                  <motion.div initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }} className="absolute top-full right-0 flex flex-col bg-white rounded-md w-[185px] p-3 z-10 gap-1">
                    <Link to="/settings">Account Settings</Link>
                    <button onClick={handleLogout} className="text-[#E60E0E] text-left">Sign Out</button>
                  </motion.div>
                )}
        
              </div>
            )
          }
  return (
    <div className="bg-[#FFFFFF] w-full h-screen">
           <div className="flex justify-between items-center py-5 px-5 border-b-1 border-b-[#E6EFF5]  ">
            <div className="relative h-11">
            <Input placeholder="search orders,products..." className="w-md h-11 pl-10" />
            <span className="absolute left-3 top-1/3"><CiSearch size={20} /></span>
            </div>
            <div>
                { user && <UserMenu />}
            </div>
           </div>

           <div className="px-5 py-2">
            <h1 className="text-[24px] font-semibold">Orders</h1>
            <p className="text-[16px]">Manage and track all customer orders.</p>

            <div className="p-5 flex justify-between gap-5 border border-[#E7E4E4] mt-3 rounded-md">
            <div className="relative h-11 w-2/3">
            <Input placeholder="search order Id, customer name..." className="h-11 w-[700px] pl-10" />
            <span className="absolute left-3 top-1/3"><CiSearch size={20} /></span>
            </div>
            <div className="flex items-center relative gap-3"><span className="absolute left-3"><FiFilter /></span><select className="border border-[#E8E6E6] h-11 w-[219px] rounded-md text-left pl-8"><option value="">All Status</option></select></div>
           </div>
           </div>

           
        </div>
  )
}
