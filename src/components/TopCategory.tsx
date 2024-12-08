import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Mini LCW Chair",
    images: ["/chair10.svg"],
  },
  {
    id: 2,
    name: "Mini LCW Chair",
    images: ["/chair20.svg"],
  },
  {
    id: 3,
    name: "Mini LCW Chair",
    images: ["/chair30.svg"],
  },
  {
    id: 4,
    name: "Mini LCW Chair",
    images: ["/chair10.svg"], 
  },
];

export default function TopCategory() {
  return (
    <section className="max-w-screen-xl mx-auto pt-24 px-4 pb-40">
      <h1 className="text-[#1A0B5B] font-josifen text-3xl text-center font-bold">
        Top Categories
      </h1>

      <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6 pt-10">
        {products.slice(0, 4).map((product) => (
          <div key={product.id} className="flex flex-col gap-3">
            <div className="bg-[#F5F6F8] p-10 cursor-pointer w-full h-full overflow-hidden rounded-full flex items-center hover:border-l-[#9877E7] hover:border-l-8 transition-[transform,colors] duration-700">
              <Image
                src={product.images[0]}
                alt={product.name}
                height={150} // Adjust height as needed
                width={150} // Adjust width as needed
                className="transition-transform hover:scale-105 duration-700 hover:rounded-md object-contain"
              />
            </div>
            <h1 className="font-josifen font-bold text-center">{product.name}</h1>
          </div>
        ))}
      </div>
    </section>
  );
}
