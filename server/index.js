import express from "express";
import cors from "cors";
import uuidv4 from "uuid/v4";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
const data = {
    0: {
        id: 0,
        kitapAdi: "Gulun adi",
        yazarinAdi: "umberto eco",
        yayinEvi: "Can Yayinlari",
    },
    1: {
        id: 1,
        kitapAdi: "Gulun adi1",
        yazarinAdi: "umberto eco1",
        yayinEvi: "Can Yayinlari",
    },
    2: {
        id: 2,
        kitapAdi: "Gulun adi2",
        yazarinAdi: "umberto eco2",
        yayinEvi: "Can Yayinlari",
    },
    3: {
        id: 3,
        kitapAdi: "Gulun adi3",
        yazarinAdi: "umberto eco3",
        yayinEvi: "Can Yayinlari",
    },
    4: {
        id: 4,
        kitapAdi: "Gulun adi4",
        yazarinAdi: "umberto eco4",
        yayinEvi: "Can Yayinlari",
    },
};

app.get("/", (req, res) => {
    res.send(data);
});

app.get("/detail/:id", (req, res) => {
    res.send(data[req.params.id]);
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
    data[id] = yeniKitap;
    res.send(yeniKitap);
});

app.listen(3000, () => console.log("Example app listening on port 3000!"));
