import { Router } from "express";
import uuidv4 from "uuid/v4";

const router = Router();

router.post("/", (req, res) => {
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

export default router;
