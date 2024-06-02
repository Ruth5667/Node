import mongoose from "mongoose";
import Links from "../Models/Links.js";
const Users = mongoose.Schema({
    // _id: Number,
    name: String,
    email: String,
    password: String,
    links: [String]
});
export default mongoose.model("users", Users);

