import express from "express";
import LinkController from "../Controllers/LinkController.js";
const LinksRouter = express.Router();
LinksRouter.get("/:id", LinkController.redirect);
export default LinksRouter;
