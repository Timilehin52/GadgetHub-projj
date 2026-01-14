import React, { useState, useEffect } from "react"
import { GrShareOption } from "react-icons/gr"
import { CiHeart } from "react-icons/ci"
import { HiMiniMinus, HiMiniPlus } from "react-icons/hi2"
import Button from "../../Components/Button"
import Tabs from "../ProductDetailsPageComponents/ProductTabs"

export default function ProductsProperties({product}) {
  if (!product) return null;
    const {
      image,
      imageGallery = [],
      name,
      brand,
      reviews,
      rating,
      isInStock,
      writeUp,
      displayPrice,
      colorOptions = [],
      storageOptions = [],
    } = product;
  const [selectedImage, setSelectedImage] = useState(image)
  const [selectedColor, setSelectedColor] = useState(null)
  const [selectedStorage, setSelectedStorage] = useState("")
  const [quantity, setQuantity] = useState(1)

    useEffect(() => {
      setSelectedImage(product.image);
      if (colorOptions.length && product.color) {
      const matchedColor = colorOptions.find(
      (clr) => clr.name === product.color
    );
    setSelectedColor(matchedColor || colorOptions[0]);
  }

  if (storageOptions.length && product.storage) {
    setSelectedStorage(product.storage);
  }
}, [product, colorOptions, storageOptions]);



  return (
    <section className="w-full py-6 container mx-auto">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:h-[713px]">

          <div className="relative w-full lg:w-[520px] lg:h-[573px] bg-white rounded-lg">
            <img
              src={selectedImage}
              alt={name}
              className="w-full lg:w-[520px] h-auto rounded-md border border-[#E8E6E6] object-contain"
            />

            <button className="absolute top-3 right-14 bg-white rounded-full h-8 w-8 flex items-center justify-center shadow">
              <GrShareOption size={18} />
            </button>

            <button className="absolute top-3 right-3 bg-white rounded-full h-8 w-8 flex items-center justify-center shadow">
              <CiHeart size={22} />
            </button>
          </div>

          <div className="flex justify-between items-center my-4 lg:gap-3">
            {[...imageGallery].map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(img)}
                className="w-[120px] h-28 rounded-md"
              >
                <img
                  src={img}
                  alt=""
                  className={`object-cover rounded-md
                    ${
                      selectedImage === img
                        ? "border border-[#FA8232]"
                        : "border border-[#E8E6E6]"
                    }
                  `}
                />
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col h-[713px] justify-between">
         <div className="flex flex-col justify-between h-[520px]">
             <p className="text-sm text-gray-400">{brand}</p>

          <h1 className="text-[32px] font-semibold">{name}</h1>

          <div className="flex items-center gap-2 text-[14px]">
            <span>{rating}</span>
            <span className="text-gray-400">({reviews} Reviews)</span>
            {isInStock && (
              <span className="flex items-center gap-1 text-[#009320]">
                <span className="h-2 w-2 rounded-full bg-[#009320]" />
                In Stock
              </span>
            )}
          </div>

          <p className="text-[18px] lg:text-[21px] text-gray-300">
            {writeUp}
          </p>

          <p className="text-[28px] font-semibold">{displayPrice}</p>

          {selectedColor && (
            <div>
              <p className="text-sm mb-2">
                Color: <span className="font-medium">{selectedColor.name}</span>
              </p>

              <div className="flex gap-3">
                {colorOptions.map((clr, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedColor(clr)}
                    className={`h-8 w-8 rounded-full border transition
                      ${
                        selectedColor.name === clr.name
                          ? "border-[#FA8232]"
                          : "border-[#E8E6E6]"
                      }
                    `}
                    style={{ backgroundColor: clr.colorCode }}
                    title={clr.name}
                  />
                ))}
              </div>
            </div>
          )}
          <div>
            <p className="text-sm mb-2">Storage</p>
            <div className="flex gap-3 flex-wrap">
              {storageOptions.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedStorage(size)}
                  className={`px-4 py-2 h-[35px] w-[70px] border rounded-md text-sm ${
                    selectedStorage === size
                      ? "border-[#FA8232] text-[#FA8232]"
                      : "border-gray-500 text-gray-300"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm mb-2">Quantity</p>
            <div className="flex items-center border border-[#E8E6E6] w-[145px] h-[39px] rounded-md">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 border-r border-[#E8E6E6] h-[39px] flex items-center justify-center"
              >
                <HiMiniMinus />
              </button>
              <span className="flex-1 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-[39px] border-l border-[#E8E6E6] flex items-center justify-center"
              >
                <HiMiniPlus />
              </button>
            </div>
          </div>
         </div>


          <div className="space-y-3 pt-4">
            <Button
              content="Buy Now"
              className="w-full bg-[#FA8232] hover:bg-[#db6b21] text-white rounded-md h-12"
            />
            <Button
              content="Add to Cart"
              className="w-full border border-[#FA8232] text-[#FA8232] rounded-md h-12"
            />
          </div>

        </div>

      </div>

      <Tabs product={product} />


    </section>
  )
}
