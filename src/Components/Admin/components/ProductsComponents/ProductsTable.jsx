import React from 'react'

export default function ProductsTable({products, onDelete}) {
  return (
    <div className="mt-4 border border-[#E7E4E4] overflow-hidden bg-white">
        <div  className="grid grid-cols-6 gap-4 px-5 py-4 text-[#7A7A7A] text-sm font-medium bg-[#FFF9F9]">
        <p>Product Image</p>
        <p>Product Name</p>
        <p>Categories</p>
        <p>Price</p>
        <p>Stock Status</p>
        <p>Actions</p>
        </div>

         {products.map((product) => (
        <div
          key={product.id}
          className="grid grid-cols-6 gap-4 px-5 py-4 items-center border-t border-[#E7E4E4] text-sm"
        >
          <div>
            <img
              src={product.image}
              alt={product.name}
              className="w-[50px] h-[50px] object-cover rounded-md bg-gray-100"
            />
          </div>

          <p className="text-[15px]">
            {product.name}
          </p>

          <p className="text-[#605F5F] text-[15px]">
            {product.category}
          </p>

          <p className="text-[15px]">
            ₦{product.price.toLocaleString()}
          </p>

          <div>
            {product.isInStock ? (
              <span className="flex items-center justify-center w-20 h-8 rounded-full text-[14px] bg-[#DCFCE7] text-[#059D28]">
                In Stock
              </span>
            ) : (
              <span className="flex items-center justify-center w-[111px] h-8 rounded-full text-[14px] bg-[#FFEDED] text-[#E60E0E]">
                Out of Stock
              </span>
            )}
          </div>

          <div className="flex gap-4">
            <button  className="text-[#302E2E] hover:underline">
              Edit
            </button>
            <button   onClick={() => onDelete(product)} className="text-[#E60E0E] hover:underline">
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
