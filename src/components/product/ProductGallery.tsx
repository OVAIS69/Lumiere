"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface ProductGalleryProps {
    images: string[];
    name: string;
}

export function ProductGallery({ images, name }: ProductGalleryProps) {
    const [activeImage, setActiveImage] = useState(0);
    const [isZoomed, setIsZoomed] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isZoomed) return;
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;
        setMousePosition({ x, y });
    };

    return (
        <div className="flex flex-col-reverse lg:flex-row gap-6">
            {/* Thumbnails */}
            <div className="flex lg:flex-col gap-4 overflow-x-auto lg:overflow-visible no-scrollbar">
                {images.map((img, idx) => (
                    <button
                        key={idx}
                        onClick={() => setActiveImage(idx)}
                        className={cn(
                            "relative w-20 h-20 flex-shrink-0 border transition-all duration-300",
                            activeImage === idx ? "border-deep-black opacity-100" : "border-transparent opacity-60 hover:opacity-100"
                        )}
                    >
                        <Image src={img} alt={`${name} view ${idx + 1}`} fill className="object-cover" />
                    </button>
                ))}
            </div>

            {/* Main Image */}
            <div
                className="relative flex-1 aspect-square bg-ivory cursor-zoom-in overflow-hidden"
                onMouseEnter={() => setIsZoomed(true)}
                onMouseLeave={() => setIsZoomed(false)}
                onMouseMove={handleMouseMove}
            >
                <motion.div
                    className="w-full h-full relative"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <Image
                        src={images[activeImage]}
                        alt={name}
                        fill
                        className={cn(
                            "object-cover transition-transform duration-200",
                            isZoomed ? "scale-150" : "scale-100"
                        )}
                        style={isZoomed ? {
                            transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`
                        } : undefined}
                        priority
                    />
                </motion.div>
            </div>
        </div>
    );
}
