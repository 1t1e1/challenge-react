import express from "express";
import cors from "cors";
import uuidv4 from "uuid/v4";
import data from "./src/data";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use((req, res, next) => {
    req.context = {
        data,
    };
    next();
});

app.get("/", (req, res) => {
    res.send(req.context.data);
});

app.get("/detail/:id", (req, res) => {
    // make id is not found
    res.send(req.context.data[req.params.id]);
});

app.post("/create/", (req, res) => {
    const id = uuidv4();
    // input lar bos mu diye control et
    const yeniKitap = {
        id,
        kitapAdi: req.body.kitapAdi,
        yazarinAdi: req.body.yazarinAdi,
        yayinEvi: req.body.yayinEvi,
    };
    req.context.data[id] = yeniKitap;
    res.send(yeniKitap);
});

app.listen(3000, () => console.log("Example app listening on port 3000!"));
