import mongoose from "mongoose";

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.mongodb_uri);
            console.log("database connected successfully");
            
        }
        catch (error) {
            console.log("Error connecting to the database:", error);
        }
}    

export default connectDB
// Export the connectDB function to be used in other files