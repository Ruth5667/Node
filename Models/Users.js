import mongoose from "mongoose";
const users = mongoose.Schema({ 
_id: 0,
name: "",
email: "", 
password: "",
links: []
});
export default mongoose.model("tasks", users);

  