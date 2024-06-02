import mongoose from "mongoose";
const Links = mongoose.Schema({
    _id: Number,
    originalUrl: String
});
export default mongoose.model("links", Links);

