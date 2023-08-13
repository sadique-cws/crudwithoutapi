import mongoose from "mongoose";
const StudentSchema = new mongoose.Schema({
    name:{type:String},
    contact:{type:String},
    email:{type:String},
    city:{type:String},
},{timestamps:true});


export default mongoose.models.Student || mongoose.model("Student", StudentSchema);