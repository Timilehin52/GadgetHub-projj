import React, { useState, useContext} from 'react'
import { AuthContext } from "../../../Context/AuthContext"
import { useNavigate, Link } from "react-router"
import { FaChevronDown, FaChevronUp } from "react-icons/fa"
import { motion } from "framer-motion"
import { IoMdNotificationsOutline } from "react-icons/io";
import Input from "../../Input"
import { CiSearch } from "react-icons/ci";
import { FiFilter } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import ProductsTable from '../components/ProductsComponents/ProductsTable'
import { products } from '../../../productData.js'
import AddProductModal from '../components/ProductsComponents/AddProductModal'
import DeleteModal from "../components/ProductsComponents/DeleteModal"

export default function Products() {
              const { user,logout } = useContext(AuthContext)
              const navigate = useNavigate()
              const [showModal, setShowModal] = useState(false)
              const addProduct = ()=>{ setShowModal(true)}
              const [showDelete, setShowDelete] = useState(false)
              const [selectedProduct, setSelectedProduct] = useState(null)
              const handleDeleteClick = (product) => {
                 setSelectedProduct(product)
                 setShowDelete(true)
                }
              const handleCancelDelete = () => {
                 setSelectedProduct(null)
                 setShowDelete(false)
                }


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
          {showModal && <AddProductModal showModal={showModal} setShowModal={setShowModal} />}
          {showDelete && selectedProduct && <DeleteModal product={selectedProduct}  onClose={handleCancelDelete} />}
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
                <div className="flex justify-between items-center">
                    <div>
                <h1 className="text-[24px] font-semibold">Products</h1>
                <p className="text-[16px]">Manage your product inventory.</p>
                    </div>
                    <button onClick={addProduct} className="text-white flex items-center  justify-center gap-2 w-[171px] h-12 bg-[#6C4CF1] hover:bg-white hover:text-[#6C4CF1] hover:border hover:border-[#6C4CF1] rounded-md"><span><GoPlus size={20} /></span>Add Product</button>
                </div>
    
                <div className="p-5 flex justify-between gap-5 border border-[#E7E4E4] mt-3 rounded-md">
                <div className="relative h-11 w-2/3">
                <Input placeholder="search product name..." className="h-11 w-[700px] pl-10" />
                <span className="absolute left-3 top-1/3"><CiSearch size={20} /></span>
                </div>
                <div className="flex items-center relative gap-3"><span className="absolute left-3"><FiFilter /></span><select className="border border-[#E8E6E6] h-11 w-[219px] rounded-md text-left pl-8"><option value="">All Status</option></select></div>
               </div>
               </div>

               <div className="px-5 py-2">
                <div className="border border-[#E7E4E4] mt-3 rounded-md">
                <h1 className="text-[#1D1C1C] text-[20px] font-semibold px-5 pt-2">Products</h1>
                <div>
                    <ProductsTable   products={products}
                    onDelete={handleDeleteClick}  />
                </div>

               </div>
               </div>
    
               
            </div>
  )
}
