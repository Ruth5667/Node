import mongoose from "mongoose";
const Links = mongoose.Schema({
    // _id: Number,
    originalUrl: String,
    clicks: [
        {
            _id: Number,
            insertedAt: Date,
            ipAddress: String
        }
    ]
});
export default mongoose.model("links", Links);

