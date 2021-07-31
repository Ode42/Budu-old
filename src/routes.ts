import {Router} from "express";
import router from "./routes/router";

const routes = Router();
routes.use("/api", router);

export default routes;