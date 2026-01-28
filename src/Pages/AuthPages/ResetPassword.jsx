import React from 'react'
import ResetLayout from "../../Layouts/ResetLayout"
import Input from "../../Components/Input"
import Button from "../../Components/Button"

export default function ResetPassword() {
  return (
    <ResetLayout
    title="Reset Your Password"
    description="You're just one step away from accessing your account.">
        <form className="">
            <label htmlFor="newPassword">New Password</label>
            <Input type="password" placeholder="Enter your new password" className="w-full my-2" />
            <p className="text-gray-700 pb-5">Minimum of 8 characters, must include letters and numbers </p>
            <label htmlFor="confirmPassword">Confirm Password</label>   
            <Input type="password" placeholder="Enter your new password" className="w-full my-2" />
            <p className="text-gray-700">Must match the above field</p>

            <Button content="Update Password" type="button" className="mt-4 w-full text-white font-semibold text-[18px] rounded-md h-[54px]" />
        </form>
    </ResetLayout>
  )
}
