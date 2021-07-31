import express, {Application, Request, Response, Router} from "express";
import budjetRouter from "./budjetRouter";
const router = Router();

router.use("/budjet", budjetRouter);

router.get("/", (request:Request, response:Response) => {
    response.send("OK at /api");
})

router.get("/hello", (request:Request, response:Response) => {
    response.send("Hello from /api");
})

export default router;