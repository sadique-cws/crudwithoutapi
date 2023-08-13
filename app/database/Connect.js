import mongoose from "mongoose";


const Connect = async () => {
    try{
        return await mongoose.connect("mongodb://127.0.0.1:27017/crudwithapi");
    }
    catch(error){
        throw new Error("database connection fail")
    }
} 

export default Connect;