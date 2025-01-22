import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Product } from '@/types';
import { urlFor, getProductById } from '@/sanity/lib/client';
import { useCart } from '@/content/CartContext';
import { useWishlist } from '@/content/WishlistContext';
import Link from 'next/link';

export default function ProductDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState<Product | null>(null);
  const { addToCart, cart } = useCart();
  const { wishlist, toggleWishlist } = useWishlist();
  const [loading, setLoading] = useState(true);
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    async function loadProduct() {
      if (id) {
        try {
          const productData = await getProductById(id as string);
          setProduct(productData);
        } catch (error) {
          console.error('Error loading product:', error);
        } finally {
          setLoading(false);
        }
      }
    }

    loadProduct();
  }, [id]);

  // Loading skeleton
  if (loading) {
    return (
      <div className="container mx-auto py-8 px-4">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="h-96 bg-gray-200 rounded"></div>
            <div className="space-y-4">
              <div className="h-8 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              <div className="h-24 bg-gray-200 rounded"></div>
              <div className="h-12 bg-gray-200 rounded w-1/3"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Product not found state
  if (!product) {
    return (
      <div className="container mx-auto py-8 px-4 text-center">
        <h1 className="text-2xl font-bold text-red-600">Product not found</h1>
        <p className="text-gray-600 mt-2">The product you&apos;re looking for doesn&apos;t exist or has been removed.</p>
        <button 
          onClick={() => router.push('/')}
          className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-500"
        >
          Return to Home
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (product.stockLevel > 0) {
      addToCart(product);
      setAddedToCart(true);
      setTimeout(() => setAddedToCart(false), 2000);
    }
  };

  const isInWishlist = wishlist.some(item => item._id === product._id);
  const cartQuantity = cart.find(item => item.product._id === product._id)?.quantity || 0;

  return (
    <div className="container mx-auto py-8 px-4">
      {/* Breadcrumb */}
      <div className="mb-6 text-sm text-gray-600">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">/</span>
        <span>{product.category?.name || 'Products'}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image Section */}
        <div className="relative">
          <button
            onClick={() => toggleWishlist(product)}
            className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm shadow-sm hover:scale-110 transition-all"
          >
            <span className={`text-2xl ${isInWishlist ? 'text-red-500' : 'text-gray-400'}`}>
              ❤
            </span>
          </button>
          
          <div className="aspect-square relative overflow-hidden rounded-xl">
            {product.image?.asset ? (
              <img
                src={urlFor(product.image).width(800).height(800).fit("crop").url()}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">No Image Available</span>
              </div>
            )}
          </div>
        </div>

        {/* Product Info Section */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-3xl font-bold text-blue-600 mt-2">${product.price}</p>
          </div>
          
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">Description</h2>
            <p className="text-gray-600 leading-relaxed">{product.description}</p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold">Stock Status</h2>
            <p className={`${product.stockLevel > 0 ? 'text-green-600' : 'text-red-600'} font-medium`}>
              {product.stockLevel > 0 ? `${product.stockLevel} in stock` : 'Out of Stock'}
            </p>
          </div>

          {cartQuantity > 0 && (
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-blue-700">
                Currently in cart: {cartQuantity} {cartQuantity === 1 ? 'item' : 'items'}
              </p>
            </div>
          )}

          <div className="space-y-4">
            <button
              onClick={handleAddToCart}
              disabled={product.stockLevel === 0}
              className={`
                w-full py-3 px-6 rounded-lg text-white text-lg transition-all
                ${addedToCart ? 'bg-green-600' : ''}
                ${product.stockLevel > 0 
                  ? 'bg-blue-600 hover:bg-blue-500 active:bg-blue-700' 
                  : 'bg-gray-300 cursor-not-allowed'
                }
              `}
            >
              {addedToCart 
                ? '✓ Added to Cart' 
                : product.stockLevel > 0 
                  ? 'Add to Cart' 
                  : 'Out of Stock'
              }
            </button>

            <button
              onClick={() => toggleWishlist(product)}
              className="w-full py-3 px-6 rounded-lg border-2 border-gray-300 text-lg hover:border-gray-400 transition-colors"
            >
              {isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
