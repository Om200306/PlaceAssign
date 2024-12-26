const {Schema ,model}=require("mongoose");


let userSchema=new Schema({
    name:{
        type:String ,
        required:true
    }
    ,
    email:{
        type:String ,
        required:true ,
        unique:true
    } ,
    password :{
        type:String ,
        required:true
    } ,
    date: {
        type: Date,
        default: Date.now
    }
})


const hackModel= new model("hack",userSchema);

module.exports=hackModel;


