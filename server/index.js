import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
const data = [
    {
        id: 0,
        kitapAdi: "Gulun adi",
        yazarinAdi: "umberto eco",
        yayinEvi: "Can Yayinlari",
    },
    {
        id: 1,
        kitapAdi: "Gulun adi1",
        yazarinAdi: "umberto eco1",
        yayinEvi: "Can Yayinlari",
    },
    {
        id: 2,
        kitapAdi: "Gulun adi2",
        yazarinAdi: "umberto eco2",
        yayinEvi: "Can Yayinlari",
    },
    {
        id: 3,
        kitapAdi: "Gulun adi3",
        yazarinAdi: "umberto eco3",
        yayinEvi: "Can Yayinlari",
    },
    {
        id: 4,
        kitapAdi: "Gulun adi4",
        yazarinAdi: "umberto eco4",
        yayinEvi: "Can Yayinlari",
    },
];

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
