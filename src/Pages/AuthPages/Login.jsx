import React from 'react'
import AuthLayout from "../../Layouts/AuthLayout"
import Input from "../../Components/Input"
import { GoEyeClosed } from "react-icons/go";
import Button from "../../Components/Button"
import { useState } from "react"
import { useNavigate } from "react-router"

const initialFormData = {
  email : "",
  password : ""
}

export default function Login() {
  const [ formData, setFormData ] = useState(initialFormData)
  const [ isLoading, setIsLoaoding ] = useState(false)
  const [errors, setErrors ] = useState({})
  const navigate = useNavigate()

  const handleChange = (e)=>{
    setFormData({...formData, [e.target.name] : e.target.value})
  }

  const formValidation = ()=>{
    const { email, password } = formData
    const newErrors = {}
    const emailRegex =  /^\S+@\S+\.\S+$/

    if (!email) {
      newErrors.email = "Email is required"
    }else if (!emailRegex.test(email)) {
      newErrors.email= "Invalid Email, please provide a valid email address"
    }
    if (!password) {
      newErrors.password = "Password is required"
    }else if (password.length < 8 ) {
      newErrors.password = "Password must be 8 or more characters"
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    if (!formValidation()) return;
    console.log(formData);
    setIsLoaoding(true)
    setErrors({})
    setFormData(initialFormData)
    navigate("/")
    //connect to backend
  }

  return (
    <AuthLayout
    title="Login"
    paragraph="Don’t have an account yet?" 
    auth="Sign up now"
    to="/signup">
        <form className="flex flex-col w-full">
            <label htmlFor="email">Email</label>
            <Input onChange={handleChange} type="email" className="my-2" placeholder="Enter your email" name="email" value={formData.email}  />
            {errors.email && <p className="text-red-900 font-semibold">{errors.email}</p>}
            <label htmlFor="password">Password</label>
            <div className="relative">
                <Input  onChange={handleChange} type="password" className="mt-2 w-full" placeholder="Enter your password"   name="password" value={formData.password} />
                <button className="absolute top-5 right-3"><GoEyeClosed /></button>
                 { errors.password && <p className="text-red-900 font-semibold">{errors.password }</p>}
            </div>
            <p>Forgot your password?</p>

            <Button onClick={handleSubmit} content={ isLoading ? "Loading" : "Login"} type="submit" className="bg-[#FA8232] hover:bg-[#db6b21] text-white h-[54px] mt-5 font-semibold" />
        </form>
    </AuthLayout>
  )
}
