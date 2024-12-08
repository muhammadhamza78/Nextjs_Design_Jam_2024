import React from 'react'

const Banner2 = () => {
  return (
    <div>
      {/* Lower Section */}
       <section className="bg-[#F2F0FF]   h-[579px]">
         <div className="p-[20px]  flex flex-wrap md:flex-nowrap items-center gap-10 px-24">
           <div className="flex-1">
             {/* Product Image */}
             <img
               src="/sofa20.svg"
               alt="Product"
               className="rounded-lg shadow-md"
             />
           </div>
           <div className="flex-1">
             <h3 className="text-xl font-bold text-purple-700 mb-4">
               Unique Features Of Latest & Trending Products
             </h3>
             <ul className="text-gray-700 space-y-2 list-disc pl-5">
               <li>
                 All frames constructed with hardwood solids and laminates.
               </li>
               <li>
                 Reinforced with double wood dowels, glue, screws, nails at
                 corner blocks, and machine nails.
               </li>
               <li>Arms, backs, and seats are structurally reinforced.</li>
             </ul>
             <div className="mt-8">
               <button className="bg-purple-600 text-white py-2 px-6 rounded shadow-md hover:bg-purple-700">
                 Add To Cart
               </button>
               <p className="mt-2 text-sm text-gray-500">
                 B&B Italian Sofa - $32.00
               </p>
             </div>
           </div>
         </div>
       </section>
    </div>
  )
}

export default Banner2







