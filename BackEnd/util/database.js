const mongoose=require("mongoose");

const connectionDB=(url)=>{
    console.log('trying to connect to db')
    return mongoose.connect(url)
}

module.exports=connectionDB;