"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { products } from "@/lib/data";
import { ProductCard } from "@/components/product/ProductCard";

export default function MaisonPage() {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <div className="relative h-[80vh] w-full flex items-center justify-center bg-deep-black text-ivory">
                <Image
                    src="/hero.png"
                    alt="Lumière Atelier"
                    fill
                    className="object-cover opacity-60 grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-transparent to-transparent" />

                <div className="relative z-10 text-center space-y-6 max-w-4xl px-8">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-xs font-bold tracking-[0.3em] uppercase text-champagne block"
                    >
                        Since 1985
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-6xl md:text-8xl font-serif"
                    >
                        The Atelier
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg md:text-xl font-light text-white/80 max-w-2xl mx-auto leading-relaxed"
                    >
                        Where old-world craftsmanship meets contemporary vision.
                    </motion.p>
                </div>
            </div>

            {/* Heritage Section */}
            <section className="py-32 container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <h2 className="text-4xl md:text-5xl font-serif text-deep-black">Heritage & Artistry</h2>
                        <div className="w-24 h-[1px] bg-champagne" />
                        <p className="text-stone-600 font-light leading-relaxed text-lg">
                            Founded on the principle that true luxury lies in the details, Lumière has been a beacon of fine jewellery for over four decades. Our master artisans, trained in the grand traditions of European jewellery making, dedicate hundreds of hours to a single piece.
                        </p>
                        <p className="text-stone-600 font-light leading-relaxed text-lg">
                            We believe jewellery is more than an accessory; it is an heirloom, a memory keeper, and a piece of art that travels through time.
                        </p>
                    </div>
                    <div className="relative h-[600px] bg-stone-100">
                        {/* Placeholder for Craftsmanship Image - Ideally 'maison_craftsmanship_1' if generated */}
                        <Image src="/ring.png" alt="Artisan Craftsmanship" fill className="object-cover" />
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-32 bg-ivory">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-serif text-deep-black mb-16">Our Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="space-y-4">
                            <h3 className="text-xl font-serif text-deep-black">Ethical Sourcing</h3>
                            <p className="text-stone-600 font-light">
                                We are committed to conflict-free diamonds and responsibly sourced gemstones. Transparency is at the heart of our supply chain.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-xl font-serif text-deep-black">Master Design</h3>
                            <p className="text-stone-600 font-light">
                                Every curve, setting, and polish is deliberate. We design for the modern connoisseur who appreciates subtlety and perfection.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-xl font-serif text-deep-black">Lifetime Promise</h3>
                            <p className="text-stone-600 font-light">
                                We stand by our creation. Every Lumière piece comes with a lifetime warranty and complimentary care service.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Signature Creations */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-serif text-deep-black mb-6">Signature Creations</h2>
                        <p className="text-stone-500 max-w-xl mx-auto font-light">
                            Pieces that define the Lumière legacy. Exceptional artistry for the exceptional individual.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                        {/* Show specific high-end items */}
                        {products.slice(0, 3).map((product, index) => (
                            <ProductCard key={product.id} product={product} index={index} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
