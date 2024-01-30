import express, { Express } from "express";

import bodyParser from "body-parser";
import { rootRouter } from "./src/routers/rootRouter.routes";
import cors from "cors"


const app: Express = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
rootRouter(app)

app.listen(8000, () => {
  console.log("Chay server");
});
