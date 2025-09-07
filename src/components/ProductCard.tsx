import Link from 'next/link'
import { Product } from '@/lib/types'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  return (
    <div className="group relative bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
      {/* Sale Badge */}
      {discountPercentage > 0 && (
        <Badge className="absolute top-3 left-3 z-10 bg-rose-500 hover:bg-rose-600">
          -{discountPercentage}%
        </Badge>
      )}

      {/* Product Image */}
      <div className="relative aspect-[4/5] overflow-hidden bg-gray-50">
        <Link href={`/products/${product.slug}`}>
          <div className="relative w-full h-full">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = `https://placehold.co/400x500?text=${encodeURIComponent(product.name + ' perfume bottle')}`;
              }}
            />
          </div>
        </Link>
        
        {/* Quick Add Button - appears on hover */}
        <div className="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button className="w-full bg-rose-600 hover:bg-rose-700 text-white">
            Quick Add to Cart
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4 space-y-2">
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500 font-medium">{product.brand}</p>
          {!product.in_stock && (
            <Badge variant="secondary" className="text-xs">
              Out of Stock
            </Badge>
          )}
        </div>
        
        <Link href={`/products/${product.slug}`}>
          <h3 className="font-semibold text-gray-900 hover:text-rose-600 transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>

        <p className="text-sm text-gray-600 capitalize">{product.fragrance_family}</p>

        {/* Rating */}
        <div className="flex items-center space-x-1">
          <div className="flex items-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                className={`text-sm ${
                  i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'
                }`}
              >
                ⭐
              </span>
            ))}
          </div>
          <span className="text-sm text-gray-500">
            {product.rating} ({product.reviews_count})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center space-x-2">
          <span className="font-bold text-lg text-gray-900">
            ${product.price}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              ${product.originalPrice}
            </span>
          )}
          <span className="text-sm text-gray-500">• {product.size}</span>
        </div>

        {/* Top Notes Preview */}
        <div className="pt-2">
          <p className="text-xs text-gray-500">
            <span className="font-medium">Top notes:</span> {product.fragrance_notes.top.slice(0, 3).join(', ')}
          </p>
        </div>
      </div>
    </div>
  )
}