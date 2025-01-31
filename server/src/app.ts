import express, { Express } from "express";
import mongoose from "mongoose";

import cors from "cors";
import todoRoutes from "./routes";

const app: Express = express();
const PORT: any = process.env.PORT || 4000
app.use(express.json())
app.use(cors())
app.use(todoRoutes)
// const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@clustertodo.raz9g.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`
const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@atlascluster.rtquvey.mongodb.net/${process.env.MONGO_DB}`


mongoose
    .connect(uri)
    .then(() =>
        app.listen(PORT, () =>
            console.log(`Server running on http://localhost:${PORT}`)
        )
    )
    .catch((error) => {
        throw error
    })