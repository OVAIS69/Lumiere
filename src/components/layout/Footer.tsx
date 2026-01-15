import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-deep-black text-ivory pt-24 pb-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-serif tracking-widest uppercase">Lumière</h3>
                        <p className="text-white/60 text-sm leading-relaxed max-w-xs font-light">
                            Crafting timeless elegance for the modern connoisseur. Each piece is a testament to our dedication to excellence and artistry.
                        </p>
                    </div>

                    {/* Customer Care */}
                    <div className="space-y-6">
                        <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-champagne">Customer Care</h4>
                        <ul className="space-y-4 text-sm text-ivory/80 font-light">
                            <li><Link href="/contact" className="hover:text-champagne transition-colors">Contact Us</Link></li>
                            <li><Link href="/shipping" className="hover:text-champagne transition-colors">Shipping & Returns</Link></li>
                            <li><Link href="/faq" className="hover:text-champagne transition-colors">FAQ</Link></li>
                            <li><Link href="/care" className="hover:text-champagne transition-colors">Jewellery Care</Link></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div className="space-y-6">
                        <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-champagne">Legal</h4>
                        <ul className="space-y-4 text-sm text-ivory/80 font-light">
                            <li><Link href="/privacy" className="hover:text-champagne transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-champagne transition-colors">Terms of Service</Link></li>
                            <li><Link href="/accessibility" className="hover:text-champagne transition-colors">Accessibility</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="space-y-6">
                        <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-champagne">Newsletter</h4>
                        <p className="text-sm text-white/60 font-light">Subscribe to receive updates, access to exclusive deals, and more.</p>
                        <form className="flex items-center border-b border-white/20 pb-2 pt-2">
                            <input type="email" placeholder="Email address" className="bg-transparent border-none outline-none flex-1 text-sm text-ivory placeholder-white/40 focus:ring-0" />
                            <button type="submit" className="text-xs tracking-widest uppercase hover:text-champagne transition-colors font-medium">Subscribe</button>
                        </form>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-xs text-white/40 font-light">
                    <p>© 2026 Lumière Jewellery. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-champagne transition-colors"><Instagram className="w-5 h-5 stroke-[1.5]" /></Link>
                        <Link href="#" className="hover:text-champagne transition-colors"><Facebook className="w-5 h-5 stroke-[1.5]" /></Link>
                        <Link href="#" className="hover:text-champagne transition-colors"><Twitter className="w-5 h-5 stroke-[1.5]" /></Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
