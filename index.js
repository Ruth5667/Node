import express from 'express'  
import cors from "cors"
import bodyParser from "body-parser";
import UsersRouter from "./Routers/UsersRouter.js";
import connectDB from "./DataBase.js";
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

