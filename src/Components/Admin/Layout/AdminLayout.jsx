import React from 'react'
import Sidebar from "../components/Sidebar"
import { Outlet } from "react-router"

export default function AdminLayout() {
  return (
     <div className="container mx-auto min-h-screen w-full">
     <div className="flex">
         <Sidebar />
      <main className="bg-[#E3E3E3] w-full">
        <Outlet />
      </main>
     </div>
    </div>
  )
}
