const Product = require("../models/productupload");

const uploadProduct = async (req, res) => {
  try {
    console.log(req.body)
    const product = await Product.create(req.body);
    res.status(200).json({message:"Uploaded Successfully"})
  } catch (error) {
    console.log(error);
    res.status(500).json(err);

  }
};


const getAllProducts = async(req,res)=>{
  try{
     console.log(res.body);
     const datas = await Product.find()
     res.status(200).json(datas);

  }catch(error){
    console.log(error);
    res.status(500).json(error)
  }
}

module.exports = { uploadProduct,getAllProducts };
