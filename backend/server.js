import express from 'express';

const app = express();

app.listen(5000, () => {
    console.log("Server started on port 5000 Hello World");
})

app.get('/', (req, res) => {
    res.send("Hello World");
});

//video paused at 11.05