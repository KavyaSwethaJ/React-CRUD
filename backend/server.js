import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

dotenv.config();

const app = express();

app.get('/products', (req, res) => {
    res.send("Hello World");
});

app.listen(5000, () => {
    connectDB();
    console.log("Server started on port 5000");
})
//video paused at 11.05
// MONG)_DB PWD: gTiKFSmr2IV6G1NM