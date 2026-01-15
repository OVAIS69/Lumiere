"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

const collections = [
    {
        id: 1,
        title: "Eternal Rings",
        image: "/ring.png",
        link: "/collections?category=rings",
    },
    {
        id: 2,
        title: "Celestial Earrings",
        image: "/earrings.png",
        link: "/collections?category=earrings",
    },
    {
        id: 3,
        title: "Royal Necklaces",
        image: "/hero.png",
        link: "/collections?category=necklaces",
    }
];

function Card({ item }: { item: typeof collections[0] }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 50, damping: 20 });
    const mouseY = useSpring(y, { stiffness: 50, damping: 20 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["5deg", "-5deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-5deg", "5deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseXFromCenter = e.clientX - rect.left - width / 2;
        const mouseYFromCenter = e.clientY - rect.top - height / 2;
        x.set(mouseXFromCenter / width);
        y.set(mouseYFromCenter / height);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <div style={{ perspective: 1200 }} className="w-full h-[600px]">
            <motion.div
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="group relative h-full w-full cursor-pointer overflow-hidden bg-ivory shadow-lg"
            >
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                    <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-opacity duration-500"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/50 transition-colors duration-500" />
                </div>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 translate-z-20">
                    <h3 className="text-3xl font-serif text-ivory tracking-widest uppercase mb-4 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 drop-shadow-md">
                        {item.title}
                    </h3>
                    <Link
                        href={item.link}
                        className="inline-flex items-center gap-2 text-sm text-champagne tracking-[0.2em] translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 uppercase font-medium"
                    >
                        View Collection <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                {/* Elegant Border */}
                <div className="absolute inset-6 border border-white/30 scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-700 pointer-events-none" />
            </motion.div>
        </div>
    );
}

export function FeaturedCollections() {
    return (
        <section className="py-32 bg-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-serif text-deep-black mb-4 tracking-tight">Curated Collections</h2>
                    <div className="w-24 h-[1px] bg-champagne mx-auto my-6" />
                    <p className="text-deep-black/60 max-w-2xl mx-auto font-light leading-relaxed">
                        Explore our exclusive selection of fine jewellery, designed to celebrate life&apos;s most precious moments.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {collections.map((item) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: item.id * 0.2 }}
                        >
                            <Card item={item} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
