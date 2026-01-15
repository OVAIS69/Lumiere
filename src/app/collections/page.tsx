"use client";

import { useState, useEffect, Suspense } from "react";
import { products } from "@/lib/data";
import { ProductCard } from "@/components/product/ProductCard";
import { SlidersHorizontal, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useSearchParams, useRouter } from "next/navigation";

const filters = {
    categories: ["rings", "necklaces", "earrings", "bracelets", "bridal"],
    materials: ["18k Gold", "Platinum", "Rose Gold", "Silver"],
};

function CollectionsContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const initialCategory = searchParams.get("category");
    const [activeCategory, setActiveCategory] = useState<string | null>(initialCategory);
    const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

    useEffect(() => {
        setActiveCategory(searchParams.get("category"));
    }, [searchParams]);

    const updateCategory = (category: string | null) => {
        setActiveCategory(category);
        const params = new URLSearchParams(searchParams.toString());
        if (category) {
            params.set("category", category);
        } else {
            params.delete("category");
        }
        router.push(`/collections?${params.toString()}`);
    };

    const filteredProducts = activeCategory
        ? products.filter(p => p.category === activeCategory)
        : products;

    return (
        <div className="pt-32 pb-24 min-h-screen bg-white">
            {/* Header */}
            <div className="container mx-auto px-6 mb-16 text-center">
                <h1 className="text-5xl md:text-6xl font-serif text-deep-black mb-6">High Jewellery</h1>
                <p className="text-stone-500 max-w-xl mx-auto font-light leading-relaxed">
                    Discover our exquisite collection of handcrafted pieces, where timeless elegance meets modern artistry.
                </p>
            </div>

            <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-12">
                {/* Sidebar Filters - Desktop */}
                <aside className="hidden lg:block w-64 space-y-12 flex-shrink-0">
                    <div>
                        <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-deep-black mb-6 border-b pb-2">Category</h3>
                        <ul className="space-y-3">
                            <li>
                                <button
                                    onClick={() => updateCategory(null)}
                                    className={cn("text-sm hover:text-champagne transition-colors text-left w-full", activeCategory === null ? "text-champagne font-medium" : "text-stone-600")}
                                >
                                    View All
                                </button>
                            </li>
                            {filters.categories.map(cat => (
                                <li key={cat}>
                                    <button
                                        onClick={() => updateCategory(cat)}
                                        className={cn("text-sm hover:text-champagne transition-colors capitalize text-left w-full", activeCategory === cat ? "text-champagne font-medium" : "text-stone-600")}
                                    >
                                        {cat}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-deep-black mb-6 border-b pb-2">Material</h3>
                        <ul className="space-y-3">
                            {filters.materials.map(mat => (
                                <li key={mat} className="flex items-center gap-3">
                                    <input type="checkbox" id={mat} className="rounded border-stone-300 text-champagne focus:ring-champagne" />
                                    <label htmlFor={mat} className="text-sm text-stone-600 hover:text-champagne cursor-pointer transition-colors">{mat}</label>
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>

                {/* Mobile Filter Drawer */}
                <div className={cn(
                    "fixed inset-0 z-50 bg-black/50 lg:hidden transition-opacity duration-300",
                    isMobileFiltersOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                )} onClick={() => setIsMobileFiltersOpen(false)}>
                    <div
                        className={cn(
                            "absolute right-0 top-0 h-full w-80 bg-white p-8 shadow-xl transition-transform duration-300 ease-out flex flex-col gap-8 overflow-y-auto",
                            isMobileFiltersOpen ? "translate-x-0" : "translate-x-full"
                        )}
                        onClick={e => e.stopPropagation()}
                    >
                        <div className="flex justify-between items-center pb-4 border-b">
                            <h2 className="text-lg font-serif text-deep-black">Filters</h2>
                            <button onClick={() => setIsMobileFiltersOpen(false)} className="text-sm text-stone-500 uppercase tracking-widest">Close</button>
                        </div>

                        <div>
                            <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-deep-black mb-6">Category</h3>
                            <ul className="space-y-4">
                                <li>
                                    <button
                                        onClick={() => { updateCategory(null); setIsMobileFiltersOpen(false); }}
                                        className={cn("text-base w-full text-left", activeCategory === null ? "text-champagne font-medium" : "text-stone-600")}
                                    >
                                        View All
                                    </button>
                                </li>
                                {filters.categories.map(cat => (
                                    <li key={cat}>
                                        <button
                                            onClick={() => { updateCategory(cat); setIsMobileFiltersOpen(false); }}
                                            className={cn("text-base capitalize w-full text-left", activeCategory === cat ? "text-champagne font-medium" : "text-stone-600")}
                                        >
                                            {cat}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Main Grid */}
                <div className="flex-1">
                    {/* Mobile Filter Toggle */}
                    <div className="lg:hidden mb-8 flex justify-between items-center border-b pb-4">
                        <button
                            onClick={() => setIsMobileFiltersOpen(true)}
                            className="flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-deep-black"
                        >
                            <SlidersHorizontal className="w-4 h-4" /> Filters
                        </button>
                        <button className="flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-deep-black">
                            Sort <ChevronDown className="w-4 h-4" />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                        {filteredProducts.map((product, index) => (
                            <ProductCard key={product.id} product={product} index={index} />
                        ))}
                    </div>

                    {filteredProducts.length === 0 && (
                        <div className="text-center py-24 text-stone-400">
                            <p>No products found in this category.</p>
                            <button onClick={() => updateCategory(null)} className="text-champagne underline mt-2">Clear filters</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default function CollectionsPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-white" />}>
            <CollectionsContent />
        </Suspense>
    );
}
