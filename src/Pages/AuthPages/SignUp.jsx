import React from 'react'
import AuthLayout from "../../Layouts/AuthLayout"
import Input from "../../Components/Input"
import Button from "../../Components/Button"
import { GoEyeClosed } from "react-icons/go";
import { useState } from "react"
import { useNavigate } from "react-router"

const initialFormData= {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  password: "",
  confirmPassword: "",
  checkbox: false,
}

export default function SignUp() {
  const [ formData , setFormData ] = useState(initialFormData);
  const [errors, setErrors ]= useState({})
  const [ isLoading, setIsLoading ]= useState(false)
  const navigate = useNavigate()

   const handleChange = (e)=>{
   const { name, type, value, checked } = e.target;
   setFormData({...formData,[name]: type === "checkbox" ? checked : value,});
   setErrors({...errors, [name]: ""})
   setIsLoading(false)
  }

  const formValidation = ()=>{
    const { firstName, lastName, email, phoneNumber, password, confirmPassword, checkbox} = formData
    const newErrors = {}
    const emailRegex =  /^\S+@\S+\.\S+$/

    if (!firstName.trim()) newErrors.firstName = "First Name is required"
    if (!lastName.trim()) newErrors.lastName = "Last Name is required"
    if (!email.trim()) newErrors.email = "Email is required"
    else if (!emailRegex.test(email)) {
      newErrors.email= "Invalid Email, please provide a valid email address"
    }
    if (!phoneNumber) newErrors.phoneNumber = "Mobile number is required"   
    if (!password.trim()) newErrors.password = "Password is required"
    else if (password.length < 8) newErrors.password = "Password must be 8 or more characters"
    if (!confirmPassword) newErrors.confirmPassword = "Confirm Password is required"
    if (confirmPassword != password) newErrors.confirmPassword = "Passwords do not match"
    if (!checkbox) newErrors.checkbox = "Please subscribe to newsletter"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
    }

    const handleSubmit = (e)=>{
      e.preventDefault();
      if (!formValidation()) return;
      console.log(formData);
      setIsLoading(true)
      setErrors({})
      setFormData(initialFormData)
      navigate("/login")
    }

 

  return (
    <AuthLayout
    title="Sign Up"
    paragraph="Already have an account?" 
    auth="Login now"
    to="/login">

      <form className="flex flex-col w-full">

        <div className="flex flex-col lg:flex-row justify-between w-full gap-4 lg:gap-20">
          <div className="flex flex-col w-full">
            <label htmlFor="firstName">First Name</label>
            <Input onChange={handleChange} value={formData.firstName} name="firstName" type="text" className="w-full mt-2" placeholder="John" />
           {errors.firstName && <span className="text-red-700 font-semibold">{errors.firstName}</span>}
          </div>
           <div className="flex flex-col w-full">
            <label htmlFor="lastName">Last Name</label>
            <Input onChange={handleChange} value={formData.lastName} name="lastName"  type="text" className="w-full mt-2" placeholder="Smith" />
         {errors.lastName && <span className="text-red-700 font-semibold">{errors.lastName}</span>}
          </div>
        </div>

          <div className="flex flex-col lg:flex-row justify-between w-full gap-4 lg:gap-20 lg:my-2">
          <div className="flex flex-col w-full">
            <label htmlFor="email">Email</label>
            <Input onChange={handleChange} value={formData.email} name="email"  type="email" className="w-full mt-2" placeholder="e.g david@gmail.com" />
           {errors.email && <span className="text-red-700 font-semibold">{errors.email}</span>}
          </div>

           <div className="flex flex-col w-full">
            <label htmlFor="phoneNumber">Mobile Number</label>
            <Input onChange={handleChange} value={formData.phoneNumber} name="phoneNumber"  type="tel" className="w-full mt-2" placeholder="+234 90...." />
         {errors.phoneNumber && <span className="text-red-700 font-semibold">{errors.phoneNumber}</span>}
          </div>
        </div>

         <div className="flex flex-col lg:flex-row justify-between w-full gap-4 lg:gap-20 lg:my-2">
          <div className="flex flex-col w-full">
            <label htmlFor="password">Password</label>
             <div className="relative">
                <Input onChange={handleChange} value={formData.password} name="password"  type="password" className="mt-2 w-full" placeholder="*********"   />
                <button className="absolute top-1/2 right-3"><GoEyeClosed /></button>
              </div>
           {errors.password && <span className="text-red-700 font-semibold">{errors.password}</span>}
          </div>

           <div className="flex flex-col w-full">
            <label htmlFor="confirmPassword">Confirm Password</label>
           <div className="relative">
                <Input onChange={handleChange} value={formData.confirmPassword} name="confirmPassword" type="password" className="mt-2 w-full" placeholder="*********"   />
                <button className="absolute top-1/2 right-3"><GoEyeClosed /></button>
            </div>
         {errors.confirmPassword && <span className="text-red-700 font-semibold">{errors.confirmPassword}</span>}
          </div>
        </div>

        <div className="flex gap-2 items-center">
          <Input onChange={handleChange} checked={formData.checkbox} name="checkbox" type="checkbox" />
          <label htmlFor="newsletterSub">Subscribe Newsletter</label>
        </div>
         {errors.checkbox && <span className="text-red-700 font-semibold">{errors.checkbox}</span>}
         

          <Button onClick={handleSubmit} content={isLoading ? "Loading" : "Sign up"} type="submit" className="bg-[#FA8232] hover:bg-[#db6b21] text-white h-[54px] mt-5 font-semibold" />
      </form>

    </AuthLayout>
  )
}
