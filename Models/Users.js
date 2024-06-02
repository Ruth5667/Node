import mongoose from "mongoose";
// import Links from "../Models/Links.js";
const Users = mongoose.Schema({
    // _id: Number,
    name: String,
    email: String,
    password: String,
    links: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Link' }]
});
export default mongoose.model("users", Users);

