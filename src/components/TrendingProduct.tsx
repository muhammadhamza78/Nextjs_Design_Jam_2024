import Image from "next/image";

export default function Trendingproducts() {
  const products = [
    {
      image: "/sofa12.svg",
      name: "Cantilever chair",
      price: "26.00",
      originalPrice: "42.00"
    },
    {
      image: "/sofa13.svg",
      name: "Cantilever chair",
      price: "26.00",
      originalPrice: "42.00"
    },
    {
      image: "/sofa14.svg",
      name: "Cantilever chair",
      price: "26.00",
      originalPrice: "42.00"
    },
    {
      image: "/sofa15.svg",
      name: "Cantilever chair",
      price: "26.00",
      originalPrice: "42.00"
    }
  ];

  return (
    <div className="py-10 w-full">
      <div className="text-[#151875] text-3xl font-bold text-center mb-8">
        Trending Products
      </div>
      <div className="flex justify-center items-center space-x-6 px-4">
        {products.map((product, index) => (
          <div 
            key={index} 
            className="bg-white shadow-lg rounded-lg p-4 w-[300px] h-[450px]"
          >
            <div className="relative w-full h-80 bg-gray-200 rounded-lg overflow-hidden mb-4">
              <Image
                src={product.image}
                alt={`Product ${index + 1}`}
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="text-center">
              <h3 className="text-[16px] font-semibold text-[#151875] mb-2">
                {product.name}
              </h3>
              <p className="mb-4 text-[#151875]">
                ${product.price} <span className="line-through text-gray-500">${product.originalPrice}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 