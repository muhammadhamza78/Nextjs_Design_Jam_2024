// "use client"
// import { useState } from 'react';
// import Link from "next/link";
// import { FaSearch } from 'react-icons/fa';

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [searchOpen, setSearchOpen] = useState(false);

//   return (
//     <nav className="bg-white shadow-sm border-b-2">
//       <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center py-4 relative">
//         {/* Logo - Moved closer */}
//         <div className="w-full flex items-center justify-between md:justify-start md:w-auto">
//           <h1 className="text-2xl mx-40 font-bold text-blue-950 md:mr-10 lg:mr-16">Hekto</h1>
          
//           {/* Mobile Search and Menu Toggle */}
//           <div className="flex items-center space-x-4 md:hidden">
//             <button 
//               onClick={() => setSearchOpen(!searchOpen)}
//               className="focus:outline-none relative"
//             >
//               <div className="absolute -inset-1 bg-pink-700/30 z-0"></div>
//               <FaSearch className="text-2xl text-gray-600 relative z-10" />
//             </button>
//             <button
//               className="text-3xl focus:outline-none"
//               onClick={() => setMenuOpen(!menuOpen)}
//             >
//               {menuOpen ? '✕' : '☰'}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Search Bar - Always visible when toggled */}
//         {searchOpen && (
//           <div className="md:hidden w-full absolute top-full left-0 z-10 bg-white p-4 border-b">
//             <div className="flex items-center space-x-2">
//               <input
//                 type="text"
//                 placeholder="Search..."
//                 className="
//                   p-2 
//                   border 
//                   border-gray-300 
//                   rounded-md 
//                   w-full 
//                   focus:outline-none 
//                   focus:ring-2 
//                   focus:ring-pink-600
//                 "
//               />
//               <button className="bg-pink-600 text-white px-3 py-2 rounded-md hover:bg-pink-700">
//                 <FaSearch />
//               </button>
//             </div>
//           </div>
//         )}

//         {/* Navigation Links - Moved to center */}
//         <div className={`
//           w-full md:w-auto 
//           ${menuOpen ? 'block' : 'hidden'} 
//           md:block 
//           transition-all duration-300 ease-in-out
//           md:mx-auto
//         `}>
//           <ul className="flex flex-col md:flex-row items-center gap-10 space-y-4 md:space-y-0 md:space-x-6 text-center">
//             {['Home', 'Pages', 'Products', 'Blog', 'Shop', 'Contact'].map((item) => (
//               <li 
//                 key={item} 
//                 className="w-full md:w-auto"
//               >
//                 <Link 
//                   href={`/${item.toLowerCase()}`} 
//                   className="block py-2 md:py-0 hover:text-pink-600"
//                 >
//                   {item}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Desktop Search */}
//         <div className="hidden md:flex items-center space-x-2">
//           <input
//             type="text"
//             placeholder="Search..."
//             className="
//               p-2 
//               border 
//               border-gray-300 
//               rounded-md 
//               w-48 
//               lg:w-64 
//               focus:outline-none 
//               focus:ring-2 
//               focus:ring-pink-600
//             "
//           />
//           <button 
//             className="
//               relative
//               bg-transparent 
//               text-gray-600 
//               hover:text-pink-600
//               focus:outline-none
//             "
//           >
//             <div className="absolute -inset-2 bg-[#FB2E86]"></div>
//             <FaSearch className="text-2xl relative z-10" />
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// }












"use client"
import { useState } from 'react';
import Link from "next/link";
import { FaSearch } from 'react-icons/fa';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b-2">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center py-4 relative">
        {/* Logo - Moved closer */}
        <div className="w-full flex items-center justify-between md:justify-start md:w-auto">
          <h1 className="text-2xl font-bold text-blue-950 md:mr-10 lg:mr-16">Hekto</h1>
          
          {/* Mobile Search and Menu Toggle */}
          <div className="flex items-center space-x-4 md:hidden">
            <button 
              onClick={() => setSearchOpen(!searchOpen)}
              className="focus:outline-none relative"
            >
              <div className="absolute -inset-1 bg-pink-700/30 z-0"></div>
              <FaSearch className="text-2xl text-gray-600 relative z-10" />
            </button>
            <button
              className="text-3xl focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar - Always visible when toggled */}
        {searchOpen && (
          <div className="md:hidden w-full absolute top-full left-0 z-10 bg-white p-4 border-b">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                placeholder="Search..."
                className="
                  p-2 
                  border 
                  border-gray-300 
                  rounded-md 
                  w-full 
                  focus:outline-none 
                  focus:ring-2 
                  focus:ring-pink-600
                "
              />
              <button className="bg-pink-600 text-white px-3 py-2 rounded-md hover:bg-pink-700">
                <FaSearch />
              </button>
            </div>
          </div>
        )}

        {/* Navigation Links - Moved to center */}
        <div className={`
          w-full md:w-auto 
          ${menuOpen ? 'block' : 'hidden'} 
          md:block 
          transition-all duration-300 ease-in-out
          md:mx-auto
        `}>
          <ul className="flex flex-col md:flex-row items-center gap-10 space-y-4 md:space-y-0 md:space-x-6 text-center">
            {['Home', 'Pages', 'Products', 'Blog', 'Shop', 'Contact'].map((item) => (
              <li 
                key={item} 
                className="w-full md:w-auto"
              >
                <Link 
                  href={`/${item.toLowerCase()}`} 
                  className="block py-2 md:py-0 hover:text-pink-600"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Search */}
        <div className="hidden md:flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search..."
            className="
              p-2 
              border 
              border-gray-300 
              rounded-md 
              w-48 
              lg:w-64 
              focus:outline-none 
              focus:ring-2 
              focus:ring-pink-600
            "
          />
          <button 
            className="
              relative
              bg-transparent 
              text-gray-600 
              hover:text-pink-600
              focus:outline-none
            "
          >
            <div className="absolute -inset-2 bg-[#FB2E86]"></div>
            <FaSearch className="text-2xl relative z-10" />
          </button>
        </div>
      </div>
    </nav>
  );
}