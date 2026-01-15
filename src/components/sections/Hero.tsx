"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function Hero() {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 400], [1, 0]);

    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-deep-black">
            {/* Background Image Parallax */}
            <motion.div
                style={{ y, opacity }}
                className="absolute inset-0 z-0 select-none pointer-events-none"
            >
                <Image
                    src="/hero.png"
                    alt="Luxury Jewellery Collection"
                    fill
                    className="object-cover opacity-80"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
            </motion.div>

            {/* Content */}
            <div className="relative z-10 text-center text-ivory space-y-8 max-w-5xl px-6 pt-20">
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="text-6xl md:text-8xl lg:text-9xl font-serif tracking-tight leading-[0.9] text-ivory drop-shadow-lg"
                >
                    Elegance is <br />
                    <span className="italic font-light text-champagne">Timeless</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="text-lg md:text-xl font-light tracking-[0.2em] max-w-xl mx-auto text-ivory/90 uppercase"
                >
                    Discover the artistry of fine craftsmanship
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                >
                    <Button variant="outline" size="lg" className="border-champagne text-champagne hover:bg-champagne hover:text-deep-black mt-12 text-base px-12 py-8 h-auto tracking-[0.25em] transition-all duration-500 backdrop-blur-sm">
                        Explore Collection
                    </Button>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/50 text-[10px] tracking-[0.4em] uppercase flex flex-col items-center gap-4"
            >
                <span>Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
            </motion.div>
        </section>
    );
}
