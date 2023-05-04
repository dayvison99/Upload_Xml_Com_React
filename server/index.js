import express from "express";
import xmlRoutes from "./routes/dadosxml.js";
import cors from "cors";

const app = express()

app.use(express.json());
app.use(cors());

app.use("/", xmlRoutes)

app.listen(8800);