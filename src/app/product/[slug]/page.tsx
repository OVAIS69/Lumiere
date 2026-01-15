import { notFound } from "next/navigation";
import { products } from "@/lib/data";
import { ProductGallery } from "@/components/product/ProductGallery";
import { ProductInfo } from "@/components/product/ProductInfo";

export function generateStaticParams() {
    return products.map((product) => ({
        slug: product.slug,
    }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const product = products.find((p) => p.slug === slug);

    if (!product) {
        notFound();
    }

    // Mock list of images (using the same one for demo)
    const productImages = [
        product.image,
        product.image,
        product.image,
        product.image
    ];

    return (
        <div className="pt-32 pb-24 bg-white min-h-screen">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <ProductGallery images={productImages} name={product.name} />
                    <ProductInfo product={product} />
                </div>
            </div>
        </div>
    );
}
