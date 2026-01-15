"use client";

import { products } from "@/lib/data";
import { ProductCard } from "@/components/product/ProductCard";
import Image from "next/image";

export default function BridalPage() {
    // In a real app, filtering by 'bridal' category or tag
    const bridalCollection = products.filter(p => p.category === 'bridal' || p.category === 'rings');

    return (
        <div className="min-h-screen bg-white">
            {/* Bridal Hero */}
            <div className="relative h-[60vh] w-full flex items-center justify-center bg-stone-100">
                {/* Placeholder for Bridal Hero Image - reusing hero for now but ideally a new one */}
                <Image src="/hero.png" alt="Bridal Collection" fill className="object-cover opacity-60" />
                <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]" />

                <div className="relative z-10 text-center space-y-4 p-8 bg-white/50 backdrop-blur-md max-w-2xl border border-white/40">
                    <h1 className="text-5xl md:text-7xl font-serif text-deep-black">Lumière Bridal</h1>
                    <p className="text-deep-black/80 tracking-widest uppercase text-sm font-medium">For Your Forever Moment</p>
                </div>
            </div>

            <div className="container mx-auto px-6 py-24">
                <div className="text-center mb-16">
                    <p className="text-stone-500 max-w-2xl mx-auto font-light leading-relaxed">
                        Discover engagement rings and wedding bands crafted to symbolize your unique love story.
                        Each diamond is hand-selected for its exceptional brilliance.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                    {bridalCollection.map((product, index) => (
                        <ProductCard key={product.id} product={product} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
}
