// "use client";
// import React, { useEffect, useState } from "react";
// import { client } from "@/sanity/lib/client";
// import { Product } from "@/types";
// import { CartProvider } from "@/content/CartContext";
// import { WishlistProvider } from "@/content/WishlistContext";
// import Header from "@/components/Header";
// import Navbar from "@/components/Navbar";
// import Hero from "@/components/Hero";
// import FeaturedProducts from "@/components/FeaturedProduct";
// import Cart from "@/components/Cart";
// import LatestProducts from "@/components/LatestProducts";
// import TrendingProducts from "@/components/TrendingProduct";
// import DiscountItem from "@/components/DiscountItem";
// import Banner from "@/components/Banner";
// import Cont from "@/components/Cont";
// import Shopex from "@/components/Shopex";
// import Banner2 from "@/components/Banner2";
// import BlogsPost from "@/components/BlogsPost";
// import Footer from "@/components/Footer";
// import TopCategory from "@/components/TopCategory";
// // import Rate from "@/components/Rate";
// import OrderTracking from "@/components/OrderTracking";
// import HelpCenter from "@/components/HelpCentre";
// import Discount from "@/components/Discount";
// import Gift from "@/components/Gift";
// import FeedBack from "@/components/FeedBack";

// // Loading Spinner Component
// const LoadingSpinner = () => (
//   <div className="min-h-screen flex items-center justify-center bg-white">
//     <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-blue-500" aria-label="Loading...">
//       <span className="sr-only">Loading...</span>
//     </div>
//   </div>
// );

// // Error Display Component
// const ErrorDisplay: React.FC<{ message: string }> = ({ message }) => (
//   <div className="min-h-screen flex items-center justify-center bg-white">
//     <div className="text-red-500 text-center p-8 rounded-lg border border-red-200">
//       <h2 className="text-2xl font-bold mb-4">Error Loading Products</h2>
//       <p className="mb-4">{message}</p>
//       <button 
//         onClick={() => window.location.reload()} 
//         className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors"
//       >
//         Try Again
//       </button>
//     </div>
//   </div>
// );

// // Fetch products from Sanity with improved error handling
// const fetchProducts = async (): Promise<Product[]> => {
//   try {
//     const products = await client.fetch(`*[_type == "product"] {
//       _id,
//       name,
//       description,
//       price,
//       discountPercentage,
//       stockLevel,
//       isFeaturedProduct,
//       image
//     }`);

//     if (!Array.isArray(products)) {
//       throw new Error("Invalid data format received from Sanity");
//     }

//     return products;
//   } catch (error) {
//     console.error("Error fetching products:", error);
//     throw new Error(error instanceof Error ? error.message : "Failed to fetch products from the server");
//   }
// };

// // Main Layout Component
// interface MainLayoutProps {
//   products: Product[];
// }

// const MainLayout: React.FC<MainLayoutProps> = ({ products }) => {
//   const safeProducts = Array.isArray(products) ? products : [];

//   // Filter featured products
//   const featuredProducts = safeProducts.filter(product => product.isFeaturedProduct);

//   return (
//     <div className="min-h-screen bg-white">
//       <Header />
//       <Navbar />
//       <main>
//         <Hero />
//         <Discount />
//         <Gift />
//         <FeaturedProducts products={featuredProducts} />
//         <Cart />
//         <div className="space-y-8 py-8">
//           <LatestProducts />
//           <Shopex />
//           <Banner2 />
//           <TrendingProducts />
//           <DiscountItem />
//           <TopCategory />
//           <Banner />
//           <Cont />
//           <BlogsPost />
//           <OrderTracking />
//           {/* <Rate /> */}
//           <FeedBack />
//           <HelpCenter />
         
//         </div>
//       </main>
//       <Footer />
//     </div>
//   );
// };

// // Main Page Component with error handling and state management
// const Page: React.FC = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     let mounted = true;

//     const loadProducts = async () => {
//       try {
//         setLoading(true);
//         const fetchedProducts = await fetchProducts();
        
//         if (mounted) {
//           setProducts(fetchedProducts);
//           setError(null);
//         }
//       } catch (err) {
//         if (mounted) {
//           setError(
//             err instanceof Error 
//               ? err.message 
//               : "Failed to load products. Please try again later."
//           );
//         }
//       } finally {
//         if (mounted) {
//           setLoading(false);
//         }
//       }
//     };

