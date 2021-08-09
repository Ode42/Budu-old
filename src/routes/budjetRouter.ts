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

budjetRouter.get("/:budjet_id", async (request:Request, response:Response) => {
    try {
        const {budjet_id} = request.params;
        const budjet = await pool.query("SELECT * FROM budjets WHERE budjet_id = $1", [budjet_id]);
        response.json(budjet.rows[0]);
    } catch (error) {
        console.error(error);
        response.status(401);
    }
})

budjetRouter.post("/", async (request:Request, response:Response) => {
    try {
        const {budjet_name} = request.body;
        const {budjet_balance} = request.body;
        const newBudjet = await pool.query("INSERT INTO budjets (budjet_name, budjet_balance) VALUES ($1, $2) RETURNING *", [budjet_name, budjet_balance]);
        response.json(newBudjet.rows[0]);
    } catch (error) {
        console.error(error);
    }
});


export default budjetRouter;