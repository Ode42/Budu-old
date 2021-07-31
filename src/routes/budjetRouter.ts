import express, {Router, Request, Response} from "express";
import Budjet from "./../models/budjet";

const budjetRouter = Router();

budjetRouter.get("/", (request:Request, response:Response) => {
    response.send("OK from /api/budjet");
})

budjetRouter.get("/:id", (request:Request, response:Response) => {
    const budjets:Budjet[] = [{
        budjetId: 0,
        budjetName: "Test budjet",
        initialAmount: 1700,
        costCentres: ["IT", "Studying"]
    }]
    const budjet = budjets.find((budjet) => budjet.budjetId.toString() === request.params.id)
    response.send(budjet);
})


export default budjetRouter;