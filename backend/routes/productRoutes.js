const express = require('express');
const { model } = require('mongoose');
const router = express.Router();

const { getAllProducts, 
    getProductById,
    } = require("../controller/productControllers");

//@desc GET all products from db
//@route GET /api/products
//@access Public
router.get('/',getAllProducts);

//@desc GET a products from db
//@route GET /api/products/:id
//@access Public
router.get('/:id', getProductById);

model.exports = router;
