import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  image: { type: String, required: true }, // URL to product image
}, { timestamps: true });

const Product = mongoose.models.Product || mongoose.model('Product', ProductSchema);
export default Product;
