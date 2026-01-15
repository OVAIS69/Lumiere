"use client";

import { products } from "@/lib/data";
import { ProductCard } from "@/components/product/ProductCard";

export default function NewArrivalsPage() {
    // Filter for "isNew" or just show the newest items
    const newArrivals = products.filter(p => p.isNew);

    return (
        <div className="pt-32 pb-24 min-h-screen bg-white">
            <div className="container mx-auto px-6 text-center mb-16">
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-champagne mb-4 block">Just Landed</span>
                <h1 className="text-5xl md:text-6xl font-serif text-deep-black mb-6">New Arrivals</h1>
                <p className="text-stone-500 max-w-xl mx-auto font-light leading-relaxed">
                    Be the first to explore our latest creations. Contemporary designs meeting timeless craftsmanship.
                </p>
            </div>

            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                    {newArrivals.map((product, index) => (
                        <ProductCard key={product.id} product={product} index={index} />
                    ))}
                </div>

                {newArrivals.length === 0 && (
                    <div className="text-center py-24 text-stone-400">
                        <p>No new arrivals at the moment. Check back soon.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
