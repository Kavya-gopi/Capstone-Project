const express = require("express");
const {uploadProduct,getAllProducts} = require("../controllers/productupController");

const prod_up_routes = express.Router();

prod_up_routes.post("/uploadProduct",uploadProduct);
prod_up_routes.get("/prod",getAllProducts);

module.exports=prod_up_routes
