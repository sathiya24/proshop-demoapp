import express from 'express';
const router = express.Router();

import { getProducts, getProductsById, createProduct } from '../controllers/productControllers.js';

import products from '../data/products.js';
import asyncHandler from '../middleware/asyncHandler.js';
import Product from '../models/productModel.js';

router.get("/", asyncHandler (async (req, res) => {
    const products = await Product.find({})
    res.json(products); 
}));

router.get('/:id', asyncHandler (async (req, res) => {
    const product = await Product.findById(req.params.id);

    if(product) {
    return res.json(product);
    }

    res.status(404).json({ message: 'Product Not Found'})

}));


router.route('/').get(getProducts);
router.route('/:id').get(getProductsById);
router.route('/').post(createProduct);

export default router; 