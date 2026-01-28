import React from 'react'
import ResetLayout from "../../Layouts/ResetLayout"
import Button from "../../Components/Button"

export default function EmailConfirmation() {
  return (
    <ResetLayout
    title="Check Your Email"
    description="Check your email address for instructions to reset your password.">
          <Button type="button" className="mt-2 w-full text-white font-semibold text-[18px] rounded-md h-[54px]" content="Resend email"  />
           <Button type="button" content="Back to login" className="font-semibold bg-transparent hover:bg-[#F3F0FF] h-[54px] mt-3 text-[16px] w-full" />

    </ResetLayout>
  )
}
