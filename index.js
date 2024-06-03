import express from 'express'  
import cors from "cors"
import bodyParser from "body-parser";
import UsersRouter from "./Routers/UsersRouter.js";
import connectDB from "./DataBase.js";
import LinkController from './Controllers/LinkController.js';
import LinksRouter from './Routers/LinksRouter.js';
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use('/users', UsersRouter);
app.use('/links',LinksRouter);
connectDB().then(()=>{
  app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
})

})
// app.get("/tasks", TasksController.getList);
// app.get("/tasks/:id", TasksController.getById);
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
// app.get("/tasks/:id",(req,res)=>{
//     res.send("get task by id");
//   })
  
//   app.post("/tasks/",(req,res)=>{
//     res.send("add a new task");
//   })
  
//   app.put("/tasks/:id",(req,res)=>{
//     res.send("update a task");
//   })
  
//   app.delete("/tasks/:id",(req,res)=>{
//     res.send("delete a task");
//   })
  

