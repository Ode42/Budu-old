import express, {Router, Request, Response} from "express";
import Budjet from "./../models/budjet";
import pool from "./../db/db";

const budjetRouter = Router();



budjetRouter.get("/", async (request:Request, response:Response) => {
    try {
        const budjets = await pool.query("SELECT * FROM budjets;");
        response.json(budjets.rows[0]);
    } catch (error) {
        console.error(error);
    };
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