//     loadProducts();

//     // Cleanup function to prevent setting state on unmounted component
//     return () => {
//       mounted = false;
//     };
//   }, []);

//   if (loading) return <LoadingSpinner />;
//   if (error) return <ErrorDisplay message={error} />;

//   return (
//     <CartProvider>
//       <WishlistProvider>
//         <MainLayout products={products} />
//       </WishlistProvider>
//     </CartProvider>
//   );
// };

// export default Page;










"use client";
import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { Product } from "@/types";
import { CartProvider } from "@/content/CartContext";
import { WishlistProvider } from "@/content/WishlistContext";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProduct";
import Cart from "@/components/Cart";
import LatestProducts from "@/components/LatestProducts";
import TrendingProducts from "@/components/TrendingProduct";
import DiscountItem from "@/components/DiscountItem";
import Banner from "@/components/Banner";
import Cont from "@/components/Cont";
import Shopex from "@/components/Shopex";
import Banner2 from "@/components/Banner2";
import BlogsPost from "@/components/BlogsPost";
import Footer from "@/components/Footer";
import TopCategory from "@/components/TopCategory";
import OrderTracking from "@/components/OrderTracking";
import HelpCenter from "@/components/HelpCentre";
import Discount from "@/components/Discount";
import Gift from "@/components/Gift";
import FeedBack from "@/components/FeedBack";

// Loading Spinner Component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-blue-500" aria-label="Loading...">
      <span className="sr-only">Loading...</span>
    </div>
  </div>
);

// Error Display Component
const ErrorDisplay: React.FC<{ message: string }> = ({ message }) => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="text-red-500 text-center p-8 rounded-lg border border-red-200">
      <h2 className="text-2xl font-bold mb-4">Error Loading Products</h2>
      <p className="mb-4">{message}</p>
      <button 
        onClick={() => window.location.reload()} 
        className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors"
      >
        Try Again
      </button>
    </div>
  </div>
);

// Fetch products from Sanity with improved error handling
const fetchProducts = async (): Promise<Product[]> => {
  try {
    const products = await client.fetch(`*[_type == "product"] {
      _id,
      name,
      description,
      price,
      discountPercentage,
      stockLevel,
      isFeaturedProduct,
      image
    }`);

    if (!Array.isArray(products)) {
      throw new Error("Invalid data format received from Sanity");
    }

    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw new Error(error instanceof Error ? error.message : "Failed to fetch products from the server");
  }
};

// Main Layout Component
interface MainLayoutProps {
  products: Product[];
}

const MainLayout: React.FC<MainLayoutProps> = ({ products }) => {
  const safeProducts = Array.isArray(products) ? products : [];

  // Filter featured products
  const featuredProducts = safeProducts.filter(product => product.isFeaturedProduct);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Navbar />
      <main>
        <Hero />
        <Discount />
        <Gift />
        <FeaturedProducts products={featuredProducts} />
        <Cart />
        <div className="space-y-8 py-8">
          <LatestProducts />
          <Shopex />
          <Banner2 />
          <TrendingProducts />
          <DiscountItem />
          <TopCategory />
          <Banner />
          <Cont />
          <BlogsPost />
          <OrderTracking />
          <FeedBack />
          <HelpCenter />
        </div>
      </main>
      <Footer />
    </div>
  );
};

// Main Page Component with error handling and state management
const Page: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    const loadProducts = async () => {
      try {
        setLoading(true);
        const fetchedProducts = await fetchProducts();
        
        if (mounted) {
          setProducts(fetchedProducts);
          setError(null);
        }
      } catch (err) {
        if (mounted) {
          setError(
            err instanceof Error 
              ? err.message 
              : "Failed to load products. Please try again later."
          );
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    loadProducts();

    // Cleanup function to prevent setting state on unmounted component
    return () => {
      mounted = false;
    };
  }, []);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorDisplay message={error} />;

  return (
    <CartProvider>
      <WishlistProvider>
        <MainLayout products={products} />
      </WishlistProvider>
    </CartProvider>
  );
};

export default Page;
