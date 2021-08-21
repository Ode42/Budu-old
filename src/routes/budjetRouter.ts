import express, {Router, Request, Response} from "express";
import Budjet from "./../models/budjet";
import pool from "./../db/db";

const budjetRouter = Router();

budjetRouter.get("/", async (request:Request, response:Response) => {
    try {
        const budjets = await pool.query("SELECT * FROM budjets;");
        response.json(budjets.rows);
    } catch (error) {
        console.error(error);
    };
});

budjetRouter.get("/:budjet_id", async (request:Request, response:Response) => {
    try {
        const {budjet_id} = request.params;
        const budjet = await pool.query("SELECT * FROM budjets WHERE budjet_id = $1", [budjet_id]);
        response.json(budjet.rows[0]);
    } catch (error) {
        console.error(error);
        response.status(401);
    }
});

budjetRouter.post("/", async (request:Request, response:Response) => {
    try {
        const {budjet_name} = request.body;
        const {budjet_balance} = request.body;
        const {cost_centres} = request.body;
        const newBudjet = await pool.query("INSERT INTO budjets (budjet_name, budjet_balance, cost_centres) VALUES ($1, $2, $3) RETURNING *", [budjet_name, budjet_balance, cost_centres]);
        response.json(newBudjet.rows[0]);
    } catch (error) {
        console.error(error);
    }
});

budjetRouter.delete("/:budjet_id", async (request:Request, response:Response) => {
    try {
        const {budjet_id} = request.params;
        const deleteBudjet = await pool.query("DELETE FROM budjets WHERE budjet_id = $1;", [budjet_id]);
        response.json(deleteBudjet);
    } catch (error) {
        console.error(error);
    }
})

budjetRouter.put("/balance/:budjet_id", async (request:Request, response:Response) => {
    try {
        const {budjet_id} = request.params;
        const {new_budjet_balance} = request.body;
        const updateBudjet = await pool.query("UPDATE budjets SET budjet_balance = $1 WHERE budjet_id = $2", [new_budjet_balance, budjet_id]);
        response.json(updateBudjet);
    } catch (error) {
        console.error(error);
    }
})


export default budjetRouter;