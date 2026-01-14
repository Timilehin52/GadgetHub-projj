import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

export default function FilterSideBar() {
  const [openFilter, setOpenFilter] = useState(null);

  const toggleFilter = (filterName) => {
    setOpenFilter(openFilter === filterName ? null : filterName);
  };

  const filters = [
    {
      name: "Category",
      options: ["Smartphones", "Laptops", "Wearables", "Gaming", "Accessories", "Smart Homes"],
    },
    {
      name: "Price Range",
      options: ["Under ₦200,000", "₦200,000 - ₦1,000,000", "₦1,000,000 +"],
    },
    {
      name: "Brand",
      options: ["Apple", "Google", "Sony", "Samsung", "Infinix", "Oraimo", "Techno", "Bose"],
    },
    {
      name: "Ratings",
      options: ["4.5 & Up", "4 & Up", "3.5 & Up"],
    },
    {
      name: "Availability",
      options: ["In Stock"],
    },
  ];

  return (
    <div
      className={`border border-[#D7D7D7] w-[289px] p-4 rounded-md text-[18px] flex flex-col gap-[20px] 
      ${openFilter ? "h-screen" : "h-[300px]"}`}
    >
      <p className="font-semibold">Filter</p>

      <div className="flex flex-col gap-[20px]">
        {filters.map((filter) => (
          <div key={filter.name}>
            <button
              className="flex justify-between items-center w-full"
              onClick={() => toggleFilter(filter.name)}
            >
              {filter.name}
              <span>{openFilter === filter.name ? <FaAngleUp /> : <FaAngleDown />}</span>
            </button>

            {openFilter === filter.name && (
                <div className="text-[15px] text-[#5F6C72] flex flex-col gap-2 my-2 border border-[#E8E6E6] p-3 rounded-md">
                    {filter.options.map((option, idx) => (
                        <label key={idx} 
                        className="flex items-center gap-2 cursor-pointer text-[#5F6C72] hover:text-black">
                        <input type={["Category", "Price Range", "Availability"].includes(filter.name) ? "radio" : "checkbox"} name={filter.name} className="w-[16px] accent-[#FA8232] h-[16px] rounded-full"/>
                        <span className="text-[14px]">{option}</span>
                        </label>
                    ))}
                </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}