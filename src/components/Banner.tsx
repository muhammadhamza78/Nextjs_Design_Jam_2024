// import React from "react";

// const Banner = () => {
//   return (
//     <div className="relative h-[462px]">
//       <img src="banner.svg" alt="Banner" className="w-full object-cover" />
//       <p className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#151875] text-4xl font-bold text-center">
//         Get Latest Update By Subscribe Our Newsletter
//       </p>
//     </div>
//   );
// };

// export default Banner;








import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative h-[462px]">
      <Image 
        src="/banner.svg" // Ensure the path is correct for Next.js
        alt="Banner"
        layout="fill" // This will allow the image to cover the container fully
        objectFit="cover" // This makes sure the image covers the container without stretching
        priority // Optional, helps with faster loading for above-the-fold images
      />
      <p className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#151875] text-4xl font-bold text-center">
        Get Latest Update By Subscribe Our Newsletter
      </p>
    </div>
  );
};

export default Banner;
