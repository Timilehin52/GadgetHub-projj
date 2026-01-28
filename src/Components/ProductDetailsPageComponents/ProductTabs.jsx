import { useState } from "react";
import Review from "./Review"

export default function ProductTabs({ product }) {
  const [activeTab, setActiveTab] = useState("specs");

  const specsArray = product?.specifications
    ? Object.keys(product.specifications).map((key) => ({
        label: key,
        value: product.specifications[key],
      }))
    : [];

  return (
    <section className="my-10">
      <div className="flex gap-8 border-b border-[#E8E6E6] text-sm">
        <button
          onClick={() => setActiveTab("specs")}
          className={`pb-3 text-[22px] font-semibold ${
            activeTab === "specs"
              ? "text-[#6C4CF1] border-b border-[#E8E6E6]"
              : "text-gray-400"
          }`}
        >
          Specifications
        </button>

        <button
          onClick={() => setActiveTab("reviews")}
          className={`pb-3 text-[22px] font-semibold ${
            activeTab === "reviews"
              ? "text-[#6C4CF1] border-b border-[#E8E6E6]"
              : "text-gray-400"
          }`}
        >
          Reviews ({product?.reviews || 0})
        </button>
      </div>

      {activeTab === "specs" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 mt-8 text-sm">
          {specsArray.map((spec) => (
            <div
              key={spec.label}
              className="flex justify-between py-4 border-b border-[#F1EEEE]"
            >
              <span className="text-[#5F6C72] text-[16px]">{spec.label}</span>
              <span className="text-[#191C1F] text-[18px] font-semibold">{spec.value}</span>
            </div>
          ))}
        </div>
      )}

      {activeTab === "reviews" && (
        <Review />
      )}
    </section>
  );
}
