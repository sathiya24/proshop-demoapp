import asyncHandler from '../middleware/asyncHandler.js';
import Product from '../models/productModel.js';

const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
});

const getProductsById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if(product) {
    return res.json(product);
    }

    res.status(404).json({ message: 'Product Not Found'})
});

// const createProduct = asyncHandler(async (req, res) => {
//     // const {user, name, brand, category, description, rating, numReviews, price, countInStock} = req.body;
// const createProducts = new createProduct({
//     user: req.body.user,
//     name: req.body.name,
//     brand: req.body.brand,
//     category: req.body.category,
//     description: req.body.description,
//     rating: req.body.rating,
//     numReviews: req.body.numReviews,
//     price: req.body.price,
//     countInStock: req.body.countInStock  
// })
// createProducts.save()
//       .then(data => {
//         res.json(data);
//     })
//     .catch(e => {
//         res.json({message: e});
//     })

const createProduct = asyncHandler(async (req, res) => {
    const product = new Product({
      name: 'Sample name',
      price: 0,
    //   user: req.user._id,
      image: '/images/sample.jpg',
      brand: 'Sample brand',
      category: 'Sample category',
      countInStock: 0,
      numReviews: 0,
      description: 'Sample description',
    });
  
    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  });
// })

export { getProducts, getProductsById, createProduct };