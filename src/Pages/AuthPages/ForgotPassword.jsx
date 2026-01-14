import React from 'react'
import ResetLayout from "../../Layouts/ResetLayout"
import Input from "../../Components/Input"
import Button from "../../Components/Button"

export default function ForgotPassword() {
  return (
    <ResetLayout 
    title="Forgot Password?"
    description="“Enter the email linked to your account. We’ll send you a link to reset your password.”"
    >
        <form className="flex flex-col gap-2">
            <label htmlFor="Email">Email</label>
            <Input type="email" className="w-full" placeholder="Enter your email" />
            <Button type="button" className="mt-2 w-full bg-[#FA8232] hover:bg-[#db6b21] text-white font-semibold text-[18px] rounded-md h-[54px]" content="Send Reset Link"  />
            <Button type="button" content="Cancel" className="text-red-900 font-semibold text-[16px] mt-3 w-full" />
        </form>
    </ResetLayout>
  )
}
