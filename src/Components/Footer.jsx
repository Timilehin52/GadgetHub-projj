import React from 'react'
import Input from "../Components/Input"
import Button from "../Components/Button"
import { Link } from "react-router"

export default function Footer() {
    const quickLinks = [
        { id:1,
            name: "My Wishlist",
            linkTo: "",
         },
          { id:2,
            name: "Discount",
            linkTo: "",
         },
          { id:3,
            name: "Refund & Returns",
            linkTo: "",
         },
          { id:4,
            name: "Privacy Policy",
            linkTo: "",
         },
          { id:5,
            name: "Faqs",
            linkTo: "",
         },
          { id:6,
            name: "Warrant",
            linkTo: "",
         },
          { id:7,
            name: "Contact Us",
            linkTo: "",
         },
          { id:8,
            name: "Our Story",
            linkTo: "",
         }
    ]
  return (
    <div className="text-center pt-10">
       <div className="px-5 lg:px-0">
         <h1 className="text-[28px] font-semibold">Stay Updated on Latest Gadgets</h1>
        <p className="text-[#5F6C72] py-3">Subscribe to our newsletter and be the first to know about new arrivals, exclusive deals, <br /> and tech news</p>
       </div>
        <div className="flex items-center justify-center gap-3 lg:gap-5 py-3 px-5">
            <Input type="email" className="h-12 w-[449px] rounded-md bg-[#F2F2F2]" placeholder="Enter your email" />
            <Button type="submit" content="Subscribe" className="h-12 px-2 w-[150px] text-white font-semibold" />
        </div>
        <p className="px-5 lg:px-0">We respect your privacy. Unsubscribe at any time. <span className="text-blue-400">Privacy Policy</span></p>

        <div className="bg-[#00262E] text-center text-white flex flex-col py-5 mt-30">
            <p>Quick Links</p>
            <div className="flex container mx-auto flex-row flex-wrap lg:flex-nowrap gap-5 justify-between pt-2 px-5 lg:px-10">
                {quickLinks.map((link)=>{
                    return <Link className="text-sm lg:text-lg" key={link.id} to={link.linkTo}>{link.name}</Link>
                })}
            </div>
        </div>
    </div>
  )
}
