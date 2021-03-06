import express from "express";
import routes from "./routes";

const app: express.Application = express();

app.use(express.json());
app.use(routes);

app.get("/", (request:express.Request, response:express.Response) => {
    response.send("OK");
})

app.listen(5000, () => {
    console.log("Server listening on port 5000")
});