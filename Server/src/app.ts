import express, { Express } from "express";
import mongoose from "mongoose";
import cors from "cors";
import todoRoutes from "./routes";

const app: Express = express();

const PORT: string | number = process.env.PORT || 4000;

app.use(cors());
app.use(todoRoutes);

const uri: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.cjwpt.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`;

const DB_options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

mongoose.set("useFindAndModify", false);
mongoose.connect(uri, DB_options);

const db = mongoose.connection;

db.on('error', error => console.log(error));
db.once('open', () => {
    console.log(`Database connected`);
});

app.listen(PORT, () => {
    console.log(`Server Running on http://localhost:${PORT}`);
});