   const mongoose= require("mongoose");

   let connection= mongoose.connect("mongodb://localhost:27017/hackerthon");


      module.exports=connection;