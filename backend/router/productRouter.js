const express = require ("express");

const router = express.Router();

const{getProducts
} = require("./productController");

router.get("/products",getProducts);

module.exports = router;