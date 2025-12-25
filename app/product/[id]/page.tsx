import BackToPrevious from '@/components/BackToPrevious';
import { fetchProductById } from '@/services/productApi';
import Image from 'next/image';
import Link from 'next/link';

export default async function ProductDetails({
    params,
}: {
    params: { id: string };
}) {
    const { id } = await params
    const product = await fetchProductById(id);

    const renderStars = (rating: number) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        for (let i = 0; i < fullStars; i++) {
            stars.push(
                <svg key={i} fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5 text-yellow-400" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
            );
        }

        if (hasHalfStar) {
            stars.push(
                <svg key="half" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5 text-yellow-400" viewBox="0 0 24 24">
                    <defs>
                        <linearGradient id="half-star">
                            <stop offset="50%" stopColor="currentColor" />
                            <stop offset="50%" stopColor="transparent" />
                        </linearGradient>
                    </defs>
                    <path fill="url(#half-star)" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
            );
        }

        const emptyStars = 5 - Math.ceil(rating);
        for (let i = 0; i < emptyStars; i++) {
            stars.push(
                <svg key={`empty-${i}`} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5 text-gray-300" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
            );
        }

        return stars;
    };

    return (
        <section className="min-h-screen bg-linear-to-br from-blue-50 via-white to-purple-50 py-8">
            <div className="container mx-auto px-4">
                <BackToPrevious />
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                        {/* Product Image */}
                        <div className='relative bg-linear-to-br from-gray-50 to-gray-100 p-8 flex items-center justify-center'>
                            <div className="absolute inset-0 bg-linear-to-br from-blue-400/10 to-purple-400/10"></div>
                            <Image
                                width={500}
                                height={500}
                                alt={product.title}
                                className="object-contain rounded-xl shadow-lg"
                                src={product.thumbnail}
                            />
                        </div>

                        {/* Product Details */}
                        <div className="p-8 lg:p-12 flex flex-col justify-center">
                            <div className="space-y-6">
                                {/* Brand */}
                                <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                                    {product.brand || 'Unknown'}
                                </div>

                                {/* Title */}
                                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                                    {product.title}
                                </h1>

                                {/* Rating */}
                                <div className="flex items-center space-x-2">
                                    <div className="flex items-center">
                                        {renderStars(product.rating)}
                                    </div>
                                    <span className="text-gray-600 font-medium">
                                        {product.rating.toFixed(1)} / 5.0
                                    </span>
                                </div>

                                {/* Price */}
                                <div className="flex items-baseline space-x-2">
                                    <span className="text-5xl font-bold text-green-600">
                                        ${product.price}
                                    </span>
                                    <span className="text-lg text-gray-500 line-through">
                                        ${(product.price * 1.2).toFixed(2)}
                                    </span>
                                    <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">
                                        17% OFF
                                    </span>
                                </div>

                                {/* Stock */}
                                <div className="flex items-center space-x-2">
                                    <span className="text-sm font-medium text-gray-700">Stock:</span>
                                    <span className={`text-sm font-semibold px-3 py-1 rounded-full ${product.stock > 50 ? 'bg-green-100 text-green-800' :
                                            product.stock > 20 ? 'bg-yellow-100 text-yellow-800' :
                                                'bg-red-100 text-red-800'
                                        }`}>
                                        {product.stock} available
                                    </span>
                                </div>

                                {/* Description */}
                                <div className="border-t pt-6">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
                                    <p className="text-gray-600 leading-relaxed text-base">
                                        {product.description}
                                    </p>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                                    <button className="flex-1 bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                                        Add to Cart
                                    </button>
                                    <button className="flex-1 border-2 border-gray-300 text-gray-700 font-semibold py-4 px-8 rounded-xl hover:border-gray-400 hover:bg-gray-50 transition-all duration-300">
                                        Add to Wishlist
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


