import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.get("/", (req, res) => {
    res.send("Root");
});

app.get("/detail/:id", (req, res) => {
    res.send("detail = " + req.params.id);
});

app.post("/create/", (req, res) => {
    res.send("post req on /create/");
});

app.listen(3000, () => console.log("Example app listening on port 3000!"));
