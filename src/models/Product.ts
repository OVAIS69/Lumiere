import mongoose, { Schema, Document } from 'mongoose';

export interface IProduct extends Document {
    name: string;
    slug: string;
    description: string;
    price: number;
    currency: string;
    images: string[];
    category: 'rings' | 'necklaces' | 'earrings' | 'bracelets' | 'bridal';
    materials: string[];
    stones: string[];
    stock: number;
    isFeatured: boolean;
    specifications: {
        weight?: string;
        dimensions?: string;
        purity?: string;
    };
}

const ProductSchema: Schema = new Schema({
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    currency: { type: String, default: 'USD' },
    images: [{ type: String }],
    category: { type: String, required: true },
    materials: [{ type: String }],
    stones: [{ type: String }],
    stock: { type: Number, default: 0 },
    isFeatured: { type: Boolean, default: false },
    specifications: {
        weight: String,
        dimensions: String,
        purity: String,
    },
}, { timestamps: true });

export default mongoose.models.Product || mongoose.model<IProduct>('Product', ProductSchema);
