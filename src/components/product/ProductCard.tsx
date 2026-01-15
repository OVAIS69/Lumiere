"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, Plus } from "lucide-react";
import { Product } from "@/lib/data";
import { Button } from "@/components/ui/Button";

export function ProductCard({ product, index }: { product: Product; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative"
        >
            <div className="relative aspect-[4/5] overflow-hidden bg-ivory mb-4">
                <Link href={`/product/${product.slug}`}>
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                </Link>

                {/* Tags */}
                {product.isNew && (
                    <span className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.2em] bg-white/90 backdrop-blur px-3 py-1 text-deep-black">
                        New
                    </span>
                )}

                {/* Quick Actions */}
                <div className="absolute right-4 top-4 flex flex-col gap-2 translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                    <button className="bg-white/90 p-2 rounded-full hover:bg-champagne hover:text-white transition-colors shadow-sm" aria-label="Add to Wishlist">
                        <Heart className="w-4 h-4" />
                    </button>
                    <button className="bg-white/90 p-2 rounded-full hover:bg-champagne hover:text-white transition-colors shadow-sm" aria-label="Quick Add">
                        <Plus className="w-4 h-4" />
                    </button>
                </div>
            </div>

            <div className="space-y-1 text-center">
                <h3 className="text-lg font-serif text-deep-black group-hover:text-champagne transition-colors duration-300">
                    <Link href={`/product/${product.slug}`}>{product.name}</Link>
                </h3>
                <p className="text-xs text-stone-500 tracking-widest uppercase">{product.category}</p>
                <p className="text-sm font-medium text-deep-black mt-2">${product.price.toLocaleString()}</p>
            </div>
        </motion.div>
    );
}
