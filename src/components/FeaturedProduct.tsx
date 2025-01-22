import React, { useState, useMemo } from "react";
import { Product } from "@/app/type";
import { urlFor } from "@/sanity/lib/client";
import Link from "next/link";
import { useCart } from "@/content/CartContext";
import { useWishlist } from "@/content/WishlistContext";

interface FeaturedProductsProps {
  products?: Product[];
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ products = [] }) => {
  const [showAll, setShowAll] = useState(false); // Track the state of 'See More'
  const { addToCart, cart } = useCart();
  const { wishlist, toggleWishlist } = useWishlist();

  // Memoize safe products
  const safeProducts = useMemo(() =>
    Array.isArray(products) ? products : [],
    [products]
  );

  // Memoize displayed products based on 'showAll' state
  const displayedProducts = useMemo(() => {
    if (showAll) {
      return safeProducts; // Show all products if 'showAll' is true
    }
    return safeProducts.slice(0, 3); // Show only 3 products initially
  }, [safeProducts, showAll]);

  // Memoize cart quantities lookup
  const cartQuantities = useMemo(() => {
    const quantities: { [key: string]: number } = {};
    cart.forEach(item => {
      quantities[item.product._id] = item.quantity;
    });
    return quantities;
  }, [cart]);

  const handleAddToCart = (product: Product) => {
    if (product.stockLevel > 0) {
      addToCart(product);
      const button = document.getElementById(`add-to-cart-${product._id}`);
      if (button) {
        button.classList.add("bg-green-600");
        setTimeout(() => {
          button.classList.remove("bg-green-600");
        }, 500);
      }
    }
  };

  const ProductCard = React.memo(({ product }: { product: Product }) => (
    <div className="relative group border rounded-lg p-4 hover:shadow-lg transition-all duration-300 bg-white">
      <button
        onClick={() => toggleWishlist(product)}
        className="absolute top-2 right-2 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm shadow-sm transition-transform hover:scale-110 active:scale-95"
        aria-label={`${wishlist.find((item) => item._id === product._id) ? "Remove from" : "Add to"} Wishlist`}
      >
        <span className={`text-2xl transition-colors ${wishlist.find((item) => item._id === product._id) ? "text-red-500" : "text-gray-400"}`}>
          ❤
        </span>
      </button>

      <div className="aspect-[4/3] relative overflow-hidden rounded-lg mb-4">
        {product.image?.asset ? (
          <img
            src={urlFor({
              _type: "image",  // Make sure _type is set
              asset: product.image.asset,
            }).width(400).height(300).fit("crop").url()}
            alt={product.name || "Product Image"}
            className="w-full h-full object-cover transition-transform group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500">No Image Available</span>
          </div>
        )}
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold line-clamp-1">{product.name}</h3>
        <p className="text-gray-600 text-sm line-clamp-2">{product.description}</p>

        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-blue-600">${product.price}</span>
          {cartQuantities[product._id] > 0 && (
            <span className="text-sm text-gray-500">
              In Cart: {cartQuantities[product._id]}
            </span>
          )}
        </div>

        <div className="flex space-x-2 mt-4">
          <Link
            href={`/product/${product._id}`}
            className="w-1/2 bg-violet-600 hover:bg-violet-500 active:bg-violet-700 text-white py-2 px-4 rounded-lg text-center transition-colors"
          >
            View Details
          </Link>

          <button
            id={`add-to-cart-${product._id}`}
            className={`w-1/2 py-2 px-4 rounded-lg text-center transition-all ${product.stockLevel > 0 ? "bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white" : "bg-gray-300 text-gray-500 cursor-not-allowed"}`}
            onClick={() => handleAddToCart(product)}
            disabled={product.stockLevel === 0}
          >
            {product.stockLevel > 0 ? "Add to Cart" : "Out of Stock"}
          </button>
        </div>
      </div>
    </div>
  ));

  // Explicitly set the display name for the memoized component
  ProductCard.displayName = "ProductCard";

  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold mb-6">
        Featured Products ({safeProducts.length} total)
      </h2>

      {safeProducts.length === 0 ? (
        <p className="text-center text-gray-500">No products available.</p>
      ) : (
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>

          {/* Show "See More" button if there are more than 3 products */}
          {!showAll && safeProducts.length > 3 && (
            <div className="mt-8 text-center">
              <button
                className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white py-2 px-6 rounded-lg transition-colors"
                onClick={() => setShowAll(true)}
              >
                See More
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default FeaturedProducts;
