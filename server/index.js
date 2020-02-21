import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Root");
});

app.listen(3000, () => console.log("Example app listening on port 3000!"));
