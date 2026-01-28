import React, { useState, useEffect } from "react";

export default function DeliveryDetails({ onChange }) {
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(()=>{
    onChange(selectedOption)
  }, [selectedOption])

  return (
    <form className="p-4 border border-[#E8E6E6]">
      <h1 className="text-[24px] font-semibold">Delivery Details</h1>

      <div
        className={`flex items-center p-3 gap-3 my-2 rounded-md h-[54px] w-full 
        border-[1.5px] ${selectedOption === "doorstep" ? "border-[#6C4CF1]" : "border-[#E8E6E6]"}`}
      >
        <input
          type="radio"
          name="delivery"
          value="doorstep"
          checked={selectedOption === "doorstep"}
          onChange={(e) => setSelectedOption(e.target.value)}
          className="w-5 h-5 accent-[#6C4CF1]"
        />
        <label>Door step Delivery</label>
      </div>

      <div
        className={`flex items-center p-3 gap-3 my-2 rounded-md h-[54px] w-full 
        border-[1.5px] ${selectedOption === "pickup" ? "border-[#6C4CF1]" : "border-[#E8E6E6]"}`}
      >
        <input
          type="radio"
          name="delivery"
          value="pickup"
          checked={selectedOption === "pickup"}
          onChange={(e) => setSelectedOption(e.target.value)}
          className="w-5 h-5 accent-[#6C4CF1]"
        />
        <label>Pick up</label>
      </div>
    </form>
  );
}