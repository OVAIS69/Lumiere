"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Plus, Minus, ShieldCheck, Truck, RotateCcw } from "lucide-react";
import { Product } from "@/lib/data";

export function ProductInfo({ product }: { product: Product }) {
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState<"details" | "shipping" | "care">("details");

    const increment = () => setQuantity(q => q + 1);
    const decrement = () => setQuantity(q => q > 1 ? q - 1 : 1);

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="space-y-2">
                <p className="text-sm tracking-widest uppercase text-stone-500">{product.category}</p>
                <h1 className="text-4xl font-serif text-deep-black">{product.name}</h1>
                <p className="text-2xl font-medium text-champagne pt-2">${product.price.toLocaleString()}</p>
            </div>

            {/* Description */}
            <p className="text-stone-600 font-light leading-relaxed">
                {product.description}
            </p>

            {/* Specs */}
            <div className="grid grid-cols-2 gap-4 py-6 border-y border-stone-100">
                <div>
                    <span className="text-xs uppercase tracking-widest text-stone-400 block mb-1">Material</span>
                    <span className="text-deep-black">{product.material}</span>
                </div>
                <div>
                    <span className="text-xs uppercase tracking-widest text-stone-400 block mb-1">Gemstone</span>
                    <span className="text-deep-black">{product.stone}</span>
                </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4">
                <div className="flex items-center border border-stone-200">
                    <button onClick={decrement} className="px-4 py-3 hover:bg-stone-50 transition-colors"><Minus className="w-4 h-4" /></button>
                    <span className="w-12 text-center font-medium">{quantity}</span>
                    <button onClick={increment} className="px-4 py-3 hover:bg-stone-50 transition-colors"><Plus className="w-4 h-4" /></button>
                </div>
                <Button className="flex-1" size="lg">Add to Cart - ${(product.price * quantity).toLocaleString()}</Button>
            </div>

            {/* Trust Badges */}
            <div className="flex gap-6 text-xs text-stone-500 py-4">
                <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> Lifetime Warranty</span>
                <span className="flex items-center gap-2"><Truck className="w-4 h-4" /> Free Shipping</span>
                <span className="flex items-center gap-2"><RotateCcw className="w-4 h-4" /> 30-Day Returns</span>
            </div>

            {/* Accordion / Tabs (Simplified) */}
            <div className="pt-8">
                <div className="flex gap-8 border-b border-stone-200 mb-4">
                    <button
                        onClick={() => setActiveTab("details")}
                        className={`pb-2 text-sm uppercase tracking-widest transition-colors ${activeTab === "details" ? "text-deep-black border-b border-deep-black -mb-[1px]" : "text-stone-400"}`}
                    >
                        Details
                    </button>
                    <button
                        onClick={() => setActiveTab("shipping")}
                        className={`pb-2 text-sm uppercase tracking-widest transition-colors ${activeTab === "shipping" ? "text-deep-black border-b border-deep-black -mb-[1px]" : "text-stone-400"}`}
                    >
                        Shipping
                    </button>
                    <button
                        onClick={() => setActiveTab("care")}
                        className={`pb-2 text-sm uppercase tracking-widest transition-colors ${activeTab === "care" ? "text-deep-black border-b border-deep-black -mb-[1px]" : "text-stone-400"}`}
                    >
                        Care
                    </button>
                </div>

                <div className="text-stone-600 text-sm font-light leading-relaxed min-h-[100px]">
                    {activeTab === "details" && <p>Handcrafted with precision. This piece features ethically sourced gemstones and certified precious metals. Each item comes with a certificate of authenticity.</p>}
                    {activeTab === "shipping" && <p>Complimentary insured shipping on all orders. Delivery typically takes 3-5 business days. Signature required upon delivery for your security.</p>}
                    {activeTab === "care" && <p>To maintain the shine of your jewellery, clean with a soft cloud and store in the provided velvet box. Avoid contact with perfumes and harsh chemicals.</p>}
                </div>
            </div>
        </div>
    );
}
