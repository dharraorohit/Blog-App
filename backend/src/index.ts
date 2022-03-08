import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import articleRoutes from "./routes/articles";
import dotenv from "dotenv";
import { Application } from "express";

const app: Application = express();
dotenv.config();

app.use(bodyParser.json({limit:'30mb'}));
app.use(bodyParser.urlencoded({limit:'30mb', extended:true}));
app.use(cors());

app.use('/articles',articleRoutes);

const PORT = process.env.PORT|| 5000;

mongoose.connect(process.env.CONNECTION_URL)
    .then(()=>app.listen(PORT,()=>console.log(`Server started on: http://localhost:${PORT}`)))
    .catch((err)=> console.log(`Database Connection Failed, error: ${err}`))

