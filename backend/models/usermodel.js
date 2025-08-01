import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    profilepic: {type:String},
    username: {type:String, required: true, unique: true},
    email: {type:String, required: true, unique: true},
    password: {type:String, required: true},
    phoneNumber: {type:Number},
    resume: {type:String},
    highestdegree: {type:String},
    skills: [],
    experience: {type:String},
    currentcompany: {type:String},
    currentlocation: {type:String},
    currentctc: {type:Number},
    expectedctc: {type:Number},
    noticePeriod: {type:Number},
    prefferredlocation: {type:String},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
    isAdmin: {type:Boolean, default: false},

})

const usermodel = mongoose.model("users", userSchema);
export default usermodel;
// Export the usermodel to be used in other files