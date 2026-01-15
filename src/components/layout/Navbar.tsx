"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Heart, ShoppingBag, User, Menu } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 w-full z-50 transition-all duration-500 border-b",
                    isScrolled
                        ? "bg-ivory/90 backdrop-blur-md shadow-sm border-stone-200 py-3"
                        : "bg-transparent border-transparent py-6"
                )}
            >
                <div className="container mx-auto px-6 flex items-center justify-between">
                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden text-deep-black hover:text-champagne transition-colors z-50 relative"
                    >
                        <Menu className="w-6 h-6" />
                    </button>

                    {/* Logo */}
                    <Link href="/" className="text-3xl font-serif tracking-widest text-deep-black uppercase relative z-10 font-medium">
                        Lumière
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex gap-12 items-center absolute left-1/2 -translate-x-1/2">
                        <Link href="/collections" className="text-xs tracking-[0.2em] font-medium hover:text-champagne transition-colors uppercase">Collections</Link>
                        <Link href="/new-arrivals" className="text-xs tracking-[0.2em] font-medium hover:text-champagne transition-colors uppercase">New In</Link>
                        <Link href="/bridal" className="text-xs tracking-[0.2em] font-medium hover:text-champagne transition-colors uppercase">Bridal</Link>
                        <Link href="/about" className="text-xs tracking-[0.2em] font-medium hover:text-champagne transition-colors uppercase">Maison</Link>
                    </nav>

                    {/* Icons */}
                    <div className="flex items-center gap-6 text-deep-black">
                        <button className="hover:text-champagne transition-colors" aria-label="Search">
                            <Search className="w-5 h-5 stroke-[1.5]" />
                        </button>
                        <button className="hover:text-champagne transition-colors hidden sm:block" aria-label="Wishlist">
                            <Heart className="w-5 h-5 stroke-[1.5]" />
                        </button>
                        <button className="hover:text-champagne transition-colors relative" aria-label="Cart">
                            <ShoppingBag className="w-5 h-5 stroke-[1.5]" />
                            <span className="absolute -top-1 -right-1 flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-champagne opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-champagne"></span>
                            </span>
                        </button>
                        <button className="hover:text-champagne transition-colors hidden sm:block" aria-label="Account">
                            <User className="w-5 h-5 stroke-[1.5]" />
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div className={cn(
                "fixed inset-0 z-40 bg-ivory flex flex-col items-center justify-center transition-all duration-500 ease-in-out lg:hidden",
                isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
            )}>
                <nav className="flex flex-col gap-8 text-center">
                    <Link onClick={() => setIsMobileMenuOpen(false)} href="/collections" className="text-2xl font-serif tracking-widest text-deep-black hover:text-champagne transition-colors">Collections</Link>
                    <Link onClick={() => setIsMobileMenuOpen(false)} href="/new-arrivals" className="text-2xl font-serif tracking-widest text-deep-black hover:text-champagne transition-colors">New In</Link>
                    <Link onClick={() => setIsMobileMenuOpen(false)} href="/bridal" className="text-2xl font-serif tracking-widest text-deep-black hover:text-champagne transition-colors">Bridal</Link>
                    <Link onClick={() => setIsMobileMenuOpen(false)} href="/about" className="text-2xl font-serif tracking-widest text-deep-black hover:text-champagne transition-colors">Maison</Link>
                </nav>
            </div>
        </>
    );
}
