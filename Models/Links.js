import mongoose from "mongoose";
const links = mongoose.Schema({
_id: Number,
originalUrl: String,
});
export default mongoose.model("tasks", links);

  