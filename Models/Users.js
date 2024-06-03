import mongoose from "mongoose";
const Users = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    links: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Link' }]
});
export default mongoose.model("users", Users);

