import mongoose from "mongoose";

const contactUserSchema = new mongoose.Schema({
    name : {type:String, required},
    email : {type:String, required},
    message :{type:String, required},
});

export const user = mongoose.model("contactuser",contactUserSchema )