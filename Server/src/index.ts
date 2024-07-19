// PWD: 4e1eFoZyGdboowVn 
//Username: hrishitham
import express, {Express} from "express";
import mongoose from "mongoose";
import FinancialRecordModel from "./schema/financial-record";
import FinancialRecordRouter from "./routes/financial-records";
import cors from "cors"; 

const app: Express = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

const mongoURI: string = 
    "mongodb+srv://hrishitham:4e1eFoZyGdboowVn@personalfinancetracker.5bz0ulx.mongodb.net/";

mongoose
    .connect(mongoURI)
    .then(() => console.log("CONNECTED TO MONGODB!"))
    .catch((err) => console.error("Failed to Connect to MongooDB:", err));

app.use("/financial-records", FinancialRecordRouter);

app.listen(port, () => {
    console.log(`Server Running on Port ${port}`);
});   
