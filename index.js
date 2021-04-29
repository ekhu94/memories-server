import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

dotenv.config();
const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

console.log(process.env.CONNECTION_URL);

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connection to Mongo Open"))
  .catch((err) => console.log(err.message));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on Port ${PORT}`);
});
