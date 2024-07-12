import express from "express";
import dotenv from "dotenv";
const app = express();
dotenv.config();

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`);
})