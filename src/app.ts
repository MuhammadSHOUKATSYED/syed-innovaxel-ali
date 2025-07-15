import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import urlRoutes from "./routes/url.routes";

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use("/api", urlRoutes);

export default app;
