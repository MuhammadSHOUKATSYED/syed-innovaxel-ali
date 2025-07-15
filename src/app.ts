import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import urlRoutes from './routes/url.routes';

const app = express(); // make sure this is BEFORE app.use(...)

app.use(cors());
app.use(bodyParser.json());
app.use("/api", urlRoutes);

export default app;
