import React from 'react'
import Image from 'next/image' // Importing the Image component from next/image

const Cont = () => {
  return (
    <div>
      <div className="w-[904px] h-[93px] mx-40 pt-20 relative">
        <Image
          src="/cont1.svg" // Path to your image
          alt="cont1"
          layout="fill" // Ensures the image fills the parent container
          objectFit="contain" // Ensures the aspect ratio is maintained
        />
      </div>
    </div>
  )
}

export default Cont
